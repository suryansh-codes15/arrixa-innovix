import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button3D from '../Button3D'

export default function FinalCTASection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-blue-600/10 blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-[3rem] p-12 md:p-24 shadow-2xl backdrop-blur-sm overflow-hidden relative group"
                >
                    {/* Animated Shine Effect */}
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />

                    <div className="relative z-10">
                        <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs mb-8 block">Ready for Hyper-Growth?</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                            Build Your Vision With<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Elite Engineering</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-blue-100/60 text-lg md:text-xl font-light leading-relaxed mb-12">
                            Stop battling technical debt and scalability bottlenecks. Partner with Arrixa Innovix and deploy infrastructure built for the future.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button3D
                                className="px-12 py-5 text-lg w-full sm:w-auto"
                                onClick={() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Schedule a Strategy Call
                            </Button3D>
                            <Link
                                to="/products"
                                className="px-8 py-4 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all border border-white/10 hover:border-white/30 rounded-full"
                            >
                                Browse Our Products
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Secondary verification labels */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xl">verified_user</span>
                        <span className="text-[10px] font-black uppercase tracking-widest">SOC2-Ready Architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xl">speed</span>
                        <span className="text-[10px] font-black uppercase tracking-widest">Ultra-Low Latency Ops</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xl">auto_graph</span>
                        <span className="text-[10px] font-black uppercase tracking-widest">Infinite Horizontal Scale</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
