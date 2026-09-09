"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

// Parametric gear path generator centered at (cx, cy)
function generateGearPath(
  cx: number,
  cy: number,
  rInner: number,
  rOuter: number,
  teeth: number,
  holeR: number,
  initialAngleOffset: number = 0
): string {
  const pts: [number, number][] = [];
  const numPts = teeth * 4;
  for (let i = 0; i < numPts; i++) {
    const angle = (i / numPts) * 2 * Math.PI + initialAngleOffset;
    const phase = i % 4;
    const r = phase === 1 || phase === 2 ? rOuter : rInner;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    pts.push([x, y]);
  }

  let d = `M ${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)} `;
  for (let i = 1; i < pts.length; i++) {
    d += `L ${pts[i][0].toFixed(1)},${pts[i][1].toFixed(1)} `;
  }
  d += "Z ";

  // Center axle hole
  d += `M ${(cx + holeR).toFixed(1)},${cy.toFixed(1)} `;
  d += `A ${holeR.toFixed(1)},${holeR.toFixed(1)} 0 1 0 ${(cx - holeR).toFixed(1)},${cy.toFixed(1)} `;
  d += `A ${holeR.toFixed(1)},${holeR.toFixed(1)} 0 1 0 ${(cx + holeR).toFixed(1)},${cy.toFixed(1)} Z`;
  return d;
}

