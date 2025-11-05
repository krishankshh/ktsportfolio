"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useFBX, useAnimations } from "@react-three/drei";
import * as THREE from "three";

// Replace these paths with your actual file names
const MODEL_PATH = "/models/avatar.glb";
const ANIMATION_PATH = "/models/animation.fbx";

export default function Avatar3D() {
  const groupRef = useRef<THREE.Group>(null);

  // Load GLB model
  const { scene } = useGLTF(MODEL_PATH);

  // Load FBX animation
  const fbx = useFBX(ANIMATION_PATH);

  // Setup animations
  const { actions, mixer } = useAnimations(fbx.animations, groupRef);

  // Play animation on mount
  useEffect(() => {
    if (actions && fbx.animations.length > 0) {
      // Play the first animation (you can change the index if you have multiple)
      const firstAnimation = Object.keys(actions)[0];
      if (firstAnimation && actions[firstAnimation]) {
        actions[firstAnimation]?.play();
      }
    }
  }, [actions, fbx.animations]);

  // Animate the avatar group (floating animation only)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Your 3D Model */}
      <primitive
        object={scene}
        scale={3}
        position={[0, -3, 0]}
      />

      {/* Optional: Floating particles around avatar */}
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

// Preload models for better performance
useGLTF.preload(MODEL_PATH);
useFBX.preload(ANIMATION_PATH);
