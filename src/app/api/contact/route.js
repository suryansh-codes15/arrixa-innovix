import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Initialize Resend lazily to prevent build-time errors when API key is missing
let resend
try {
    if (process.env.RESEND_API_KEY) {
        resend = new Resend(process.env.RESEND_API_KEY)
    }
} catch (e) {
    console.warn('Resend failed to initialize:', e.message)
}

// Validation Schema — strict bounds to prevent abuse
const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name is too long'),
    email: z
        .string()
        .trim()
        .email('Invalid email address')
        .max(254, 'Email is too long'),
    subject: z
        .string()
        .trim()
        .min(1, 'Subject is required')
        .max(200, 'Subject is too long'),
    message: z
        .string()
        .trim()
        .min(10, 'Message must be at least 10 characters')
        .max(2000, 'Message must be under 2000 characters'),
    captchaToken: z.string().min(1, 'reCAPTCHA verification required'),
})

// Sanitize to prevent XSS injection via email body
function sanitizeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
}

// In-memory rate limiting (upgrade to Upstash/Redis for multi-instance prod)
const rateLimitMap = new Map()
const RATE_LIMIT_WINDOW = 10 * 60 * 1000 // 10 minutes
const MAX_SUBMISSIONS = 3

function isRateLimited(ip) {
    const now = Date.now()
    const userData = rateLimitMap.get(ip) || { count: 0, lastReset: now }

    if (now - userData.lastReset > RATE_LIMIT_WINDOW) {
        userData.count = 1
        userData.lastReset = now
        rateLimitMap.set(ip, userData)
        return false
    }

    if (userData.count >= MAX_SUBMISSIONS) return true

    userData.count++
    rateLimitMap.set(ip, userData)
    return false
}

// Block non-POST methods
export async function GET() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function POST(req) {
    try {
        // Rate limiting
        const forwarded = req.headers.get('x-forwarded-for')
        const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1'

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please wait 10 minutes before trying again.' },
                { status: 429 }
            )
        }

        // Parse body safely
        let body
        try {
            body = await req.json()
        } catch {
            return NextResponse.json({ error: 'Invalid request format.' }, { status: 400 })
        }

        // Validate input
        const parsed = contactSchema.safeParse(body)
        if (!parsed.success) {
            return NextResponse.json(
                { error: parsed.error.errors[0].message },
                { status: 400 }
            )
        }

        const data = parsed.data

        // reCAPTCHA verification
        const captchaRes = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.captchaToken}`,
            { method: 'POST' }
        )
        const captchaResult = await captchaRes.json()

        if (!captchaResult.success || captchaResult.score < 0.5) {
            return NextResponse.json(
                { error: 'Security verification failed. Please try again.' },
                { status: 400 }
            )
        }

        // Sanitize all user inputs before rendering in email
        const safeName = sanitizeHtml(data.name)
        const safeSubject = sanitizeHtml(data.subject)
        const safeMessage = sanitizeHtml(data.message)

        if (!resend) {
            console.error('Email service not configured (missing RESEND_API_KEY)')
            return NextResponse.json({ error: 'Mail service unavailable. Please try again later.' }, { status: 503 })
        }

        // Send admin notification
        const { error: adminError } = await resend.emails.send({
            from: 'Aarixa Innovix <onboarding@resend.dev>',
            to: 'suryanshsrivastava215@gmail.com',
            subject: `New Inquiry — ${safeSubject}`,
            html: `
            <div style="font-family:sans-serif;max-width:600px;color:#1a1a1a;margin:0 auto;">
              <div style="background:#1e3a5f;padding:24px 32px;border-radius:8px 8px 0 0;">
                <h2 style="color:#fff;margin:0;font-size:20px;">New Contact Form Submission</h2>
                <p style="color:#93c5fd;margin:4px 0 0;font-size:13px;">Aarixa Innovix — Mutual Fund Booster</p>
              </div>
              <div style="background:#f8fafc;padding:24px 32px;border-radius:0 0 8px 8px;border:1px solid #e2e8f0;border-top:none;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr><td style="padding:8px 0;font-weight:600;color:#374151;width:80px;">Name</td><td style="padding:8px 0;color:#6b7280;">${safeName}</td></tr>
                  <tr><td style="padding:8px 0;font-weight:600;color:#374151;">Email</td><td style="padding:8px 0;color:#6b7280;">${data.email}</td></tr>
                  <tr><td style="padding:8px 0;font-weight:600;color:#374151;">Subject</td><td style="padding:8px 0;color:#6b7280;">${safeSubject}</td></tr>
                </table>
                <div style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:16px;margin-top:16px;">
                  <p style="margin:0;color:#374151;white-space:pre-wrap;line-height:1.6;">${safeMessage}</p>
                </div>
                <p style="font-size:11px;color:#9ca3af;margin-top:20px;">Submitted via aarixainnovix.com contact form</p>
              </div>
            </div>`,
        })

        if (adminError) {
            return NextResponse.json({ error: 'Unable to process your request. Please email us directly.' }, { status: 500 })
        }

        // Auto-reply to user (best-effort, don't block response on failure)
        await resend.emails.send({
            from: 'Aarixa Innovix <onboarding@resend.dev>',
            to: data.email,
            subject: 'We received your message — Aarixa Innovix',
            html: `
            <div style="font-family:sans-serif;max-width:600px;color:#1a1a1a;margin:0 auto;">
              <div style="background:#1e3a5f;padding:24px 32px;border-radius:8px 8px 0 0;">
                <h2 style="color:#fff;margin:0;font-size:20px;">Thank you, ${safeName}</h2>
              </div>
              <div style="background:#f8fafc;padding:24px 32px;border-radius:0 0 8px 8px;border:1px solid #e2e8f0;border-top:none;">
                <p style="color:#374151;">We've received your message regarding <strong>${safeSubject}</strong> and will respond within 1–2 business days.</p>
                <p style="color:#374151;">If your query is urgent, you can reach us directly at <a href="mailto:info@aarixainnovix.com" style="color:#2563eb;">info@aarixainnovix.com</a>.</p>
                <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;">
                <p style="font-size:12px;color:#9ca3af;">This is an automated acknowledgement. Please do not reply to this email.</p>
                <p style="font-size:12px;color:#9ca3af;">Aarixa Innovix Pvt. Ltd. · Gurugram, Haryana</p>
              </div>
            </div>`,
        }).catch(() => { /* auto-reply failure is non-critical */ })

        return NextResponse.json(
            { success: true, message: 'Message sent successfully.' },
            { status: 200 }
        )

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
        }
        return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 })
    }
}
