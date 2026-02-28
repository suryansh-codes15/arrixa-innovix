'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function About() {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen w-full text-white overflow-x-hidden"
        >
            <Navbar />

            {/* Page Header */}
            <section className="pt-32 pb-20 border-b border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <AnimatedSection>
                        <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">About Us</p>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Aarixa Innovix</h1>
                        <p className="text-blue-100/60 text-xl leading-relaxed max-w-2xl">
                            A focused financial technology company building intelligent, data-driven mutual fund planning solutions.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6 space-y-16">
                    <AnimatedSection>
                        <div className="glass-card rounded-2xl p-8 border border-white/5">
                            <h2 className="text-2xl font-display font-bold text-white mb-5">Who We Are</h2>
                            <p className="text-blue-100/60 leading-relaxed mb-4">
                                Aarixa Innovix is a fintech company headquartered in Gurugram, India. We build Mutual Fund Booster — a structured financial planning platform designed for disciplined investors who want clarity, precision, and data-driven projections in their wealth planning journey.
                            </p>
                            <p className="text-blue-100/60 leading-relaxed">
                                We believe that good financial planning is built on transparent assumptions, principled calculations, and long-term thinking — not speculative forecasts or marketing language.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="glass-card rounded-2xl p-8 border border-white/5">
                            <h2 className="text-2xl font-display font-bold text-white mb-5">Our Mission</h2>
                            <p className="text-blue-100/60 leading-relaxed">
                                To make goal-based financial planning accessible, understandable, and actionable for every investor — from first-time SIP investors to experienced portfolio holders seeking structured analysis and planning tools.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="glass-card rounded-2xl p-8 border border-white/5">
                            <h2 className="text-2xl font-display font-bold text-white mb-6">Our Approach</h2>
                            <div className="space-y-5">
                                {[
                                    { title: 'Principled Modelling', desc: 'Every calculation in Mutual Fund Booster is based on standard financial formulas — compound interest, SIP growth, inflation adjustment — not black-box algorithms.' },
                                    { title: 'Transparency First', desc: 'All assumptions are disclosed explicitly: expected return rates, inflation figures, and time horizons. Nothing is hidden behind interface polish.' },
                                    { title: 'Long-Term Focus', desc: 'Mutual Fund Booster is designed for investors who take a systematic, long-term, and disciplined approach to wealth creation — not short-term trading.' },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4 items-start">
                                        <span className="material-symbols-outlined text-blue-400 mt-0.5 flex-shrink-0">check_circle</span>
                                        <div>
                                            <p className="text-white font-semibold mb-1">{item.title}</p>
                                            <p className="text-blue-100/60 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="glass-card rounded-2xl p-8 border border-white/5">
                            <h2 className="text-2xl font-display font-bold text-white mb-5">Contact & Office</h2>
                            <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-100/60">
                                <div><span className="text-blue-400 font-semibold block mb-1">Company</span>Aarixa Innovix Pvt. Ltd.</div>
                                <div><span className="text-blue-400 font-semibold block mb-1">Email</span>info@aarixainnovix.com</div>
                                <div><span className="text-blue-400 font-semibold block mb-1">Office</span>Unit No. 1116, Tower B4, Spaze ITech Park, Sector 49, Gurugram, Haryana 122018</div>
                                <div><span className="text-blue-400 font-semibold block mb-1">Hours</span>Monday – Saturday, 9:30 AM – 6:00 PM IST</div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </motion.div>
    )
}
