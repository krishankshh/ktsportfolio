"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import Avatar3D from "./Avatar3D";

export default function AvatarCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />

        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
        />
        <directionalLight
          position={[-5, -5, -5]}
          intensity={0.4}
        />
        <pointLight position={[0, 10, 0]} intensity={0.8} color="#60a5fa" />
        <pointLight position={[0, -5, 5]} intensity={0.5} color="#3b82f6" />
        <hemisphereLight
          color="#ffffff"
          groundColor="#60a5fa"
          intensity={0.5}
        />

        {/* 3D Avatar */}
        <Suspense fallback={null}>
          <Avatar3D />
        </Suspense>

        {/* Controls - disabled */}
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}
