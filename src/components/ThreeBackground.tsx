import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const particlesCount = 600;
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      const radius = Math.random() * 10 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) - 3;
    }
    
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      color: '#FFE500',
      size: 0.05,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      depthWrite: false,
    });
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

function FloatingOrb({ 
  position, 
  size, 
  color, 
  speed 
}: { 
  position: [number, number, number]; 
  size: number; 
  color: string; 
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime * speed;
      meshRef.current.position.x = initialPos.current[0] + Math.sin(t) * 2;
      meshRef.current.position.y = initialPos.current[1] + Math.cos(t * 0.8) * 1.5;
      meshRef.current.position.z = initialPos.current[2] + Math.sin(t * 0.5) * 1;
      
      const scale = 1 + Math.sin(t * 2) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshBasicMaterial color={color} transparent opacity={0.15} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <ParticleField />
      <FloatingOrb position={[6, 3, -8]} size={1.5} color="#FFE500" speed={0.3} />
      <FloatingOrb position={[-5, -2, -7]} size={1.2} color="#FFD700" speed={0.4} />
      <FloatingOrb position={[3, -4, -9]} size={1.8} color="#FFEB3B" speed={0.25} />
    </>
  );
}

const ThreeBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
