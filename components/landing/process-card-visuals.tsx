"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * 1. MODERN DESIGN VISUAL
 * Mathematical drafting asset: Golden ratio subdivisions, concentric calibrated compass arcs,
 * Fibonacci logarithmic spiral, and precision radial degree ticks.
 */
export function ModernDesignVisual() {
  const cx = 210;
  const cy = 75;

  // 24 radial degree ticks around the compass circle (rounded to 2 decimal places for SSR hydration stability)
  const ticks = Array.from({ length: 24 }).map((_, i) => {
    const angle = (i * 15 * Math.PI) / 180;
    const r1 = 64;
    const r2 = i % 2 === 0 ? 70 : 67;
    return {
      x1: Math.round((cx + r1 * Math.cos(angle)) * 100) / 100,
      y1: Math.round((cy + r1 * Math.sin(angle)) * 100) / 100,
      x2: Math.round((cx + r2 * Math.cos(angle)) * 100) / 100,
      y2: Math.round((cy + r2 * Math.sin(angle)) * 100) / 100,
    };
  });

  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-0 h-full w-full stroke-white select-none"
    >
      <defs>
        <radialGradient id="des-grad" cx="80%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.22" />
          <stop offset="50%" stopColor="white" stopOpacity="0.10" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="des-mask">
          <rect width="100%" height="100%" fill="url(#des-grad)" />
        </mask>
      </defs>

      <g mask="url(#des-mask)" strokeWidth="0.8">
        {/* Modular Golden-Ratio nested rectangles */}
        <rect x="80" y="20" width="150" height="92.7" strokeDasharray="3 3" opacity="0.6" />
        <rect x="80" y="20" width="92.7" height="92.7" opacity="0.5" />
        <rect x="172.7" y="20" width="57.3" height="57.3" opacity="0.5" />
        <rect x="172.7" y="77.3" width="35.4" height="35.4" opacity="0.4" />
        <rect x="208.1" y="77.3" width="21.9" height="21.9" opacity="0.4" />

        {/* Fibonacci Golden Spiral curve */}
        <path
          d="M 80 112.7 A 92.7 92.7 0 0 1 172.7 20 A 57.3 57.3 0 0 1 230 77.3 A 35.4 35.4 0 0 1 194.6 112.7 A 21.9 21.9 0 0 1 172.7 90.8"
          strokeWidth="1.2"
          opacity="0.8"
        />

        {/* Concentric compass reference rings */}
        <circle cx={cx} cy={cy} r="25" strokeDasharray="2 4" opacity="0.5" />
        <circle cx={cx} cy={cy} r="48" opacity="0.4" />
        <circle cx={cx} cy={cy} r="64" strokeWidth="0.6" opacity="0.6" />
        <circle cx={cx} cy={cy} r="95" strokeDasharray="4 6" opacity="0.3" />

        {/* Calibrated degree tick marks */}
        {ticks.map((t, idx) => (
          <line
            key={idx}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            strokeWidth={idx % 2 === 0 ? "1" : "0.6"}
            opacity={idx % 2 === 0 ? "0.7" : "0.4"}
          />
        ))}

        {/* Center compass pivot and crosshairs */}
        <line x1={cx - 15} y1={cy} x2={cx + 15} y2={cy} opacity="0.7" />
        <line x1={cx} y1={cy - 15} x2={cx} y2={cy + 15} opacity="0.7" />
        <circle cx={cx} cy={cy} r="2" fill="white" />

        {/* Rotating calibration angle line */}
        <motion.line
          x1={cx}
          y1={cy}
          x2={cx + 64}
          y2={cy}
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.7"
          animate={{ rotate: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          style={{ originX: `${cx}px`, originY: `${cy}px` }}
        />
      </g>
    </svg>
  );
}

/**
 * 2. FAST COMMUNICATION VISUAL
 * Mathematical drafting asset: Multi-phase harmonic sine waves, precision telemetry radar,
 * frequency packet nodes, and millisecond timeline ticks.
 */
export function FastCommunicationVisual() {
  const rx = 215;
  const ry = 70;

  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-0 h-full w-full stroke-white select-none"
    >
      <defs>
        <radialGradient id="comm-grad" cx="80%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.22" />
          <stop offset="50%" stopColor="white" stopOpacity="0.10" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="comm-mask">
          <rect width="100%" height="100%" fill="url(#comm-grad)" />
        </mask>
      </defs>

      <g mask="url(#comm-mask)" strokeWidth="0.8">
        {/* Telemetry Radar concentric broadcast circles */}
        <circle cx={rx} cy={ry} r="20" strokeDasharray="3 3" opacity="0.6" />
        <circle cx={rx} cy={ry} r="45" opacity="0.4" />
        <circle cx={rx} cy={ry} r="75" strokeDasharray="4 6" opacity="0.35" />
        <circle cx={rx} cy={ry} r="110" opacity="0.2" />

        {/* Radar Rotating Angle Beam */}
        <motion.line
          x1={rx}
          y1={ry}
          x2={rx + 90}
          y2={ry}
          strokeWidth="1.2"
          opacity="0.8"
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{ originX: `${rx}px`, originY: `${ry}px` }}
        />

        {/* Horizontal frequency baseline with tick marks */}
        <line x1="40" y1="120" x2="260" y2="120" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1={50 + i * 18}
            y1={116}
            x2={50 + i * 18}
            y2={124}
            strokeWidth="0.6"
            opacity="0.5"
          />
        ))}

        {/* Primary Harmonic Sine Wave */}
        <path
          d="M 40 120 C 65 70, 95 70, 120 120 C 145 170, 175 170, 200 120 C 225 70, 255 70, 275 120"
          strokeWidth="1.2"
          opacity="0.75"
        />

        {/* Secondary High-Frequency Phase Wave */}
        <path
          d="M 40 120 C 55 95, 70 95, 85 120 C 100 145, 115 145, 130 120 C 145 95, 160 95, 175 120 C 190 145, 205 145, 220 120 C 235 95, 250 95, 265 120"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          opacity="0.5"
        />

        {/* Signal Intercept Packet Nodes */}
        <circle cx="120" cy="120" r="3" fill="white" opacity="0.9" />
        <circle cx="120" cy="120" r="7" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
        <circle cx="200" cy="120" r="3" fill="white" opacity="0.9" />
        <circle cx="200" cy="120" r="7" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
        <circle cx={rx} cy={ry} r="2.5" fill="white" />
      </g>
    </svg>
  );
}

