'use client'

import { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, errorId: null }
    }

    static getDerivedStateFromError() {
        return { hasError: true, errorId: `ERR-${Date.now()}` }
    }

    componentDidCatch() {
        // Errors silently captured — no console output in production
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-black px-6 text-center">
                    <div className="max-w-md">
                        <div className="w-16 h-16 rounded-2xl bg-blue-900/30 flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-3xl text-blue-400">error</span>
                        </div>
                        <h1 className="text-2xl font-display font-bold text-white mb-3">Something went wrong</h1>
                        <p className="text-blue-100/50 text-sm mb-8 leading-relaxed">
                            An unexpected error occurred. Please refresh the page. If the issue persists, contact{' '}
                            <a href="mailto:info@aarixainnovix.com" className="text-blue-400 hover:text-blue-300">
                                info@aarixainnovix.com
                            </a>
                        </p>
                        <p className="text-blue-100/20 text-xs mb-6 font-mono">{this.state.errorId}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all text-sm"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            )
        }
        return this.props.children
    }
}
