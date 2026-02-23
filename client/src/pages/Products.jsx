import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import FloatingShapes from '../components/FloatingShapes'
import Button3D from '../components/Button3D'

const domains = ['All', 'FinTech', 'Core Engineering', 'Management Products', 'Specialty Systems']

const products = [
    {
        id: 'mutual-funds-booster',
        title: 'Mutual Funds Booster',
        category: 'FinTech',
        featured: true,
        description: 'AI-driven portfolio optimization for B2B, B2C, and RI.',
        longDescription: 'Our flagship high-frequency trading algorithm and portfolio management system, precisely engineered for B2B, B2C, and RI (Registered Investment) segments. Leveraging predictive analytics and automated rebalancing to maximize returns while managing risk in real-time.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        tags: ['B2B', 'B2C', 'RI', 'AI Prediction', 'HFT', 'Risk Management'],
        status: 'Live'
    },
    {
        id: 'websites-landing',
        title: 'Websites & E-commerce',
        category: 'Core Engineering',
        description: 'Landing Pages, E-commerce, & E-Learning platforms.',
        longDescription: 'Custom-built websites ranging from high-converting landing pages to complex e-learning and e-commerce ecosystems with seamless integrations.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        tags: ['E-commerce', 'LMS', 'SEO Optimized'],
        status: 'Live'
    },
    {
        id: 'saas-enterprise',
        title: 'Enterprise SaaS Suite',
        category: 'Core Engineering',
        description: 'Scalable multi-tenant software solutions.',
        longDescription: 'Modern SaaS products designed for scalability and multi-tenancy, providing robust performance for global user bases.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        tags: ['Cloud Native', 'Multi-tenant', 'Scalable'],
        status: 'Live'
    },
    {
        id: 'native-mobile-apps',
        title: 'iOS & Android Apps',
        category: 'Core Engineering',
        description: 'Premium native mobile experiences.',
        longDescription: 'High-performance mobile applications built natively for iOS and Android, ensuring the best possible user experience.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
        tags: ['iOS', 'Android', 'Native'],
        status: 'Live'
    },
    {
        id: 'hrms-innovix',
        title: 'Innovix HRMS',
        category: 'Management Products',
        description: 'Workforce management & HR optimization.',
        longDescription: 'Comprehensive Human Resource Management System for attendance, payroll, recruitment, and employee lifecycle management.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800',
        tags: ['Payroll', 'Recruitment', 'Analytics'],
        status: 'Live'
    },
    {
        id: 'inventory-mgt',
        title: 'Smart Inventory',
        category: 'Management Products',
        description: 'Real-time stock & warehouse tracking.',
        longDescription: 'Intelligent inventory management system that integrates with supply chains to provide real-time updates and predictive restocking.',
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800',
        tags: ['Supply Chain', 'Warehousing', 'Real-time'],
        status: 'Live'
    },
    {
        id: 'gym-mgt-pro',
        title: 'Gym Management Pro',
        category: 'Management Products',
        description: 'Fitness center membership & scheduling.',
        longDescription: 'Complete management software for gyms focusing on member engagement, automated billing, and trainer scheduling.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
        tags: ['Fitness', 'Memberships', 'Scheduling'],
        status: 'Live'
    },
    {
        id: 'medical-dicom-pacs',
        title: 'Medical Dicom & Pacs',
        category: 'Specialty Systems',
        description: 'Imaging & diagnostics healthcare systems.',
        longDescription: 'Advanced medical software suite specializing in Dicom imaging and Pacs (Picture Archiving and Communication System) for modern clinics.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
        tags: ['Imaging', 'Diagnostics', 'PACS'],
        status: 'In Development'
    },
    {
        id: 'pos-retail-system',
        title: 'Modern POS Software',
        category: 'Specialty Systems',
        description: 'Point of Sale for retail & hospitality.',
        longDescription: 'Fast and reliable Point of Sale system with offline support, inventory syncing, and multi-store management capabilities.',
        image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800',
        tags: ['Retail', 'POS', 'Reporting'],
        status: 'Live'
    },
    {
        id: 'cloud-billing-software',
        title: 'Secure Cloud Billing',
        category: 'Specialty Systems',
        description: 'Automated online invoicing & billing.',
        longDescription: 'A secure cloud-based billing solution that automates invoicing, tracks payments, and provides detailed financial reporting.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
        tags: ['FinTech', 'Automation', 'Secure'],
        status: 'Live'
    },
    {
        id: 'ai-nexus-products',
        title: 'AI SaaS & Nexus',
        category: 'Specialty Systems',
        description: 'Intelligent automation & AI products.',
        longDescription: 'Cutting-edge AI-driven products and SaaS modules that use machine learning to automate complex business workflows.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        tags: ['Machine Learning', 'AI', 'Automation'],
        status: 'In Development'
    }
]

