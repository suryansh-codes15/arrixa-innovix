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

const productFeatures = [
    {
        icon: 'flag',
        title: 'Goal-Based Planning',
        description: "Pick a real goal — retirement, kids' education, or buying a home — and get a SIP plan built around exactly that, not a generic number.",
    },
    {
        icon: 'account_balance',
        title: 'Equity & Debt Allocation',
        description: "Depending on how long you're investing and how much risk you're comfortable with, the tool figures out a sensible equity-debt split for you.",
    },
    {
        icon: 'trending_up',
        title: 'Return Scenarios',
        description: 'Get projections across three scenarios — cautious, realistic, and optimistic — so you can plan for the best and prepare for the rest.',
    },
    {
        icon: 'price_change',
        title: 'Inflation-Adjusted Numbers',
        description: "₹50 lakhs today won't be ₹50 lakhs in 20 years. The tool adjusts every projection for inflation, so what you see is what you can actually spend.",
    },
    {
        icon: 'calculate',
        title: 'Month-by-Month Breakdown',
        description: 'See how your money grows month by month — how much is your own contribution vs. how much the market added. Full picture, no surprises.',
    },
    {
        icon: 'tune',
        title: 'Tweak Freely',
        description: 'Change the SIP amount, timeline, return rate, or inflation — instantly see how it affects your goal. Play around until the plan feels right.',
    },
]

