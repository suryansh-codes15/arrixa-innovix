
import NextAppBridge from '../NextAppBridge'

const routeMetadata = {
    'about': {
        title: 'About Us',
        description: 'Learn about Aarixa Innovix, our mission to simplify wealth planning, and the team behind the Mutual Fund Booster.',
    },
    'services': {
        title: 'Our Services',
        description: 'Comprehensive financial planning services including goal-based SIP planning and portfolio optimization.',
    },
    'products': {
        title: 'Our Products',
        description: 'Discover the Mutual Fund Booster and other intelligent wealth planning tools built by Aarixa Innovix.',
    },
    'work': {
        title: 'Our Work',
        description: 'Case studies and success stories of how Aarixa Innovix has helped investors achieve their financial goals.',
    },
    'blogs': {
        title: 'Insights & Blogs',
        description: 'Latest financial insights, market analysis, and wealth planning guides from the Aarixa Innovix team.',
    },
    'terms': {
        title: 'Terms of Service',
        description: 'Review our terms and conditions for using the Aarixa Innovix platform and services.',
    },
    'privacy': {
        title: 'Privacy Policy',
        description: 'Learn how Aarixa Innovix protects your data and maintains your privacy.',
    },
    'refund': {
        title: 'Refund Policy',
        description: 'Our policy regarding cancellations and refunds for our premium financial services.',
    },
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const path = slug[0]
    const metadata = routeMetadata[path] || {}

    return {
        title: metadata.title || 'Intelligent Wealth Planning',
        description: metadata.description || 'Goal-based SIP planning and intelligent wealth management by Aarixa Innovix.',
        alternates: {
            canonical: `/${slug.join('/')}`,
        },
    }
}

export default function CatchAllPage() {
    return <NextAppBridge />
}
