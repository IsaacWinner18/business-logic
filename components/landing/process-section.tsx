"use client";

import { SectionHeading } from "@/components/landing/shared";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ModernDesignVisual,
  FastCommunicationVisual,
  MobileFirstVisual,
  ResultsFocusedVisual,
} from "./process-card-visuals";
import {
  SpirographVar1,
  SpirographVar2,
  SpirographVar3,
  SpirographVar4,
} from "./process-spirographs";

const positioningPoints = [
  {
    title: "Modern Design",
    copy: "We create clean websites that immediately improve your brand image.",
    Visual: ModernDesignVisual,
  },
  {
    title: "Fast Communication",
    copy: "No disappearing. No endless delays. Clear updates throughout the project.",
    Visual: FastCommunicationVisual,
  },
  {
    title: "Mobile First",
    copy: "Most users browse with phones. Your website will be optimized for mobile users first.",
    Visual: MobileFirstVisual,
  },
  {
    title: "Results Focused",
    copy: "We build with business goals in mind - not just aesthetics.",
    Visual: ResultsFocusedVisual,
  },
];

const processSteps = [
  {
    title: "Consultation",
    copy: "We understand your business, goals, and what you need.",
    color: "#E87EA1",
    Spirograph: SpirographVar1,
  },
  {
    title: "Design",
    copy: "We create a modern design tailored to your brand.",
    color: "#EE2677",
    Spirograph: SpirographVar2,
  },
  {
    title: "Development",
    copy: "We build your website using fast and reliable technologies.",
    color: "#FB62F6",
    Spirograph: SpirographVar3,
  },
  {
    title: "Launch",
    copy: "Your website goes live and is ready for customers.",
    color: "#FF4242",
    Spirograph: SpirographVar4,
  },
];

const headerWords = ["Why", "Businesses", "Choose", "Us"];

