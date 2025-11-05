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
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;

      // Follow mouse movement subtly
      groupRef.current.rotation.y = mouse.x * 0.3;
      groupRef.current.rotation.x = -mouse.y * 0.2;
    }

    if (headRef.current) {
      // Add a subtle head rotation
      headRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Head - Main sphere with distortion */}
      <Sphere ref={headRef} args={[1, 64, 64]} position={[0, 0.5, 0]}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.3}
          speed={2}
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
  const radius = 2;

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime() + index;
      meshRef.current.position.x = Math.cos(time * 0.5 + angle) * radius;
      meshRef.current.position.y = Math.sin(time * 0.3) * 0.5 + 0.5;
      meshRef.current.position.z = Math.sin(time * 0.5 + angle) * radius;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#3b82f6"
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}
