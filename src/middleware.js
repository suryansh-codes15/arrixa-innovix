import { NextResponse } from 'next/server'

// Block sensitive path probing
const BLOCKED_PATHS = [
    '/.env',
    '/.env.local',
    '/.git',
    '/wp-admin',
    '/wp-login',
    '/phpMyAdmin',
    '/admin.php',
    '/xmlrpc.php',
]

export function middleware(request) {
    const { pathname } = request.nextUrl

    // Block common attack probe paths
    for (const blocked of BLOCKED_PATHS) {
        if (pathname.toLowerCase().startsWith(blocked)) {
            return new NextResponse(null, { status: 404 })
        }
    }

    const response = NextResponse.next()

    // Redundant security headers (belt-and-suspenders approach)
    response.headers.set('X-Frame-Options', 'SAMEORIGIN')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

    return response
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
    ],
}
