"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function Avatar3D() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);

  // Animate the avatar
  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      // More visible floating animation
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.4;

      // Follow mouse movement more visibly
      groupRef.current.rotation.y = mouse.x * 0.5;
      groupRef.current.rotation.x = -mouse.y * 0.3;
    }

    if (headRef.current) {
      // More visible head rotation
      headRef.current.rotation.y = Math.sin(t * 0.6) * 0.3;
      headRef.current.rotation.z = Math.cos(t * 0.4) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Head - Main sphere with distortion */}
      <Sphere ref={headRef} args={[1, 64, 64]} position={[0, 0.5, 0]}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.5}
          speed={3}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Body - Rounded box */}
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[1.2, 1.5, 0.8]} />
        <meshStandardMaterial
          color="#60a5fa"
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.8, -0.6, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
        <meshStandardMaterial
          color="#3b82f6"
          roughness={0.4}
          metalness={0.5}
        />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.8, -0.6, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
        <meshStandardMaterial
          color="#3b82f6"
          roughness={0.4}
          metalness={0.5}
        />
      </mesh>

      {/* Floating particles around avatar */}
      {Array.from({ length: 8 }).map((_, i) => (
        <FloatingParticle key={i} index={i} />
      ))}
    </group>
  );
}

// Floating particles component
function FloatingParticle({ index }: { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const angle = (index / 8) * Math.PI * 2;
  const radius = 2.5;

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime() + index;
      meshRef.current.position.x = Math.cos(time * 0.8 + angle) * radius;
      meshRef.current.position.y = Math.sin(time * 0.6) * 0.8 + 0.3;
      meshRef.current.position.z = Math.sin(time * 0.8 + angle) * radius;
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.15, 0.15, 0.15]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#3b82f6"
        emissiveIntensity={0.8}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}
