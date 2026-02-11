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

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Home() {
    const { hash } = useLocation()

    // Handle scroll on load if hash is present
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

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Three.js Background */}
                <FloatingShapes />

                {/* Ambient Blurs for Deep Blue Theme */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[150px] rounded-full animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col items-center text-center">
                    <AnimatedSection className="mb-8">
                        <div className="flex items-center justify-center w-20 h-20 mb-8 mx-auto rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl shadow-primary/20">
                            <span className="material-symbols-outlined text-5xl text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">rocket_launch</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight mb-6 text-white drop-shadow-lg">
                            Aarixa <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Innovix</span>
                        </h1>
                        <p className="text-lg md:text-2xl font-light text-blue-100/80 tracking-wide max-w-3xl mx-auto leading-relaxed">
                            Innovating Tomorrow's Technology Today
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} className="mt-10 mb-20">
                        <div className="flex flex-col md:flex-row gap-6 justify-center w-full max-w-md md:max-w-none mx-auto">
                            <Button3D href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }} className="px-8 py-4 text-lg w-full md:w-auto">
                                Start Your Project
                                <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                            </Button3D>
                            <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' }) }} className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all font-semibold flex items-center justify-center gap-2 text-white w-full md:w-auto">
                                Explore Services
                            </a>
                        </div>
                    </AnimatedSection>

                    {/* Badge */}
                    <AnimatedSection delay={0.3}>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/30 backdrop-blur-md border border-blue-500/30 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                            <span className="relative flex h-2 w-2 mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                            </span>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-200">
                                Website Coming Soon
                            </span>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Scroll Down Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
                </motion.div>
            </section>

            {/* Sections */}
            <AboutSection id="about" />
            <ServicesSection id="services" />

            {/* Call to Action Bar */}
            <section className="py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 dark:bg-blue-900/10" />
                <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-r from-slate-900 to-blue-900 border border-white/10 text-white p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to Transform Your Business?</h2>
                        <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            Let's allow technology to open new doors for your enterprise. Schedule a consultation today.
                        </p>
                        <Button3D href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }} className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-4 text-lg">
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
                    className="flex items-center justify-center w-16 h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-900/40 transition-all transform hover:scale-110 active:scale-95 border border-white/10"
                >
                    <span className="material-symbols-outlined text-3xl">chat</span>
                </a>
            </div>
        </motion.div>
    )
}
