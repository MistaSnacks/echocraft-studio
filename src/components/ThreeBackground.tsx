import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Custom hook to get stable viewport height (prevents mobile address bar resize issues)
function useStableViewportHeight() {
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    // Capture initial height before any scroll/address bar changes
    const initialHeight = window.innerHeight;
    setHeight(initialHeight);

    // Only update on significant resize (orientation change), not address bar
    const handleResize = () => {
      const widthChanged = Math.abs(window.innerWidth - window.screen.width) < 50;
      const heightDiff = Math.abs(window.innerHeight - initialHeight);
      
      // Only update if it's a significant change (orientation) not address bar (~100px)
      if (heightDiff > 150 || widthChanged) {
        setHeight(window.innerHeight);
      }
    };

    window.addEventListener("orientationchange", handleResize);
    return () => window.removeEventListener("orientationchange", handleResize);
  }, []);

  return height;
}

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
    // Create circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(245, 255, 0, 1)');
    gradient.addColorStop(0.5, 'rgba(245, 255, 0, 0.5)');
    gradient.addColorStop(1, 'rgba(245, 255, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
    
    const texture = new THREE.CanvasTexture(canvas);
    
    return new THREE.PointsMaterial({
      color: '#f5ff00',
      size: 0.15,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      depthWrite: false,
      map: texture,
      blending: THREE.AdditiveBlending,
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
    </>
  );
}

const ThreeBackground = () => {
  const [mounted, setMounted] = useState(false);
  const stableHeight = useStableViewportHeight();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !stableHeight) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 pointer-events-none touch-none"
      style={{ 
        zIndex: 0,
        height: stableHeight,
        // Prevent any scroll-related resize behavior
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true,
        }}
        dpr={[1, 2]}
        resize={{ scroll: false, debounce: { scroll: 0, resize: 300 } }}
        style={{ 
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
