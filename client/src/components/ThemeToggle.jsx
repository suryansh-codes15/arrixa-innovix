import { useState, useEffect } from 'react'

export default function ThemeToggle({ className = '' }) {
    const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [dark])

    return (
        <button
            onClick={() => setDark(!dark)}
            className={`p-2.5 rounded-full bg-white/10 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-all active:scale-95 ${className}`}
            aria-label="Toggle theme"
        >
            {dark ? (
                <span className="material-symbols-outlined text-yellow-400">light_mode</span>
            ) : (
                <span className="material-symbols-outlined text-blue-900">dark_mode</span>
            )}
        </button>
    )
}
