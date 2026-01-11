import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesCount = 1200;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      // Spread particles in a sphere-like distribution
      const radius = Math.random() * 12 + 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi) - 5;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.015;
      ref.current.rotation.y = state.clock.elapsedTime * 0.025;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FFE500"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function FloatingOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);
  const orb3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(t * 0.3) * 4;
      orb1Ref.current.position.y = Math.cos(t * 0.2) * 2.5 + 1;
      orb1Ref.current.position.z = Math.sin(t * 0.1) * 2 - 4;
      orb1Ref.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.1);
    }
    
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(t * 0.2) * 5 - 3;
      orb2Ref.current.position.y = Math.sin(t * 0.3) * 2 - 2;
      orb2Ref.current.position.z = Math.cos(t * 0.15) * 2 - 5;
      orb2Ref.current.scale.setScalar(1 + Math.cos(t * 0.4) * 0.15);
    }
    
    if (orb3Ref.current) {
      orb3Ref.current.position.x = Math.sin(t * 0.25) * 3 + 4;
      orb3Ref.current.position.y = Math.cos(t * 0.35) * 3;
      orb3Ref.current.position.z = Math.sin(t * 0.2) * 2 - 6;
      orb3Ref.current.scale.setScalar(1 + Math.sin(t * 0.6) * 0.12);
    }
  });

  return (
    <>
      <mesh ref={orb1Ref}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial color="#FFE500" transparent opacity={0.12} />
      </mesh>
      <mesh ref={orb2Ref}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#FFD000" transparent opacity={0.1} />
      </mesh>
      <mesh ref={orb3Ref}>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshBasicMaterial color="#FFEB3B" transparent opacity={0.08} />
      </mesh>
    </>
  );
}

function WaveRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      ringRef.current.scale.set(scale, scale, 1);
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, -8]}>
      <torusGeometry args={[6, 0.02, 16, 100]} />
      <meshBasicMaterial color="#FFE500" transparent opacity={0.3} />
    </mesh>
  );
}

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <FloatingOrbs />
        <WaveRing />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
