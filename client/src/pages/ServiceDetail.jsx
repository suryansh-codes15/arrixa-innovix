import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button3D from '../components/Button3D'
import FloatingShapes from '../components/FloatingShapes'
import AnimatedSection from '../components/AnimatedSection'

const serviceData = {
    'software-development': {
        title: 'Software Development',
        icon: 'terminal',
        description: 'Custom-built enterprise solutions designed for scalability, security, and peak performance.',
        details: 'We build robust software solutions tailored to your specific business needs. From backend infrastructure to frontend interfaces, our full-stack development team ensures your software is scalable, secure, and built to last.',
        features: ['Custom Enterprise Software', 'API Development & Integration', 'Legacy System Modernization', 'Cloud-Native Solutions']
    },
    'website-designing': {
        title: 'Website Designing',
        icon: 'web',
        description: 'Stunning, responsive designs that provide immersive user experiences.',
        details: 'Your website is your digital storefront. We create visually stunning, highly responsive, and user-friendly websites that captivate your audience and drive conversions.',
        features: ['UI/UX Design', 'Responsive Web Development', 'E-commerce Solutions', 'Landing Page Optimization']
    },
    'social-media-marketing': {
        title: 'Social Media Marketing',
        icon: 'campaign',
        description: 'Strategic campaigns designed to amplify your brand voice.',
        details: 'Maximize your brand reach and engagement with our data-driven social media marketing strategies. We create compelling content and manage your presence across all major platforms.',
        features: ['Content Strategy & Creation', 'Social Media Management', 'Paid Advertising Campaigns', 'Analytics & Reporting']
    },
    'mobile-app-development': {
        title: 'Mobile App Development',
        icon: 'phone_iphone',
        description: 'High-performance native and cross-platform apps.',
        details: 'Put your business in the pockets of your customers with our cutting-edge mobile app development services. We build native and cross-platform apps that offer seamless performance.',
        features: ['iOS & Android App Development', 'Cross-Platform Solutions (React Native/Flutter)', 'App UI/UX Design', 'Maintenance & Support']
    },
    'api-development': {
        title: 'API Development',
        icon: 'api',
        description: 'Robust, secure, and scalable REST & GraphQL APIs.',
        details: 'We design and build powerful APIs that serve as the backbone of your digital ecosystem. From RESTful services to GraphQL endpoints, our APIs are secure, well-documented, and built for scale — enabling seamless integrations between your apps, third-party services, and platforms.',
        features: ['REST & GraphQL API Design', 'Third-Party API Integration', 'API Security & Authentication', 'Documentation & Testing']
    }
}

export default function ServiceDetail() {
    const { id } = useParams()
    const service = serviceData[id]

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/" className="text-blue-500 hover:underline">Go Back Home</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen w-full gradient-services bg-black text-white overflow-x-hidden selection:bg-blue-500/30">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent" />
                    <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/#services" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors">
                        <span className="material-symbols-outlined mr-2">arrow_back</span>
                        Back to Services
                    </Link>

                    <AnimatedSection className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-20 h-20 bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/10 shrink-0">
                            <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">{service.title}</h1>
                            <p className="text-xl text-blue-100/80 max-w-3xl leading-relaxed">{service.details}</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-10 text-white">Key Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.features.map((feature, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="p-6 rounded-xl bg-black/40 border border-white/10 hover:border-blue-500/50 transition-colors h-full">
                                    <span className="material-symbols-outlined text-blue-500 mb-4">check_circle</span>
                                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to start your {service.title} project?</h2>
                    <Button3D href="/#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 text-lg">
                        Contact Us Now
                    </Button3D>
                </div>
            </section>

            <Footer />
        </div>
    )
}
