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
  metrics: { value: string; label: string }[];
  overview: string;
  problem: string;
  solution: { title: string; description: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "01",
    brand: "Dben Real Estates",
    tagline: "Real Estate · Web Platform & Lead Architecture",
    title: "Scaling Architecture for High-End Real Estate Discovery",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1780229406/Screenshot_2026-05-31_130940_y1tuf3.png",
    metrics: [
      { value: "Bespoke UI", label: "LUXURY PROPERTY SYSTEM" },
      { value: "Fast Filter", label: "INSTANT PROPERTY SEARCH" },
      { value: "Direct Flow", label: "WHATSAPP & AGENT INQUIRY" },
      { value: "Mobile UX", label: "HIGH-CONVERTING LAYOUT" },
    ],
    overview:
      "Dben Real Estates partnered with us to modernize their digital presence. Their original site failed to reflect the architectural elegance and premium caliber of their property portfolio, leading to low user engagement in a competitive real estate market.",
    problem:
      "Prospective property buyers struggled with a cluttered, slow search experience lacking clear photography, location context, and straightforward inquiry paths. High-value clients were slipping through the cracks due to friction in reaching out to agents.",
    solution: [
      {
        title: "Architectural Visual Identity",
        description:
          "Created an editorial, high-end web aesthetic with full-bleed property galleries and subtle micro-interactions that communicate trust and luxury.",
      },
      {
        title: "Instant Property Search & Filter",
        description:
          "Engineered responsive filtering by location, price range, and property category, allowing buyers to pinpoint available listings within seconds.",
      },
      {
        title: "Frictionless Inquiry Triggers",
        description:
          "Integrated direct WhatsApp and viewing scheduling actions on property detail pages, making inquiries immediate and effortless.",
      },
    ],
  },
  {
    id: "02",
    brand: "Buychow Ng Group",
    tagline: "Foodtech · Performance Engineering & UX Overhaul",
    title: "High-Performance Architecture for an On-Demand Food Platform",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1778334695/Screenshot_2026-05-09_144304_n36rfa.png",
    metrics: [
      { value: "60% Faster", label: "PAGE LOAD ACCELERATION" },
      { value: "3 Steps", label: "STREAMLINED CHECKOUT" },
      { value: "Peak-Ready", label: "HIGH TRAFFIC RESILIENCE" },
      { value: "Mobile-First", label: "ORDERING EXPERIENCE" },
    ],
    overview:
      "Buychow Ng Group is a regional foodtech platform connecting hungry diners with top-tier restaurants. As order volume grew, their legacy platform faced performance bottlenecks and high checkout abandonment on mobile devices.",
    problem:
      "Users experienced frustrating load times during peak lunch and dinner rushes. The checkout process was spread across multiple disconnected screens, creating drop-off and support friction.",
    solution: [
      {
        title: "Performance Optimization",
        description:
          "Re-engineered the front-end rendering pipeline and component architecture, delivering a 60% faster page load time even on congested connections.",
      },
      {
        title: "Simplified 3-Step Checkout",
        description:
          "Redesigned the ordering flow down to three intuitive steps, eliminating unnecessary form fields and reducing cart drop-off.",
      },
      {
        title: "Mobile-First Redesign",
        description:
          "Optimized the entire platform for mobile interaction, with thumb-friendly controls, quick dish modifiers, and seamless order tracking.",
      },
    ],
  },
  {
    id: "03",
    brand: "Exampreps",
    tagline: "EdTech · Full-Stack Platform & PWA Built From Scratch",
    title: "Built from Scratch: High-Performance CBT Platform & Installable PWA",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783873796/Screenshot_2026-07-12_172934_qxzilr.png",
    metrics: [
      { value: "From Scratch", label: "FULL-STACK PLATFORM" },
      { value: "Installable PWA", label: "DOWNLOADABLE APP" },
      { value: "CBT Engine", label: "TIMED EXAM SIMULATION" },
      { value: "JAMB · WAEC", label: "NATIONAL CURRICULUM" },
    ],
    overview:
      "We designed and built Exampreps completely from scratch as a modern computer-based testing (CBT) and exam preparation platform for students sitting for JAMB, WAEC, NECO, and other major national examinations. Built with clean UI and zero bloat, Exampreps also functions as an installable Progressive Web App (PWA) that students can download directly to their phones or laptops for an instant, app-like practice experience without going through an app store.",
    problem:
      "Most online exam prep tools in the region are dated, bloated with aggressive ads, and sluggish on budget mobile devices. Native mobile app downloads are often inaccessible to students with restricted device storage or limited mobile data. Furthermore, students rarely have access to authentic CBT interfaces that replicate computerized examination conditions.",
    solution: [
      {
        title: "Downloadable Progressive Web App (PWA)",
        description:
          "Engineered Exampreps as a lightweight, installable Progressive Web App that students can download straight to their home screen or desktop with a single tap, offering native app performance with minimal storage consumption.",
      },
      {
        title: "Custom CBT Testing Simulator",
        description:
          "Engineered an authentic timed computer-based testing engine with real-time countdowns, question palettes, flagging for review, and instant performance breakdowns with detailed answer explanations.",
      },
      {
        title: "Distraction-Free Student UI & Low-Data Optimization",
        description:
          "Designed an intuitive, student-centric interface with clear typography, high contrast, and smart asset caching so lesson materials, past questions, and video guides load smoothly even on limited mobile data connections.",
      },
    ],
  },
  {
    id: "04",
    brand: "FeemTech",
    tagline: "Enterprise Software · Full-Stack Platform Built From Scratch",
    title: "Built from Scratch: Enterprise Web Platform & Digital Authority",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783873692/Screenshot_2026-07-12_164904_wpahph.png",
    metrics: [
      { value: "From Scratch", label: "CUSTOM-BUILT SYSTEM" },
      { value: "Bespoke UI", label: "ENTERPRISE DESIGN SYSTEM" },
      { value: "Sub-Second", label: "PAGE LOAD VELOCITY" },
      { value: "Direct Flow", label: "QUALIFIED B2B FUNNEL" },
    ],
    overview:
      "We architected and built FeemTech entirely from scratch as a modern, high-performance corporate platform for an enterprise software solutions provider. Instead of adapting a rigid CMS or generic corporate template, we engineered a bespoke digital experience tailored to establish executive trust, present complex technical offerings with total clarity, and drive qualified enterprise inquiries.",
    problem:
      "As FeemTech expanded into enterprise software delivery, they needed an authoritative web platform that reflected their deep technical capabilities. Off-the-shelf templates and CMS themes were either too bloated, inflexible for custom technical service presentations, or lacked the speed and polished micro-interactions required to impress technical leaders and corporate decision-makers.",
    solution: [
      {
        title: "Ground-Up Architecture & Design System",
        description:
          "Engineered a clean, modular design system from scratch using modern web standards, featuring crisp typography, precision spacing, and seamless responsiveness across all screen sizes.",
      },
      {
        title: "Interactive Technical Capability Showcases",
        description:
          "Built custom interactive modules and architecture breakdowns that clearly communicate complex software services, security practices, and deployment models without marketing fluff.",
      },
      {
        title: "Optimized Performance & B2B Inquiry Flow",
        description:
          "Developed lightweight, sub-second page rendering and a friction-free technical discovery inquiry funnel that connects enterprise prospects directly with FeemTech engineering leads.",
      },
    ],
  },
  {
    id: "05",
    brand: "Farmergiant",
    tagline: "Agrotech · E-Commerce Transformation & Product Catalog",
    title: "E-Commerce Experience for Agricultural Machinery & Supplies",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783875916/Screenshot_2026-07-12_180458_h6ojxe.png",
    metrics: [
      { value: "Catalog", label: "STRUCTURED EQUIPMENT DATA" },
      { value: "Direct Flow", label: "ORDER & WHATSAPP CHECKOUT" },
      { value: "Accessible", label: "SIMPLIFIED USER JOURNEY" },
      { value: "99.9%", label: "HIGH AVAILABILITY" },
    ],
    overview:
      "Farmergiant supplies high-grade agricultural equipment, incubators, and farm resources. They wanted to transition from manual, phone-heavy ordering to a clean e-commerce platform where commercial farmers can explore equipment, review specifications, and place orders directly.",
    problem:
      "Farmers and agribusiness owners were finding existing online systems overly convoluted. Technical specifications were confusingly laid out, and complex checkout forms led many to abandon orders and place phone inquiries instead.",
    solution: [
      {
        title: "Simplified Agrotech E-Commerce",
        description:
          "Built a clean, straightforward purchasing experience tailored to the needs of agricultural business operators, with clear imagery and transparent specs.",
      },
      {
        title: "Structured Equipment Catalogs",
        description:
          "Organized heavy machinery data into clear, comparative specifications (power, capacity, warranty), enabling confident purchasing decisions.",
      },
      {
        title: "Flexible Checkout & Consultation",
        description:
          "Implemented dual checkout pathways—direct card payments for standard supplies and one-tap WhatsApp consultations for specialized equipment.",
      },
    ],
  },
  {
    id: "06",
    brand: "Earnstak",
    tagline: "Creator Economy · Commerce & Audience Hub",
    title: "All-in-One Audience Monetization & Link Platform for Creators",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783940517/Screenshot_2026-07-13_115221_vpr9lr.png",
    metrics: [
      { value: "All-in-One", label: "LINK HUB + STOREFRONT" },
      { value: "In-Link", label: "ONE-CLICK CHECKOUT" },
      { value: "Sub-100ms", label: "INTERACTION VELOCITY" },
      { value: "Real-Time", label: "CREATOR ANALYTICS" },
    ],
    overview:
      "Earnstak is an all-in-one creator commerce platform designed to unite everything creators do with their audience into a single high-converting link. It replaces fragmented link-in-bio tools, standalone digital stores, and disjointed payment links with a unified, polished digital storefront.",
    problem:
      "Modern creators were forced to juggle four or five disconnected tools—a link aggregator, a separate digital download store, payment gateways, and mailing lists. This fragmented stack created brand disconnect, slow mobile redirects, and severe drop-off during checkout.",
    solution: [
      {
        title: "Unified Creator Storefront",
        description:
          "Crafted a visually striking, customizable interface where creators can showcase exclusive content, digital downloads, courses, and custom links in one fluid hub.",
      },
      {
        title: "Frictionless In-Link Checkout",
        description:
          "Built a streamlined checkout architecture that allows fans to purchase digital assets directly inside the link view with instant delivery and zero clunky redirects.",
      },
      {
        title: "Real-Time Creator Insights",
        description:
          "Implemented intuitive creator dashboards providing immediate visibility into link click-throughs, sales conversion, top-performing items, and audience engagement.",
      },
    ],
  },
  {
    id: "07",
    brand: "Santorini",
    tagline: "Luxury Hospitality · Direct Booking & Brand Experience",
    title: "Elevating the Digital Experience for Luxury Boutique Hospitality",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783874011/Screenshot_2026-07-12_173311_dqd6ee.png",
    metrics: [
      { value: "Direct Flow", label: "COMMISSION-FREE BOOKING" },
      { value: "Editorial", label: "IMMERSIVE VISUAL DESIGN" },
      { value: "Fluid", label: "MICRO-INTERACTIONS" },
      { value: "Mobile UX", label: "PERFECTED RESERVATIONS" },
    ],
    overview:
      "Santorini is an exclusive luxury boutique hotel offering intimate, high-end hospitality experiences. They wanted their web presence to reflect the tranquility and understated elegance of their physical destination while driving direct guest bookings.",
    problem:
      "Their previous digital presence relied heavily on third-party aggregator channels that charged high commissions and diluted the exclusive brand identity. The booking journey felt impersonal and generic.",
    solution: [
      {
        title: "Immersive Visual Narrative",
        description:
          "Centered the design around atmospheric, full-width photography and bespoke typography that transports visitors into the hotel's relaxing ambiance.",
      },
      {
        title: "Custom Direct Booking Flow",
        description:
          "Engineered a seamless, on-site reservation flow that allows guests to select suites, dates, and amenities directly without third-party redirection.",
      },
      {
        title: "Tailored Concierge Micro-Interactions",
        description:
          "Added subtle, tactile motion design and bespoke experience add-ons (spa, dining, transfers) to enhance the feeling of luxury throughout the reservation.",
      },
    ],
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

        {/* CASE STUDIES LIST */}
        <div className="flex flex-col gap-32 pb-32">
          {caseStudies.map((study) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-10 border-t border-black/10 pt-16"
            >
              {/* HEADER */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-orange-600 font-bold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200/60">
                    CASE STUDY · {study.id}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[var(--ink-soft)] font-medium">
                    {study.tagline}
                  </span>
                </div>
                <div className="flex items-baseline gap-4 mt-2">
                  <span className="font-unbounded text-4xl md:text-6xl text-[var(--accent)] opacity-20 select-none">
                    {study.id}
                  </span>
                  <h2 className="font-unbounded text-3xl md:text-5xl text-black">
                    {study.brand}
                  </h2>
                </div>
              </div>

              {/* SCREENSHOT */}
              <div className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-[#f4f4f4] overflow-hidden rounded-xl border border-black/5 group shadow-sm">
                <Image
                  src={study.image}
                  alt={`${study.brand} platform screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1040px"
                  priority={study.id === "01"}
                  unoptimized
                  className="object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* METRICS & DELIVERABLES GRID */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-black/5 bg-[#FAFAFA] px-6 md:px-8 rounded-xl">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="font-unbounded text-lg md:text-xl text-black font-semibold">
                      {metric.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[var(--ink-soft)] font-semibold leading-tight">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* STORY CONTENT */}
              <div className="grid md:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
                <div className="flex flex-col gap-4">
                  <h3 className="font-unbounded text-xl md:text-2xl leading-snug text-black">
                    {study.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-black">
                      Overview
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed text-[var(--ink-soft)]">
                      {study.overview}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-black">
                      The Challenge
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed text-[var(--ink-soft)]">
                      {study.problem}
                    </p>
                  </div>

                  <div className="flex flex-col gap-5">
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-black">
                      What We Built
                    </h4>
                    <ul className="flex flex-col gap-5">
                      {study.solution.map((item, idx) => (
                        <li key={idx} className="flex flex-col gap-1">
                          <strong className="text-black font-semibold text-base md:text-lg">
                            {item.title}
                          </strong>
                          <span className="text-[var(--ink-soft)] leading-relaxed text-sm md:text-base">
                            {item.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
