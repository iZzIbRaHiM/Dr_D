import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

const FONT_URL = "/fonts/helvetiker_bold.typeface.json";

function Title3D() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.04;
    }
  });
  return (
    <Center top>
      <Text3D
        ref={meshRef}
        font={FONT_URL}
        size={0.6}
        height={0.12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelSegments={3}
        curveSegments={12}
      >
        Dr D Academy
        <meshStandardMaterial
          color="#e8e4dc"
          metalness={0.4}
          roughness={0.3}
          envMapIntensity={1.2}
        />
      </Text3D>
    </Center>
  );
}

function Scene() {
  return (
    <>
      <ambient light intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-3, 2, 2]} intensity={0.5} />
      <pointLight position={[0, 2, 4]} intensity={0.8} color="#d4af37" />
      <Suspense fallback={null}>
        <Title3D />
      </Suspense>
      <fog attach="fog" args={["#0a0a0a", 8, 20]} />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 bg-[#0a0a0a]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#0a0a0a"]} />
        <Scene />
      </Canvas>
    </div>
  );
}
