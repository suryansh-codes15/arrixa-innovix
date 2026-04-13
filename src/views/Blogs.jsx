'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import FloatingShapes from '../components/FloatingShapes'

import { useState, useEffect } from 'react'

export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/crud/blog')
            .then(res => res.json())
            .then(data => { setBlogs(data || []); setLoading(false) })
            .catch(() => setLoading(false))
    }, [])
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
                            Insights & Media
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Blogs</span>
                        </h1>
                        <p className="text-blue-200/60 max-w-2xl mx-auto text-lg md:text-xl font-light">
                            Explore our latest multi-format insights. Everything from short-form videos and deep-dive articles to downloadable PDFs.
                        </p>
                    </AnimatedSection>

                    {/* Blogs Grid (9:16 layout) */}
                    <div className="flex flex-wrap justify-center gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {blogs.map((blog, i) => (
                            <AnimatedSection key={blog.id} delay={i * 0.1} className="w-full max-w-[320px]">
                                <div className="group relative w-full aspect-[9/16] rounded-[2.5rem] p-8 flex flex-col justify-between glass-card border flex-shrink-0 border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-700 overflow-hidden cursor-pointer cursor-scale">
                                    
                                    {/* Background Image Setup */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-0 transition-opacity duration-500 group-hover:opacity-80" />
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-transform duration-[2s] group-hover:scale-110 mix-blend-overlay"
                                        style={{ backgroundImage: `url(${blog.image})` }}
                                    />
                                    
                                    {/* Top Format Icon */}
                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 z-10 text-white group-hover:bg-blue-600 transition-colors shadow-xl">
                                        <span className="material-symbols-outlined">{blog.icon}</span>
                                    </div>
                                    
                                    {/* Bottom Content Area */}
                                    <div className="z-10 relative">
                                        <span className="inline-block px-3 py-1 rounded bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-4 border border-white/10">
                                            {blog.format}
                                        </span>
                                        <h2 className="text-2xl font-bold text-white leading-tight mb-3 group-hover:text-blue-300 transition-colors">
                                            {blog.title}
                                        </h2>
                                        <p className="text-white/70 text-sm font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500 absolute bottom-full">
                                            {blog.description}
                                        </p>
                                        
                                        <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-widest pt-5 border-t border-white/20 group-hover:border-blue-500/50 transition-colors">
                                            Open {blog.format}
                                            <span className="material-symbols-outlined text-[14px] group-hover:translate-x-2 transition-transform duration-300">
                                                east
                                            </span>
                                        </div>
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
