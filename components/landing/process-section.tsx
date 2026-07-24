"use client";

import { SectionHeading } from "@/components/landing/shared";
import Image from "next/image";
import { motion } from "framer-motion";

const positioningPoints = [
  {
    title: "Modern Design",
    copy: "We create clean websites that immediately improve your brand image.",
  },
  {
    title: "Fast Communication",
    copy: "No disappearing. No endless delays. Clear updates throughout the project.",
  },
  {
    title: "Mobile First",
    copy: "Most users browse with phones. Your website will be optimized for mobile users first.",
  },
  {
    title: "Results Focused",
    copy: "We build with business goals in mind - not just aesthetics.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    copy: "We understand your business, goals, and what you need.",
  },
  {
    number: "02",
    title: "Design",
    copy: "We create a modern design tailored to your brand.",
  },
  {
    number: "03",
    title: "Development",
    copy: "We build your website using fast and reliable technologies.",
  },
  {
    number: "04",
    title: "Launch",
    copy: "Your website goes live and is ready for customers.",
  },
];

export function ProcessSection() {
  return (
    <>
      <section
        id="positioning"
        className="section-shell px-5 py-16 md:px-8 md:py-20 lg:px-12"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-caveat text-2xl text-[var(--ink-faint)]">
              WHY CHOOSE US
            </p>
            <h2 className="font-unbounded mt-2 max-w-md text-[2.2rem] leading-[1.1] text-black md:text-[3rem]">
              Why Businesses Choose Business Logic
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--ink-soft)]">
              We build websites that look professional, work smoothly on mobile,
              and stay aligned with the business goals that matter most to you.
            </p>

            <div className="mt-8 space-y-6">
              {positioningPoints.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="mt-1 h-5 w-5 rounded-full border border-black/15 bg-black/5" />
                  <div>
                    <h3 className="font-unbounded text-[1.1rem] text-black">
                      {point.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[0.95rem] leading-7 text-[var(--ink-soft)]">
                      {point.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[34rem]"
          >
            <div className="editorial-card relative overflow-hidden p-3 group border border-black/10 shadow-none">
              <div className="relative aspect-[4/4.6] bg-[#d9d1c8] overflow-hidden">
                <Image
                  src="/Isaac Winner 2.png"
                  alt="Business consultant portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 34rem"
                  className="object-cover grayscale transition-transform duration-[1.5s] group-hover:scale-105"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 left-0 max-w-[15rem] translate-x-[-2%] translate-y-[18%] bg-[var(--accent)] p-6 text-white md:bottom-0">
              <p className="font-unbounded text-3xl">4+</p>
              <p className="font-caveat mt-2 text-[1.3rem] leading-5 text-white/90">
                Years of combined digital strategy and execution across the market
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell px-5 py-12 md:px-8 md:py-16 lg:px-12 bg-white">
        <SectionHeading
          badge="Execution"
          title="Engineering the Process"
          description="A precise, zero-fluff methodology that moves your project from concept to deployment."
        />

        <div className="mt-12 w-full max-w-7xl mx-auto border border-black/20 bg-white">
          {/* PROCESS CONTENT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-black/20">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative p-6 lg:p-8 flex flex-col bg-white group hover:bg-[#FAFAFA] transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-black/40 font-bold border border-black/10 px-2 py-1 bg-black/5">
                    Phase // {step.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-black/10 group-hover:bg-[var(--accent)] transition-colors" />
                </div>
                
                <h3 className="font-unbounded text-xl text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--ink-soft)] font-medium">
                  {step.copy}
                </p>

                {/* Decorative technical corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
