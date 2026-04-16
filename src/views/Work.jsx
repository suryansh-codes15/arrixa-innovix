'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import FloatingShapes from '../components/FloatingShapes'
import Button3D from '../components/Button3D'

import { useState, useEffect } from 'react'

export default function Work() {
    const [portfolioItems, setPortfolioItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/crud/work')
            .then(res => res.json())
            .then(data => {
                const formatted = (data || []).map(item => ({
                    ...item,
                    technologies: item.technologiesRaw ? JSON.parse(item.technologiesRaw) : [],
                    colors: item.colorsRaw ? JSON.parse(item.colorsRaw) : {
                        bg: 'bg-emerald-500/10',
                        text: 'text-emerald-400',
                        border: 'border-emerald-500/20',
                        glow: 'shadow-[inset_0_0_30px_rgba(16,185,129,0.1)]'
                    }
                }))
                setPortfolioItems(formatted)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    const ongoingProjects = portfolioItems.filter(p => p.status === 'ONGOING')
    const completedProjects = portfolioItems.filter(p => p.status !== 'ONGOING')

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
                            Portfolio
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
                            Our Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Work</span>
                        </h1>
                        <p className="text-blue-200/60 max-w-2xl mx-auto text-lg md:text-xl font-light">
                            Explore the high-performance platforms, decentralized networks, and analytics engines we've engineered.
                        </p>
                    </AnimatedSection>

                    {/* Ongoing Projects Section */}
                    {ongoingProjects.length > 0 && (
                        <div className="mb-32">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-blue-400 mb-12 flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-blue-500/30"></span>
                                Ongoing Projects
                            </h2>
                            <div className="flex flex-col gap-12 md:gap-20">
                                {ongoingProjects.map((item, index) => (
                                    <ProjectCard key={item.id} item={item} index={index} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Completed Projects Section */}
                    <div>
                        {ongoingProjects.length > 0 && (
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-emerald-400 mb-12 flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-emerald-500/30"></span>
                                Completed Projects
                            </h2>
                        )}
                        <div className="flex flex-col gap-12 md:gap-20">
                            {completedProjects.map((item, index) => (
                                <ProjectCard key={item.id} item={item} index={index} />
                            ))}
                        </div>
                    </div>

                    <AnimatedSection delay={0.4} className="mt-24 text-center">
                        <Button3D className="px-10 py-5" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Start a Project With Us
                        </Button3D>
                    </AnimatedSection>
                </div>
            </main>

            <Footer />
        </div>
    )
}

function ProjectCard({ item, index }) {
    return (
        <AnimatedSection key={index} delay={index * 0.1}>
            <div className={`glass-card rounded-[2rem] border border-white/5 p-8 sm:p-10 md:p-12 relative overflow-hidden group hover:border-white/20 transition-all duration-500 ${item.colors.glow}`}>
                <div className={`absolute -right-20 -top-20 w-64 h-64 ${item.colors.bg} rounded-full blur-[100px] pointer-events-none group-hover:scale-150 transition-transform duration-700`} />
                
                <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                    
                    {/* Intro & Title */}
                    <div className="lg:w-1/3 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-12">
                        <div className="flex items-center justify-between w-full mb-8">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${item.colors.border} ${item.colors.bg} group-hover:scale-105 transition-transform duration-300`}>
                                <span className={`material-symbols-outlined text-3xl ${item.colors.text}`}>{item.icon}</span>
                            </div>
                            <span className={`text-[10px] px-2 py-0.5 rounded font-black uppercase tracking-widest border border-white/5 bg-white/5 ${item.status === 'ONGOING' ? 'text-blue-400' : 'text-emerald-400'}`}>
                                {item.status || 'COMPLETED'}
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">{item.title}</h2>
                        <p className={`text-sm tracking-widest uppercase font-bold ${item.colors.text} mb-auto`}>{item.tagline}</p>
                    </div>

                    {/* Problem, Solution & Tech */}
                    <div className="lg:w-2/3 flex flex-col gap-8">
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">remove_circle_outline</span> The Problem
                                </h3>
                                <p className="text-blue-100/70 font-light leading-relaxed">
                                    {item.problem}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">check_circle</span> The Solution
                                </h3>
                                <p className="text-blue-100/70 font-light leading-relaxed">
                                    {item.solution}
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5 mt-auto">
                            <h3 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {item.technologies.map(tech => (
                                    <span key={tech} className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/5 text-xs font-medium text-white/60">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    )
}
