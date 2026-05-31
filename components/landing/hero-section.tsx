"use client";

import { nohemi } from "@/lib/font";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#positioning", label: "Why Us" },
  { href: "#testimonials", label: "Results" },
];

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-5 lg:px-8 lg:pb-0 h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="/videos/business-logic-web-development-agency.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-0 bg-black/40" />

      {/* HEADER LAYER */}
      <header className="relative z-20 flex flex-col gap-6 border-b border-gray-300/20 pb-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center border border-black/10 bg-white/90 text-[10px] font-semibold text-black md:h-11 md:w-11 md:text-sm">
              [BL]
            </div>
            <div>
              <div className="font-mono text-[14px] text-white md:text-xl">
                Business Logic
              </div>
              <p className="text-[8px] uppercase tracking-[0.28em] text-gray-100 md:text-xs">
                Scaling Business
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center border border-black/10 bg-white/80 text-black lg:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <nav className="hidden flex-wrap items-center justify-center gap-4 text-[10px] uppercase tracking-[0.28em] text-[var(--ink-faint)] md:gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#contact"
            className="primary-button rounded-none px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white md:px-6"
          >
            Consultation
          </Link>
        </div>
      </header>

      {/* MOBILE NAV OVERLAY */}
      <div
        className={`absolute inset-0 z-30 bg-black/30 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      {/* MOBILE ASIDE */}
      <aside
        id="mobile-navigation"
        className={`absolute bottom-0 right-0 top-0 z-40 w-[min(88vw,22rem)] border-l border-black/10 bg-[var(--panel)] px-6 py-6 shadow-[0_24px_60px_rgba(28,23,19,0.18)] transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/8 pb-4">
          <div>
            <p className="font-display text-lg text-black">Business Logic</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-[var(--ink-faint)]">
              Website Agency
            </p>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="inline-flex h-10 w-10 items-center justify-center border border-black/10 bg-white/80 text-black"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-8 flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-black/8 py-4 text-sm uppercase tracking-[0.18em] text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 space-y-4">
          <p className="text-sm leading-7 text-[var(--ink-soft)]">
            High-performance websites, conversion systems, and premium brand
            presentation for growth-stage businesses.
          </p>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="primary-button inline-flex w-full items-center justify-center rounded-none px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white"
          >
            Consultation
          </Link>
        </div>
      </aside>

      {/* CONTENT LAYER */}
      <div className="relative z-10 grid lg:min-h-[620px] lg:grid-cols-2">
        <div className="flex items-center py-14 lg:py-20">
          <div className="max-w-[38rem]">
            <p className="text-[10px] uppercase tracking-[0.28em] text-gray-200">
              Established Performance
            </p>
            <h1
              className={`${nohemi.className} mt-6 max-w-3xl text-[2.5rem] leading-[0.95] text-white md:text-[3.4rem] `}
            >
              Websites That Make Your{" "}
              <span className="text-orange-700 border border-white">
                {" "}
                 Business
              </span>{" "}
              Look Serious..
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-200 md:text-base">
              We help businesses build modern websites that attract customers,
              increase trust, and grow their brand online.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-white">
              <Link
                href="#contact"
                className=" text-white bg-orange-600 inline-flex items-center gap-2 rounded-none px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white"
              >
                Start Your Project
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white"
              >
                View Our Work
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Keeping the right column layout empty allows the video background to breathe and be visible on desktop */}
        <div className="relative hidden lg:block" />
      </div>
    </section>
  );
}
