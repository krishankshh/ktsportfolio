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

  // No animations - completely static

  return (
    <group ref={groupRef}>
      {/* Your 3D Model */}
      <primitive
        object={scene}
        scale={3}
        position={[0, -3, 0]}
      />
    </group>
  );
}

// Preload models for better performance
useGLTF.preload(MODEL_PATH);
useFBX.preload(ANIMATION_PATH);