/**
 * 3. MOBILE FIRST VISUAL
 * Mathematical drafting asset: Multi-tier responsive breakpoint bounding boxes,
 * pixel dimension callout lines, technical alignment crosshairs, and screen aspect ratio guides.
 */
export function MobileFirstVisual() {
  const mx = 175;
  const my = 20;

  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-0 h-full w-full stroke-white select-none"
    >
      <defs>
        <radialGradient id="mob-grad" cx="80%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.22" />
          <stop offset="50%" stopColor="white" stopOpacity="0.10" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="mob-mask">
          <rect width="100%" height="100%" fill="url(#mob-grad)" />
        </mask>
      </defs>

      <g mask="url(#mob-mask)" strokeWidth="0.8">
        {/* Outer Viewport Breakpoint bounding guide (Tablet / Desktop 768px frame) */}
        <rect x={mx - 40} y={my - 10} width="125" height="185" strokeDasharray="4 4" opacity="0.3" />

        {/* Primary Mobile Device Wireframe (390 × 844 aspect frame) */}
        <rect
          x={mx}
          y={my}
          width="82"
          height="156"
          rx="14"
          strokeWidth="1.2"
          opacity="0.8"
        />

        {/* Screen active canvas frame */}
        <rect
          x={mx + 6}
          y={my + 8}
          width="70"
          height="140"
          rx="8"
          strokeWidth="0.7"
          opacity="0.5"
        />

        {/* Dynamic Island / Hardware notch vector */}
        <rect
          x={mx + 28}
          y={my + 13}
          width="26"
          height="7"
          rx="3.5"
          fill="white"
          opacity="0.7"
        />

        {/* Bottom Home Indicator Bar */}
        <line
          x1={mx + 26}
          y1={my + 141}
          x2={mx + 56}
          y2={my + 141}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Viewport Dimension Callout Extension Lines */}
        {/* Top dimension line */}
        <line x1={mx} y1={my - 6} x2={mx + 82} y2={my - 6} opacity="0.6" />
        <line x1={mx} y1={my - 9} x2={mx} y2={my - 3} opacity="0.6" />
        <line x1={mx + 82} y1={my - 9} x2={mx + 82} y2={my - 3} opacity="0.6" />

        {/* Right dimension line */}
        <line x1={mx + 90} y1={my} x2={mx + 90} y2={my + 156} opacity="0.6" />
        <line x1={mx + 87} y1={my} x2={mx + 93} y2={my} opacity="0.6" />
        <line x1={mx + 87} y1={my + 156} x2={mx + 93} y2={my + 156} opacity="0.6" />

        {/* Technical Alignment Datum Crosshairs */}
        <g opacity="0.7">
          <line x1={mx - 8} y1={my} x2={mx + 8} y2={my} />
          <line x1={mx} y1={my - 8} x2={mx} y2={my + 8} />
          <circle cx={mx} cy={my} r="1.5" fill="white" />
        </g>
        <g opacity="0.7">
          <line x1={mx + 74} y1={my} x2={mx + 90} y2={my} />
          <line x1={mx + 82} y1={my - 8} x2={mx + 82} y2={my + 8} />
          <circle cx={mx + 82} cy={my} r="1.5" fill="white" />
        </g>
      </g>
    </svg>
  );
}

