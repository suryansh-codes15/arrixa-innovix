import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingShapes from '../components/FloatingShapes'
import AnimatedSection from '../components/AnimatedSection'
import Button3D from '../components/Button3D'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import ContactSection from '../components/sections/ContactSection'
import TechStackSection from '../components/sections/TechStackSection'

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Support' },
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
            className="min-h-screen w-full gradient-home text-white overflow-x-hidden"
        >
            <Navbar />

            {/* ─── HERO ─── */}
            <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Three.js Background */}
                <FloatingShapes />

                {/* Rich ambient glow layers */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
                    <div className="absolute top-[-20%] left-[-15%] w-[60%] h-[60%] bg-blue-600/20 blur-[180px] rounded-full animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] right-[-15%] w-[55%] h-[55%] bg-blue-800/20 blur-[180px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-blue-400/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '4s' }} />
                </div>

                {/* Subtle grid overlay */}
                <div className="absolute inset-0 z-[0] bg-grid-white/[0.05] pointer-events-none" />

                <div
                    className="absolute inset-0 z-[1] opacity-[0.2] pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle at center, transparent 0%, #000 100%)',
                    }}
                />

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center max-w-5xl">
                    {/* Eyebrow - Small Pill from Screenshot */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-12"
                    >
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-blue-300">Next-Gen Technology Company</span>
                    </motion.div>

                    {/* Main headline - Brand Identity */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight mb-6"
                    >
                        <span className="text-white">Aarixa</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400"> Innovix</span>
                    </motion.h1>

                    {/* Mission Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-xl md:text-3xl font-display font-light text-blue-100/70 mb-10 max-w-3xl leading-relaxed"
                    >
                        Architecting the <span className="text-white font-medium italic underline underline-offset-8 decoration-blue-500/30">Future of Digital</span> through Precision Engineering & AI.
                    </motion.p>

                    {/* Subheadline - Detailed */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="text-base md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
                    >
                        Elite software solutions for <strong>Mutual Funds Boosters</strong>, High-Frequency Trading, and AI-Powered Enterprise Growth. Fast, Secure, and Built for Infinity.
                    </motion.p>

                    {/* Interactive CTA & Trust badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="flex flex-col items-center gap-12"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <Button3D className="px-10 py-5 text-lg" onClick={() => {
                                const contact = document.getElementById('contact')
                                contact?.scrollIntoView({ behavior: 'smooth' })
                            }}>
                                Start Building Your Vision
                            </Button3D>
                            <Link to="/products" className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors py-4 px-6 border border-white/10 hover:border-white/30 rounded-full backdrop-blur-sm">
                                Explore Products
                            </Link>
                        </div>

                        <div className="flex items-center gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Powering Excellence</span>
                            <div className="h-4 w-px bg-white/10" />
                            <div className="flex gap-6 text-[10px] items-center text-white/40 font-bold uppercase">
                                <span>Scalable Infrastructure</span>
                                <span>•</span>
                                <span>AI Integration</span>
                                <span>•</span>
                                <span>Elite Design</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                >
                    <span className="text-[10px] tracking-[0.5em] uppercase font-bold">Scroll</span>
                </motion.div>
            </section>

            {/* ─── SECTIONS ─── */}
            <TechStackSection />
            <AboutSection id="about" />
            <ServicesSection id="services" />

            {/* ─── CTA BANNER ─── */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-5xl mx-auto rounded-[2.5rem] border border-white/10 text-white p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)' }}
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/15 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
                    <div className="relative z-10">
                        <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">Let's Build Together</p>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                            Ready to Transform<br />Your Business?
                        </h2>
                        <p className="text-blue-100/60 text-lg max-w-xl mx-auto mb-10">
                            Schedule a free consultation and let's discuss how we can bring your vision to life.
                        </p>
                        <Button3D
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}
                            className="px-10 py-4 text-base font-bold"
                        >
                            Get in Touch Now
                        </Button3D>
                    </div>
                </div>
            </section>

            <ContactSection id="contact" />
            <Footer />

            {/* Chat FAB */}
            <div className="fixed bottom-6 right-6 z-50">
                <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}
                    className="flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl shadow-blue-900/50 transition-all transform hover:scale-110 active:scale-95 border border-white/10"
                    title="Contact Us"
                >
                    <span className="material-symbols-outlined text-2xl">chat</span>
                </a>
            </div>
        </motion.div >
    )
}

