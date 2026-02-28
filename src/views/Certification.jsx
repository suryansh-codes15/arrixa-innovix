'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

const detail = [
    { label: 'Company Name', value: 'Aarixa Innovix Pvt. Ltd.' },
    { label: 'Status', value: 'Active' },
    { label: 'Registered Office', value: 'Sector 49, Gurugram, Haryana 122018' },
    { label: 'Country', value: 'India' },
    { label: 'Regulatory Framework', value: 'Ministry of Corporate Affairs, India' },
]

export default function Certification() {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen w-full text-white overflow-x-hidden"
        >
            <Navbar />

            <section className="pt-32 pb-20 border-b border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <AnimatedSection>
                        <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Compliance & Certification</p>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Registered & Certified</h1>
                        <p className="text-blue-100/60 text-xl leading-relaxed max-w-2xl">
                            Aarixa Innovix Pvt. Ltd. operates as a formally registered entity. Our documentation is available to ensure full transparency.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6 space-y-12">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        <AnimatedSection>
                            <div className="glass-card rounded-2xl p-8 border border-white/5 space-y-5">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">Company Registration</h2>
                                {detail.map((item, i) => (
                                    <div key={item.label}>
                                        <div className="flex justify-between items-start gap-4">
                                            <span className="text-blue-400 text-sm font-semibold flex-shrink-0">{item.label}</span>
                                            <span className="text-blue-100/70 text-sm text-right">{item.value}</span>
                                        </div>
                                        {i < detail.length - 1 && <div className="border-t border-white/5 mt-4" />}
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.15}>
                            <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-6xl text-blue-400/40 mb-5">workspace_premium</span>
                                <h3 className="text-xl font-bold text-white mb-2">Certificate of Incorporation</h3>
                                <p className="text-blue-100/60 mb-2">Aarixa Innovix Pvt. Ltd.</p>
                                <p className="text-blue-100/40 text-sm mb-6">Ministry of Corporate Affairs — Government of India</p>
                                <a
                                    href="mailto:info@aarixainnovix.com?subject=Certificate Request"
                                    className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/25"
                                >
                                    Request Full Certificate
                                </a>
                                <p className="text-blue-100/30 text-xs mt-3">Official document shared over email upon verification</p>
                            </div>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection>
                        <div className="glass-card rounded-2xl p-8 border border-white/5">
                            <h2 className="text-2xl font-display font-bold text-white mb-5">Our Commitments</h2>
                            <div className="space-y-3">
                                {[
                                    'Registered entity with verifiable documentation',
                                    'No undisclosed affiliations or conflicts of interest',
                                    'All planning calculations are disclosed and reproducible',
                                    'Operates under Indian regulatory and corporate framework',
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3 text-blue-100/60 text-sm">
                                        <span className="material-symbols-outlined text-base text-blue-400 flex-shrink-0 mt-0.5">check_circle</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="glass-card rounded-2xl p-6 border border-blue-500/20 bg-blue-500/5">
                            <p className="text-blue-100/60 text-sm leading-relaxed">
                                <span className="text-blue-400 font-semibold">Regulatory Disclaimer: </span>
                                Mutual fund investments are subject to market risks. Mutual Fund Booster is a planning and modelling
                                tool — it does not constitute investment advice. Aarixa Innovix does not hold a SEBI Registered
                                Investment Adviser (RIA) license. Please consult a qualified financial advisor before making investment decisions.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </motion.div>
    )
}
