"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PromoHeroProps {
  onOpenInquiry?: () => void;
}

export function PromoHero({ onOpenInquiry }: PromoHeroProps) {
  const whatsappUrl =
    "https://wa.me/2348119188295?text=Hi%20Business%20Logic,%20I%20want%20to%20get%20the%20%E2%82%A6120,000%20Online%20Store%20promotional%20package%20for%20my%20business.";

  return (
    <section className="relative w-full overflow-hidden bg-white text-[#171412] flex flex-col">
      {/* BACKGROUND GRADIENT IMAGE */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/promo/hero-gradient.jpg"
          alt="Atmospheric Blue Gradient Background"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
        {/* Soft top gradient blend for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/50 to-transparent" />
      </div>

      {/* COMPACT TOP HEADER */}
      <header className="relative z-20 mx-auto flex w-full max-w-7xl shrink-0 items-center justify-between px-4 pt-3.5 pb-2 sm:px-6 sm:pt-4 sm:pb-3 md:px-8">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Business Logic Logo"
            width={36}
            height={36}
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg object-contain"
          />
          <div>
            <span className="font-sans text-base tracking-tight text-[#171412] font-bold">
              Business Logic
            </span>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-[#171412] shadow-xs transition hover:bg-white active:scale-95"
        >
          <Image
            src="/whatsapp-svgrepo-com.svg"
            alt="WhatsApp"
            width={14}
            height={14}
            className="w-3.5 h-3.5"
          />
          <span>Chat on WhatsApp</span>
        </a>
      </header>

      {/* HERO COPY (WITH BALANCED TOP MARGIN FROM HEADER) */}
      <div className="relative z-10 mx-auto flex max-w-4xl shrink-0 flex-col items-center px-4 text-center mt-6 sm:mt-8 md:mt-10">
        {/* HEADING */}
        <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight text-[#0f172a] leading-[1.18] max-w-3xl">
          Get a Professional Online Store for Your{" "}
          <span className="relative inline-block -rotate-2 px-2.5 sm:px-3 py-0.5 rounded-lg sm:rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/25 transition-transform hover:rotate-0">
            Business
          </span>
          .
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-2 sm:mt-2.5 max-w-xl text-xs sm:text-sm md:text-base text-[#475569] leading-relaxed">
          Get your business online with a complete product catalogue, shopping
          cart and customer ordering experience.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-3.5 sm:mt-4 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/promo/apply"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <span>Get My Website</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* MOCKUP SECTION - TERMINATES EXACTLY AT BOTTOM OF HERO */}
      <div className="relative z-10 w-full mt-6 sm:mt-8 md:mt-10 flex justify-center px-2 sm:px-4">
        {/* PARABOLIC STRIP GRADIENT BEHIND THE MOCKUP (REACHES SCREEN EDGES ON ALL SCREENS) */}
        <div className="absolute inset-x-[-3%] md:inset-x-[-2%] bottom-0 top-[-24%] pointer-events-none select-none z-0 flex justify-center">
          <svg
            viewBox="0 0 1000 550"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            <defs>
              {/* ACCENT 1 & 2: MULTI-SHADE PARABOLIC LINEAR GRADIENT */}
              <linearGradient
                id="parabolicMainGrad"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="100%"
              >
                {/* ACCENT 1 SHADES: Deep Navy -> Royal Blue -> Electric Cyan */}
                <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.8" />
                <stop offset="20%" stopColor="#2563EB" stopOpacity="0.95" />
                <stop offset="42%" stopColor="#38BDF8" stopOpacity="1" />
                {/* CREST TRANSITION: Luminous Sky/Indigo Blend */}
                <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
                {/* ACCENT 2 SHADES: Electric Violet -> Bright Purple -> Deep Indigo */}
                <stop offset="58%" stopColor="#818CF8" stopOpacity="1" />
                <stop offset="80%" stopColor="#7C3AED" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#4338CA" stopOpacity="0.8" />
              </linearGradient>

              {/* SECONDARY HIGHLIGHT STRIP: Lighter, more luminous shades */}
              <linearGradient
                id="parabolicHighlightGrad"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.6" />
                <stop offset="35%" stopColor="#67E8F9" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#E0F2FE" stopOpacity="1" />
                <stop offset="65%" stopColor="#C084FC" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#9333EA" stopOpacity="0.6" />
              </linearGradient>

              {/* WIDE AMBIENT DIFFUSE BLUR */}
              <filter
                id="parabolicBlurWide"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="38" result="blur" />
              </filter>

              {/* MEDIUM DIFFUSE BLUR */}
              <filter
                id="parabolicBlurMid"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="16" result="blur" />
              </filter>
            </defs>

            {/* LAYER 1: AMBIENT DEEP GLOW HALO */}
            <path
              d="M -40 560 Q 500 -30 1040 560"
              stroke="url(#parabolicMainGrad)"
              strokeWidth="110"
              strokeLinecap="round"
              filter="url(#parabolicBlurWide)"
              opacity="0.45"
            />

            {/* LAYER 2: SECONDARY SHADE PARABOLIC RIBBON */}
            <path
              d="M -20 560 Q 500 5 1020 560"
              stroke="url(#parabolicHighlightGrad)"
              strokeWidth="52"
              strokeLinecap="round"
              filter="url(#parabolicBlurMid)"
              opacity="0.65"
            />

            {/* LAYER 3: CORE SATURATED PARABOLIC GRADIENT STRIP */}
            <path
              d="M 0 560 Q 500 35 1000 560"
              stroke="url(#parabolicMainGrad)"
              strokeWidth="24"
              strokeLinecap="round"
              opacity="0.92"
            />

            {/* LAYER 4: SPECULAR TOP FILAMENT (NEON LIGHT ACCENT) */}
            <path
              d="M 30 560 Q 500 55 970 560"
              stroke="url(#parabolicHighlightGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.85"
            />
          </svg>
        </div>

        {/* MOCKUP IMAGE (SITS ON TOP OF THE PARABOLIC STRIP) */}
        <div className="relative z-10 flex justify-center w-full max-w-[360px] sm:max-w-2xl md:max-w-4xl">
          <Image
            src="/promo/store-mockup.webp"
            alt="Professional Online Store Mockup - Laptop and Mobile Smartphone View"
            width={969}
            height={754}
            priority
            className="w-full h-auto block filter drop-shadow-[0_20px_35px_rgba(15,23,42,0.3)]"
          />
        </div>
      </div>
    </section>
  );
}