/**
 * 4. RESULTS FOCUSED VISUAL
 * Mathematical drafting asset: Precision coordinate target reticle, ascending logarithmic
 * vector trajectory, datum axes, and quadrant alignment brackets.
 */
export function ResultsFocusedVisual() {
  const tx = 210;
  const ty = 55;

  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-0 h-full w-full stroke-white select-none"
    >
      <defs>
        <radialGradient id="res-grad" cx="80%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.22" />
          <stop offset="50%" stopColor="white" stopOpacity="0.10" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="res-mask">
          <rect width="100%" height="100%" fill="url(#res-grad)" />
        </mask>
      </defs>

      <g mask="url(#res-mask)" strokeWidth="0.8">
        {/* Coordinate Plane Reference Axes */}
        <line x1="50" y1="165" x2="260" y2="165" strokeWidth="0.8" opacity="0.4" />
        <line x1="70" y1="180" x2="70" y2="35" strokeWidth="0.8" opacity="0.4" />

        {/* Axis Ticks */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`x-${i}`}
            x1={80 + i * 20}
            y1="162"
            x2={80 + i * 20}
            y2="168"
            strokeWidth="0.6"
            opacity="0.45"
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`y-${i}`}
            x1="67"
            y1={150 - i * 20}
            x2="73"
            y2={150 - i * 20}
            strokeWidth="0.6"
            opacity="0.45"
          />
        ))}

        {/* Ascending Logarithmic Growth Trajectory Curve */}
        <path
          d="M 70 165 C 120 162, 160 125, 210 55"
          strokeWidth="1.5"
          opacity="0.85"
        />

        {/* Trajectory Vector Arrowhead at Target */}
        <path
          d="M 204 60 L 210 55 L 210 63"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />

        {/* Tangent Projection Guides to Axes */}
        <line x1={tx} y1={ty} x2={tx} y2="165" strokeDasharray="3 3" opacity="0.4" />
        <line x1="70" y1={ty} x2={tx} y2={ty} strokeDasharray="3 3" opacity="0.4" />

        {/* Precision Target Reticle Circles */}
        <circle cx={tx} cy={ty} r="16" strokeWidth="1" opacity="0.8" />
        <circle cx={tx} cy={ty} r="32" strokeDasharray="4 4" opacity="0.5" />
        <circle cx={tx} cy={ty} r="54" opacity="0.25" />

        {/* Reticle Crosshairs passing through Target */}
        <line x1={tx - 24} y1={ty} x2={tx + 24} y2={ty} strokeWidth="0.9" opacity="0.7" />
        <line x1={tx} y1={ty - 24} x2={tx} y2={ty + 24} strokeWidth="0.9" opacity="0.7" />
        <circle cx={tx} cy={ty} r="2.5" fill="white" opacity="0.9" />

        {/* Target Quadrant Lock-On Brackets [ ⌜ ⌝ ⌞ ⌟ ] */}
        <path d={`M ${tx - 26} ${ty - 16} L ${tx - 26} ${ty - 26} L ${tx - 16} ${ty - 26}`} strokeWidth="1.2" opacity="0.75" />
        <path d={`M ${tx + 16} ${ty - 26} L ${tx + 26} ${ty - 26} L ${tx + 26} ${ty - 16}`} strokeWidth="1.2" opacity="0.75" />
        <path d={`M ${tx - 26} ${ty + 16} L ${tx - 26} ${ty + 26} L ${tx - 16} ${ty + 26}`} strokeWidth="1.2" opacity="0.75" />
        <path d={`M ${tx + 16} ${ty + 26} L ${tx + 26} ${ty + 26} L ${tx + 26} ${ty + 16}`} strokeWidth="1.2" opacity="0.75" />
      </g>
    </svg>
  );
}
