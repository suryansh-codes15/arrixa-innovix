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

export default function Refund() {
    return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"
            className="min-h-screen w-full text-white overflow-x-hidden">
            <Navbar />
            <section className="pt-32 pb-20 border-b border-white/5">
                <div className="max-w-3xl mx-auto px-6">
                    <AnimatedSection>
                        <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Legal</p>
                        <h1 className="text-5xl font-display font-bold text-white mb-4">Refund Policy</h1>
                        <p className="text-blue-100/40 text-sm">Effective: 1 January 2026 · Last Updated: 28 February 2026</p>
                    </AnimatedSection>
                </div>
            </section>
            <section className="py-24">
                <div className="max-w-3xl mx-auto px-6">
                    <AnimatedSection>
                        <div className="glass-card rounded-2xl p-6 border border-blue-500/20 bg-blue-500/5 mb-8 text-sm text-blue-100/60 leading-relaxed">
                            This Refund Policy applies to any paid services or subscriptions offered by Aarixa Innovix Pvt. Ltd. Currently, Mutual Fund Booster is offered as a free service.
                        </div>
                        <Section title="1. Free Service">
                            <p>The Mutual Fund Booster planning tool is currently available free of charge. No payment is required to use the core features. Accordingly, no refunds are applicable for the free tier.</p>
                        </Section>
                        <Section title="2. Future Paid Plans">
                            <p>If paid subscription plans are introduced, the following principles will apply:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Refund requests within 7 days of payment will be considered for a full refund</li>
                                <li>Refunds not provided after 7 days if premium features have been substantially used</li>
                                <li>Subscription fees for future billing periods refunded if cancellation is requested before renewal date</li>
                            </ul>
                        </Section>
                        <Section title="3. Consultations & Advisory Services">
                            <p>If paid consultations are offered:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Cancellations 24+ hours before the session: full refund</li>
                                <li>Cancellations less than 24 hours before: 50% refund</li>
                                <li>No-shows: no refund</li>
                            </ul>
                        </Section>
                        <Section title="4. How to Request a Refund">
                            <p>Email <a href="mailto:info@aarixainnovix.com" className="text-blue-400 hover:text-blue-300">info@aarixainnovix.com</a> with your transaction reference number and reason. We respond within 5 business days. Approved refunds are processed in 7–10 business days.</p>
                        </Section>
                        <Section title="5. Changes">
                            <p>Aarixa Innovix reserves the right to modify this policy at any time. Changes are effective upon posting to this page.</p>
                        </Section>
                    </AnimatedSection>
                </div>
            </section>
            <Footer />
        </motion.div>
    )
}
