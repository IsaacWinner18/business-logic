"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

interface ProjectItem {
  brand: string;
  logo: string | null;
  invertLogo?: boolean;
  url: string;
  category: string;
  headline: string;
  title: string;
  description: string;
  metric: string;
  image: string;
}

const projects: ProjectItem[] = [
  {
    brand: "TINO RIDES",
    logo: "/tino_rides_logo.png",
    invertLogo: false,
    url: "tino-rides.vercel.app",
    category: "Automotive & Luxury Travel · Fleet & Chauffeur Platform",
    headline: "Premier luxury car rental. Instant online booking.",
    title: "Premier Luxury Car Rental & VIP Fleet Booking Platform",
    description:
      "A luxury car rental and chauffeur platform where clients can view vehicles, see clear daily rates, and book online in minutes.",
    metric: "Luxury Fleet Platform",
    image: "/tino-rides-nano-banana.jpg",
  },
  {
    brand: "B'Bonds Heavy Haul",
    logo: "/bbonds_logo.png",
    invertLogo: false,
    url: "bbondddd.vercel.app",
    category: "Logistics & Supply Chain · Heavy Haul Transport",
    headline: "Heavy haul logistics. Move what matters across Nigeria.",
    title: "High-Capacity Heavy Haul Logistics & Fleet Operations",
    description:
      "A heavy haul and logistics website that lets industrial clients request transport, track shipments, and move cargo across Nigeria.",
    metric: "Heavy Haul Logistics",
    image: "/bbonds-nano-banana.jpg",
  },
  {
    brand: "Dben Real Estates",
    logo: "/dben_logo.webp",
    invertLogo: true,
    url: "dbenrealestates.com",
    category: "Real Estate · Scaling Architecture",
    headline: "Bespoke property system. Live in three weeks.",
    title: "Scaling Architecture for Luxury Property Discovery",
    description:
      "A luxury real estate website with fast property search, clean photo galleries, and direct WhatsApp inquiries for serious buyers.",
    metric: "Bespoke property system",
    image: "/dben-nano-banana.jpg",
  },
  {
    brand: "Earnstak",
    logo: "/earnstak_logo.webp",
    invertLogo: true,
    url: "earnstak.com",
    category: "Creator Economy · Commerce Hub",
    headline: "One link. Full storefront. Sell anything directly.",
    title: "All-in-One Audience Monetization & Link Platform",
    description:
      "An all-in-one platform for creators and marketers to sell digital products on their own page, sell event tickets, and accept fan tips and gifts.",
    metric: "All-in-One Platform",
    image: "/earnstak-nano-banana.jpg",
  },
  {
    brand: "Santorini",
    logo: "/santorini-main-logo.png",
    invertLogo: true,
    url: "santorini-resort.com",
    category: "Hospitality · Direct Booking",
    headline: "Boutique hotel booking. Zero third-party fees.",
    title: "Hotel Website & Direct Room Reservation System",
    description:
      "A modern hotel website with a direct reservation system, letting guests browse rooms and book their stay without third-party fees.",
    metric: "Direct booking engine",
    image: "/santorini-nano-banana.jpg",
  },
  {
    brand: "Farmergiant",
    logo: "/farmergiant_logo.png",
    invertLogo: false,
    url: "farmergiant.com",
    category: "Agrotech · Equipment E-Commerce",
    headline: "Poultry & farm equipment. Direct online ordering.",
    title: "E-Commerce Store for Poultry Equipment & Farm Supplies",
    description:
      "An e-commerce store for poultry equipment and agricultural supplies, making it simple for commercial farmers to browse and order online.",
    metric: "E-Commerce Catalog",
    image: "/farmergiant-nano-banana.jpg",
  },
];

export function ProjectsSection() {

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
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="font-unbounded text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] leading-[1.02] font-bold text-white tracking-tight">
            Proven Results
          </h2>
          <p className="mt-2.5 max-w-xl text-sm sm:text-base leading-relaxed text-white/90 font-normal">
            Real businesses. Measurable outcomes. Explore the work behind the numbers..
          </p>
        </div>
        <Link 
          href="/case-studies"
          className="hidden md:inline-flex rounded-none bg-orange-600 hover:bg-orange-500 px-6 py-3.5 font-unbounded text-xs font-semibold uppercase tracking-[0.22em] text-white transition-all shadow-md active:scale-95 items-center gap-2 shrink-0"
        >
          <span>Explore More Projects</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* 6 PROJECTS GRID */}
      <div className="relative z-10 mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: (index % 2) * 0.12 }}
            key={project.brand}
            className="group flex flex-col"
          >
            <Link href="/case-studies" className="block focus:outline-none">
              {/* IMAGE CONTAINER (CLEAN 4:3 COMPACT RATIO) */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-[#080a0f] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:shadow-[0_22px_50px_rgba(0,0,0,0.5)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* CARD INFO: LOGO + BRAND, TITLE, DESCRIPTION */}
              <div className="mt-5 flex flex-col gap-2">
                {/* COMPANY LOGO & NAME (NO TAG / EYEBROW) */}
                <div className="flex items-center gap-2">
                  {project.logo ? (
                    <div className="relative flex h-3.5 w-auto items-center shrink-0">
                      <img
                        src={project.logo}
                        alt={`${project.brand} logo`}
                        className={`h-3.5 w-auto max-h-3.5 object-contain ${
                          project.invertLogo ? "brightness-0 invert opacity-90" : "rounded-full"
                        }`}
                      />
                    </div>
                  ) : (
                    <div className="grid h-3.5 w-3.5 place-items-center bg-cyan-400/20 text-[8px] font-mono font-bold text-cyan-300 shrink-0">
                      {project.brand.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                  <span className="font-unbounded text-xs font-bold uppercase tracking-wider text-white">
                    {project.brand}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="font-unbounded mt-1 text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-200 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs sm:text-sm md:text-[0.92rem] leading-relaxed text-white/70 font-normal">
                  {project.description}
                </p>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {/* NON-ROUNDED EXPLORE MORE PROJECTS BUTTON */}
      <div className="relative z-10 mt-14 sm:mt-16 flex justify-center w-full">
        <Link
          href="/case-studies"
          className="rounded-none bg-orange-600 hover:bg-orange-500 px-8 py-4 font-unbounded text-xs font-semibold uppercase tracking-[0.22em] text-white transition-all shadow-md active:scale-95 inline-flex items-center gap-3"
        >
          <span>Explore More Projects</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