export function WebsiteMaintenanceVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Gears
  const gear1Ref = useRef<SVGGElement>(null);
  const gear2Ref = useRef<SVGGElement>(null);
  const gear3Ref = useRef<SVGGElement>(null);

  // Wrench Woman
  const wrenchWomanRef = useRef<SVGGElement>(null);

  // Painter Arm & Paint Stroke
  const painterArmRef = useRef<SVGGElement>(null);
  const paintStrokeRef = useRef<SVGRectElement>(null);

  // Lady Coder Hands
  const typingHandRef = useRef<SVGGElement>(null);
  const paperSheetRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ==========================================
      // 1. GEARS: Precision Synchronized Rotation
      // ==========================================
      if (gear1Ref.current) {
        gsap.to(gear1Ref.current, {
          rotation: 360,
          transformOrigin: "center center",
          duration: 12,
          repeat: -1,
          ease: "none",
        });
      }

      if (gear2Ref.current) {
        gsap.to(gear2Ref.current, {
          rotation: -360,
          transformOrigin: "center center",
          duration: 12,
          repeat: -1,
          ease: "none",
        });
      }

      if (gear3Ref.current) {
        gsap.to(gear3Ref.current, {
          rotation: -360,
          transformOrigin: "center center",
          duration: 24,
          repeat: -1,
          ease: "none",
        });
      }

      // ==========================================
      // 2. WRENCH WOMAN: Drag out of scene & spawn back
      // ==========================================
      if (wrenchWomanRef.current) {
        // Natural walking/dragging vertical bob
        gsap.to(wrenchWomanRef.current, {
          y: -3,
          duration: 0.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Drag loop: drag left out of frame, then spawn back on right and walk across
        const wrenchTl = gsap.timeline({ repeat: -1 });
        wrenchTl
          // Drag from starting position (0) smoothly out of scene to left (-550)
          .to(wrenchWomanRef.current, {
            x: -560,
            duration: 6.5,
            ease: "power1.inOut",
          })
          // Respawn offscreen to the right with initial fade
          .set(wrenchWomanRef.current, {
            x: 360,
            opacity: 0,
          })
          // Fade in as she enters from right
          .to(wrenchWomanRef.current, {
            opacity: 1,
            duration: 0.6,
            ease: "power1.out",
          })
          // Drag back to original spot (0)
          .to(
            wrenchWomanRef.current,
            {
              x: 0,
              duration: 4.8,
              ease: "power1.inOut",
            },
            "<"
          )
          // Brief pause at resting spot before next drag
          .to({}, { duration: 0.8 });
      }

      // ==========================================
      // 3. PAINTER: Hand & Paint Roller Motion
      // ==========================================
      if (painterArmRef.current && paintStrokeRef.current) {
        const painterTl = gsap.timeline({ repeat: -1, yoyo: true });
        painterTl
          // Arm pivots around shoulder at card border (694px 523px)
          .to(painterArmRef.current, {
            rotation: -10,
            duration: 1.9,
            ease: "power1.inOut",
          })
          // Fresh paint stroke expands on the white card synchronously
          .to(
            paintStrokeRef.current,
            {
              y: 470,
              height: 65,
              duration: 1.9,
              ease: "power1.inOut",
            },
            0
          );
      }

      // ==========================================
      // 4. LADY WITH LAPTOP: Hand Movement
      // ==========================================
      // Rapid rhythmic typing taps on laptop keyboard
      if (typingHandRef.current) {
        gsap.to(typingHandRef.current, {
          y: -2.5,
          rotation: -4,
          duration: 0.16,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      // Paper sheet gently rustles in her reading hand
      if (paperSheetRef.current) {
        gsap.to(paperSheetRef.current, {
          y: -2,
          rotation: 2,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    // Pause all GSAP animations when not visible in viewport
    const container = containerRef.current;
    let observer: IntersectionObserver | null = null;
    if (container) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ctx.data.forEach((anim: any) => anim.play && anim.play());
          } else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ctx.data.forEach((anim: any) => anim.pause && anim.pause());
          }
        },
        { rootMargin: "100px" }
      );
      observer.observe(container);
    }

    return () => {
      observer?.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[260px] md:min-h-[300px] flex items-center justify-center overflow-hidden select-none bg-[#FAFAFA]"
    >
      {/* 1376 / 768 Aspect Ratio Canvas Container */}
      <div className="relative w-full h-full max-w-[1000px] aspect-[1376/768] flex items-center justify-center">
        {/* Base Website Maintenance Clean Illustration */}
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
          <Image
            src="/Business-logic-website-management-base.png"
            alt="Website Maintenance"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Dynamic Interactive SVG Overlays */}
        <svg
          viewBox="0 0 1376 768"
          className="absolute inset-0 w-full h-full z-20 pointer-events-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ==================== GEARS ==================== */}
          {/* Gear 3: Mid-right subtle grey background gear */}
          <g transform="translate(800, 128)">
            <g ref={gear3Ref} className="will-change-transform">
              <path
                d={generateGearPath(0, 0, 26, 38, 8, 12, 0)}
                fill="#F8FAFC"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* Gear 2: Interlocking lower foreground gear */}
          <g transform="translate(590, 88)">
            <g ref={gear2Ref} className="will-change-transform">
              <path
                d={generateGearPath(0, 0, 16, 23, 8, 7, (-12 * Math.PI) / 180)}
                fill="#F1F5F9"
                stroke="#2B333B"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* Gear 1: Primary top foreground gear */}
          <g transform="translate(553, 50)">
            <g ref={gear1Ref} className="will-change-transform">
              <path
                d={generateGearPath(0, 0, 20, 29, 8, 9, (12 * Math.PI) / 180)}
                fill="#FFFFFF"
                stroke="#2B333B"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* ==================== LADY WITH LAPTOP ==================== */}
          {/* Paper sheet in left hand subtly rustling */}
          <g ref={paperSheetRef} transform="translate(468, 88)" style={{ transformOrigin: "468px 88px" }}>
            <rect x="-8" y="-12" width="16" height="24" rx="2" fill="#FFFFFF" stroke="#2B333B" strokeWidth="1.5" />
            <line x1="-5" y1="-7" x2="5" y2="-7" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="-5" y1="-3" x2="4" y2="-3" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="-5" y1="1" x2="5" y2="1" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="-5" y1="5" x2="2" y2="5" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
            {/* Thumb holding paper */}
            <ellipse cx="6" cy="4" rx="3.5" ry="2.5" fill="#E07A5F" stroke="#2B333B" strokeWidth="1.2" />
          </g>

          {/* Typing Hand on Laptop keyboard */}
          <g ref={typingHandRef} transform="translate(476, 123)" className="will-change-transform">
            {/* Blue sleeve cuff */}
            <polygon points="-9,-5 0,-2 -2,6 -10,3" fill="#1D8FF2" stroke="#2B333B" strokeWidth="1.5" />
            {/* Hand & fingers tapping */}
            <ellipse cx="3" cy="2" rx="6.5" ry="4.5" fill="#E07A5F" stroke="#2B333B" strokeWidth="1.5" />
          </g>

          {/* ==================== PAINTER ==================== */}
          {/* Dynamic Fresh Blue Paint Stroke on Card */}
          <rect
            ref={paintStrokeRef}
            x="626"
            y="482"
            width="40"
            height="45"
            rx="3"
            fill="#38BDF8"
            opacity="0.88"
            className="will-change-transform"
          />

          {/* Moving Forearm, Hand & Paint Roller */}
          <g
            ref={painterArmRef}
            style={{ transformOrigin: "694px 523px" }}
            className="will-change-transform"
          >
            {/* Sleeve Forearm */}
            <polygon
              points="694,517 658,517 658,529 694,529"
              fill="#333C48"
              stroke="#1F2937"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Tool Handle */}
            <line
              x1="653"
              y1="505"
              x2="653"
              y2="539"
              stroke="#1F2937"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Hand Grip */}
            <ellipse
              cx="653"
              cy="522"
              rx="7"
              ry="6"
              fill="#E07A5F"
              stroke="#1F2937"
              strokeWidth="2"
            />
            {/* Steel Wire Arm */}
            <path
              d="M 653 505 L 653 490 L 670 490 L 670 478 L 662 478"
              fill="none"
              stroke="#1F2937"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Roller Cylinder */}
            <rect
              x="626"
              y="470"
              width="40"
              height="15"
              rx="4"
              fill="#38BDF8"
              stroke="#1F2937"
              strokeWidth="2"
            />
          </g>

          {/* ==================== WRENCH WOMAN ==================== */}
          {/* Character dragging giant wrench across floor */}
          <g ref={wrenchWomanRef} className="will-change-transform">
            <image
              href="/wrench-woman.png"
              x="130"
              y="495"
              width="365"
              height="231"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
