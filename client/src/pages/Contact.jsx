import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import AnimatedSection from '../components/AnimatedSection'
import Button3D from '../components/Button3D'

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: 'software', message: '' })
    const [status, setStatus] = useState(null) // 'success' | 'error' | null
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus(null)
        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            if (res.ok) {
                setStatus('success')
                setForm({ name: '', email: '', subject: 'software', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
        setLoading(false)
    }

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300"
        >
            {/* Background */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 hidden dark:block gradient-contact" />
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
            </div>

            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
                {/* Heading */}
                <AnimatedSection className="text-center mb-12">
                    <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Reach Out</p>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
                        Have a project in mind or just want to say hello? Our team is ready to help you innovate tomorrow's technology today.
                    </p>
                </AnimatedSection>

                {/* Form */}
                <AnimatedSection delay={0.2} className="w-full max-w-2xl">
                    <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="name">Full Name</label>
                                    <input
                                        className="w-full bg-white/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                        id="name" name="name" placeholder="John Doe" type="text" required
                                        value={form.name} onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">Email Address</label>
                                    <input
                                        className="w-full bg-white/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                        id="email" name="email" placeholder="john@example.com" type="email" required
                                        value={form.email} onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="subject">Subject</label>
                                <select
                                    className="w-full bg-white/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    id="subject" name="subject"
                                    value={form.subject} onChange={handleChange}
                                >
                                    <option value="software">Software Development</option>
                                    <option value="website">Website Designing</option>
                                    <option value="smm">Social Media Marketing</option>
                                    <option value="mobile">Mobile App Development</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="message">Message</label>
                                <textarea
                                    className="w-full bg-white/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                                    id="message" name="message" placeholder="Tell us about your project..." rows="5" required
                                    value={form.message} onChange={handleChange}
                                />
                            </div>
                            <Button3D type="submit" className="w-full py-4 rounded-xl text-base">
                                {loading ? (
                                    <span className="animate-spin material-symbols-outlined text-sm">progress_activity</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <span className="material-symbols-outlined text-sm">send</span>
                                    </>
                                )}
                            </Button3D>

                            {/* Status Toast */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center text-sm font-medium"
                                >
                                    ✓ Message sent successfully! We'll get back to you soon.
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-center text-sm font-medium"
                                >
                                    ✗ Something went wrong. Please try again or email us directly.
                                </motion.div>
                            )}
                        </form>
                    </div>
                </AnimatedSection>

                {/* Info Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                    {[
                        { icon: 'mail', title: 'Email Us', text: 'info@aarixainnovix.com' },
                        { icon: 'location_on', title: 'Visit Us', text: 'Innovix Tech Hub, Digital Square' },
                        { icon: 'chat', title: 'Live Chat', text: 'Available Mon–Fri, 9am–6pm' },
                    ].map((card, i) => (
                        <AnimatedSection key={card.title} delay={0.3 + i * 0.1}>
                            <motion.div
                                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/5 transition-all duration-300"
                                whileHover={{ y: -4, scale: 1.02 }}
                            >
                                <span className="material-symbols-outlined text-primary mb-3 text-3xl">{card.icon}</span>
                                <h3 className="text-slate-900 dark:text-white font-medium mb-1">{card.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">{card.text}</p>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-20 border-t border-slate-200 dark:border-white/10 py-10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">&copy; 2024 Aarixa Innovix. All rights reserved.</p>
                    <div className="flex gap-6 text-slate-500 text-sm">
                        <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </motion.div>
    )
}
