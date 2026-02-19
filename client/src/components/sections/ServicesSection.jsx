import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card3D from '../Card3D'
import AnimatedSection from '../AnimatedSection'

const services = [
    {
        id: 'software-development',
        icon: 'terminal',
        title: 'Software Development',
        description: 'Custom-built enterprise solutions designed for scalability, security, and peak performance across all platforms.',
    },
    {
        id: 'website-designing',
        icon: 'web',
        title: 'Website Designing',
        description: 'Stunning, responsive designs that provide immersive user experiences across all devices and screen sizes.',
    },
    {
        id: 'mobile-app-development',
        icon: 'phone_iphone',
        title: 'Mobile App Development',
        description: 'High-performance native and cross-platform apps that put your business in customers\' pockets.',
    },
    {
        id: 'api-development',
        icon: 'api',
        title: 'API Development',
        description: 'Robust, secure, and scalable REST & GraphQL APIs that power seamless integrations and data exchange across platforms.',
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

export default function ServicesSection({ id }) {
    return (
        <section id={id} className="py-24 gradient-services relative text-white">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-20 space-y-5">
                    <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm">What We Do</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
                        Our <span className="text-blue-500 glow-text">Services</span>
                    </h2>
                    <p className="text-blue-200/60 text-lg md:text-xl max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to elevate your business in the modern tech landscape.
                    </p>
                </AnimatedSection>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {services.map((service) => (
                        <motion.div key={service.title} variants={staggerItem} className="h-full">
                            <Card3D className="flex flex-col items-center text-center group h-full glass-card hover:bg-blue-900/20 transition-colors border-white/5">
                                <div className="w-16 h-16 bg-blue-900/40 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/10">
                                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                                <p className="text-blue-200/60 text-sm leading-relaxed flex-1">
                                    {service.description}
                                </p>
                                <Link to={`/services/${service.id}`} className="mt-8 flex items-center text-blue-400 text-sm font-semibold cursor-pointer group-hover:gap-2 transition-all">
                                    Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                </Link>
                            </Card3D>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
