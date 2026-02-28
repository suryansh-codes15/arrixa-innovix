'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import AnimatedSection from '../AnimatedSection'
import Button3D from '../Button3D'

const API_URL = '/api/contact'

export default function ContactSection({ id }) {
    const [form, setForm] = useState({ name: '', email: '', subject: 'mutual-fund-planning', message: '' })
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    const { executeRecaptcha } = useGoogleReCaptcha()

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!executeRecaptcha) {
            console.warn('Execute recaptcha not yet available')
            return
        }
        setLoading(true)
        setStatus(null)
        try {
            const token = await executeRecaptcha('contact_form')
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, captchaToken: token }),
            })
            const data = await res.json()
            if (res.ok) {
                setStatus({ type: 'success', message: '✓ Message sent successfully! We will respond within 1–2 business days.' })
                setForm({ name: '', email: '', subject: 'mutual-fund-planning', message: '' })
            } else {
                setStatus({ type: 'error', message: `✗ ${data.error || 'Something went wrong.'}` })
            }
        } catch (error) {
            console.error('Submission error:', error)
            setStatus({ type: 'error', message: '✗ Failed to send message. Please try again later.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id={id} className="relative py-24 gradient-contact overflow-hidden text-white">
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] -translate-y-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-16">
                    <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Get In Touch</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">Contact Us</h2>
                    <p className="text-blue-200/60 max-w-lg mx-auto text-lg">
                        Have a question about Mutual Fund Booster? We will respond within 1–2 business days.
                    </p>
                </AnimatedSection>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Form */}
                    <AnimatedSection className="lg:col-span-3">
                        <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl border border-white/10">
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-blue-200" htmlFor="name">Full Name</label>
                                        <input
                                            className="w-full bg-blue-950/50 border border-blue-800/50 rounded-xl px-4 py-3 text-white placeholder:text-blue-400/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                            id="name" name="name" placeholder="Your full name" type="text" required
                                            value={form.name} onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-blue-200" htmlFor="email">Email Address</label>
                                        <input
                                            className="w-full bg-blue-950/50 border border-blue-800/50 rounded-xl px-4 py-3 text-white placeholder:text-blue-400/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                            id="email" name="email" placeholder="your@email.com" type="email" required
                                            value={form.email} onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-blue-200" htmlFor="subject">Subject</label>
                                    <select
                                        className="w-full bg-blue-950/50 border border-blue-800/50 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                        id="subject" name="subject"
                                        value={form.subject} onChange={handleChange}
                                    >
                                        <option value="mutual-fund-planning">Mutual Fund Booster — Planning Query</option>
                                        <option value="product-enquiry">Product Enquiry</option>
                                        <option value="certification">Certification &amp; Compliance</option>
                                        <option value="technical-support">Technical Support</option>
                                        <option value="partnership">Partnership &amp; Collaboration</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-blue-200" htmlFor="message">Message</label>
                                    <textarea
                                        className="w-full bg-blue-950/50 border border-blue-800/50 rounded-xl px-4 py-3 text-white placeholder:text-blue-400/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                                        id="message" name="message" placeholder="Describe your query or requirement..." rows="5" required
                                        value={form.message} onChange={handleChange}
                                    />
                                </div>
                                <Button3D type="submit" className="w-full py-4 rounded-xl text-base shadow-lg shadow-blue-600/20">
                                    {loading ? (
                                        <span className="animate-spin material-symbols-outlined text-sm">progress_activity</span>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <span className="material-symbols-outlined text-sm">send</span>
                                        </>
                                    )}
                                </Button3D>

                                {status?.type === 'success' && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center text-sm font-medium">
                                        {status.message}
                                    </motion.div>
                                )}
                                {status?.type === 'error' && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-center text-sm font-medium">
                                        {status.message}
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </AnimatedSection>

                    {/* Info Cards */}
                    <div className="lg:col-span-2 space-y-6">
                        {[
                            { icon: 'mail', title: 'Email Us', text: 'info@aarixainnovix.com', subtext: 'We respond within 1–2 business days' },
                            { icon: 'location_on', title: 'Our Office', text: 'Unit No. 1116, Tower B4, Spaze ITech Park, Sector 49', subtext: 'Gurugram, Haryana 122018' },
                            { icon: 'schedule', title: 'Business Hours', text: 'Monday – Saturday', subtext: '9:30 AM – 6:00 PM IST' },
                        ].map((card, i) => (
                            <AnimatedSection key={card.title} delay={0.2 + i * 0.1}>
                                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-xl">{card.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">{card.title}</h3>
                                        <p className="text-blue-100/80 font-medium">{card.text}</p>
                                        <p className="text-blue-200/50 text-sm mt-1">{card.subtext}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
