import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function WireframeBox({ position, size = 1, speed = 0.3, color = '#2563eb' }) {
    const meshRef = useRef()
    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * speed * 0.5
            meshRef.current.rotation.y += delta * speed
        }
    })
    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
            <mesh ref={meshRef} position={position}>
                <boxGeometry args={[size, size, size]} />
                <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
            </mesh>
        </Float>
    )
}

function WireframeSphere({ position, size = 0.8, speed = 0.2, color = '#3b82f6' }) {
    const meshRef = useRef()
    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * speed
            meshRef.current.rotation.z += delta * speed * 0.5
        }
    })
    return (
        <Float speed={1} rotationIntensity={0.2} floatIntensity={2}>
            <mesh ref={meshRef} position={position}>
                <icosahedronGeometry args={[size, 0]} />
                <meshBasicMaterial color={color} wireframe transparent opacity={0.25} />
            </mesh>
        </Float>
    )
}

function WireframeTorus({ position, size = 0.7, speed = 0.15, color = '#60a5fa' }) {
    const meshRef = useRef()
    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * speed
            meshRef.current.rotation.y += delta * speed * 0.7
        }
    })
    return (
        <Float speed={0.8} rotationIntensity={0.4} floatIntensity={1}>
            <mesh ref={meshRef} position={position}>
                <torusGeometry args={[size, size * 0.3, 6, 12]} />
                <meshBasicMaterial color={color} wireframe transparent opacity={0.2} />
            </mesh>
        </Float>
    )
}

function Particles({ count = 30 }) { // Reduced count
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10
        }
        return pos
    }, [count])

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                    count={count}
                />
            </bufferGeometry>
            <pointsMaterial size={0.04} color="#60a5fa" transparent opacity={0.4} sizeAttenuation />
        </points>
    )
}

function Scene() {
    return (
        <>
            <WireframeBox position={[-4, 2, -3]} size={1.2} speed={0.3} />
            <WireframeBox position={[4.5, -1.5, -4]} size={0.8} speed={0.4} color="#60a5fa" />
            <WireframeSphere position={[3, 2.5, -2]} size={0.9} speed={0.2} />
            <WireframeSphere position={[-3.5, -2, -3]} size={0.6} speed={0.3} color="#2563eb" />
            <WireframeTorus position={[-1, -3, -5]} size={0.9} />
            <WireframeTorus position={[2, 3.5, -4]} size={0.5} color="#3b82f6" />
            <WireframeBox position={[0, -4, -6]} size={1.5} speed={0.15} color="#1e40af" />
            <Particles count={30} />
        </>
    )
}

export default function FloatingShapes({ className = '' }) {
    return (
        <div className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                dpr={[1, 1.5]}
                performance={{ min: 0.5 }}
                style={{ background: 'transparent' }}
                gl={{ alpha: true, antialias: false }} // Disable AA for performance on wireframes
            >
                <Scene />
            </Canvas>
        </div>
    )
}
