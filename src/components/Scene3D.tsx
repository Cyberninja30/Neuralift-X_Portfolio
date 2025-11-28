import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, PerspectiveCamera, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Noise } from '@react-three/postprocessing';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Particles() {
    const count = 2000;
    const mesh = useRef<THREE.InstancedMesh>(null);
    const scroll = useScroll();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        if (!mesh.current) return;

        // Scroll offset affects particle movement
        const scrollOffset = scroll.offset;

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;

            // Add scroll influence
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            // Update position based on time and scroll
            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10 + (scrollOffset * 50), // Move up with scroll
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            );

            dummy.scale.set(s, s, s);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();

            mesh.current!.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.5} transparent opacity={0.8} />
        </instancedMesh>
    );
}

function NeuralCore() {
    const meshRef = useRef<THREE.Mesh>(null);
    const scroll = useScroll();

    useFrame((state) => {
        if (meshRef.current) {
            const scrollOffset = scroll.offset;
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + scrollOffset * Math.PI;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + scrollOffset * Math.PI;
            // Move away as we scroll down
            meshRef.current.position.z = -5 - (scrollOffset * 20);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={[0, 0, -5]}>
                <icosahedronGeometry args={[2, 2]} />
                <meshStandardMaterial
                    color="#7000ff"
                    emissive="#7000ff"
                    emissiveIntensity={2}
                    wireframe
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </Float>
    );
}

export function Scene3D() {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-black">
            <Canvas gl={{ antialias: false, stencil: false, depth: false }}>
                <ScrollControls pages={5} damping={0.2}>
                    <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />

                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                    <Particles />
                    <NeuralCore />

                    <EffectComposer>
                        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={1.5} />
                        <ChromaticAberration offset={new THREE.Vector2(0.002, 0.002)} />
                        <Noise opacity={0.05} />
                    </EffectComposer>
                </ScrollControls>
            </Canvas>
        </div>
    );
}
