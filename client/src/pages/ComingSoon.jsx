import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import ThemeToggle from '../components/ThemeToggle'
import AnimatedSection from '../components/AnimatedSection'

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
}

/* === Three.js Scene Components === */
function OrbitingCube({ radius = 3, speed = 0.3, size = 0.6, yOffset = 0 }) {
    const meshRef = useRef()
    useFrame(({ clock }) => {
        if (!meshRef.current) return
        const t = clock.getElapsedTime() * speed
        meshRef.current.position.x = Math.cos(t) * radius
        meshRef.current.position.z = Math.sin(t) * radius
        meshRef.current.position.y = yOffset + Math.sin(t * 2) * 0.5
        meshRef.current.rotation.x = t * 0.8
        meshRef.current.rotation.y = t * 1.2
    })
    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[size, size, size]} />
            <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.4} />
        </mesh>
    )
}

function OrbitingOctahedron({ radius = 2.5, speed = 0.2, size = 0.5, yOffset = 0 }) {
    const meshRef = useRef()
    useFrame(({ clock }) => {
        if (!meshRef.current) return
        const t = clock.getElapsedTime() * speed
        meshRef.current.position.x = Math.sin(t) * radius
        meshRef.current.position.z = Math.cos(t) * radius
        meshRef.current.position.y = yOffset + Math.cos(t * 1.5) * 0.8
        meshRef.current.rotation.x = t * 0.5
        meshRef.current.rotation.z = t * 0.7
    })
    return (
        <mesh ref={meshRef}>
            <octahedronGeometry args={[size]} />
            <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.35} />
        </mesh>
    )
}

function OrbitingTorus({ radius = 4, speed = 0.15, size = 0.6, yOffset = 0 }) {
    const meshRef = useRef()
    useFrame(({ clock }) => {
        if (!meshRef.current) return
        const t = clock.getElapsedTime() * speed
        meshRef.current.position.x = Math.cos(t + 1) * radius
        meshRef.current.position.z = Math.sin(t + 1) * radius
        meshRef.current.position.y = yOffset
        meshRef.current.rotation.x = t * 0.6
        meshRef.current.rotation.y = t * 0.4
    })
    return (
        <mesh ref={meshRef}>
            <torusGeometry args={[size, size * 0.3, 8, 16]} />
            <meshBasicMaterial color="#2563eb" wireframe transparent opacity={0.3} />
        </mesh>
    )
}

function CenterSphere() {
    const meshRef = useRef()
    useFrame(({ clock }) => {
        if (!meshRef.current) return
        meshRef.current.rotation.y = clock.getElapsedTime() * 0.1
        meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.2
    })
    return (
        <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.5}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1.2, 1]} />
                <meshBasicMaterial color="#1e40af" wireframe transparent opacity={0.15} />
            </mesh>
        </Float>
    )
}

function ComingSoonScene() {
    return (
        <>
            <CenterSphere />
            <OrbitingCube radius={3} speed={0.3} yOffset={0.5} />
            <OrbitingCube radius={3.5} speed={-0.25} size={0.4} yOffset={-1} />
            <OrbitingOctahedron radius={2.5} speed={0.35} yOffset={0} />
            <OrbitingOctahedron radius={4} speed={-0.2} size={0.3} yOffset={1.5} />
            <OrbitingTorus radius={4.5} speed={0.18} yOffset={-0.5} />
            <OrbitingTorus radius={2} speed={-0.3} size={0.4} yOffset={0.8} />
        </>
    )
}

/* === Social Icons === */
const socials = [
    {
        label: 'Facebook',
        path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
    },
    {
        label: 'Instagram',
        path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
    },
    {
        label: 'LinkedIn',
        path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    },
]

export default function ComingSoon() {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300"
        >
            {/* Dark BG */}
            <div className="absolute inset-0 z-0 hidden dark:block radial-gradient-bg opacity-80" />

            {/* Ambient Blurs */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Three.js Scene */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                <Canvas
                    camera={{ position: [0, 0, 8], fov: 50 }}
                    dpr={[1, 1.5]}
                    style={{ background: 'transparent' }}
                    gl={{ alpha: true, antialias: true }}
                >
                    <ComingSoonScene />
                </Canvas>
            </div>

            {/* Content */}
            <main className="relative z-10 w-full max-w-4xl px-6 text-center">
                {/* Title */}
                <AnimatedSection className="mb-12">
                    <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4 drop-shadow-2xl">
                        Aarixa <span className="text-primary">Innovix</span>
                    </h1>
                    <p className="text-lg md:text-xl font-light text-slate-600 dark:text-slate-300 tracking-widest uppercase">
                        Innovating Tomorrow's Technology Today
                    </p>
                </AnimatedSection>

                {/* Badge */}
                <AnimatedSection delay={0.2} className="mb-12">
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm mb-8 backdrop-blur-md">
                        <span className="relative flex h-3 w-3 mr-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                        </span>
                        WE ARE BUILDING SOMETHING AMAZING
                    </div>
                    <h2 className="text-3xl md:text-5xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                        Website is Coming Soon
                    </h2>
                    <div className="h-1.5 w-32 bg-primary mx-auto rounded-full" style={{ boxShadow: '0 0 15px rgba(59,130,246,0.5)' }} />
                </AnimatedSection>

                {/* Services */}
                <AnimatedSection delay={0.4} className="mb-16">
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                        <span className="flex items-center"><span className="material-symbols-outlined text-sm mr-2 text-primary">code</span>Software Development</span>
                        <span className="flex items-center"><span className="material-symbols-outlined text-sm mr-2 text-primary">brush</span>Website Designing</span>
                        <span className="flex items-center"><span className="material-symbols-outlined text-sm mr-2 text-primary">campaign</span>Social Media Marketing</span>
                        <span className="flex items-center"><span className="material-symbols-outlined text-sm mr-2 text-primary">smartphone</span>Mobile App Development</span>
                    </div>
                </AnimatedSection>

                {/* Contact & Social */}
                <AnimatedSection delay={0.6}>
                    <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2 mb-6">
                        <span className="material-symbols-outlined text-primary text-xl">mail</span>
                        Reach out:
                        <a className="text-slate-900 dark:text-white font-semibold hover:text-primary dark:hover:text-primary transition-all underline decoration-primary/30 underline-offset-4" href="mailto:info@aarixainnovix.com">
                            info@aarixainnovix.com
                        </a>
                    </p>
                    <div className="flex justify-center gap-8 mt-10">
                        {socials.map((s) => (
                            <motion.a
                                key={s.label}
                                className="text-slate-400 hover:text-primary transition-all duration-300"
                                href="#"
                                whileHover={{ y: -4, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
                            </motion.a>
                        ))}
                    </div>
                </AnimatedSection>
            </main>

            {/* Footer */}
            <footer className="absolute bottom-8 z-10 text-[10px] text-slate-500 tracking-[0.2em] uppercase">
                &copy; 2024 Aarixa Innovix. Building the future of digital experiences.
            </footer>

            {/* Theme Toggle */}
            <ThemeToggle className="fixed bottom-6 right-6 z-50" />
        </motion.div>
    )
}
