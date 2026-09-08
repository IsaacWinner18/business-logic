"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * Procedural Spirograph Generators
 * Generates smooth parametric curves using mathematical equations:
 * Hypotrochoid, Epitrochoid, Harmonograph, and Multi-harmonic Guilloché.
 */

// 1. Hypotrochoid (Star Rosette)
function generateHypotrochoid(
  R: number,
  r: number,
  d: number,
  revs: number,
  stepsPerRev: number = 120,
  cx: number = 150,
  cy: number = 150
): string {
  const steps = Math.round(revs * stepsPerRev);
  const maxTheta = revs * 2 * Math.PI;
  const pts: string[] = [];

  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * maxTheta;
    const x = cx + (R - r) * Math.cos(theta) + d * Math.cos(((R - r) / r) * theta);
    const y = cy + (R - r) * Math.sin(theta) - d * Math.sin(((R - r) / r) * theta);
    pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return pts.join(" ");
}

// 2. Epitrochoid Guilloché (Floral lace)
function generateEpitrochoidGuilloche(
  R: number,
  r: number,
  d: number,
  revs: number,
  stepsPerRev: number = 120,
  cx: number = 150,
  cy: number = 150
): string {
  const steps = Math.round(revs * stepsPerRev);
  const maxTheta = revs * 2 * Math.PI;
  const pts: string[] = [];

  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * maxTheta;
    const x =
      cx +
      (R + r) * Math.cos(theta) -
      d * Math.cos(((R + r) / r) * theta) +
      10 * Math.cos(9 * theta);
    const y =
      cy +
      (R + r) * Math.sin(theta) -
      d * Math.sin(((R + r) / r) * theta) +
      10 * Math.sin(9 * theta);
    pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return pts.join(" ");
}

