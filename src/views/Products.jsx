'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import FloatingShapes from '../components/FloatingShapes'
import Button3D from '../components/Button3D'

export default function Products() {
    return (
        <div className="min-h-screen text-white selection:bg-blue-500/30 font-display">
            <Navbar />

            <main className="pt-24 md:pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <FloatingShapes className="opacity-20" />
                    <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:40px_40px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Header */}
                    <AnimatedSection className="text-center mb-16 lg:mb-24 mt-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            Flagship Product
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
                            WealthSys<span className="text-blue-500">.</span>
                        </h1>
                        <p className="text-blue-100/60 max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed">
                            The ultimate financial technology suite designed for intelligent portfolio management, algorithmic insights, and risk adjustment in real-time.
                        </p>
                    </AnimatedSection>

                    {/* Features Grid */}
                    <AnimatedSection className="mb-24">
                        <div className="flex flex-col items-center mb-12">
                            <h2 className="text-3xl font-bold mb-3">Core Features</h2>
                            <div className="w-16 h-1 bg-blue-500 rounded-full" />
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: 'memory', title: 'Real-time Processing', desc: 'Process millions of data points instantly to provide up-to-the-second market insights and portfolio valuations.' },
                                { icon: 'auto_graph', title: 'Predictive ML Pipelines', desc: 'Leverage embedded machine learning models to forecast trends and automatically adjust risk parameters.' },
                                { icon: 'security', title: 'Institutional Security', desc: 'Bank-grade encryption, role-based access control, and complete audit trails for full regulatory compliance.' }
                            ].map((feature, i) => (
                                <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-900/30 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-blue-100/60 leading-relaxed text-sm">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Use Cases Section  */}
                    <AnimatedSection className="mb-24 bg-gradient-to-r from-blue-900/20 to-transparent p-8 md:p-12 rounded-[2.5rem] border border-blue-500/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
                        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed For Scale. Built For Operators.</h2>
                                <p className="text-lg text-blue-100/70 mb-8 leading-relaxed font-light">
                                    WealthSys is not just a dashboard; it's a comprehensive command center for financial institutions, hedge funds, and aggressive portfolio managers. 
                                </p>
                                <ul className="space-y-4">
                                    {['Multi-asset aggregation across global markets', 'Quantitative risk management and stress testing', 'Automated compliance monitoring and reporting'].map((use, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-blue-400 mt-1">check_circle</span>
                                            <span className="text-white/80">{use}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:w-1/2 w-full aspect-video rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden relative">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <span className="material-symbols-outlined text-6xl text-white/30 relative z-10">dashboard</span>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Benefits Section */}
                    <AnimatedSection className="text-center mb-20">
                        <h2 className="text-3xl font-bold mb-12">The WealthSys Advantage</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { stat: '99.99%', label: 'Uptime Reliability' },
                                { stat: '<50ms', label: 'Processing Latency' },
                                { stat: '100+', label: 'API Integrations' },
                                { stat: 'ISO', label: '27001 Certified' }
                            ].map((benefit, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center min-h-[160px]">
                                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2">{benefit.stat}</span>
                                    <span className="text-sm uppercase tracking-widest font-bold text-white/40">{benefit.label}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* CTA */}
                    <AnimatedSection className="flex justify-center">
                        <Button3D className="px-12 py-5 text-lg">Request a Technical Demo</Button3D>
                    </AnimatedSection>

                </div>
            </main>

            <Footer />
        </div>
    )
}
