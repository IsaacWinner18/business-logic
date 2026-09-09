"use client";

import { useEffect, useRef } from "react";

export function NoiseOverlay({
  className = "pointer-events-none absolute inset-0 z-10 h-full w-full opacity-[0.035] [transform:translateZ(0)] bg-repeat",
}: {
  className?: string;
} = {}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate a tiny 128x128 static noise canvas once in memory
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imgData = ctx.createImageData(128, 128);
    const buffer = new Uint32Array(imgData.data.buffer);
    const len = buffer.length;

    for (let i = 0; i < len; i++) {
      // Fast pseudo-random monochrome noise with low alpha
      const val = Math.floor(Math.random() * 256);
      buffer[i] = (255 << 24) | (val << 16) | (val << 8) | val;
    }

    ctx.putImageData(imgData, 0, 0);
    if (overlayRef.current) {
      overlayRef.current.style.backgroundImage = `url(${canvas.toDataURL("image/png")})`;
    }
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className={className}
    />
  );
}

