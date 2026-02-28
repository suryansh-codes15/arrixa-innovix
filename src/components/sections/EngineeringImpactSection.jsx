import { motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection'

const impactData = [
    {
        id: 1,
        title: "Latency Optimization",
        description: "Reduced API response times by up to 60% through aggressive query optimization and distributed caching strategies.",
        icon: "bolt",
        highlight: "< 100ms Response"
    },
    {
        id: 2,
        title: "Architectural Scalability",
        description: "Engineered modular systems capable of handling 50,000+ concurrent users without performance degradation.",
        icon: "hub",
        highlight: "Infinite Horizontal Scale"
    },
    {
        id: 3,
        title: "Institutional Security",
        description: "Deployed SOC2-compliant authentication flows and encrypted data pipelines for financial-grade reliability.",
        icon: "lock",
        highlight: "Zero-Trust Security"
    },
    {
        id: 4,
        title: "Automated Deployments",
        description: "Achieved 99.99% uptime with fully automated CI/CD pipelines and proactive failover mechanisms.",
        icon: "sync_alt",
        highlight: "99.99% Reliability"
    },
    {
        id: 5,
        title: "AI-Ready Infrastructure",
        description: "Architected high-throughput pipelines for real-time AI model training and large-scale data processing.",
        icon: "memory",
        highlight: "10GB/s Throughput"
    },
    {
        id: 6,
        title: "Operational Excellence",
        description: "Eliminated infrastructure bottlenecks through intelligent monitoring and proactive system self-healing.",
        icon: "monitoring",
        highlight: "Self-Healing Infra"
    }
]

export default function EngineeringImpactSection({ id }) {
    return (
        <section id={id} className="py-24 px-6 relative overflow-hidden bg-black/20">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                <AnimatedSection className="text-center mb-16 md:mb-20">
                    <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Engineering Impact</span>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                        Real technical execution. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Measurable performance.</span> Scalable systems.
                    </h2>
                    <p className="max-w-2xl mx-auto text-blue-100/60 text-lg font-light leading-relaxed">
                        We build robust, enterprise-grade backend architectures designed for infinite scale, relentless security, and elite performance optimization.
                    </p>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {impactData.map((impact, index) => (
                        <motion.div
                            key={impact.id}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.04] hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.2)] transition-all duration-500 group flex flex-col relative overflow-hidden"
                        >
                            {/* Subtle hover glow inside card */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="flex items-start justify-between mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                                    <span className="material-symbols-outlined text-3xl" aria-hidden="true">{impact.icon}</span>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300/50 group-hover:text-blue-400 transition-colors border border-blue-500/0 group-hover:border-blue-500/20 bg-transparent group-hover:bg-blue-500/10 px-3 py-1 rounded-full">
                                    {impact.highlight}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors leading-tight">
                                {impact.title}
                            </h3>

                            <p className="text-blue-100/60 font-light leading-relaxed flex-grow text-[15px]">
                                {impact.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
