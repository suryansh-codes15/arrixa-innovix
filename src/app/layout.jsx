import './globals.css'

const BASE_URL = 'https://aarixainnovix.com'

export const metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: 'Aarixa Innovix | Mutual Fund Booster — Intelligent Wealth Planning',
        template: '%s | Aarixa Innovix',
    },
    description: 'Mutual Fund Booster by Aarixa Innovix: goal-based SIP planning, equity-debt allocation, and inflation-adjusted projections. Data-driven. Transparent. Built for disciplined investors.',
    keywords: ['Mutual Fund Booster', 'SIP planner', 'goal-based investing', 'equity debt allocation', 'inflation adjusted returns', 'fintech India', 'Aarixa Innovix'],
    authors: [{ name: 'Aarixa Innovix', url: BASE_URL }],
    creator: 'Aarixa Innovix',
    publisher: 'Aarixa Innovix',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: BASE_URL,
        siteName: 'Aarixa Innovix',
        title: 'Aarixa Innovix | Mutual Fund Booster — Intelligent Wealth Planning',
        description: 'Goal-based SIP planning with equity-debt allocation and inflation-adjusted projections. Plan your wealth with precision.',
        images: [
            {
                url: `${BASE_URL}/og-image.png`,
                width: 1200,
                height: 630,
                alt: 'Aarixa Innovix — Mutual Fund Booster',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aarixa Innovix | Mutual Fund Booster',
        description: 'Goal-based SIP planning with equity-debt allocation and inflation-adjusted projections.',
        images: [`${BASE_URL}/og-image.png`],
    },
    alternates: {
        canonical: BASE_URL,
    },
    verification: {
        google: '',
    },
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0a0a16',
}

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aarixa Innovix',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: 'Fintech company building intelligent, data-driven mutual fund planning solutions.',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit No. 1116, Tower B4, Spaze ITech Park, Sector 49',
        addressLocality: 'Gurugram',
        addressRegion: 'Haryana',
        postalCode: '122018',
        addressCountry: 'IN',
    },
    contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@aarixainnovix.com',
        contactType: 'customer support',
        availableLanguage: 'English',
    },
    sameAs: [],
}

const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Mutual Fund Booster',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
    },
    description: 'Goal-based SIP planning tool with equity-debt allocation and inflation-adjusted projections.',
    provider: {
        '@type': 'Organization',
        name: 'Aarixa Innovix',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en-IN" className="scroll-smooth">
            <head>
                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://www.google.com" />

                {/* Fonts with display=swap to prevent FOUT */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
                />

                {/* Material Symbols */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=optional"
                />

                <link rel="icon" type="image/svg+xml" href="/vite.svg" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
                />
            </head>
            <body className="bg-black font-body antialiased">
                {children}
            </body>
        </html>
    )
}
