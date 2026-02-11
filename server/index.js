import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'

const app = express()
const PORT = process.env.PORT || 3001

// Security Middleware
app.use(helmet())
app.use(cors({ origin: '*' })) // Allow all for now to avoid Vercel preview issues, restrict in prod if domain known

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
})
app.use(limiter)

app.use(express.json())

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Contact form endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body

    // Validate
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' })
    }

    // Log the submission (ready for future email integration)
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('📩 New Contact Form Submission')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log(`  Name:    ${name}`)
    console.log(`  Email:   ${email}`)
    console.log(`  Subject: ${subject || 'N/A'}`)
    console.log(`  Message: ${message}`)
    console.log(`  Time:    ${new Date().toISOString()}`)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    res.json({ success: true, message: 'Your message has been received. We will get back to you soon!' })
})

app.listen(PORT, () => {
    console.log(`\n🚀 Aarixa Innovix Backend running on http://localhost:${PORT}`)
    console.log(`   Health: http://localhost:${PORT}/api/health\n`)
})
