"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SpirographVar1,
  SpirographVar2,
  SpirographVar3,
  SpirographVar4,
} from "./process-spirographs";

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

export function ProcessSection() {
  return (
    <>
      <section
        id="positioning"
        className="relative [clip-path:inset(0)] px-5 pt-16 pb-20 md:px-8 md:pt-20 md:pb-28 lg:px-12 lg:pt-24 lg:pb-32 bg-[#07090c] text-white"
      >
        {/* FIXED GLOBE BACKGROUND (CLIPPED TO SECTION BOUNDS) */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
        >
          <Image
            src="/globe-bg.png"
            alt="Why Businesses Choose Us background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom select-none pointer-events-none opacity-40"
          />
          {/* Atmospheric vignette & blend */}
          <div className="absolute inset-0 bg-[#07090c]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090c] via-transparent to-[#07090c]/80" />
        </div>

        {/* SUBTLE ARCHITECTURAL GRAIN / GRID ACCENT */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* SECTION HEADER - MATURE, CLEAN, CONFIDENT (NO WAVY ANIMATIONS) */}
        <div className="relative z-10 mx-auto max-w-7xl mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 mb-3 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span className="font-caveat text-lg text-white/90">
                Why Us
              </span>
            </div>
            <h2 className="font-unbounded text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] leading-[1.04] font-bold text-white tracking-tight">
              Why Businesses Choose Us
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-white/80 font-normal">
              We build fast, modern websites that make your business look credible and help you win real clients.
            </p>
          </div>
        </div>

        {/* BENTO GRID: 4 CARDS (2-ROW ASYMMETRIC BENTO LAYOUT WITH ROUNDED EDGES) */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* 1. MODERN DESIGN (WIDE BENTO CARD - 7 COLS) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between lg:col-span-7 transition-all duration-300 hover:border-white/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-semibold">
                      First Impressions
                    </span>
                  </div>
                </div>
                <h3 className="font-unbounded text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Modern Design
                </h3>
                <p className="mt-2 text-sm sm:text-[0.95rem] text-white/80 leading-relaxed font-normal max-w-xl">
                  A clean, well-crafted website makes clients take your business seriously before they even get on a call with you.
                </p>
              </div>

              {/* UI COMPONENT ASSET: Hand Presenting Modern Dashboard Cards */}
              <div className="relative mt-6 sm:mt-8 w-full aspect-[16/10] sm:aspect-[2/1] overflow-hidden rounded-xl bg-black/30 border border-white/5 flex items-center justify-center p-2">
                <Image
                  src="/why-us/Hand Presenting Modern Dashboard Cards.png"
                  alt="Modern Design UI Dashboard Showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </motion.div>

            {/* 2. FOUNDER & LEAD ENGINEER (COMPACT PROFILE CARD - 5 COLS, NOT TOO LONG) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between lg:col-span-5 transition-all duration-300 hover:border-white/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 group-hover:scale-125 transition-transform" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-orange-300 font-semibold">
                      No Middlemen
                    </span>
                  </div>
                </div>
                <h3 className="font-unbounded text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Direct Collaboration
                </h3>
                <p className="mt-2 text-sm sm:text-[0.95rem] text-white/80 leading-relaxed font-normal">
                  You work directly with the developer building your site. No account managers, no phone tag, no waiting days for simple answers.
                </p>
              </div>

              {/* COMPACT PROFILE BADGE (TIGHT, SLEEK, NOT LONG) */}
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/40 p-4 sm:p-5 backdrop-blur-md">
                  <div className="relative h-20 w-20 sm:h-22 sm:w-22 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-[#12151c]">
                    <Image
                      src="/Isaac Winner 2.png"
                      alt="Isaac Winner - Founder & Lead Engineer"
                      fill
                      sizes="90px"
                      className="object-cover object-top grayscale transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-unbounded text-2xl sm:text-3xl font-bold text-white">4+</span>
                      <span className="text-[11px] uppercase tracking-wider text-cyan-300 font-semibold">Years Experience</span>
                    </div>
                    <p className="mt-1 text-xs text-white/70 leading-snug">
                      Building custom websites and web applications.
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/80 truncate">
                        Isaac Winner · Lead Engineer
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <span className="font-unbounded text-lg font-bold text-white">100%</span>
                    <p className="text-[11px] text-white/60 mt-0.5">Delivery Rate</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <span className="font-unbounded text-lg font-bold text-white">Direct</span>
                    <p className="text-[11px] text-white/60 mt-0.5">WhatsApp & Slack</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. MOBILE FIRST (COMPACT BENTO CARD - 5 COLS) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between lg:col-span-5 transition-all duration-300 hover:border-white/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-semibold">
                      Mobile Optimized
                    </span>
                  </div>
                </div>
                <h3 className="font-unbounded text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Mobile First
                </h3>
                <p className="mt-2 text-sm sm:text-[0.95rem] text-white/80 leading-relaxed font-normal">
                  Over 80% of your visitors browse on phones. We ensure every page loads fast, looks sharp, and feels effortless to navigate on mobile.
                </p>
              </div>

              {/* UI COMPONENT ASSET: Shoply Fashion App Showcase */}
              <div className="relative mt-6 sm:mt-8 w-full aspect-[16/10] sm:aspect-[2/1] overflow-hidden rounded-xl bg-black/30 border border-white/5 flex items-center justify-center p-2">
                <Image
                  src="/why-us/Shoply Fashion App Showcase.png"
                  alt="Mobile First responsive layout showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </motion.div>

            {/* 4. FAST COMMUNICATION (WIDE BENTO CARD - 7 COLS) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between lg:col-span-7 transition-all duration-300 hover:border-white/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-300 font-semibold">
                      Clear Updates
                    </span>
                  </div>
                </div>
                <h3 className="font-unbounded text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Fast Communication
                </h3>
                <p className="mt-2 text-sm sm:text-[0.95rem] text-white/80 leading-relaxed font-normal max-w-xl">
                  You will never have to chase us down for progress. We share regular updates on WhatsApp or Slack so you always know what is happening.
                </p>
              </div>

              {/* UI COMPONENT ASSET: Fast Communication UI Cards */}
              <div className="relative mt-6 sm:mt-8 w-full aspect-[16/10] sm:aspect-[2/1] overflow-hidden rounded-xl bg-black/30 border border-white/5 flex items-center justify-center p-2">
                <Image
                  src="/why-us/Fast Communication UI Cards.png"
                  alt="Fast Communication and real-time updates"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8 md:py-16 lg:px-12 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-caveat text-xl sm:text-2xl text-[var(--ink-faint)]">
            Execution
          </p>
          <h2 className="font-unbounded mt-1 text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] leading-[1.04] font-bold text-black tracking-tight">
            How We Work
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-[var(--ink-soft)] font-normal">
            A clear, step-by-step process to get your website built and launched without headaches.
          </p>
        </div>

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
