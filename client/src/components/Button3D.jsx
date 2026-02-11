import { motion } from 'framer-motion'

export default function Button3D({ children, className = '', href, onClick, type = 'button' }) {
    const baseClasses = `btn-3d inline-flex items-center justify-center gap-2 bg-primary text-white font-bold rounded-xl transition-all ${className}`

    const motionProps = {
        whileHover: { y: -2 },
        whileTap: { y: 4, scale: 0.98 },
        transition: { type: 'spring', stiffness: 400, damping: 25 },
    }

    if (href) {
        return (
            <motion.a href={href} className={baseClasses} {...motionProps}>
                {children}
            </motion.a>
        )
    }

    return (
        <motion.button type={type} onClick={onClick} className={baseClasses} {...motionProps}>
            {children}
        </motion.button>
    )
}
