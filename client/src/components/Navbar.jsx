import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
// ThemeToggle removed to enforce strict dark theme as per user request
// import ThemeToggle from './ThemeToggle'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/#services', label: 'Services' },
    { to: '/#contact', label: 'Contact' },
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Handle hash scrolling
    const scrollToSection = (id) => {
        setMenuOpen(false)
        const element = document.getElementById(id.replace('/#', ''))
        if (element) {
            const offset = 80 // Navbar height
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        } else if (location.pathname !== '/') {
            // Allow navigation to home then scroll (handled by useEffect in Home or native browser behavior)
        }
    }

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/20 backdrop-blur-sm shadow-lg border-b border-white/5' : 'bg-transparent border-b border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group transform transition-transform hover:scale-105">
                    <span className="text-2xl font-display font-bold tracking-tight">
                        <span className="text-white">Aarixa</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"> Innovix</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 font-medium">
                    {navLinks.map(({ to, label }) => {
                        const isHash = to.includes('#');
                        return isHash ? (
                            <a
                                key={to}
                                href={to}
                                onClick={(e) => {
                                    if (location.pathname === '/' && isHash) {
                                        e.preventDefault();
                                        scrollToSection(to);
                                    }
                                }}
                                className="text-white/70 hover:text-blue-400 transition-colors hover:scale-105 transform duration-200"
                            >
                                {label}
                            </a>
                        ) : (
                            <Link
                                key={to}
                                to={to}
                                className="text-white/70 hover:text-blue-400 transition-colors hover:scale-105 transform duration-200"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                {label}
                            </Link>
                        )
                    })}
                    <a
                        href="/#contact"
                        onClick={(e) => {
                            if (location.pathname === '/') {
                                e.preventDefault();
                                scrollToSection('/#contact');
                            }
                        }}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                    >
                        Get Started
                    </a>
                    {/* ThemeToggle removed */}
                </div>

                {/* Mobile Hamburger */}
                <div className="flex items-center gap-4 md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} className="p-2 text-white/80 hover:text-blue-400 transition-colors">
                        <span className="material-symbols-outlined text-3xl" aria-hidden="true">{menuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-black/60 shadow-2xl border-t border-white/10 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-4 space-y-4 flex flex-col">
                    {navLinks.map(({ to, label }) => {
                        const isHash = to.includes('#');
                        return isHash ? (
                            <a
                                key={to}
                                href={to}
                                onClick={(e) => {
                                    setMenuOpen(false);
                                    if (location.pathname === '/' && isHash) {
                                        e.preventDefault();
                                        scrollToSection(to);
                                    }
                                }}
                                className="text-lg font-medium text-white/80 hover:text-blue-400 transition-colors"
                            >
                                {label}
                            </a>
                        ) : (
                            <Link
                                key={to}
                                to={to}
                                onClick={() => {
                                    setMenuOpen(false);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="text-lg font-medium text-white/80 hover:text-blue-400 transition-colors"
                            >
                                {label}
                            </Link>
                        )
                    })}
                    <a
                        href="/#contact"
                        onClick={(e) => {
                            setMenuOpen(false);
                            if (location.pathname === '/') {
                                e.preventDefault();
                                scrollToSection('/#contact');
                            }
                        }}
                        className="text-center bg-blue-600 text-white py-3 rounded-xl font-bold mt-2 shadow-lg shadow-blue-500/20"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    )
}
