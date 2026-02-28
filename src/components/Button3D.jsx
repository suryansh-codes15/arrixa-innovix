'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function Button3D({
    children,
    className = '',
    href,
    onClick,
    type = 'button',
    disabled = false,
    'aria-label': ariaLabel,
}) {
    const shouldReduceMotion = useReducedMotion()

    const baseClasses = [
        'btn-3d inline-flex items-center justify-center gap-2',
        'bg-primary text-white font-bold rounded-xl transition-all',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        className,
    ].join(' ')

    const motionProps = shouldReduceMotion ? {} : {
        whileHover: { scale: disabled ? 1 : 1.04, boxShadow: '0px 10px 30px rgba(37, 99, 235, 0.4)' },
        whileTap: { scale: disabled ? 1 : 0.96, boxShadow: '0px 5px 15px rgba(37, 99, 235, 0.3)' },
        transition: { type: 'spring', stiffness: 400, damping: 25 },
    }

    if (href) {
        return (
            <motion.a
                href={href}
                className={baseClasses}
                aria-label={ariaLabel}
                {...motionProps}
            >
                {children}
            </motion.a>
        )
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={baseClasses}
            disabled={disabled}
            aria-disabled={disabled}
            aria-label={ariaLabel}
            {...motionProps}
        >
            {children}
        </motion.button>
    )
}
