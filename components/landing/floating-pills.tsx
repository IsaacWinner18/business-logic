"use client";

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

interface PillConfig {
  id: string;
  label: string;
  badge?: string;
  color: string; // Hex color for the pill
  splitColor?: string; // Optional split half color (e.g. white or dark for dual-tone capsule)
  textColor: string;
  width: number;
  height: number;
}

const PILL_CONFIGS: PillConfig[] = [
  {
    id: "pill-1",
    label: "E-COMMERCE",
    badge: "+",
    color: "#FB5607", // Vivid Orange
    textColor: "#FFFFFF",
    width: 145,
    height: 38,
  },
  {
    id: "pill-2",
    label: "LANDING PAGES",
    badge: "⚡",
    color: "#FF006E", // Hot Pink / Magenta
    textColor: "#FFFFFF",
    width: 155,
    height: 38,
  },
  {
    id: "pill-3",
    label: "SAAS APPS",
    badge: "✦",
    color: "#3A86FF", // Electric Blue
    textColor: "#FFFFFF",
    width: 135,
    height: 38,
  },
  {
    id: "pill-4",
    label: "DESIGN SYSTEMS",
    badge: "01",
    color: "#020887", // Deep Cobalt
    textColor: "#FFFFFF",
    width: 160,
    height: 38,
  },
  {
    id: "pill-5",
    label: "PORTFOLIOS",
    badge: "★",
    color: "#7C6A0A", // Olive Gold
    textColor: "#FFFFFF",
    width: 140,
    height: 38,
  },
  {
    id: "pill-6",
    label: "STARTUPS & MVP",
    badge: "↗",
    color: "#FB5607", // Vivid Orange
    textColor: "#FFFFFF",
    width: 155,
    height: 38,
  },
  {
    id: "pill-7",
    label: "WEB APPS",
    badge: "⬡",
    color: "#3A86FF", // Electric Blue
    textColor: "#FFFFFF",
    width: 130,
    height: 38,
  },
  {
    id: "pill-8",
    label: "REVAMP & SCALE",
    badge: "↻",
    color: "#020887", // Deep Cobalt
    textColor: "#FFFFFF",
    width: 155,
    height: 38,
  },
  {
    id: "pill-9",
    label: "AI INTEGRATION",
    badge: "✦",
    color: "#FF006E", // Hot Pink / Magenta
    textColor: "#FFFFFF",
    width: 155,
    height: 38,
  },
  {
    id: "pill-10",
    label: "SEO & GROWTH",
    badge: "↗",
    color: "#FB5607", // Vivid Orange
    textColor: "#FFFFFF",
    width: 145,
    height: 38,
  },
  {
    id: "pill-11",
    label: "CUSTOM CMS",
    badge: "★",
    color: "#7C6A0A", // Olive Gold
    textColor: "#FFFFFF",
    width: 140,
    height: 38,
  },
];