// 3. Multi-Harmonic Harmonograph (Orbital Rosette)
function generateHarmonograph(
  a1: number,
  a2: number,
  a3: number,
  f1: number,
  f2: number,
  f3: number,
  stepsCount: number = 500,
  cx: number = 150,
  cy: number = 150
): string {
  const pts: string[] = [];
  const maxTheta = 2 * Math.PI;

  for (let i = 0; i <= stepsCount; i++) {
    const theta = (i / stepsCount) * maxTheta;
    const x =
      cx +
      a1 * Math.cos(f1 * theta) +
      a2 * Math.cos(f2 * theta) +
      a3 * Math.cos(f3 * theta);
    const y =
      cy +
      a1 * Math.sin(f1 * theta) -
      a2 * Math.sin(f2 * theta) +
      a3 * Math.sin(f3 * theta);
    pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return pts.join(" ");
}

/**
 * VARIATION 1: 5-Petal Star Hypotrochoid Rosette
 * For Consultation Card (#E87EA1)
 */
export function SpirographVar1() {
  const primaryPath = useMemo(() => generateHypotrochoid(115, 69, 75, 3), []);
  const echoPath = useMemo(() => generateHypotrochoid(92, 55, 60, 3), []);

  return (
    <motion.div
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
    >
      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full stroke-white select-none pointer-events-none"
      >
        {/* Calibrated outer guide ring */}
        <circle
          cx="150"
          cy="150"
          r="128"
          strokeWidth="0.6"
          strokeDasharray="3 3"
          strokeOpacity="0.4"
        />
        <circle cx="150" cy="150" r="134" strokeWidth="0.5" strokeOpacity="0.25" />

        {/* Primary intricate spirograph curve */}
        <path d={primaryPath} strokeWidth="1" strokeOpacity="0.8" />

        {/* Secondary concentric harmonic echo */}
        <path
          d={echoPath}
          strokeWidth="0.75"
          strokeDasharray="4 2"
          strokeOpacity="0.5"
        />

        {/* Center reticle */}
        <circle cx="150" cy="150" r="3" fill="white" fillOpacity="0.8" />
        <circle cx="150" cy="150" r="14" strokeWidth="0.7" strokeOpacity="0.4" />
      </svg>
    </motion.div>
  );
}

/**
 * VARIATION 2: 8-Fold Guilloché Lace Weave
 * For Design Card (#EE2677)
 */
export function SpirographVar2() {
  const primaryPath = useMemo(() => generateEpitrochoidGuilloche(66, 22, 38, 5), []);
  const innerPath = useMemo(() => generateHypotrochoid(80, 48, 38, 3), []);

  return (
    <motion.div
      className="w-full h-full"
      animate={{ rotate: -360 }}
      transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
    >
      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full stroke-white select-none pointer-events-none"
      >
        {/* Outer radial boundary */}
        <circle cx="150" cy="150" r="130" strokeWidth="0.6" strokeOpacity="0.3" />
        <circle
          cx="150"
          cy="150"
          r="122"
          strokeWidth="0.7"
          strokeDasharray="2 4"
          strokeOpacity="0.45"
        />

        {/* Guilloché floral lace wave */}
        <path d={primaryPath} strokeWidth="1" strokeOpacity="0.85" />

        {/* Inner geometric core */}
        <path d={innerPath} strokeWidth="0.75" strokeOpacity="0.45" />

        {/* Cardinal orientation ticks */}
        <line x1="150" y1="14" x2="150" y2="24" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="150" y1="276" x2="150" y2="286" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="14" y1="150" x2="24" y2="150" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="276" y1="150" x2="286" y2="150" strokeWidth="1" strokeOpacity="0.6" />

        <circle cx="150" cy="150" r="2.5" fill="white" fillOpacity="0.85" />
      </svg>
    </motion.div>
  );
}

/**
 * VARIATION 3: 11-Lobe Astroid Mandala
 * For Development Card (#FB62F6)
 */
export function SpirographVar3() {
  const primaryPath = useMemo(() => generateHypotrochoid(115, 31.36, 45, 3, 140), []);
  const echoPath = useMemo(() => generateHypotrochoid(85, 23.18, 32, 3, 140), []);

  return (
    <motion.div
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full stroke-white select-none pointer-events-none"
      >
        {/* Outer orbital rings */}
        <circle cx="150" cy="150" r="132" strokeWidth="0.5" strokeOpacity="0.25" />
        <circle
          cx="150"
          cy="150"
          r="126"
          strokeWidth="0.8"
          strokeDasharray="5 3"
          strokeOpacity="0.4"
        />

        {/* 11-pointed radiant astroid mandala */}
        <path d={primaryPath} strokeWidth="1" strokeOpacity="0.8" />

        {/* Internal resonant curve */}
        <path
          d={echoPath}
          strokeWidth="0.75"
          strokeDasharray="2 2"
          strokeOpacity="0.5"
        />

        {/* Precision nodal dots */}
        <circle cx="150" cy="150" r="4" strokeWidth="0.8" strokeOpacity="0.6" />
        <circle cx="150" cy="150" r="1.5" fill="white" fillOpacity="0.9" />
      </svg>
    </motion.div>
  );
}

/**
 * VARIATION 4: Multi-Harmonic Cosmic Harmonograph
 * For Launch Card (#FF4242)
 */
export function SpirographVar4() {
  const primaryPath = useMemo(
    () => generateHarmonograph(75, 35, 15, 1, 7, 15, 600),
    []
  );
  const secondaryPath = useMemo(
    () => generateHarmonograph(60, 28, 12, 1, 5, 11, 500),
    []
  );

  return (
    <motion.div
      className="w-full h-full"
      animate={{ rotate: -360 }}
      transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
    >
      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full stroke-white select-none pointer-events-none"
      >
        {/* Celestial orbital circles */}
        <circle cx="150" cy="150" r="130" strokeWidth="0.6" strokeOpacity="0.35" />
        <circle
          cx="150"
          cy="150"
          r="118"
          strokeWidth="0.5"
          strokeDasharray="3 3"
          strokeOpacity="0.3"
        />

        {/* Primary harmonograph weave */}
        <path d={primaryPath} strokeWidth="1" strokeOpacity="0.85" />

        {/* Secondary nested orbital trajectory */}
        <path
          d={secondaryPath}
          strokeWidth="0.75"
          strokeDasharray="4 2"
          strokeOpacity="0.5"
        />

        {/* Origin target crosshair */}
        <line x1="140" y1="150" x2="160" y2="150" strokeWidth="0.8" strokeOpacity="0.7" />
        <line x1="150" y1="140" x2="150" y2="160" strokeWidth="0.8" strokeOpacity="0.7" />
        <circle cx="150" cy="150" r="2" fill="white" fillOpacity="0.95" />
      </svg>
    </motion.div>
  );
}
