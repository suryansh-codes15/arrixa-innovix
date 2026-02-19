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
            style={{ backgroundColor: '#000000' }}
        >
            <Navbar />

            {/* ─── HERO ─── */}
            <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Three.js Background */}
                <FloatingShapes />

                {/* Rich ambient glow layers */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
                    <div className="absolute top-[-20%] left-[-15%] w-[60%] h-[60%] bg-blue-700/20 blur-[180px] rounded-full animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] right-[-15%] w-[55%] h-[55%] bg-indigo-600/15 blur-[180px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '4s' }} />
                </div>

                {/* Subtle grid overlay */}
                <div
                    className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center max-w-5xl">

                    {/* Eyebrow tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping inline-block" />
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-300">Next-Gen Technology Company</span>
                    </motion.div>

                    {/* Main headline - Company Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight mb-4 leading-[1.0]"
                    >
                        <span className="text-white">Aarixa </span>
                        <span
                            className="text-transparent bg-clip-text"
                            style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 40%, #38bdf8 100%)' }}
                        >
                            Innovix
                        </span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.32 }}
                        className="text-xl md:text-2xl font-light tracking-widest uppercase text-blue-300/70 mb-6"
                    >
                        Innovating Tomorrow's Technology Today
                    </motion.p>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.42 }}
                        className="text-base md:text-lg text-white/40 max-w-xl mx-auto leading-relaxed mb-12"
                    >
                        We build world-class software, mobile apps, and digital experiences that help businesses grow faster and smarter.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
                    >
                        <Button3D
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}
                            className="px-10 py-4 text-base font-bold"
                        >
                            Start Your Project
                            <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                        </Button3D>
                        <a
                            href="#services"
                            onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }) }}
                            className="px-10 py-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-blue-400/40 backdrop-blur-sm transition-all duration-300 font-semibold flex items-center justify-center gap-2 text-white/90 hover:text-white"
                        >
                            <span className="material-symbols-outlined text-sm">grid_view</span>
                            Explore Services
                        </a>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.65 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10 w-full max-w-3xl"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center py-6 px-4 bg-black/40 hover:bg-blue-900/20 transition-colors duration-300">
                                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{stat.value}</span>
                                <span className="text-xs text-white/40 mt-1 font-medium tracking-wide">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                >
                    <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
                    <span className="material-symbols-outlined text-2xl">keyboard_arrow_down</span>
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
        </motion.div>
    )
}

