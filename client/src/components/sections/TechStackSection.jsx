import { motion } from 'framer-motion'

const techStack = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'React Router', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
]

// Duplicate for seamless infinite scroll
const doubled = [...techStack, ...techStack]

export default function TechStackSection() {
    return (
        <section className="py-20 relative overflow-hidden border-y border-white/5 bg-black/40">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Powered By</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                    Our <span className="text-blue-400">Tech Stack</span>
                </h2>
                <p className="text-blue-100/50 mt-3 max-w-xl mx-auto">
                    We use cutting-edge technologies to build robust, scalable, and modern digital solutions.
                </p>
            </div>

            {/* Marquee */}
            <div className="relative overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                    {doubled.map((tech, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-blue-900/20 transition-all duration-300 group min-w-[100px]"
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                                style={{ filter: tech.name === 'Express' || tech.name === 'Next.js' ? 'invert(1)' : 'none' }}
                            />
                            <span className="text-xs font-semibold text-white/60 group-hover:text-white transition-colors whitespace-nowrap">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
