'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import FloatingShapes from '../components/FloatingShapes'
import Button3D from '../components/Button3D'

import { useState, useEffect } from 'react'

const coreServices = [
    {
        id: 1,
        icon: 'language',
        title: 'Website Development',
        tagline: 'High-Performance Web Architectures',
        provide: 'We design and build bespoke, responsive, and blazing-fast websites using modern frameworks like React and Next.js, ensuring institutional-grade stability and reach.',
        how: 'Leveraging Server-Side Rendering (SSR) and edge-optimized delivery pipelines to achieve perfect Lighthouse scores and zero-latency user experiences.',
        benefit: 'Increased conversion rates, superior SEO rankings, and a digital presence that feels as premium as your services.'
    },
    {
        id: 2,
        icon: 'phone_iphone',
        title: 'App Development',
        tagline: 'Precision-Engineered Mobile Solutions',
        provide: 'Cross-platform and native mobile applications that bridge the gap between complex functionality and intuitive UX, designed for both iOS and Android ecosystems.',
        how: 'Using unified codebases with high-performance native bridges to reduce development time while maintaining 60fps interaction standards.',
        benefit: 'Wider market reach, deeper customer engagement, and a scalable platform for your mobile-first users.'
    },
    {
        id: 3,
        icon: 'campaign',
        title: 'Outreach Service',
        tagline: 'Data-Driven Growth Engines',
        provide: 'Sophisticated marketing and outreach campaigns that utilize deep audience segmentation and automated engagement layers to drive consistent lead generation.',
        how: 'Integrating CRM triggers with personalized communication streams across email, LinkedIn, and social channels to build high-intent pipelines.',
        benefit: 'Higher ROI on marketing spend, more qualified leads, and significant time savings for your sales division.'
    },
    {
        id: 4,
        icon: 'smart_toy',
        title: 'Agentic AI & Automation',
        tagline: 'Autonomous Enterprise Intelligence',
        provide: 'Custom-tuned AI agents and automated workflows designed to replace high-volume manual operations with intelligent, self-correcting software patterns.',
        how: 'Utilizing advanced LLM orchestration and vector-based knowledge retrieval to enable software that "thinks" and executes complex business logic.',
        benefit: 'Dramatically reduced operational overhead, 24/7 task execution, and a future-proofed technical foundation.'
    }
]

export default function Services() {

    return (
        <div className="min-h-screen text-white selection:bg-blue-500/30 overflow-x-hidden">
            <Navbar />

            <main className="pt-24 md:pt-32 pb-24 relative">
                <FloatingShapes className="opacity-20 fixed inset-0 pointer-events-none -z-10" />
                <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:40px_40px] fixed pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 z-10 relative">
                    
                    {/* Header */}
                    <AnimatedSection className="text-center mb-20 md:mb-28 mt-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                            Core Offerings
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
                            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Growth</span>
                        </h1>
                        <p className="text-blue-200/60 max-w-2xl mx-auto text-lg md:text-xl font-light">
                            Discover how our specialized technological services can accelerate your operations and scale your revenue.
                        </p>
                    </AnimatedSection>

                    {/* Detailed Service Blocks */}
                    <div className="space-y-24 md:space-y-32 mb-24">
                        {coreServices.map((service, i) => (
                            <AnimatedSection key={service.id} className="relative">
                                {/* Connector Line for desktop between blocks */}
                                {i !== coreServices.length - 1 && (
                                    <div className="hidden md:block absolute top-[100%] left-[50px] w-px h-[100px] bg-gradient-to-b from-blue-500/30 to-transparent" />
                                )}

                                <div className="glass-card rounded-[2rem] p-8 md:p-12 lg:p-16 border border-white/5 bg-white/[0.02] hover:bg-white/[0.03] hover:border-blue-500/20 transition-all duration-500 flex flex-col lg:flex-row gap-12 group">
                                    
                                    {/* Left summary side */}
                                    <div className="lg:w-1/3 flex flex-col items-start relative z-10">
                                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-600/10 border border-blue-500/20 flex flex-shrink-0 items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-500 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
                                            <span className="material-symbols-outlined text-4xl text-blue-400">{service.icon}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h2>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-blue-300/70 mb-6 bg-blue-500/10 px-3 py-1 rounded inline-block border border-blue-500/10">
                                            {service.tagline}
                                        </div>
                                        
                                        <Button3D className="mt-auto hidden lg:inline-flex px-8 py-3 text-xs w-full justify-center">
                                            Request Consultation
                                        </Button3D>
                                    </div>

                                    {/* Right detailed side */}
                                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8 z-10 relative">
                                        {/* What we provide */}
                                        <div className="space-y-3 col-span-2">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                <h4 className="text-sm uppercase tracking-widest font-bold text-white/40">What We Provide</h4>
                                            </div>
                                            <p className="text-blue-100/70 font-light leading-relaxed text-lg">
                                                {service.provide}
                                            </p>
                                        </div>

                                        {/* How it works */}
                                        <div className="space-y-3 bg-black/20 p-6 rounded-2xl border border-white/5 text-sm">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="material-symbols-outlined text-lg text-blue-400">code_blocks</span>
                                                <h4 className="text-sm font-bold text-white uppercase tracking-wider">How We Do It</h4>
                                            </div>
                                            <p className="text-blue-100/60 leading-relaxed font-light">
                                                {service.how}
                                            </p>
                                        </div>

                                        {/* Benefits */}
                                        <div className="space-y-3 bg-blue-900/10 p-6 rounded-2xl border border-blue-500/10 text-sm">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="material-symbols-outlined text-lg text-emerald-400">trending_up</span>
                                                <h4 className="text-sm font-bold text-white uppercase tracking-wider">The Benefit</h4>
                                            </div>
                                            <p className="text-blue-100/60 leading-relaxed font-light">
                                                {service.benefit}
                                            </p>
                                        </div>
                                        
                                        <Button3D className="lg:hidden mt-4 px-8 py-3 w-full justify-center">
                                            Request Consultation
                                        </Button3D>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}
