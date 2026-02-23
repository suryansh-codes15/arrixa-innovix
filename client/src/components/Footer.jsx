import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-white/[0.02] backdrop-blur-sm border-t border-white/10 pt-16 pb-8 relative z-10 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 group">
                            <span className="text-2xl font-display font-bold tracking-tight">
                                <span className="text-white">Aarixa</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Innovix</span>
                            </span>
                        </div>
                        <p className="text-blue-100/60 leading-relaxed max-w-xs">
                            Innovating tomorrow's technology today. Providing high-end digital solutions for growing enterprises worldwide.
                        </p>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="font-bold mb-6 text-white">Explore</h4>
                        <ul className="space-y-4 text-blue-100/60">
                            <li><a href="#services" className="hover:text-blue-400 transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}>Services</a></li>
                            <li><a href="#about" className="hover:text-blue-400 transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}>About Us</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Contact</a></li>
                            <li><Link className="hover:text-blue-400 transition-colors" to="/coming-soon">Coming Soon</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold mb-6 text-white">Legal</h4>
                        <ul className="space-y-4 text-blue-100/60">
                            <li><a className="hover:text-blue-400 transition-colors" href="#">Privacy Policy</a></li>
                            <li><a className="hover:text-blue-400 transition-colors" href="#">Terms of Service</a></li>
                            <li><a className="hover:text-blue-400 transition-colors" href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-blue-100/40 text-sm">
                        &copy; 2026 Aarixa Innovix. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a className="text-blue-100/40 hover:text-blue-400 transition-colors" href="#" aria-label="Share this page">
                            <span className="material-symbols-outlined" aria-hidden="true">share</span>
                        </a>
                        <a className="text-blue-100/40 hover:text-blue-400 transition-colors" href="#" aria-label="Change language">
                            <span className="material-symbols-outlined" aria-hidden="true">language</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
