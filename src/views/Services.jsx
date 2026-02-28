import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Card3D from '../components/Card3D'
import AnimatedSection from '../components/AnimatedSection'

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const services = [
    {
        icon: 'terminal',
        title: 'Software Development',
        description: 'Custom-built enterprise solutions designed for scalability, security, and peak performance across all platforms.',
    },
    {
        icon: 'web',
        title: 'Website Designing',
        description: 'Stunning, responsive designs that provide immersive user experiences across all devices and screen sizes.',
    },
    {
        icon: 'campaign',
        title: 'Social Media Marketing',
        description: 'Strategic campaigns designed to amplify your brand voice and engage your target audience effectively.',
    },
    {
        icon: 'phone_iphone',
        title: 'Mobile App Development',
        description: 'High-performance native and cross-platform apps that put your business in customers\' pockets.',
    },
]

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
}

const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Services() {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300"
        >
            {/* Background */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[120px] opacity-50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] opacity-40" />
            </div>

            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                {/* Hero */}
                <AnimatedSection className="text-center mb-20 space-y-5">
                    <p className="text-primary font-semibold tracking-wider uppercase text-sm">What We Do</p>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                        Innovating <span className="text-primary glow-text">Tomorrow's</span> Technology Today
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to elevate your business in the modern tech landscape.
                    </p>
                </AnimatedSection>

                {/* Service Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service) => (
                        <motion.div key={service.title} variants={staggerItem}>
                            <Card3D className="flex flex-col items-center text-center group h-full">
                                <div className="w-14 h-14 bg-primary/10 dark:bg-primary/15 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">
                                    {service.description}
                                </p>
                                <div className="mt-8 flex items-center text-primary text-sm font-semibold cursor-pointer group-hover:gap-2 transition-all">
                                    Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                </div>
                            </Card3D>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Footer */}
                <AnimatedSection delay={0.3} className="mt-24 pt-12 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-2 uppercase tracking-widest font-bold">Get In Touch</p>
                        <a className="text-2xl font-medium hover:text-primary transition-colors dark:text-white" href="mailto:info@aarixainnovix.com">
                            info@aarixainnovix.com
                        </a>
                    </div>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-slate-500 dark:text-slate-400" href="#">
                            <span className="material-symbols-outlined text-lg">share</span>
                        </a>
                        <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-slate-500 dark:text-slate-400" href="#">
                            <span className="material-symbols-outlined text-lg">language</span>
                        </a>
                    </div>
                </AnimatedSection>

                {/* Coming Soon Badge */}
                <AnimatedSection delay={0.4} className="mt-12 text-center">
                    <div className="inline-block px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
                        Full Website Coming Soon
                    </div>
                </AnimatedSection>
            </main>
        </motion.div>
    )
}
