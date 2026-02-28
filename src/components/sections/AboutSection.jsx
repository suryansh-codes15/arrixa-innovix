import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import AnimatedSection from '../AnimatedSection'
import Button3D from '../Button3D'

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

export default function AboutSection({ id }) {
    return (
        <section id={id} className="relative py-24 gradient-about overflow-hidden text-white">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-20 -left-20 w-80 h-80 rounded-full glass-sphere opacity-20 blur-2xl" />
                <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full glass-sphere opacity-15 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-24 items-center">
                    <AnimatedSection className="lg:col-span-5 flex flex-col justify-center">
                        <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">Who We Are</span>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-8 text-white">
                            About <br />
                            <span className="text-blue-500">Aarixa Innovix</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-blue-500 rounded-full mb-8" />
                        <p className="text-xl text-blue-100/80 font-medium leading-relaxed mb-8">
                            Arrixa Innovix is a high-performance technology partner for companies that demand institutional-grade engineering and architectural excellence.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button3D className="px-8 py-4 text-sm font-bold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                Inquire for Architecture Quote
                            </Button3D>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} className="lg:col-span-7 space-y-8 py-4 lg:py-12 relative">
                        <div className="space-y-6">
                            <p className="text-lg md:text-xl text-blue-100/70 leading-relaxed">
                                At Aarixa Innovix, we believe that the future is built through continuous innovation and a commitment to excellence. Our team of visionaries and technical experts works tirelessly to transform abstract ideas into powerful, future-ready digital platforms.
                            </p>
                        </div>

                        {/* Mission & Vision */}
                        <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-900/30 text-blue-400 rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined">lightbulb</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-white">Our Mission</h3>
                                    <p className="text-blue-200/60 text-sm leading-relaxed">
                                        Empowering businesses through cutting-edge digital transformation and strategic innovation.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-900/30 text-blue-400 rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined">visibility</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-white">Our Vision</h3>
                                    <p className="text-blue-200/60 text-sm leading-relaxed">
                                        To be the global benchmark for excellence in software development and technology consulting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Core Expertise Banner */}
                <AnimatedSection delay={0.3}>
                    <div className="relative group mb-24">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-md">
                            <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-8 text-center md:text-left">
                                <div className="w-full md:w-auto">
                                    <h3 className="text-2xl font-bold mb-2 text-white">Our Core Expertise</h3>
                                    <p className="text-blue-200/60">Tailored solutions for the modern digital era.</p>
                                </div>
                                <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-medium text-blue-100">
                                    {expertise.map((item, i) => (
                                        <div key={item} className="flex items-center gap-2">
                                            {i > 0 && <div className="hidden md:block w-px h-6 bg-white/10 mr-4" />}
                                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span className="hover:text-blue-400 transition-colors cursor-default">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative">
                    {stats.map((stat, i) => (
                        <AnimatedSection key={stat.label} delay={0.1 * i} className="p-6 bg-white/5 rounded-2xl border border-white/5 shadow-lg backdrop-blur-sm">
                            <div className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-2">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-blue-200/60 font-medium">{stat.label}</div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
