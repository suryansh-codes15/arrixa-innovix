import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import AnimatedSection from '../AnimatedSection'
import { Link } from 'react-router-dom'

const serviceGroups = [
    {
        name: 'Core Solutions',
        services: [
            {
                id: 'software-development',
                icon: 'terminal',
                title: 'Software Development',
                description: 'Custom software solutions tailored to streamline your business operations and drive efficiency.',
            },
            {
                id: 'websites',
                icon: 'web',
                title: 'Websites & E-commerce',
                description: 'Landing Pages, E-commerce, E-Learning and custom web solutions for every business need.',
            },
            {
                id: 'mobile-app-development',
                icon: 'phone_iphone',
                title: 'Mobile App Development',
                description: 'Native and cross-platform mobile apps for iOS and Android that engage users and build loyalty.',
            }
        ]
    },
    {
        name: 'Industry Products',
        services: [
            {
                id: 'hrms-product',
                icon: 'groups',
                title: 'HRMS Product',
                description: 'Comprehensive Human Resource Management Systems to manage your workforce efficiently.',
            },
            {
                id: 'medical-software',
                icon: 'medical_services',
                title: 'Medical Softwares',
                description: 'Advanced healthcare solutions including Dicom & Pacs for medical imaging and diagnostics.',
            },
            {
                id: 'inventory-management',
                icon: 'inventory_2',
                title: 'Inventory Management',
                description: 'Real-time stock tracking and warehouse management systems to optimize your supply chain.',
            },
            {
                id: 'gym-management',
                icon: 'fitness_center',
                title: 'Gym Management',
                description: 'Dedicated software for gyms and fitness centers to handle memberships and schedules.',
            }
        ]
    },
    {
        name: 'Business Tools & Future Tech',
        services: [
            {
                id: 'cloud-billing',
                icon: 'receipt_long',
                title: 'Cloud Billing Software',
                description: 'Secure and automated online billing and invoicing systems for streamlined finance.',
            },
            {
                id: 'pos-software',
                icon: 'point_of_sale',
                title: 'POS Software',
                description: 'Efficient Point of Sale systems for retail and hospitality with integrated analytics.',
            },
            {
                id: 'multi-vendor',
                icon: 'store',
                title: 'Multi Vendor Softwares',
                description: 'Robust marketplace platforms supporting multiple sellers and complex transactions.',
            },
            {
                id: 'ai-saas',
                icon: 'psychology',
                title: 'AI SaaS & Products',
                description: 'Cutting-edge AI-driven solutions and products to automate and intelligently scale your business.',
            }
        ]
    }
]

function ServiceCard({ service, index }) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Tilt Logic
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { damping: 15, stiffness: 100 })
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { damping: 15, stiffness: 100 })

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
        x.set((clientX - left) / width - 0.5)
        y.set((clientY - top) / height - 0.5)
    }

    function handleMouseLeave() {
        x.set(0)
        y.set(0)
    }

    return (
        <AnimatedSection delay={index * 0.05} className="h-full perspective-1000">
            <Link to={`/services/${service.id}`} className="block h-full group" style={{ perspective: 1000 }}>
                <motion.div
                    className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden transition-colors hover:border-white/20"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d"
                    }}
                >
                    <motion.div
                        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                        style={{
                            background: useMotionTemplate`
                                radial-gradient(
                                    400px circle at ${mouseX}px ${mouseY}px,
                                    rgba(59, 130, 246, 0.1),
                                    transparent 80%
                                )
                            `,
                            transform: "translateZ(0px)"
                        }}
                    />

                    <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                        <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                        <p className="text-blue-100/40 text-[11px] leading-relaxed group-hover:text-white/70 transition-colors">
                            {service.description}
                        </p>
                    </div>
                </motion.div>
            </Link>
        </AnimatedSection>
    )
}

export default function ServicesSection({ id }) {
    return (
        <section id={id} className="py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <AnimatedSection className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6 text-center mx-auto">
                        Excellence in Engineering
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Our Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Offerings</span>
                    </h2>
                    <p className="text-blue-100/50 max-w-2xl mx-auto text-lg font-light">
                        From custom engineering to industry-leading products, we provide the tools to scale your vision.
                    </p>
                </AnimatedSection>

                <div className="space-y-20">
                    {serviceGroups.map((group, gIdx) => (
                        <div key={group.name} className="space-y-8">
                            <div className="flex items-center gap-4">
                                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500/80">{group.name}</h3>
                                <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent" />
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {group.services.map((service, i) => (
                                    <ServiceCard key={service.id} service={service} index={i + gIdx * 4} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
