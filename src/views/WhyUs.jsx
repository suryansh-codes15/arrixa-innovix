'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import FloatingShapes from '../components/FloatingShapes'

const reasons = [
    {
        title: 'Deep Domain Expertise',
        desc: 'We are more than just software engineers. We intimately understand the financial markets, liquidity ecosystems, and complex asset classes. We don\'t just write code; we build trading systems.',
        icon: 'trending_up',
        color: 'from-blue-500/20 to-blue-400/5'
    },
    {
        title: 'Zero Latency Tolerance',
        desc: 'In modern systems, slow software is broken software. We architect all our tools with a relentless focus on performance—employing sub-50ms tick processing and distributed edge rendering.',
        icon: 'speed',
        color: 'from-emerald-500/20 to-emerald-400/5'
    },
    {
        title: 'Predictive Agentic Architecture',
        desc: 'Our enterprise pipelines are heavily integrated with fine-tuned LLMs capable of executing autonomous workflows, meaning our software is capable of replacing entire operational divisions.',
        icon: 'smart_toy',
        color: 'from-purple-500/20 to-purple-400/5'
    },
    {
        title: 'Institutional Grade Security',
        desc: 'Handling billions in aggregated wealth demands absolute security. We apply standard ISO 27001 practices, full auditing layers, and impenetrable role-based access to every product.',
        icon: 'gpp_good',
        color: 'from-orange-500/20 to-orange-400/5'
    }
]

export default function WhyUs() {
    return (
        <div className="min-h-screen text-white selection:bg-blue-500/30 overflow-x-hidden">
            <Navbar />

            <main className="pt-24 md:pt-32 pb-24 relative">
                <FloatingShapes className="opacity-20 fixed inset-0 pointer-events-none -z-10" />
                <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:40px_40px] fixed pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 z-10 relative">
                    
                    {/* Header */}
                    <AnimatedSection className="text-center mb-20 md:mb-28 mt-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                            The Difference
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
                            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Aarixa</span>
                        </h1>
                        <p className="text-blue-200/60 max-w-2xl mx-auto text-lg md:text-xl font-light">
                            We don't settle for "good enough". Our team architects hyper-scalable frameworks tailored specifically for aggressive growth and total market capture.
                        </p>
                    </AnimatedSection>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24 max-w-5xl mx-auto">
                        {reasons.map((item, i) => (
                            <AnimatedSection key={item.title} delay={i * 0.1}>
                                <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 h-full relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
                                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.color} rounded-full blur-[80px] pointer-events-none`} />
                                    
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-3xl text-white/80 group-hover:text-white">{item.icon}</span>
                                    </div>
                                    
                                    <h2 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h2>
                                    <p className="text-blue-100/60 leading-relaxed font-light relative z-10">
                                        {item.desc}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Final CTA */}
                    <AnimatedSection className="text-center bg-blue-900/10 border border-blue-500/20 p-12 rounded-[2rem] max-w-4xl mx-auto backdrop-blur-md">
                        <h2 className="text-3xl font-bold mb-6">Ready to scale with us?</h2>
                        <p className="text-blue-100/70 mb-8 max-w-lg mx-auto">Skip the generalist agencies. Work with a specialized engineering unit that understands your domain.</p>
                        <a href="/#contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                            Start a Conversation
                        </a>
                    </AnimatedSection>

                </div>
            </main>

            <Footer />
        </div>
    )
}