export function ProcessSection() {
  const leftPoints = positioningPoints.slice(0, 2);
  const rightPoints = positioningPoints.slice(2, 4);

  return (
    <>
      <section
        id="positioning"
        className="relative overflow-hidden px-5 pt-12 pb-20 md:px-8 md:pt-16 md:pb-24 lg:px-12 lg:pt-18 lg:pb-28 bg-cyan-400"
      >
        {/* CYAN-800 TONAL OVERLAY */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-cyan-800/85" />

        {/* SUBTLE PAPER-GRAINY CRISPY SVG TEXTURE */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-45 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrain)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "180px 180px",
          }}
        />

        {/* SEMANTIC HEADING FOR ACCESSIBILITY & SEO */}
        <h2 className="sr-only">Why Businesses Choose Us</h2>

        {/* ANIMATED BACKGROUND HEADING (STRETCHED WITH PARABOLIC/UMBRELLA ARC) */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-x-0 top-6 sm:top-8 md:top-10 flex flex-col items-center justify-center overflow-hidden z-0 px-4"
        >
          <div className="text-center font-unbounded font-black uppercase tracking-[0.16em] sm:tracking-[0.22em] md:tracking-[0.28em] text-white select-none scale-x-[1.03] origin-center">
            <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 md:gap-x-7 text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] leading-tight">
              {headerWords.map((word, wordIdx) => (
                <span key={wordIdx} className="inline-flex whitespace-nowrap">
                  {Array.from(word).map((char, charIdx) => {
                    const cumulativeIdx =
                      headerWords.slice(0, wordIdx).join("").length + charIdx;
                    return (
                      <motion.span
                        key={charIdx}
                        className="inline-block"
                        animate={{
                          y: [-3, 3, -3],
                          opacity: [0.9, 1, 0.9],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: cumulativeIdx * 0.05,
                        }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </div>
          </div>

          {/* SUBTLE PARABOLIC / UMBRELLA CURVED ARC UNDER THE TEXT */}
          <div className="flex justify-center mt-3 sm:mt-3.5 opacity-85">
            <svg
              viewBox="0 0 600 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[300px] sm:w-[460px] md:w-[580px] lg:w-[680px] xl:w-[740px] h-auto stroke-white"
            >
              {/* Terminal datum dots */}
              <circle cx="30" cy="24" r="1.5" fill="white" opacity="0.6" />
              <circle cx="570" cy="24" r="1.5" fill="white" opacity="0.6" />

              {/* Primary parabolic / umbrella arch */}
              <path
                d="M 35 24 Q 300 4 565 24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.9"
              />

              {/* Secondary harmonic dashed echo */}
              <path
                d="M 75 25 Q 300 10 525 25"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                strokeLinecap="round"
                opacity="0.4"
              />

              {/* Subtle umbrella radial guide spokes */}
              <line x1="300" y1="4" x2="300" y2="12" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
              <line x1="210" y1="8" x2="210" y2="15" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.3" />
              <line x1="390" y1="8" x2="390" y2="15" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.3" />

              {/* Apex anchor dot */}
              <circle cx="300" cy="4" r="2" fill="white" opacity="0.95" />
            </svg>
          </div>
        </div>

        {/* 3-COLUMN CONTENT GRID: LEFT 2 POINTS | CENTER IMAGE | RIGHT 2 POINTS */}
        <div className="relative z-10 mx-auto max-w-7xl mt-12 sm:mt-14 md:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* LEFT COLUMN: 2 POINTS */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1"
            >
              {leftPoints.map((point) => (
                <div
                  key={point.title}
                  className="group relative overflow-hidden border border-white/20 bg-black/15 p-6 md:p-8 transition-colors duration-300 hover:border-white/50 hover:bg-black/25"
                >
                  {/* SUBTLE ARCHITECTURAL DRAFTING GRID */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.05] transition-opacity duration-500 group-hover:opacity-[0.10]"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                      backgroundSize: "24px 24px",
                      maskImage: "radial-gradient(ellipse at 85% 15%, black 20%, transparent 80%)",
                      WebkitMaskImage: "radial-gradient(ellipse at 85% 15%, black 20%, transparent 80%)",
                    }}
                  />

                  {/* BESPOKE MATHEMATICAL / ARCHITECTURAL DRAFTING SCHEMATIC */}
                  <div className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100">
                    <point.Visual />
                  </div>

                  <div className="relative z-10 mb-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-300/70 group-hover:bg-white transition-colors" />
                  </div>

                  <h3 className="relative z-10 font-unbounded text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                    {point.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm md:text-[0.95rem] leading-relaxed text-white/80 font-normal">
                    {point.copy}
                  </p>

                  {/* Decorative technical corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </motion.div>

            {/* CENTER COLUMN: PORTRAIT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-[22rem] sm:max-w-[25rem] lg:max-w-[24rem] xl:max-w-[26rem] order-1 lg:order-2"
            >
              <div className="relative p-3 group border border-white/20 bg-black/15">
                <div className="relative aspect-[4/4.8] bg-[#d9d1c8] overflow-hidden">
                  <Image
                    src="/Isaac Winner 2.png"
                    alt="Business consultant portrait"
                    fill
                    sizes="(max-width: 1024px) 100vw, 26rem"
                    className="object-cover grayscale transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 max-w-[15rem] bg-[var(--accent)] p-5 md:p-6 text-white border border-white/20">
                <p className="font-unbounded text-3xl font-bold text-white">4+</p>
                <p className="font-caveat mt-2 text-[1.3rem] leading-5 text-white/95">
                  Years of combined digital strategy and execution across the market
                </p>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: 2 POINTS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6 lg:gap-8 order-3"
            >
              {rightPoints.map((point) => (
                <div
                  key={point.title}
                  className="group relative overflow-hidden border border-white/20 bg-black/15 p-6 md:p-8 transition-colors duration-300 hover:border-white/50 hover:bg-black/25"
                >
                  {/* SUBTLE ARCHITECTURAL DRAFTING GRID */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.05] transition-opacity duration-500 group-hover:opacity-[0.10]"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                      backgroundSize: "24px 24px",
                      maskImage: "radial-gradient(ellipse at 85% 15%, black 20%, transparent 80%)",
                      WebkitMaskImage: "radial-gradient(ellipse at 85% 15%, black 20%, transparent 80%)",
                    }}
                  />

                  {/* BESPOKE MATHEMATICAL / ARCHITECTURAL DRAFTING SCHEMATIC */}
                  <div className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100">
                    <point.Visual />
                  </div>

                  <div className="relative z-10 mb-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-300/70 group-hover:bg-white transition-colors" />
                  </div>

                  <h3 className="relative z-10 font-unbounded text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                    {point.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm md:text-[0.95rem] leading-relaxed text-white/80 font-normal">
                    {point.copy}
                  </p>

                  {/* Decorative technical corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8 md:py-16 lg:px-12 bg-white">
        <SectionHeading
          badge="Execution"
          title="Engineering the Process"
          description="A precise, zero-fluff methodology that moves your project from concept to deployment."
        />

        <div className="mt-12 w-full max-w-7xl mx-auto border border-black/20 overflow-hidden">
          {/* PROCESS CONTENT GRID - CONNECTED CARDS SEPARATED BY VERTICAL LINES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div
                key={step.title}
                style={{ backgroundColor: step.color }}
                className={`relative overflow-hidden p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 group hover:brightness-105 min-h-[220px] sm:min-h-[240px] lg:min-h-[260px] ${
                  idx < 3 ? "border-b border-white/25 md:border-b-0" : ""
                } ${
                  idx % 2 === 0 ? "md:border-r md:border-white/25 lg:border-r-0" : ""
                } ${
                  idx < 2 ? "md:border-b md:border-white/25 lg:border-b-0" : ""
                } ${
                  idx < 3 ? "lg:border-r lg:border-white/25" : ""
                }`}
              >
                {/* PROCEDURAL ANIMATED SPIROGRAPH IN TOP-RIGHT BACKGROUND */}
                <div className="pointer-events-none absolute -top-10 -right-10 sm:-top-14 sm:-right-14 w-52 h-52 sm:w-60 sm:h-60 lg:w-64 lg:h-64 opacity-25 group-hover:opacity-40 transition-opacity duration-500">
                  <step.Spirograph />
                </div>

                {/* SUBTLE ARCHITECTURAL DRAFTING GRID ON CARD */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.10]"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />

                <div className="relative z-10">
                  {/* CARD HEADER - MINIMALIST STATUS DATUM (NO PHASE NUMBERING) */}
                  <div className="flex items-center justify-between mb-8 sm:mb-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/70 group-hover:bg-white transition-colors" />
                    <div className="w-6 h-px bg-white/30 group-hover:w-10 group-hover:bg-white/60 transition-all duration-300" />
                  </div>
                  
                  <h3 className="font-unbounded text-xl text-white mb-3 font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/95 font-medium">
                    {step.copy}
                  </p>
                </div>

                {/* Decorative technical corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
