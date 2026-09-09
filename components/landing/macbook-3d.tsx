"use client";

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows, Environment, RoundedBox, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function MinimalLaptop({ imageSrc }: { imageSrc: string }) {
  const texture = useTexture(imageSrc, (loaded) => {
    if (loaded && !Array.isArray(loaded) && "colorSpace" in loaded) {
      (loaded as THREE.Texture).colorSpace = THREE.SRGBColorSpace;
    }
  });

  return (
    <>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        minAzimuthAngle={-0.4} 
        maxAzimuthAngle={0.4} 
        minPolarAngle={Math.PI / 2 - 0.2} 
        maxPolarAngle={Math.PI / 2 + 0.2} 
        enableDamping
        dampingFactor={0.05}
      />
      <Float rotationIntensity={0.4} floatIntensity={1} speed={1.5}>
        <group position-y={-0.5}>
          {/* Base of the laptop */}
          <RoundedBox args={[3.2, 0.1, 2.2]} radius={0.05} smoothness={4} position={[0, 0, 0]}>
            <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.2} />
          </RoundedBox>

          {/* Screen of the laptop */}
          <group position={[0, 0.05, -1]} rotation-x={-0.1}>
            <RoundedBox args={[3.2, 2.1, 0.1]} radius={0.05} smoothness={4} position={[0, 1.05, 0]}>
              <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.1} />
            </RoundedBox>
            
            {/* The actual image screen (perfectly mapped) */}
            <mesh position={[0, 1.05, 0.051]}>
              <planeGeometry args={[3.1, 2.0]} />
              <meshBasicMaterial map={texture} toneMapped={false} />
            </mesh>
          </group>
        </group>
      </Float>
    </>
  );
}

export function Macbook3D({ imageSrc }: { imageSrc: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "150px" } // Pre-load slightly before scrolling into view
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[300px] cursor-grab active:cursor-grabbing touch-pan-x touch-pan-y"
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 50 }}
        frameloop={isInView ? "always" : "never"}
        dpr={[1, 1.5]}
        gl={{ powerPreference: "high-performance", antialias: true }}
      >
        <Environment preset="city" />
        <Suspense fallback={null}>
          <MinimalLaptop imageSrc={imageSrc} />
          {/* Soft shadow directly underneath - baked to texture once laptop is loaded */}
          <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} frames={1} />
        </Suspense>
      </Canvas>
    </div>
  );
}
