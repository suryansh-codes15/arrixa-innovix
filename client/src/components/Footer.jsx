import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-sm">rocket_launch</span>
                            </div>
                            <span className="font-display font-bold text-xl tracking-tight">Aarixa Innovix</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
                            Innovating tomorrow's technology today. Providing high-end digital solutions for growing enterprises worldwide.
                        </p>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="font-bold mb-6">Explore</h4>
                        <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                            <li><Link className="hover:text-primary transition-colors" to="/services">Services</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/contact">Contact</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/coming-soon">Coming Soon</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                            <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        &copy; 2024 Aarixa Innovix. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined">share</span>
                        </a>
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined">language</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
