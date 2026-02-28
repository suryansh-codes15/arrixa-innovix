import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Card3D({ children, className = '', glowColor = 'rgba(37, 99, 235, 0.15)' }) {
    const cardRef = useRef(null)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

    function handleMouseMove(e) {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotX = ((y - centerY) / centerY) * -12
        const rotY = ((x - centerX) / centerX) * 12
        setRotateX(rotX)
        setRotateY(rotY)
        setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 })
    }

    function handleMouseLeave() {
        setRotateX(0)
        setRotateY(0)
        setGlowPos({ x: 50, y: 50 })
    }

    return (
        <div className="card-3d" ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <motion.div
                className={`card-3d-inner glass rounded-2xl p-8 relative overflow-hidden ${className}`}
                animate={{ rotateX, rotateY }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                whileHover={{ scale: 1.02 }}
            >
                {/* Glow follow effect */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 60%)`,
                        opacity: rotateX !== 0 || rotateY !== 0 ? 0.6 : 0,
                        transition: 'opacity 0.3s',
                    }}
                />
                <div className="relative z-10">{children}</div>
            </motion.div>
        </div>
    )
}