export function FloatingPills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pillLabelElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isFlippedRef = useRef<boolean[]>([]);
  const hasTriggeredRef = useRef(false);
  const hasEnteredRef = useRef<boolean[]>([]);
  const currentWidthRef = useRef(380);
  const currentHeightRef = useRef(380);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    isFlippedRef.current = new Array(PILL_CONFIGS.length).fill(false);
    hasEnteredRef.current = new Array(PILL_CONFIGS.length).fill(false);

    // Matter modules
    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = Matter;

    const engine = Engine.create({
      gravity: {
        x: 0,
        y: 0, // Starts at 0 gravity; activates when scrolled into view
        scale: 0.001,
      },
    });

    const runner = Runner.create();
    const rect = container.getBoundingClientRect();
    const width = rect.width || container.clientWidth || 380;
    const height = rect.height || container.clientHeight || 380;
    currentWidthRef.current = width;
    currentHeightRef.current = height;

    // Boundary paddings: 36px bottom clearance so pills rest cleanly above the card border
    const floorPadding = 36;
    const sidePadding = 14;
    const wallThickness = 140;
    const wallHeight = 4000;

    const floor = Bodies.rectangle(
      width / 2,
      height - floorPadding + wallThickness / 2,
      width * 4,
      wallThickness,
      { isStatic: true, friction: 0.6, restitution: 0.25 }
    );

    const leftWall = Bodies.rectangle(
      sidePadding - wallThickness / 2,
      height / 2,
      wallThickness,
      wallHeight,
      { isStatic: true, friction: 0.5, restitution: 0.25 }
    );

    const rightWall = Bodies.rectangle(
      width - sidePadding + wallThickness / 2,
      height / 2,
      wallThickness,
      wallHeight,
      { isStatic: true, friction: 0.5, restitution: 0.25 }
    );

    // Ceiling starts high up to allow pills to fall into view freely
    const ceiling = Bodies.rectangle(
      width / 2,
      -1200,
      width * 4,
      wallThickness,
      { isStatic: true }
    );

    Composite.add(engine.world, [floor, leftWall, rightWall, ceiling]);

    // Helper to calculate off-screen spawn coordinates staggered in rows above the card
    const getSpawnPosition = (idx: number, w: number) => {
      const numCols = w > 500 ? 3 : 2;
      const col = idx % numCols;
      const row = Math.floor(idx / numCols);
      const colWidth = (w - sidePadding * 2) / numCols;
      const colX = sidePadding + (col + 0.5) * colWidth + ((idx % 3) * 12 - 12);
      const rowY = -65 - row * 70;
      const initialAngle = ((idx % 4) - 1.5) * 0.14;
      return { colX, rowY, initialAngle };
    };

    // Create Capsule Pill Bodies - distributed ABOVE the visible top of the container
    const pillBodies: Matter.Body[] = [];

    PILL_CONFIGS.forEach((cfg, idx) => {
      const { colX, rowY, initialAngle } = getSpawnPosition(idx, width);

      const body = Bodies.rectangle(colX, rowY, cfg.width, cfg.height, {
        chamfer: { radius: cfg.height / 2 }, // Capsule rounding
        restitution: 0.38, // Lively bounce
        friction: 0.4,
        frictionAir: 0.02,
        density: 0.002,
        angle: initialAngle,
      });

      pillBodies.push(body);
    });

    Composite.add(engine.world, pillBodies);

    // Add interactive Mouse Constraint (drag, throw, toss pills)
    const mouse = Mouse.create(container);
    // Remove mouse wheel scroll interference so user can scroll page smoothly
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (mouse as any).element.removeEventListener(
      "mousewheel",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (mouse as any).mousewheel
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (mouse as any).element.removeEventListener(
      "DOMMouseScroll",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (mouse as any).mousewheel
    );

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Composite.add(engine.world, mouseConstraint);

    // Sync DOM pill elements with Matter.js physical bodies and enforce strict viewport containment
    Events.on(engine, "afterUpdate", () => {
      const curW = currentWidthRef.current;
      const curH = currentHeightRef.current;

      pillBodies.forEach((body, idx) => {
        const cfg = PILL_CONFIGS[idx];
        const halfW = cfg.width / 2;
        const halfH = cfg.height / 2;

        const maxY = curH - floorPadding - halfH;
        const minY = halfH + 8;
        const minX = sidePadding + halfW;
        const maxX = curW - sidePadding - halfW;

        let posX = body.position.x;
        let posY = body.position.y;
        let needsCorrection = false;

        // Mark as entered once pill has descended into the visible container
        if (posY >= minY) {
          hasEnteredRef.current[idx] = true;
        }

        if (posY > maxY) {
          posY = maxY;
          needsCorrection = true;
        } else if (hasEnteredRef.current[idx] && posY < minY) {
          posY = minY;
          needsCorrection = true;
        }

        if (posX < minX) {
          posX = minX;
          needsCorrection = true;
        } else if (posX > maxX) {
          posX = maxX;
          needsCorrection = true;
        }

        if (needsCorrection) {
          Body.setPosition(body, { x: posX, y: posY });
          Body.setVelocity(body, {
            x: body.velocity.x * 0.6,
            y: Math.min(0, body.velocity.y),
          });
        }

        const el = pillElementsRef.current[idx];
        if (el) {
          const x = body.position.x - halfW;
          const y = body.position.y - halfH;
          el.style.transform = `translate3d(${x}px, ${y}px, 0px) rotate(${body.angle}rad)`;
        }

        // Adaptive orientation: prevent text from appearing upside down
        const cos = Math.cos(body.angle);
        const wasFlipped = isFlippedRef.current[idx];
        let shouldFlip = wasFlipped;

        if (!wasFlipped && cos < -0.15) {
          shouldFlip = true;
        } else if (wasFlipped && cos > 0.15) {
          shouldFlip = false;
        }

        if (shouldFlip !== wasFlipped) {
          isFlippedRef.current[idx] = shouldFlip;
          const labelEl = pillLabelElementsRef.current[idx];
          if (labelEl) {
            labelEl.style.transform = shouldFlip ? "rotate(180deg)" : "rotate(0deg)";
          }
        }
      });
    });

    Runner.run(runner, engine);

    let hasTriggered = false;
    let ceilingTimeout: ReturnType<typeof setTimeout> | null = null;

    // Trigger gravity on scroll into view
    const triggerFall = () => {
      if (hasTriggered) return;
      hasTriggered = true;
      hasTriggeredRef.current = true;

      // Activate gravity
      engine.gravity.y = 0.95;

      // Ensure ceiling is lifted above
      Body.setPosition(ceiling, { x: currentWidthRef.current / 2, y: -1200 });

      // Staggered downward release for a natural waterfall cascade
      pillBodies.forEach((body, idx) => {
        const row = Math.floor(idx / 3);
        setTimeout(() => {
          Body.setVelocity(body, {
            x: ((idx % 3) - 1) * 0.6 + (Math.random() - 0.5) * 0.8,
            y: 2.2 + Math.random() * 1.5,
          });
          Body.setAngularVelocity(
            body,
            (idx % 2 === 0 ? 1 : -1) * (0.025 + Math.random() * 0.03)
          );
        }, row * 70);
      });

      // Lower ceiling after all pills have entered so interactive dragging stays capped
      if (ceilingTimeout) clearTimeout(ceilingTimeout);
      ceilingTimeout = setTimeout(() => {
        Body.setPosition(ceiling, {
          x: currentWidthRef.current / 2,
          y: -wallThickness / 2,
        });
      }, 2000);
    };

    const resetPills = () => {
      hasTriggered = false;
      hasTriggeredRef.current = false;
      engine.gravity.y = 0;
      hasEnteredRef.current.fill(false);
      if (ceilingTimeout) clearTimeout(ceilingTimeout);

      Body.setPosition(ceiling, { x: currentWidthRef.current / 2, y: -1200 });

      const curW = currentWidthRef.current;
      pillBodies.forEach((body, idx) => {
        const { colX, rowY, initialAngle } = getSpawnPosition(idx, curW);
        Body.setPosition(body, { x: colX, y: rowY });
        Body.setVelocity(body, { x: 0, y: 0 });
        Body.setAngularVelocity(body, 0);
        Body.setAngle(body, initialAngle);
      });
    };

    // IntersectionObserver to detect when section scrolls into viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerFall();
          } else if (entry.intersectionRatio === 0 && hasTriggered) {
            // When completely scrolled out of view, reset so it falls again next time user scrolls here
            resetPills();
          }
        });
      },
      { threshold: [0, 0.15] }
    );

    observer.observe(container);

    // Dynamic resize observer to continuously update floor and walls to real container bounds
    const updateDimensions = (newWidth: number, newHeight: number) => {
      currentWidthRef.current = newWidth;
      currentHeightRef.current = newHeight;

      Body.setPosition(floor, {
        x: newWidth / 2,
        y: newHeight - floorPadding + wallThickness / 2,
      });
      Body.setPosition(leftWall, {
        x: sidePadding - wallThickness / 2,
        y: newHeight / 2,
      });
      Body.setPosition(rightWall, {
        x: newWidth - sidePadding + wallThickness / 2,
        y: newHeight / 2,
      });

      if (hasTriggered) {
        pillBodies.forEach((body, idx) => {
          if (!hasEnteredRef.current[idx]) return;
          const cfg = PILL_CONFIGS[idx];
          const halfW = cfg.width / 2;
          const halfH = cfg.height / 2;
          const maxY = newHeight - floorPadding - halfH;
          const minY = halfH + 8;
          const minX = sidePadding + halfW;
          const maxX = newWidth - sidePadding - halfW;

          let posX = body.position.x;
          let posY = body.position.y;
          let moved = false;

          if (posY > maxY) {
            posY = maxY;
            moved = true;
          } else if (posY < minY) {
            posY = minY;
            moved = true;
          }

          if (posX < minX) {
            posX = minX;
            moved = true;
          } else if (posX > maxX) {
            posX = maxX;
            moved = true;
          }

          if (moved) {
            Body.setPosition(body, { x: posX, y: posY });
            Body.setVelocity(body, { x: 0, y: 0 });
          }
        });
      } else {
        pillBodies.forEach((body, idx) => {
          const { colX, rowY, initialAngle } = getSpawnPosition(idx, newWidth);
          Body.setPosition(body, { x: colX, y: rowY });
          Body.setAngle(body, initialAngle);
        });
      }
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: rw, height: rh } = entry.contentRect;
        if (rw > 50 && rh > 50) {
          updateDimensions(rw, rh);
        }
      }
    });

    resizeObserver.observe(container);

    return () => {
      if (ceilingTimeout) clearTimeout(ceilingTimeout);
      observer.disconnect();
      resizeObserver.disconnect();
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-0 overflow-hidden select-none touch-none cursor-grab active:cursor-grabbing bg-transparent"
    >
      {/* Physics Simulated Pills */}
      {PILL_CONFIGS.map((cfg, idx) => {
        const isSplit = Boolean(cfg.splitColor);

        return (
          <div
            key={cfg.id}
            ref={(el) => {
              pillElementsRef.current[idx] = el;
            }}
            style={{
              width: `${cfg.width}px`,
              height: `${cfg.height}px`,
              transform: "translate3d(0, -600px, 0)",
              willChange: "transform",
            }}
            className="absolute top-0 left-0 rounded-full shadow-[0_12px_24px_-4px_rgba(0,0,0,0.28),0_4px_8px_-2px_rgba(0,0,0,0.18)] cursor-grab active:cursor-grabbing select-none"
          >
            {/* Pill Capsule Body */}
            <div
              className="relative w-full h-full rounded-full overflow-hidden flex items-center border border-black/15"
              style={{
                backgroundColor: cfg.color,
              }}
            >
              {/* Dual-Tone Half Split Capsule */}
              {isSplit && (
                <div
                  className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center border-l border-black/10 shadow-inner"
                  style={{
                    backgroundColor: cfg.splitColor,
                  }}
                >
                  <span
                    className="text-[0.68rem] font-mono font-bold tracking-wider opacity-80"
                    style={{ color: cfg.color }}
                  >
                    {cfg.badge}
                  </span>
                </div>
              )}

              {/* Glossy Cylindrical Specular Highlight */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.12) 38%, rgba(0,0,0,0.04) 75%, rgba(0,0,0,0.22) 100%)",
                }}
              />

              {/* Top Specular Rim Reflection */}
              <div className="absolute top-[3px] left-[14px] right-[14px] h-[1.5px] rounded-full bg-white/60 blur-[0.3px] pointer-events-none" />

              {/* Center Pill Seam / Ring Line for realism */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/15 shadow-[0_0_1px_rgba(255,255,255,0.3)] pointer-events-none" />

              {/* Pill Label Content */}
              <div
                ref={(el) => {
                  pillLabelElementsRef.current[idx] = el;
                }}
                style={{
                  transformOrigin: "center center",
                  transition: "transform 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "transform",
                }}
                className="relative z-10 flex items-center px-4 gap-2 w-full h-full justify-between pointer-events-none select-none"
              >
                <span
                  className="font-unbounded text-[0.7rem] sm:text-[0.74rem] font-bold tracking-wider uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                  style={{
                    color: cfg.textColor,
                  }}
                >
                  {cfg.label}
                </span>

                {cfg.badge && (
                  <span className="text-[0.72rem] font-bold opacity-90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] text-white">
                    {cfg.badge}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
