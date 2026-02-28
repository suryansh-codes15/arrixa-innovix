'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }) {
    const shouldReduceMotion = useReducedMotion()

    const variants = {
        hidden: shouldReduceMotion ? { opacity: 0 } : {
            opacity: 0,
            y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
            x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
        },
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={variants}
            transition={
                shouldReduceMotion
                    ? { duration: 0.2, delay: 0 }
                    : { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }
            }
            className={className}
        >
            {children}
        </motion.div>
    )
}
