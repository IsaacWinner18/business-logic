"use client";

import { SectionHeading } from "@/components/landing/shared";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Macbook3D } from "./macbook-3d";
import { useRef } from "react";

// Top-right irregular silhouette paths (morphs every 2s)
const TOP_RIGHT_PATHS = [
  "M 460 250 C 468 371, 500 367, 420 420 C 340 473, 377 393, 250 390 C 123 387, 152 466, 87 413 C 22 360, 81 375, 80 250 C 79 125, 19 133, 84 84 C 149 35, 131 113, 250 120 C 369 127, 318 53, 398 102 C 478 151, 452 129, 460 250 Z",
  "M 490 250 C 482 339, 447 269, 356 356 C 265 443, 333 477, 250 480 C 167 483, 230 450, 137 363 C 44 276, 0 331, 5 250 C 10 169, 58 235, 151 151 C 244 67, 164 41, 250 30 C 336 19, 286 39, 377 123 C 468 207, 498 161, 490 250 Z",
  "M 410 250 C 413 377, 481 355, 420 420 C 359 485, 380 419, 250 420 C 120 421, 128 488, 77 423 C 26 358, 106 372, 115 250 C 125 128, 51 178, 102 102 C 153 26, 132 56, 250 50 C 368 44, 352 11, 413 87 C 474 163, 407 123, 410 250 Z",
  "M 480 250 C 477 349, 464 286, 377 377 C 290 468, 336 501, 250 490 C 164 479, 231 440, 151 349 C 71 258, 70 355, 40 250 C 10 145, -7 130, 73 73 C 153 16, 132 84, 250 100 C 368 116, 297 59, 384 116 C 471 173, 483 151, 480 250 Z",
];

// Bottom-left irregular silhouette paths (morphs every 2s)
const BOTTOM_LEFT_PATHS = [
  "M 420 250 C 431 371, 488 353, 423 423 C 358 493, 376 440, 250 435 C 124 430, 146 479, 91 409 C 36 339, 112 378, 105 250 C 98 122, 18 140, 73 73 C 128 7, 128 63, 250 75 C 372 87, 330 39, 395 105 C 460 172, 409 129, 420 250 Z",
  "M 475 250 C 480 334, 453 272, 367 367 C 282 462, 336 503, 250 500 C 164 497, 227 455, 140 360 C 53 265, 25 339, 20 250 C 15 161, 39 217, 126 126 C 213 35, 164 2, 250 10 C 336 18, 268 56, 353 147 C 439 238, 470 166, 475 250 Z",
  "M 435 250 C 449 360, 483 354, 413 413 C 343 472, 378 401, 250 405 C 122 409, 153 482, 77 423 C 1 364, 23 355, 50 250 C 77 145, 71 240, 147 147 C 223 54, 163 14, 250 5 C 337 -4, 307 30, 377 123 C 447 216, 421 140, 435 250 Z",
  "M 495 250 C 474 355, 453 276, 360 360 C 267 444, 342 462, 250 470 C 158 478, 210 465, 119 381 C 28 297, 21 360, 10 250 C -1 140, 0 150, 91 91 C 182 32, 127 98, 250 95 C 374 92, 323 25, 416 84 C 509 143, 516 145, 495 250 Z",
];

