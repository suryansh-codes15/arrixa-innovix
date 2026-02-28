import { motion } from 'framer-motion'

const techStack = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
]

// Deduplicated + duplicated for seamless infinite scroll
const doubled = [...techStack, ...techStack]

export default function TechStackSection() {
    return (
        <section
            className="py-16 sm:py-20 relative overflow-hidden border-y border-white/5 bg-white/[0.02] backdrop-blur-sm"
            aria-label="Technologies we use"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-12 text-center">
                <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Powered By</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
                    Our <span className="text-blue-400">Tech Stack</span>
                </h2>
                <p className="text-blue-100/50 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                    Production-grade technologies that power every product we build.
                </p>
            </div>

            <div className="relative overflow-hidden" role="marquee" aria-live="off">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 h-full w-16 sm:w-24 z-10 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" aria-hidden="true" />
                <div className="absolute right-0 top-0 h-full w-16 sm:w-24 z-10 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" aria-hidden="true" />

                <motion.div
                    className="flex gap-4 sm:gap-8 w-max"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                    aria-hidden="true"
                >
                    {doubled.map((tech, i) => (
                        <div
                            key={`${tech.name}-${i}`}
                            className="flex flex-col items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-blue-900/20 transition-all duration-300 group min-w-[80px] sm:min-w-[100px]"
                        >
                            <img
                                src={tech.icon}
                                alt={`${tech.name} logo`}
                                width={40}
                                height={40}
                                loading="lazy"
                                decoding="async"
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                                style={{ filter: tech.invert ? 'invert(1)' : 'none' }}
                            />
                            <span className="text-[10px] sm:text-xs font-semibold text-white/60 group-hover:text-white transition-colors whitespace-nowrap">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Screen-reader accessible static list */}
                <ul className="sr-only">
                    {techStack.map(tech => (
                        <li key={tech.name}>{tech.name}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
