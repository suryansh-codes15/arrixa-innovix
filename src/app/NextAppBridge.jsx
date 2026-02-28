'use client'

import { useEffect, useState, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import App from '../App'

function AppFallback() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-white/40 text-sm tracking-widest uppercase font-bold">Loading</p>
            </div>
        </div>
    )
}

export default function NextAppBridge() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <AppFallback />

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            scriptProps={{
                async: true,
                defer: true,
                appendTo: 'body',
                nonce: undefined,
            }}
        >
            <BrowserRouter>
                <Suspense fallback={<AppFallback />}>
                    <App />
                </Suspense>
            </BrowserRouter>
        </GoogleReCaptchaProvider>
    )
}
