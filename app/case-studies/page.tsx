"use client";

import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface CaseStudy {
  id: string;
  brand: string;
  tagline: string;
  title: string;
  image: string;
  description: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "01",
    brand: "TINO RIDES",
    tagline: "Automotive & Luxury Travel · Fleet & Chauffeur Platform",
    title: "Premier Luxury Car Rental & VIP Fleet Booking Platform",
    image: "/tino-rides-nano-banana.jpg",
    description:
      "A luxury car rental and chauffeur platform where clients can view vehicles, see clear daily rates, and book online in minutes.",
  },
  {
    id: "02",
    brand: "B'Bonds Heavy Haul",
    tagline: "Logistics & Supply Chain · Heavy Haul Transport",
    title: "High-Capacity Heavy Haul Logistics & Fleet Operations",
    image: "/bbonds-nano-banana.jpg",
    description:
      "A heavy haul and logistics website that lets industrial clients request transport, track shipments, and move cargo across Nigeria.",
  },
  {
    id: "03",
    brand: "Dben Real Estates",
    tagline: "Real Estate · Luxury Property Platform",
    title: "Scaling Architecture for Luxury Property Discovery",
    image: "/dben-nano-banana.jpg",
    description:
      "A luxury real estate website with fast property search, clean photo galleries, and direct WhatsApp inquiries for serious buyers.",
  },
  {
    id: "04",
    brand: "Buychow Ng Group",
    tagline: "Foodtech · On-Demand Delivery",
    title: "High-Performance Architecture for an On-Demand Food Platform",
    image: "/buychow-nano-banana.jpg",
    description:
      "An on-demand food delivery platform rebuilt with a fast 3-step checkout, cutting load times and making ordering smooth during rush hours.",
  },
  {
    id: "05",
    brand: "FeemTech",
    tagline: "E-Commerce · Cameras, Drones & Gear",
    title: "E-Commerce Store for Professional Cameras & Drones",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783873692/Screenshot_2026-07-12_164904_wpahph.png",
    description:
      "An e-commerce store for creators and filmmakers to buy cameras, drones, spare parts, and production equipment with seamless checkout.",
  },
  {
    id: "06",
    brand: "Farmergiant",
    tagline: "Agrotech · Equipment E-Commerce",
    title: "E-Commerce Store for Poultry Equipment & Farm Supplies",
    image: "/farmergiant-nano-banana.jpg",
    description:
      "An e-commerce store for poultry equipment and agricultural supplies, making it simple for commercial farmers to browse and order online.",
  },
  {
    id: "07",
    brand: "Earnstak",
    tagline: "Creator Economy · Commerce Hub",
    title: "All-in-One Audience Monetization & Link Platform for Creators",
    image: "/earnstak-nano-banana.jpg",
    description:
      "An all-in-one platform for creators and marketers to sell digital products on their own page, sell event tickets, and accept fan tips and gifts.",
  },
  {
    id: "08",
    brand: "Santorini",
    tagline: "Hospitality · Hotel Website & Direct Booking",
    title: "Hotel Website & Direct Room Reservation System",
    image: "/santorini-nano-banana.jpg",
    description:
      "A modern hotel website with a direct reservation system, letting guests browse rooms and book their stay without third-party fees.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="page-shell bg-white min-h-screen">
      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/90 backdrop-blur-md border-b border-black/5">
        <Link
          href="/"
          className="font-unbounded text-xs md:text-sm tracking-tight font-bold text-black flex items-center gap-2 group transition-opacity hover:opacity-75"
        >
          <ArrowLeft size={16} className="text-orange-500 transition-transform group-hover:-translate-x-1" />
          <span>BUSINESS LOGIC</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="hidden sm:inline-block text-xs uppercase tracking-widest text-[var(--ink-soft)] hover:text-black font-semibold transition-colors"
          >
            Home
          </Link>
          <Link
            href="/apply"
            className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 hover:bg-orange-600 px-4 py-2 font-unbounded text-xs !text-white transition-all active:scale-95 shadow-sm"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={14} className="text-white" />
          </Link>
        </div>
      </header>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1040px] flex-col gap-6 pt-16 md:pt-24 px-5 md:px-8 lg:px-12">
        {/* HERO SECTION */}
        <section className="mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3.5 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="font-caveat text-xl text-[var(--ink-soft)]">
              Selected Work & Engineering Proof
            </span>
          </div>
          <h1 className="font-unbounded text-[2.6rem] leading-[1.08] text-black md:text-[4.5rem]">
            Built with purpose, <br />
            crafted from scratch.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[var(--ink-soft)]">
            A curated look at platforms, web applications, and digital experiences we&apos;ve engineered from the ground up.
            No inflated vanity metrics or exaggerated claims — just clean architecture, thoughtful UI design, and reliable software that works.
          </p>
        </section>

        {/* CASE STUDIES LIST - TWO PER ROW, NO BORDER LINES, NO TAG/EYEBROW, REDUCED SIZE, JUST NAME & DESCRIPTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 pb-28">
          {caseStudies.map((study) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4 group"
            >
              {/* SCREENSHOT - 4:3 COMPACT RATIO */}
              <div className="relative w-full aspect-[4/3] bg-[#080a0f] overflow-hidden rounded-xl shadow-sm">
                <Image
                  src={study.image}
                  alt={`${study.brand} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={study.id === "01"}
                  unoptimized
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* JUST NAME & DESCRIPTION (NO TAG/EYEBROW, NO BORDER LINE) */}
              <div className="flex flex-col gap-1.5">
                <h2 className="font-unbounded text-xl sm:text-2xl text-black font-bold tracking-tight">
                  {study.brand}
                </h2>
                <p className="text-sm md:text-[0.95rem] leading-relaxed text-[var(--ink-soft)] font-normal">
                  {study.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER CTA */}
        <section className="border-t border-black/10 py-28 flex flex-col items-center text-center gap-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--ink-faint)] font-bold">
            [ NEXT STEP ]
          </p>
          <h2 className="font-unbounded text-3xl md:text-5xl text-black">
            Ready to build your next project?
          </h2>
          <p className="mt-2 max-w-lg text-base md:text-lg text-[var(--ink-soft)] leading-relaxed">
            Whether you need a custom web application built from scratch or an ambitious redesign, let&apos;s build software you can be proud of.
          </p>
          <Link
            href="/apply"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-unbounded text-sm text-white transition-all hover:bg-orange-400 shadow-md active:scale-95"
          >
            Start Your Build
            <ArrowUpRight size={16} />
          </Link>
        </section>
      </div>
    </main>
  );
}