function ProductVisual({ src, title, category }) {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    if (error) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0a0b] p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
                            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid-pattern)" />
                </svg>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 flex flex-col items-center"
                >
                    <div className="w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                        <span className="material-symbols-outlined text-4xl text-blue-400">
                            {category === 'FinTech' ? 'trending_up' :
                                category === 'Core Engineering' ? 'precision_manufacturing' :
                                    category === 'Management Products' ? 'business_center' : 'terminal'}
                        </span>
                    </div>
                    <div className="h-px w-12 bg-blue-500/30 mb-4" />
                    <h3 className="text-sm font-display font-medium text-white/30 uppercase tracking-[0.3em]">{title}</h3>
                </motion.div>
            </div>
        )
    }

    return (
        <div className={`relative w-full h-full bg-blue-500/5 ${loading ? 'animate-pulse' : ''}`}>
            <img
                src={src}
                alt={title}
                onError={() => setError(true)}
                onLoad={() => setLoading(false)}
                className={`w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}
            />
        </div>
    )
}

export default function Products() {
    const [activeDomain, setActiveDomain] = useState('All')

    const filteredProducts = activeDomain === 'All'
        ? products.filter(p => !p.featured)
        : products.filter(p => p.category === activeDomain && !p.featured)

    const featuredProduct = products.find(p => p.featured)

    return (
        <div className="min-h-screen text-white selection:bg-blue-500/30">
            <Navbar />

            <main className="pt-24 md:pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <FloatingShapes className="opacity-20" />
                    <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:40px_40px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Header */}
                    <AnimatedSection className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            Multi-Domain Solutions
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                            Proprietary <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">Software Suite</span>
                        </h1>
                        <p className="text-blue-100/60 max-w-2xl mx-auto text-lg font-light">
                            High-performance applications across multiple industries, driven by AI and scalable architecture.
                        </p>
                    </AnimatedSection>

                    {/* Featured Product Hero */}
                    <AnimatedSection delay={0.1} className="mb-16 md:mb-24">
                        <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-blue-950/40 p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center gap-8 md:gap-12 group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

                            <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                                <div className="mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Featured Product</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                                    {featuredProduct.title}
                                </h2>
                                <p className="text-blue-100/70 text-lg mb-8 leading-relaxed font-light">
                                    {featuredProduct.longDescription}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {featuredProduct.tags.map(tag => (
                                        <span key={tag} className={`text-xs px-3 py-1 rounded-full border transition-colors ${['B2B', 'B2C', 'RI'].includes(tag)
                                            ? 'bg-blue-500 text-white border-blue-400 font-bold'
                                            : 'bg-blue-500/10 text-blue-300 border-blue-500/20'}`}>
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <Button3D className="w-full sm:w-auto px-10 py-4 text-base">
                                    Request Demo
                                </Button3D>
                            </div>

                            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                                <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-colors duration-500 bg-blue-500/5">
                                    <ProductVisual
                                        src={featuredProduct.image}
                                        title={featuredProduct.title}
                                        category={featuredProduct.category}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent z-20 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                        <div className="text-sm font-bold uppercase tracking-widest text-white/40">Explore Suite</div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {domains.map((domain) => (
                                <button
                                    key={domain}
                                    onClick={() => setActiveDomain(domain)}
                                    className={`px-6 py-3 md:px-5 md:py-2 rounded-xl md:rounded-lg text-xs font-bold transition-all duration-300 border ${activeDomain === domain
                                        ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                                        : 'bg-white/5 text-blue-200/60 border-white/5 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {domain}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 flex flex-col"
                                >
                                    <div className="aspect-video overflow-hidden relative">
                                        <ProductVisual
                                            src={product.image}
                                            title={product.title}
                                            category={product.category}
                                        />
                                        <div className="absolute top-3 right-3 z-20 bg-blue-950/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase border border-white/10">
                                            {product.category}
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-start justify-between mb-4 gap-4">
                                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                                                {product.title}
                                            </h3>
                                            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${product.status === 'Live' ? 'border-green-500/30 text-green-400 bg-green-500/5' : 'border-white/10 text-white/40'
                                                }`}>
                                                {product.status}
                                            </span>
                                        </div>

                                        <p className="text-blue-100/50 text-xs mb-6 line-clamp-3 font-light leading-relaxed">
                                            {product.longDescription}
                                        </p>

                                        <div className="mt-auto">
                                            <div className="flex flex-wrap gap-1.5 mb-6">
                                                {product.tags.slice(0, 3).map(tag => (
                                                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-blue-200/50 border border-white/5">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <button className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-xs font-bold hover:bg-blue-600 hover:border-blue-500 transition-all duration-300">
                                                Explore details
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20 text-white/20">
                            <p>No products found in this domain yet.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    )
}

