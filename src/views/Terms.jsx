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

const Section = ({ title, children }) => (
    <div className="glass-card rounded-2xl p-8 border border-white/5 mb-6">
        <h2 className="text-xl font-display font-bold text-white mb-4">{title}</h2>
        <div className="text-blue-100/60 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
)

export default function Terms() {
    return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"
            className="min-h-screen w-full text-white overflow-x-hidden">
            <Navbar />
            <section className="pt-32 pb-20 border-b border-white/5">
                <div className="max-w-3xl mx-auto px-6">
                    <AnimatedSection>
                        <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Legal</p>
                        <h1 className="text-5xl font-display font-bold text-white mb-4">Terms of Service</h1>
                        <p className="text-blue-100/40 text-sm">Effective: 1 January 2026 · Last Updated: 28 February 2026</p>
                    </AnimatedSection>
                </div>
            </section>
            <section className="py-24">
                <div className="max-w-3xl mx-auto px-6">
                    <AnimatedSection>
                        <div className="glass-card rounded-2xl p-6 border border-blue-500/20 bg-blue-500/5 mb-8 text-sm text-blue-100/60 leading-relaxed">
                            Please read these Terms of Service carefully before using Mutual Fund Booster, operated by Aarixa Innovix Pvt. Ltd. By using our service, you agree to these terms.
                        </div>
                        <Section title="1. Acceptance of Terms">
                            <p>By accessing and using Mutual Fund Booster ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.</p>
                        </Section>
                        <Section title="2. Description of Service">
                            <p>Mutual Fund Booster is a financial planning and modelling tool providing goal-based SIP projections, equity-debt allocation suggestions, and inflation-adjusted return estimates. The Service is for informational and educational purposes only.</p>
                            <p>The Service does <strong className="text-white">not</strong> constitute investment advice, financial advice, or portfolio management. Aarixa Innovix is not a SEBI Registered Investment Adviser.</p>
                        </Section>
                        <Section title="3. Not Investment Advice">
                            <p>All projections, calculations, and recommendations are based on user-provided assumptions and standard financial modelling formulas. They are illustrative and do not constitute personalised investment advice.</p>
                            <p>Users should consult a qualified SEBI-registered financial advisor before making any investment decisions. Mutual fund investments are subject to market risks.</p>
                        </Section>
                        <Section title="4. User Responsibilities">
                            <p>You agree to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Provide accurate information when using the planning tools</li>
                                <li>Use the Service solely for lawful purposes</li>
                                <li>Not attempt to reverse-engineer, scrape, or misuse the platform</li>
                            </ul>
                        </Section>
                        <Section title="5. Limitation of Liability">
                            <p>Aarixa Innovix Pvt. Ltd. shall not be liable for any investment losses, financial decisions, or damages resulting from use of or reliance on the Service. The platform is provided "as-is" without warranties of any kind.</p>
                        </Section>
                        <Section title="6. Intellectual Property">
                            <p>All content, design, and code within Mutual Fund Booster are the intellectual property of Aarixa Innovix Pvt. Ltd. Unauthorised reproduction or distribution is prohibited.</p>
                        </Section>
                        <Section title="7. Governing Law">
                            <p>These Terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Gurugram, Haryana.</p>
                        </Section>
                        <Section title="8. Contact">
                            <p>For questions: <a href="mailto:info@aarixainnovix.com" className="text-blue-400 hover:text-blue-300">info@aarixainnovix.com</a></p>
                        </Section>
                    </AnimatedSection>
                </div>
            </section>
            <Footer />
        </motion.div>
    )
}
