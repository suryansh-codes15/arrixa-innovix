import { motion } from 'framer-motion'
import AnimatedSection from '../AnimatedSection'
import Button3D from '../Button3D'

const solutions = [
    {
        icon: 'trending_up',
        title: 'High-Frequency Trading',
        description: 'Ultra-low latency execution systems built for speed and reliability in volatile markets.'
    },
    {
        icon: 'security',
        title: 'Secure Banking Protocols',
        description: 'Enterprise-grade security standards ensuring safe transactions and data protection.'
    },
    {
        icon: 'analytics',
        title: 'Real-Time Analytics',
        description: 'Live market data processing and visualization for informed investment decisions.'
    },
    {
        icon: 'currency_bitcoin', // or 'token' if available, using material symbol
        title: 'Blockchain Assets',
        description: 'Decentralized finance (DeFi) solutions and smart contract integration.'
    }
]

export default function InvestmentSolutions() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient similar to other sections */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Industry Vertical
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Investment & <span className="text-emerald-400">FinTech Solutions</span>
                    </h2>
                    <p className="text-blue-100/60 max-w-2xl mx-auto text-lg">
                        Specialized digital infrastructure for the modern financial landscape. We build trading platforms, wallets, and analytic tools that drive growth.
                    </p>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((item, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-900/10 transition-all group h-full">
                                <div className="w-12 h-12 bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-blue-100/50 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Trust Indicators / Badges Row */}
                <AnimatedSection delay={0.4} className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder for "Trusted by" style logos or compliance badges like PCI-DSS, SOC2 etc can go here if requested. For now keeping it clean. */}
                </AnimatedSection>
            </div>
        </section>
    )
}
