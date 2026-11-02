"use client";

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { ArrowUpRight } from "lucide-react";

interface PromoFinalCtaProps {
  onOpenInquiry?: () => void;
}

export function PromoFinalCta({ onOpenInquiry }: PromoFinalCtaProps) {
  const whatsappUrl =
    "https://wa.me/2348119188295?text=Hi%20Business%20Logic,%20LET'S%20BUILD%20MY%20ONLINE%20STORE!%20I'm%20ready%20for%20the%20%E2%82%A6120,000%20package.";

  return (
    <footer className="relative w-full overflow-hidden bg-[#FBD34D] text-[#171412] flex flex-col items-center">
      {/* TOP MARQUEE TICKER TAPE (MATCHING REFERENCE STYLING EXACTLY) */}
      <div className="w-full border-b border-black/15 py-4 sm:py-5 overflow-hidden">
        <Marquee autoFill speed={42} className="overflow-hidden">
          <div className="font-display mx-4 flex items-center gap-5 text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
            <span>Let&apos;s work together</span>
            <span className="text-xl sm:text-2xl text-black">✦</span>
            <span>Build your online store</span>
            <span className="text-xl sm:text-2xl text-black">✦</span>
            <span>Let&apos;s work together</span>
            <span className="text-xl sm:text-2xl text-black">✦</span>
          </div>
        </Marquee>
      </div>

      {/* CENTER PUNCHY CALL-TO-ACTION (MATCHING REFERENCE COMPOSITION) */}
      <div className="relative z-10 max-w-4xl px-5 py-20 sm:py-28 md:py-32 text-center flex flex-col items-center">
        {/* EDITORIAL HEADLINE - EXACTLY LIKE REFERENCE */}
        <h2 className="font-display text-4xl font-black tracking-tight text-black sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08]">
          Let&apos;s make something
          <br />
          amazing together
        </h2>

        {/* REDUCED PUNCHY SUBHEAD */}
        <p className="mt-5 text-base sm:text-xl font-medium text-black/80 max-w-xl leading-relaxed">
          Get your high-converting e-commerce website for{" "}
          <strong className="text-black font-extrabold underline decoration-black decoration-2 underline-offset-4">
            ₦120,000
          </strong>{" "}
          all-inclusive.
        </p>

        {/* PILL CTA BUTTON (EXACT SHAPE & ARROW BADGE FROM REFERENCE) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <Link
            href="/promo/apply"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-black hover:bg-neutral-900 px-7 py-3.5 sm:px-8 sm:py-4 font-display text-sm sm:text-base font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            <span>Get started here</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FBD34D] text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 bg-black/5 hover:bg-black/10 px-6 py-3.5 font-display text-xs sm:text-sm font-semibold text-black transition-all"
          >
            <Image
              src="/whatsapp-svgrepo-com.svg"
              alt="WhatsApp"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* BRAND SIGN-OFF & MINIMAL FOOTER */}
        <div className="mt-14 pt-8 border-t border-black/15 w-full flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Business Logic Logo"
              width={28}
              height={28}
              className="h-7 w-7 rounded-lg object-contain"
            />
            <span className="font-display text-base font-bold text-black">
              Business Logic
            </span>
          </div>

          <p className="font-caveat text-lg sm:text-xl text-black/75">
            &ldquo;We Turn Ideas to Business.&rdquo;
          </p>

          {/* LEGAL & CONTACT LINKS */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-black/75">
            <Link
              href="/privacy"
              className="underline underline-offset-2 hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="underline underline-offset-2 hover:text-black transition-colors"
            >
              Terms of Service
            </Link>
            <span>•</span>
            <a
              href="tel:+2348119188295"
              className="hover:text-black transition-colors"
            >
              +234 811 918 8295
            </a>
          </div>

          <p className="mt-2 text-xs text-black/60">
            &copy; {new Date().getFullYear()} Business Logic Agency. All rights reserved.
          </p>

          {/* META / FACEBOOK ADVERTISING DISCLAIMER */}
          <div className="mt-6 pt-5 border-t border-black/10 max-w-2xl text-center">
            <p className="text-[11px] leading-relaxed text-black/55">
              <strong>Disclaimer:</strong> This site is not a part of the Facebook website or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Meta Platforms, Inc. in any way. FACEBOOK is a trademark of META PLATFORMS, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