const projects = [
  {
    title: "Dben Real Estates",
    category: "Real Estate · Scaling Architecture",
    metric: "Bespoke property system",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1780229406/Screenshot_2026-05-31_130940_y1tuf3.png",
  },
  {
    title: "Earnstak",
    category: "Creator Economy · Commerce & Link Hub",
    metric: "All-in-One Platform",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783940517/Screenshot_2026-07-13_115221_vpr9lr.png",
  },
  {
    title: "Exampreps",
    category: "EdTech · Built From Scratch & PWA",
    metric: "Installable PWA & CBT",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783873796/Screenshot_2026-07-12_172934_qxzilr.png",
  },
  {
    title: "Buychow Ng Group",
    category: "Foodtech · Performance Architecture",
    metric: "60% faster load time",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1778334695/Screenshot_2026-05-09_144304_n36rfa.png",
  },
  {
    title: "Santorini",
    category: "Hospitality · Hotel Booking",
    metric: "Direct booking engine",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783874011/Screenshot_2026-07-12_173311_dqd6ee.png",
  },
];

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-20 lg:px-12 bg-cyan-800 text-white"
    >
      {/* ANIMATING IRREGULAR SILHOUETTE - TOP RIGHT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 sm:-top-24 sm:-right-24 md:-top-32 md:-right-32 w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[620px] lg:h-[620px] z-0 select-none opacity-35 md:opacity-40"
      >
        <div className="absolute inset-10 rounded-full bg-cyan-300/35 blur-[50px] pointer-events-none" />
        <svg
          viewBox="0 0 500 500"
          className="relative w-full h-full will-change-transform"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d={TOP_RIGHT_PATHS[0]}
            animate={{
              d: [...TOP_RIGHT_PATHS, TOP_RIGHT_PATHS[0]],
              rotate: [0, 8, -6, 10, 0],
              scale: [1, 1.05, 0.96, 1.04, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
            fill="#67e8f9"
            className="fill-cyan-300"
          />
        </svg>
      </div>

      {/* ANIMATING IRREGULAR SILHOUETTE - BOTTOM LEFT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 sm:-bottom-28 sm:-left-28 md:-bottom-36 md:-left-36 w-80 h-80 sm:w-96 sm:h-96 md:w-[520px] md:h-[520px] lg:w-[640px] lg:h-[640px] z-0 select-none opacity-35 md:opacity-40"
      >
        <div className="absolute inset-10 rounded-full bg-cyan-300/35 blur-[50px] pointer-events-none" />
        <svg
          viewBox="0 0 500 500"
          className="relative w-full h-full will-change-transform"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d={BOTTOM_LEFT_PATHS[0]}
            animate={{
              d: [...BOTTOM_LEFT_PATHS, BOTTOM_LEFT_PATHS[0]],
              rotate: [0, -10, 8, -6, 0],
              scale: [1, 0.96, 1.06, 0.98, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
            fill="#67e8f9"
            className="fill-cyan-300"
          />
        </svg>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <SectionHeading
          badge="The track record"
          title="Proven Results"
          description="Selected engagements where clarity, premium positioning, and stronger conversion mechanics changed the conversation."
          centered={false}
          dark={true}
          badgeClassName="text-white/90"
          titleClassName="text-white"
          descriptionClassName="text-white/90"
        />
        <div className="flex items-center gap-3 md:gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/30 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/30 active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
          <Link 
            href="/case-studies"
            className="group inline-flex h-11 md:h-12 items-center gap-2 rounded-full border border-white/20 bg-orange-600 px-5 md:px-6 font-unbounded text-sm text-white transition-all hover:border-white/40 hover:bg-orange-500 shadow-md"
          >
            <span className="hidden md:inline text-white">See all case studies</span>
            <span className="md:hidden text-white">See all</span>
            <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white" size={16} />
          </Link>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="relative z-10 mt-10 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar"
      >
        {projects.map((project, index) => (
          <motion.article 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            key={project.title}
            className="snap-start min-w-[85vw] md:min-w-[45vw] lg:min-w-[40vw] flex-shrink-0"
          >
            <div className="editorial-card overflow-hidden group rounded-xl">
              <div className="relative aspect-[16/10] bg-[#e9dfd4] overflow-hidden group-hover:bg-[#e0d4c8] transition-colors duration-[1s]">
                <Macbook3D imageSrc={project.image} />
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full font-caveat text-[1.2rem] text-white shadow-sm border border-white/15">
                  {project.metric}
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-unbounded text-[1.7rem] leading-tight text-white">
                  {project.title}
                </h3>
                <p className="font-caveat mt-2 text-[1.4rem] text-white/85">
                  {project.category}
                </p>
              </div>
              <ArrowUpRight className="mt-2 text-cyan-300 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
