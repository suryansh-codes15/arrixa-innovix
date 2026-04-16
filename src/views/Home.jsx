'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingShapes from '../components/FloatingShapes'
import AnimatedSection from '../components/AnimatedSection'
import Button3D from '../components/Button3D'
import ContactSection from '../components/sections/ContactSection'
import TechStackSection from '../components/sections/TechStackSection'

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Home() {
    const { hash } = useLocation()

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''))
                if (element) {
                    const offset = 80
                    const bodyRect = document.body.getBoundingClientRect().top
                    const elementRect = element.getBoundingClientRect().top
                    const elementPosition = elementRect - bodyRect
                    const offsetPosition = elementPosition - offset
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                    window.history.replaceState(null, '', ' ')
                }
            }, 100)
        }
    }, [hash])

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen w-full text-white overflow-x-hidden"
        >
            <Navbar />

            {/* HERO */}
            <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
                <FloatingShapes />

                <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
                    <div className="absolute top-[-20%] left-[-15%] w-[60%] h-[60%] bg-blue-600/20 blur-[180px] rounded-full animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] right-[-15%] w-[55%] h-[55%] bg-blue-800/20 blur-[180px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-blue-400/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '4s' }} />
                </div>

                <div className="absolute inset-0 z-[0] bg-grid-white/[0.05] pointer-events-none" />
                <div className="absolute inset-0 z-[1] opacity-[0.2] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, #000 100%)' }} />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 py-28 flex flex-col items-center text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-10"
                    >
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-blue-300">Engineering Excellence</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-5"
                    >
                        <span className="text-white">Aarixa</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"> Innovix</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg sm:text-xl md:text-2xl font-display font-light text-blue-100/70 mb-8 max-w-2xl leading-relaxed"
                    >
                        Innovating Tomorrow's{' '}
                        <span className="text-white font-medium italic underline underline-offset-8 decoration-blue-500/30">Technology Today.</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="text-sm sm:text-base md:text-lg text-white/40 max-w-xl mx-auto leading-relaxed mb-10 font-light"
                    >
                        High-performance technology partner for companies that demand institutional-grade engineering and architectural excellence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="flex flex-col items-center gap-10"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Button3D href="/services" className="px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg">
                                Explore Solutions
                            </Button3D>
                            <Link
                                to="/work"
                                className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors py-3 sm:py-4 px-5 sm:px-6 border border-white/10 hover:border-white/30 rounded-full backdrop-blur-sm"
                            >
                                Our Impact
                            </Link>
                        </div>

                        <div className="hidden sm:flex items-center gap-6 opacity-40 hover:opacity-70 transition-all duration-500 flex-wrap justify-center">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Built for</span>
                            <div className="h-3 w-px bg-white/20" />
                            <div className="flex gap-4 text-[10px] items-center text-white/50 font-bold uppercase">
                                <span>Custom Software</span>
                                <span>·</span>
                                <span>Scalable Systems</span>
                                <span>·</span>
                                <span>Advanced AI</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                >
                    <span className="text-[10px] tracking-[0.5em] uppercase font-bold">Scroll</span>
                </motion.div>
            </section>

            {/* OUR PRODUCT */}
            <section id="product" className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AnimatedSection className="text-center mb-12 sm:mb-16">
                        <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Our Product</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">WealthSys</h2>
                        <p className="text-blue-200/60 max-w-2xl mx-auto text-base sm:text-lg">
                            Our premier financial technology suite designed for intelligent portfolio management, algorithmic insights, and risk adjustment in real-time.
                        </p>
                    </AnimatedSection>
                    
                    <AnimatedSection className="max-w-4xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border border-blue-500/20 bg-blue-900/10 hover:border-blue-500/40 transition-all flex flex-col md:flex-row items-center gap-8 md:gap-12 group overflow-hidden relative">
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition-colors duration-500" />
                        <div className="flex-1 z-10 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Live Now
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">Empowering the Future of Finance</h3>
                            <p className="text-blue-100/60 mb-8 leading-relaxed text-sm sm:text-base">
                                WealthSys leverages advanced data models to provide multi-scenario return projections, deep inflation adjustments, and robust goal-based planning.
                            </p>
                            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all border border-white/5 hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                Explore WealthSys <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 aspect-square max-w-[280px] rounded-full bg-gradient-to-tr from-blue-900/40 to-blue-600/20 shadow-[inset_0_0_50px_rgba(59,130,246,0.2)] border border-blue-500/10 flex items-center justify-center p-8 relative z-10 backdrop-blur-xl group-hover:scale-105 transition-transform duration-700">
                             <span className="material-symbols-outlined text-[80px] text-blue-400 opacity-80 group-hover:text-white transition-colors duration-500">query_stats</span>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* OUR WORK */}
            <section id="work" className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AnimatedSection className="text-center mb-12 sm:mb-16">
                        <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Our Work</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">Featured Projects</h2>
                        <p className="text-blue-200/60 max-w-lg mx-auto text-base sm:text-lg">
                            We architect high-performance platforms across diverse environments.
                        </p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {[
                            { title: 'WealthSpaze', tagline: 'Next-Gen FinTech Aggregation', icon: 'account_balance', color: 'bg-emerald-500/10 text-emerald-400', border: 'border-emerald-500/20', status: 'COMPLETED' },
                            { title: 'IPFS', tagline: 'Decentralized Storage Network', icon: 'hub', color: 'bg-purple-500/10 text-purple-400', border: 'border-purple-500/20', status: 'ONGOING' },
                            { title: 'MarketFilterX', tagline: 'Real-time Market Analytics', icon: 'waterfall_chart', color: 'bg-orange-500/10 text-orange-400', border: 'border-orange-500/20', status: 'COMPLETED' }
                        ].map((work, i) => (
                            <AnimatedSection key={work.title} delay={i * 0.1}>
                                <div className="glass-card rounded-2xl p-6 h-full flex flex-col border border-white/5 hover:border-white/20 transition-all duration-300 group">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all border ${work.border} ${work.color} group-hover:scale-110`}>
                                            <span className="material-symbols-outlined text-2xl">{work.icon}</span>
                                        </div>
                                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest border border-white/5 bg-white/5 ${work.status === 'ONGOING' ? 'text-blue-400' : 'text-emerald-400'}`}>
                                            {work.status}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{work.title}</h3>
                                    <p className="text-blue-100/50 text-sm mb-6 flex-1">{work.tagline}</p>
                                    <Link to="/work" className="text-xs uppercase font-bold tracking-wider text-white/40 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                                        View Details <span className="material-symbols-outlined text-[10px]">arrow_outward</span>
                                    </Link>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="text-center" delay={0.4}>
                        <Link to="/work" className="inline-block px-8 py-3 rounded-full border border-blue-500/30 text-blue-300 font-bold uppercase tracking-wider text-xs hover:bg-blue-500/10 transition-colors">
                            View All Portfolio Items
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* SERVICES */}
            <section id="services" className="py-20 sm:py-28 bg-white/[0.01] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <AnimatedSection className="max-w-3xl mx-auto mb-12 sm:mb-14">
                        <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">What We Do</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Services</h2>
                        <p className="text-blue-200/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                            We build and provide a wide suite of intelligent tools and platforms — across finance, operations, healthcare, and AI.
                        </p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-left mb-12">
                        {[
                            { icon: 'language', label: 'Website development', status: 'Live', cat: 'Core Eng', desc: 'Crafting responsive, high-performance websites tailored to your brand identity and business goals.' },
                            { icon: 'phone_iphone', label: 'App development', status: 'Live', cat: 'Core Eng', desc: 'Developing robust, scalable mobile applications for iOS and Android featuring modern UX/UI.' },
                            { icon: 'campaign', label: 'Outreach Service', status: 'Live', cat: 'Marketing', desc: 'Targeting audiences with data-driven outreach campaigns to foster engagement and generate leads.' },
                            { icon: 'smart_toy', label: 'Agentic AI/Automation', status: 'Live', cat: 'AI', desc: 'Implementing intelligent AI agents to automate workflows and optimize complex business processes.' }
                        ].map((item) => {
                            const isLive = item.status === 'Live'
                            return (
                                <AnimatedSection key={item.label}>
                                    <div className="glass-card rounded-2xl p-5 border border-white/5 hover:border-blue-500/30 transition-all duration-300 group h-full flex flex-col">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600 transition-all flex-shrink-0">
                                                <span className="material-symbols-outlined text-lg text-blue-400 group-hover:text-white transition-colors">{item.icon}</span>
                                            </div>
                                            <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wide border ${isLive ? 'text-green-400 border-green-500/30 bg-green-500/5' : 'text-white/30 border-white/10'}`}>
                                                {item.status}
                                            </span>
                                        </div>
                                        <p className="font-bold text-white text-sm mb-1">{item.label}</p>
                                        <p className="text-blue-100/40 text-xs mb-3">{item.cat}</p>
                                        <p className="text-blue-100/60 text-sm leading-relaxed mt-auto">{item.desc}</p>
                                    </div>
                                </AnimatedSection>
                            )
                        })}
                    </div>
                    
                    <AnimatedSection className="text-center" delay={0.4}>
                        <Link to="/services" className="inline-block px-8 py-3 rounded-full border border-blue-500/30 text-blue-300 font-bold uppercase tracking-wider text-xs hover:bg-blue-500/10 transition-colors">
                            Explore Detailed Services
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* TECH STACK */}
            <TechStackSection />

            {/* BLOGS */}
            <section id="blogs" className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AnimatedSection className="text-center mb-12 sm:mb-16">
                        <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Insights</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Blogs & Media</h2>
                        <p className="text-blue-200/60 max-w-lg mx-auto text-base sm:text-lg">
                            Watch, read, and download our latest insights from the world of technology.
                        </p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
                        {[
                            { format: 'Video', icon: 'play_circle', title: 'The Future of AI Agents in B2B Automations', type: 'video' },
                            { format: 'Article', icon: 'article', title: 'Achieving 60fps on Complex React Dashboards', type: 'article' },
                            { format: 'PDF', icon: 'picture_as_pdf', title: '2026 Web Engineering Best Practices Report', type: 'pdf' }
                        ].map((blog, i) => (
                            <AnimatedSection key={i} delay={i * 0.15} className="flex justify-center">
                                <Link to="/blogs" className="block w-full max-w-[300px] aspect-[9/16] rounded-3xl p-6 flex flex-col justify-between glass-card border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 group relative overflow-hidden bg-cover bg-center">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-0" />
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 mix-blend-overlay" />
                                    
                                    <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 z-10 text-white group-hover:bg-blue-600 transition-colors">
                                        <span className="material-symbols-outlined text-lg">{blog.icon}</span>
                                    </div>
                                    
                                    <div className="z-10 relative">
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-blue-300 mb-2 block">{blog.format}</span>
                                        <h3 className="text-lg font-bold text-white leading-snug group-hover:text-blue-200 transition-colors">{blog.title}</h3>
                                        <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-white/50 group-hover:text-white transition-colors">
                                            View {blog.format} <span className="material-symbols-outlined text-[12px] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300">east</span>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="text-center" delay={0.4}>
                        <Link to="/blogs" className="inline-block px-8 py-3 rounded-full border border-blue-500/30 text-blue-300 font-bold uppercase tracking-wider text-xs hover:bg-blue-500/10 transition-colors">
                            View All Media
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            <ContactSection id="contact" />
            <Footer />

            <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
                <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}
                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl shadow-blue-900/50 transition-all transform hover:scale-110 active:scale-95 border border-white/10"
                    aria-label="Contact Us"
                >
                    <span className="material-symbols-outlined text-xl sm:text-2xl" aria-hidden="true">chat</span>
                </a>
            </div>
        </motion.div>
    )
}
