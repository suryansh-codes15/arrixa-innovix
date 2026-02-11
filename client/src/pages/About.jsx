import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import Button3D from '../components/Button3D'

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

function AnimatedCounter({ target, suffix = '', duration = 2 }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (v) => Math.round(v))
    const ref = useRef(null)

    useEffect(() => {
        const node = ref.current
        if (!node) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animate(count, target, { duration })
                    observer.disconnect()
                }
            },
            { threshold: 0.5 }
        )
        observer.observe(node)
        return () => observer.disconnect()
    }, [count, target, duration])

    return (
        <span ref={ref}>
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    )
}

const stats = [
    { value: 150, suffix: '+', label: 'Projects Delivered' },
    { value: 50, suffix: '+', label: 'Global Clients' },
    { value: 99, suffix: '%', label: 'Satisfaction Rate' },
    { value: 24, suffix: '/7', label: 'Active Support' },
]

const expertise = [
    'Software Development',
    'Website Designing',
    'Social Media Marketing',
    'Mobile App Development',
]

export default function About() {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-20 -left-20 w-80 h-80 rounded-full glass-sphere opacity-40 dark:opacity-20 blur-2xl" />
                <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full glass-sphere opacity-30 dark:opacity-10 blur-xl" />
                <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full glass-sphere opacity-25 dark:opacity-15 blur-3xl" />
                <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-[120px]" />
            </div>

            <Navbar />

            <main className="relative z-10 pt-12 pb-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Hero */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-center">
                        <AnimatedSection className="lg:col-span-5 flex flex-col justify-center">
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Who we are</span>
                            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-8">
                                About <br />
                                <span className="text-primary">Aarixa Innovix</span>
                            </h1>
                            <div className="w-24 h-1.5 bg-primary rounded-full mb-8" />
                            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                Innovating Tomorrow's Technology Today. We bridge the gap between complex challenges and elegant digital solutions.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2} className="lg:col-span-7 space-y-8 py-4 lg:py-12 relative">
                            <div className="space-y-6">
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                                    At Aarixa Innovix, we believe that the future is built through continuous innovation and a commitment to excellence. Our team of visionaries and technical experts works tirelessly to transform abstract ideas into powerful, future-ready digital platforms.
                                </p>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                                    We specialize in navigating the ever-evolving landscape of technology to deliver solutions that are not just functional, but revolutionary. From robust software architectures to intuitive mobile experiences, our focus remains on creating lasting value for our clients.
                                </p>
                            </div>

                            {/* Mission & Vision */}
                            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined">lightbulb</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Our Mission</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                            Empowering businesses through cutting-edge digital transformation and strategic innovation.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Our Vision</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                            To be the global benchmark for excellence in software development and technology consulting.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Core Expertise Banner */}
                    <AnimatedSection delay={0.3}>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000" />
                            <div className="relative bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm">
                                <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-8 text-center md:text-left">
                                    <div className="w-full md:w-auto">
                                        <h2 className="text-2xl font-bold mb-2">Our Core Expertise</h2>
                                        <p className="text-slate-500 dark:text-slate-400">Tailored solutions for the modern digital era.</p>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-medium text-slate-700 dark:text-slate-200">
                                        {expertise.map((item, i) => (
                                            <div key={item} className="flex items-center gap-2">
                                                {i > 0 && <div className="hidden md:block w-px h-6 bg-slate-300 dark:bg-slate-700 mr-4" />}
                                                <span className="w-2 h-2 rounded-full bg-primary" />
                                                <span className="hover:text-primary transition-colors cursor-default">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-32 text-center relative">
                        {stats.map((stat, i) => (
                            <AnimatedSection key={stat.label} delay={0.1 * i} className="p-6">
                                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </main>

            {/* CTA Section */}
            <section className="relative py-20 bg-primary/5 dark:bg-slate-900/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 glass-sphere rounded-full opacity-20 blur-2xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 glass-sphere rounded-full opacity-20 blur-2xl -translate-x-1/2 translate-y-1/2" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Innovate With Us?</h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10">
                            Let's discuss how our technology expertise can help your business reach new heights.
                        </p>
                        <Button3D href="mailto:info@aarixainnovix.com" className="px-10 py-4 rounded-full text-lg">
                            <span className="material-symbols-outlined">mail</span>
                            info@aarixainnovix.com
                        </Button3D>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </motion.div>
    )
}
