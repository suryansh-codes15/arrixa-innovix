import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-white/[0.02] backdrop-blur-sm border-t border-white/10 pt-16 pb-8 relative z-10 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 group">
                            <span className="text-xl sm:text-2xl font-display font-bold tracking-tight">
                                <span className="text-white">Aarixa</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"> Innovix</span>
                            </span>
                        </div>
                        <p className="text-blue-100/60 leading-relaxed max-w-xs">
                            Building intelligent, data-driven mutual fund planning solutions for disciplined, long-term investors.
                        </p>
                        <p className="text-blue-100/40 text-xs leading-relaxed max-w-xs">
                            Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-bold mb-6 text-white">Product</h4>
                        <ul className="space-y-4 text-blue-100/60">
                            <li>
                                <a href="#product" className="hover:text-blue-400 transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' }) }}>
                                    Mutual Fund Booster
                                </a>
                            </li>
                            <li>
                                <a href="#how-it-works" className="hover:text-blue-400 transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }) }}>
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <Link className="hover:text-blue-400 transition-colors" to="/certification">
                                    Certification
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-blue-400 transition-colors" to="/about">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold mb-6 text-white">Legal</h4>
                        <ul className="space-y-4 text-blue-100/60">
                            <li><Link className="hover:text-blue-400 transition-colors" to="/privacy">Privacy Policy</Link></li>
                            <li><Link className="hover:text-blue-400 transition-colors" to="/terms">Terms of Service</Link></li>
                            <li><Link className="hover:text-blue-400 transition-colors" to="/refund">Refund Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-6 text-white">Contact</h4>
                        <ul className="space-y-4 text-blue-100/60 text-sm">
                            <li>📧 info@aarixainnovix.com</li>
                            <li>📍 Unit No. 1116, Tower B4, Spaze ITech Park, Sector 49, Gurugram, Haryana 122018</li>
                            <li>🕐 Mon–Sat, 9:30 AM – 6:00 PM IST</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-blue-100/40 text-sm">
                        &copy; {new Date().getFullYear()} Aarixa Innovix Pvt. Ltd. All rights reserved.
                    </p>
                    <p className="text-blue-100/30 text-xs text-center">
                        Past performance is not indicative of future results.
                    </p>
                </div>
            </div>
        </footer>
    )
}
