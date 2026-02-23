import { motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection'

const steps = [
    {
        number: "01",
        title: "Architectural Discovery",
        description: "In-depth audit of business logic, high-load requirements, and existing technical debt to design a future-proof roadmap.",
        stats: "Analysis Phase"
    },
    {
        number: "02",
        title: "High-Performance Engineering",
        description: "Engineered from the ground up using modular backend structures, optimized for sub-100ms API latency and vertical scale.",
        stats: "Development Phase"
    },
    {
        number: "03",
        title: "Security & AI Integration",
        description: "Hardening the system with enterprise-grade auth and integrating high-throughput data processing for AI-driven insights.",
        stats: "Security Phase"
    },
    {
        number: "04",
        title: "Continuous Optimization",
        description: "Proactive monitoring and intelligent performance tuning to ensure the system evolves with your growth trajectory.",
        stats: "Scaling Phase"
    }
]

export default function ProcessSection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <AnimatedSection className="mb-16 md:mb-24">
                    <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Approach</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        The Arrixa Standard:<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Engineered for Infinity</span>
                    </h2>
                    <p className="max-w-xl text-blue-100/60 text-lg font-light leading-relaxed">
                        We don't just ship features. We architect high-performance systems designed for the long-term success of high-growth ventures.
                    </p>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Connector Line (Desktop) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-blue-500/30 to-transparent z-0 ml-4" />
                            )}

                            <div className="relative z-10">
                                <div className="text-6xl font-display font-black text-white/5 mb-6 group-hover:text-blue-500/10 transition-colors">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-blue-100/50 text-sm font-light leading-relaxed mb-6">
                                    {step.description}
                                </p>
                                <div className="inline-block px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                                    {step.stats}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
