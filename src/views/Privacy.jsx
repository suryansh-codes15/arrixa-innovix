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

export default function Privacy() {
    return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"
            className="min-h-screen w-full text-white overflow-x-hidden">
            <Navbar />
            <section className="pt-32 pb-20 border-b border-white/5">
                <div className="max-w-3xl mx-auto px-6">
                    <AnimatedSection>
                        <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Legal</p>
                        <h1 className="text-5xl font-display font-bold text-white mb-4">Privacy Policy</h1>
                        <p className="text-blue-100/40 text-sm">Effective: 1 January 2026 · Last Updated: 28 February 2026</p>
                    </AnimatedSection>
                </div>
            </section>
            <section className="py-24">
                <div className="max-w-3xl mx-auto px-6">
                    <AnimatedSection>
                        <div className="glass-card rounded-2xl p-6 border border-blue-500/20 bg-blue-500/5 mb-8 text-sm text-blue-100/60 leading-relaxed">
                            Aarixa Innovix Pvt. Ltd. is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use Mutual Fund Booster.
                        </div>
                        <Section title="1. Information We Collect">
                            <p><strong className="text-white">Contact form data:</strong> Name, email address, and message content when you reach out to us.</p>
                            <p><strong className="text-white">Planning data:</strong> Financial parameters you enter are processed client-side and are not stored on our servers unless explicitly saved.</p>
                            <p><strong className="text-white">Usage analytics:</strong> Anonymised usage data (pages visited, features used) to improve the platform.</p>
                        </Section>
                        <Section title="2. How We Use Your Information">
                            <ul className="list-disc pl-5 space-y-1">
                                <li>To respond to inquiries submitted via the contact form</li>
                                <li>To improve and maintain the Mutual Fund Booster platform</li>
                                <li>To send service-related communications (not marketing, unless opted in)</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </Section>
                        <Section title="3. Data Sharing">
                            <p>We do not sell or rent your personal information. We may share data with service providers who assist in operating our platform, or authorities when required by law.</p>
                        </Section>
                        <Section title="4. Data Retention">
                            <p>Contact form submissions are retained for up to 12 months. Planning sessions not explicitly saved are not stored. You may request deletion at any time.</p>
                        </Section>
                        <Section title="5. Security">
                            <p>We implement industry-standard security measures. No method of internet transmission is 100% secure. We encourage caution when sharing sensitive financial data.</p>
                        </Section>
                        <Section title="6. Your Rights">
                            <p>Under applicable Indian data protection laws, you have the right to access, correct, or delete your personal data. Contact us at <a href="mailto:info@aarixainnovix.com" className="text-blue-400 hover:text-blue-300">info@aarixainnovix.com</a>.</p>
                        </Section>
                        <Section title="7. Changes">
                            <p>We may update this Privacy Policy periodically. Continued use of the Service constitutes acceptance of the revised policy.</p>
                        </Section>
                    </AnimatedSection>
                </div>
            </section>
            <Footer />
        </motion.div>
    )
}
