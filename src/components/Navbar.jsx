'use client'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Button3D from './Button3D'

const navLinks = [
    { to: '/', label: 'Home', id: 'home' },
    { to: '/about', label: 'About', id: 'about' },
    { to: '/certification', label: 'Certification', id: 'certification' },
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        // Intersection Observer for ScrollSpy
        const options = { threshold: 0.5, rootMargin: '-80px 0px -40% 0px' }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, options)

        const sections = ['home', 'product', 'how-it-works', 'contact']
        sections.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            observer.disconnect()
        }
    }, [])

    const scrollToSection = (id) => {
        setMenuOpen(false)
        const element = document.getElementById(id.replace('/#', ''))
        if (element) {
            const offset = 80
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        } else if (location.pathname !== '/') {
            // Allow navigation to home then scroll
        }
    }

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/20 backdrop-blur-sm shadow-lg border-b border-white/5' : 'bg-transparent border-b border-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    className="flex items-center gap-2 group transform transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg relative z-[60]"
                    aria-label="Aarixa Innovix — Go to homepage"
                >
                    <span className="text-xl sm:text-2xl font-display font-bold tracking-tight">
                        <span className="text-white">Aarixa</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"> Innovix</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6 font-medium">
                    {navLinks.map(({ to, label, id }) => {
                        const isHash = to.includes('#')
                        const isActive = activeSection === id || (location.pathname === to && !isHash)

                        return isHash ? (
                            <a
                                key={to}
                                href={to}
                                onClick={(e) => {
                                    if (location.pathname === '/' && isHash) {
                                        e.preventDefault()
                                        scrollToSection(to)
                                    }
                                }}
                                className={`relative py-2 text-sm transition-all duration-300 ${isActive ? 'text-blue-400' : 'text-white/60 hover:text-white'}`}
                            >
                                {label}
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        ) : (
                            <Link
                                key={to}
                                to={to}
                                className={`relative py-2 text-sm transition-all duration-300 ${isActive ? 'text-blue-400' : 'text-white/60 hover:text-white'}`}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                {label}
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        )
                    })}
                    <div className="w-px h-6 bg-white/10 mx-2" />
                    <Button3D
                        href="/#contact"
                        onClick={(e) => {
                            if (location.pathname === '/') {
                                e.preventDefault()
                                scrollToSection('/#contact')
                            }
                        }}
                        className="px-6 py-2.5 text-xs"
                    >
                        Start Planning
                    </Button3D>
                </div>

                {/* Mobile Hamburger */}
                <div className="flex items-center gap-4 md:hidden relative z-[60]">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        className="p-2 text-white/80 hover:text-blue-400 transition-colors bg-white/5 rounded-lg border border-white/10"
                    >
                        <span className="material-symbols-outlined text-2xl sm:text-3xl flex items-center justify-center transition-transform duration-300 group-active:scale-95">
                            {menuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-40"
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="md:hidden fixed top-0 right-0 h-screen w-[280px] sm:w-[320px] bg-[#0a0a16] border-l border-white/10 z-50 shadow-2xl flex flex-col pt-24 pb-12 px-6"
                        >
                            <div className="flex flex-col space-y-2">
                                {navLinks.map(({ to, label }) => {
                                    const isHash = to.includes('#')
                                    const LinkTag = isHash ? 'a' : Link
                                    const props = isHash
                                        ? {
                                            href: to,
                                            onClick: (e) => {
                                                setMenuOpen(false)
                                                if (location.pathname === '/' && isHash) {
                                                    e.preventDefault()
                                                    scrollToSection(to)
                                                }
                                            }
                                        }
                                        : {
                                            to,
                                            onClick: () => {
                                                setMenuOpen(false)
                                                window.scrollTo({ top: 0, behavior: 'smooth' })
                                            }
                                        }

                                    return (
                                        <LinkTag
                                            key={to}
                                            {...props}
                                            className="text-lg font-display font-medium text-white/90 hover:text-blue-400 transition-colors py-4 px-4 rounded-xl hover:bg-white/5 flex items-center justify-between group"
                                        >
                                            {label}
                                            <span className="material-symbols-outlined text-blue-500/0 group-hover:text-blue-500 transition-all transform translate-x-4 group-hover:translate-x-0">
                                                arrow_forward
                                            </span>
                                        </LinkTag>
                                    )
                                })}
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5">
                                <Button3D
                                    href="/#contact"
                                    onClick={(e) => {
                                        setMenuOpen(false)
                                        if (location.pathname === '/') {
                                            e.preventDefault()
                                            scrollToSection('/#contact')
                                        }
                                    }}
                                    className="w-full py-4 text-base"
                                >
                                    Start Planning
                                </Button3D>
                            </div>

                            <div className="mt-auto text-center opacity-30 text-[10px] uppercase tracking-widest font-bold">
                                Aarixa Innovix © 2026
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    )
}
