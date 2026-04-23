import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export function HeroSection() {
  return (
    <section className="section-shell hero-panel relative overflow-hidden px-4 pb-10 pt-5 lg:px-10 lg:pb-14 ">
      <header className="relative z-10 flex  gap-4 lg:flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-8 h-8 md:h-11 md:w-11 place-items-center  border border-sky-400/30 bg-sky-500/10 text-[10px] md:text-lg text-white shadow-[0_0_35px_rgba(58,130,246,0.35)]">
            [BL]
          </div>
          <div>
            <div className="font-display text-[14px] md:text-xl text-white">
              Business Logic
            </div>
            <p className="text-[8px] md:text-xs uppercase tracking-[0.28em] text-slate-400">
              Ideas To Business
            </p>
          </div>
        </div>

        <div className="items-center gap-3 ">
          <Link
            href="#contact"
            className="secondary-button rounded-full px-5 py-2 text-sm text-white hidden md:flex"
          >
            Contact
          </Link>
          <Link
            href="#contact"
            className="primary-button rounded-full px-5 py-2 text-sm font-medium text-white"
          >
            Book a Free Call
          </Link>
        </div>
      </header>

      <div className="relative z-10 mx-auto mt-14 max-w-5xl text-center">
        <div className="pill inline-flex rounded-full px-4 py-1 text-xs text-sky-100">
          <div className="flex items-center">
            <p>Simple websites that win customers</p>

            <Image src="/arrow.png" alt="Rocket" width={20} height={20} />
          </div>
        </div>

        <h1 className="font-display mx-auto mt-6 max-w-4xl text-5xl leading-[0.95] text-white text-[2rem] md:text-[3.5rem]">
          Your Business Deserves a Website That Actually{" "}
          <span className="text-sky-400">Brings In Customers</span>
        </h1>
        <p className="muted mx-auto mt-6 max-w-2xl text-sm leading-7 md:text-base">
          We build websites
          that explain what you do clearly, look professional, and turn visitors
          into paying customers whether you sell services, products, or run a
          company.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#process"
            className="primary-button rounded-full px-6 py-3 text-sm font-medium text-white"
          >
            See How It Works
          </Link>
          <Link
            href="#contact"
            className="secondary-button rounded-full px-6 py-3 text-sm text-white"
          >
            Book a Free Call
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-[1fr_1.25fr_1fr] hidden md:grid">
        <div className="mesh-card rounded-[1.6rem] p-5 hidden md:block">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            We build for
          </p>
          <div className="mt-5 space-y-3">
            {[
              "Service businesses",
              "Real estate firms",
              "Consultants",
              "Private practices",
              "Growing companies",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/6 bg-black/30 px-4 py-3 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mesh-card grid-line rounded-[1.8rem] border border-sky-400/20 p-5">
          <div className="mx-auto flex h-full w-full max-w-md flex-col rounded-[1.3rem] border border-white/8 bg-black/35 p-5">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Your website is taking shape</span>
              <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-emerald-300">
                In Progress
              </span>
            </div>
            <div className="mt-6 flex-1 rounded-[1.1rem] border border-white/7 bg-gradient-to-b from-slate-900/80 to-black/40 p-4">
              <div className="mb-4 h-3 w-28 rounded-full bg-white/10" />
              <div className="grid gap-3 md:grid-cols-[0.9fr_1.2fr]">
                <div className="space-y-2">
                  <div className="h-16 rounded-2xl bg-white/6" />
                  <div className="h-9 rounded-full bg-sky-400/20" />
                  <div className="h-24 rounded-2xl bg-white/6" />
                </div>
                <div className="rounded-[1rem] border border-sky-400/20 bg-black/45 p-4">
                  <div className="h-full rounded-[0.9rem] bg-[radial-gradient(circle_at_top,rgba(64,140,255,0.35),transparent_35%),linear-gradient(180deg,rgba(16,19,33,0.95),rgba(3,4,10,0.95))]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mesh-card rounded-[1.6rem] p-4 hidden md:block">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            What your site should do
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            {[
              "Explain your offer clearly",
              "Build trust fast",
              "Work on every screen",
              "Load quickly",
              "Bring in better leads",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center justify-between rounded-2xl border border-white/6 bg-black/30 px-4 py-3"
              >
                <span>{item}</span>
                {/* <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.85)]" /> */}
                <span>
                  {" "}
                  <CheckCircle />{" "}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 max-w-5xl text-center ">
        <p className="text-xs uppercase tracking-[0.26em] text-slate-500">
          Businesses using Business Logic to improve how they show up online
        </p>
        <div className="mt-5 flex items-center justify-center gap-x-10 gap-y-4 text-lg text-slate-400 sm:text-2xl">
          {["Dben Real Estate", "Farmergiant", "Earnstak", "IGiftways"].map(
            (brand) => (
              <span key={brand} className="font-display opacity-80">
                <Marquee>{brand}</Marquee>
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