const trustPoints = [
    {
        icon: 'verified',
        title: 'Math You Can Check',
        description: "We use standard compound interest and SIP formulas — nothing proprietary or mysterious. If you want to verify any number, you can. That's the point.",
    },
    {
        icon: 'visibility',
        title: 'No Hidden Assumptions',
        description: "Every projection shows you exactly what we assumed — the return rate, inflation figure, timeline. We don't bury the inputs, we surface them.",
    },
    {
        icon: 'schema',
        title: 'Structured, Not Algorithmic',
        description: "There's no black box here. Principal, duration, expected return, inflation — each variable is separate, traceable, and the same every time you run it.",
    },
    {
        icon: 'self_improvement',
        title: 'For Long-Term Investors',
        description: "This tool isn't built for someone trying to time the market. It's built for people who believe in SIPs, systematic investing, and letting time do the work.",
    },
]

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
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-blue-300">Intelligent Wealth Planning</span>
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
                        Smarter Mutual Fund Planning.{' '}
                        <span className="text-white font-medium italic underline underline-offset-8 decoration-blue-500/30">Backed by Data.</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="text-sm sm:text-base md:text-lg text-white/40 max-w-xl mx-auto leading-relaxed mb-10 font-light"
                    >
                        Set a goal, enter what you can invest, and get a clear SIP plan — with equity-debt allocation and inflation-adjusted projections included.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="flex flex-col items-center gap-10"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Button3D className="px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg" onClick={() => {
                                document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })
                            }}>
                                Start Planning
                            </Button3D>
                            <button
                                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors py-3 sm:py-4 px-5 sm:px-6 border border-white/10 hover:border-white/30 rounded-full backdrop-blur-sm"
                            >
                                How It Works
                            </button>
                        </div>

                        <div className="hidden sm:flex items-center gap-6 opacity-40 hover:opacity-70 transition-all duration-500 flex-wrap justify-center">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Built for</span>
                            <div className="h-3 w-px bg-white/20" />
                            <div className="flex gap-4 text-[10px] items-center text-white/50 font-bold uppercase">
                                <span>Goal-Based SIP</span>
                                <span>·</span>
                                <span>Inflation Adjusted</span>
                                <span>·</span>
                                <span>Transparent Math</span>
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

            {/* TECH STACK */}
            <TechStackSection />

            {/* PRODUCT FEATURES */}
            <section id="product" className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AnimatedSection className="text-center mb-12 sm:mb-16">
                        <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">What It Does</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6">Mutual Fund Booster</h2>
                        <p className="text-blue-200/60 max-w-lg mx-auto text-base sm:text-lg">
                            One tool. One focus. It helps you figure out exactly how much to invest, where to invest, and what to realistically expect.
                        </p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {productFeatures.map((feature, i) => (
                            <AnimatedSection key={feature.title} delay={i * 0.07}>
                                <div className="glass-card rounded-2xl p-5 sm:p-7 h-full border border-white/5 hover:border-blue-500/30 transition-all duration-300 group">
                                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-900/30 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-blue-600 transition-all">
                                        <span className="material-symbols-outlined text-xl text-blue-400 group-hover:text-white transition-colors">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
                                    <p className="text-blue-100/60 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="text-center mt-10 sm:mt-12">
                        <Button3D className="px-8 sm:px-10 py-3 sm:py-4" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Try It Free
                        </Button3D>
                    </AnimatedSection>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section id="how-it-works" className="py-20 sm:py-28 bg-white/[0.01] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AnimatedSection className="text-center mb-12 sm:mb-16">
                        <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">How It Works</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">Four Steps to a Clear Plan</h2>
                        <p className="text-blue-200/60 max-w-md mx-auto text-base sm:text-lg">
                            No jargon, no complicated forms. Just four straightforward steps.
                        </p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                        {[
                            { step: '01', icon: 'flag', title: 'Pick Your Goal', desc: "Are you saving for retirement, a house, or your child's education? Start with a clear target — amount and deadline." },
                            { step: '02', icon: 'tune', title: 'Enter Your Numbers', desc: 'Tell us your monthly SIP budget, any existing investments, your risk comfort level, and your return and inflation assumptions.' },
                            { step: '03', icon: 'account_balance', title: 'Get Your Allocation', desc: 'Based on your timeline and risk profile, the tool recommends how to split between equity and debt funds.' },
                            { step: '04', icon: 'trending_up', title: 'Review the Projections', desc: 'See your projected corpus across three scenarios, fully adjusted for inflation. Know what you can realistically expect.' },
                        ].map((item, i) => (
                            <AnimatedSection key={item.step} delay={i * 0.1}>
                                <div className="glass-card rounded-2xl p-5 sm:p-7 border border-white/5 hover:border-blue-500/30 transition-all duration-300 group flex gap-4 sm:gap-5">
                                    <div className="flex-shrink-0">
                                        <span className="text-4xl sm:text-5xl font-black font-display text-blue-900/60 group-hover:text-blue-700/60 transition-colors">{item.step}</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="material-symbols-outlined text-sm text-blue-400">{item.icon}</span>
                                            <h3 className="text-sm sm:text-base font-bold text-white">{item.title}</h3>
                                        </div>
                                        <p className="text-blue-100/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY TRUST US */}
            <section id="trust" className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AnimatedSection className="text-center mb-12 sm:mb-16">
                        <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Why Trust Us</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">We Keep It Honest</h2>
                        <p className="text-blue-200/60 max-w-md mx-auto text-base sm:text-lg">
                            No guarantees, no fluff. Just clear numbers built on solid financial principles.
                        </p>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        {trustPoints.map((point, i) => (
                            <AnimatedSection key={point.title} delay={i * 0.08}>
                                <div className="glass-card rounded-2xl p-5 sm:p-7 border border-white/5 hover:border-blue-500/30 transition-all duration-300 group flex gap-4">
                                    <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                                        <span className="material-symbols-outlined text-xl text-blue-400 group-hover:text-white transition-colors">{point.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">{point.title}</h3>
                                        <p className="text-blue-100/60 text-xs sm:text-sm leading-relaxed">{point.description}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CERTIFICATION */}
            <section id="certification" className="py-20 sm:py-28 bg-white/[0.01] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
                        <AnimatedSection>
                            <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Compliance</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6">Registered in India</h2>
                            <p className="text-blue-200/60 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                                Aarixa Innovix is a formally registered company. We're not anonymous — our incorporation documents are verifiable and available on request.
                            </p>
                            <ul className="space-y-3 mb-8 text-blue-100/60">
                                {[
                                    'Registered entity — documents available on request',
                                    'No hidden affiliations or undisclosed conflicts',
                                    'All calculation logic is disclosed and verifiable',
                                    'Operates under the Indian regulatory framework',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-base text-blue-400 mt-0.5 flex-shrink-0">check_circle</span>
                                        <span className="text-xs sm:text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/certification"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition-all shadow-lg shadow-blue-500/25"
                            >
                                View Certification
                            </Link>
                        </AnimatedSection>

                        <AnimatedSection delay={0.15}>
                            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col items-center justify-center text-center min-h-[240px] sm:min-h-[280px] hover:border-blue-500/30 transition-all">
                                <span className="material-symbols-outlined text-5xl sm:text-6xl text-blue-400/40 mb-4 sm:mb-5">workspace_premium</span>
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Certificate of Incorporation</h3>
                                <p className="text-blue-100/60 text-sm mb-5 sm:mb-6">Aarixa Innovix Pvt. Ltd.</p>
                                <Link
                                    to="/certification"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1 transition-colors"
                                >
                                    View Full Certificate
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* WHAT'S COMING */}
            <section id="innovation" className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <AnimatedSection className="max-w-3xl mx-auto mb-12 sm:mb-14">
                        <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">What's Next</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">More Tools on the Way</h2>
                        <p className="text-blue-200/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                            Beyond Mutual Fund Booster, we're building a wider suite of intelligent tools — across finance, operations, healthcare, and AI.
                        </p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 text-left">
                        {[
                            { icon: 'donut_small', label: 'Portfolio Analyser', status: 'In Development', cat: 'FinTech' },
                            { icon: 'psychology', label: 'AI Advisory Engine', status: 'Research Phase', cat: 'FinTech' },
                            { icon: 'receipt_long', label: 'Tax Optimisation Planner', status: 'Planned', cat: 'FinTech' },
                            { icon: 'people', label: 'Innovix HRMS', status: 'Live', cat: 'Management' },
                            { icon: 'inventory_2', label: 'Smart Inventory', status: 'Live', cat: 'Management' },
                            { icon: 'fitness_center', label: 'Gym Management Pro', status: 'Live', cat: 'Management' },
                            { icon: 'medical_services', label: 'Medical DICOM & PACS', status: 'In Development', cat: 'Healthcare' },
                            { icon: 'point_of_sale', label: 'Modern POS Software', status: 'Live', cat: 'Retail' },
                            { icon: 'cloud_done', label: 'Secure Cloud Billing', status: 'Live', cat: 'FinTech' },
                            { icon: 'smart_toy', label: 'AI SaaS & Nexus', status: 'In Development', cat: 'AI' },
                            { icon: 'shopping_cart', label: 'E-commerce Platform', status: 'Live', cat: 'Core Eng' },
                            { icon: 'phone_iphone', label: 'iOS & Android Apps', status: 'Live', cat: 'Core Eng' },
                        ].map((item) => {
                            const isLive = item.status === 'Live'
                            return (
                                <AnimatedSection key={item.label}>
                                    <div className="glass-card rounded-2xl p-5 border border-white/5 hover:border-blue-500/30 transition-all duration-300 group h-full">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600 transition-all flex-shrink-0">
                                                <span className="material-symbols-outlined text-lg text-blue-400 group-hover:text-white transition-colors">{item.icon}</span>
                                            </div>
                                            <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wide border ${isLive ? 'text-green-400 border-green-500/30 bg-green-500/5' : 'text-white/30 border-white/10'}`}>
                                                {item.status}
                                            </span>
                                        </div>
                                        <p className="font-bold text-white text-sm mb-1">{item.label}</p>
                                        <p className="text-blue-100/40 text-xs">{item.cat}</p>
                                    </div>
                                </AnimatedSection>
                            )
                        })}
                    </div>
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
