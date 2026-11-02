"use client";

import Image from "next/image";
import { Clock, MessageSquare, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { poppins, inter } from "@/lib/font";

export function PromoProblem() {
  const frictionSteps = [
    {
      step: "01",
      time: "10:14 AM",
      title: "Send you a DM to ask for the price",
      note: "Buyers want transparent prices immediately. Having to ask creates the first friction barrier.",
    },
    {
      step: "02",
      time: "12:45 PM",
      title: "Wait for you to confirm availability",
      desc: "Hours pass while you check stock. The buyer's spontaneous impulse cools off.",
    },
    {
      step: "03",
      time: "02:20 PM",
      title: "Ask for more pictures",
      desc: "Searching your gallery to send different angles that should already be on display.",
    },
    {
      step: "04",
      time: "05:10 PM",
      title: "Find out how to place an order",
      desc: "Back-and-forth chat typing out delivery zones, phone numbers, and addresses.",
    },
    {
      step: "05",
      time: "07:30 PM",
      title: "Wait for payment details",
      desc: "They wait for you to Manually send account numbers, waiting for transfer receipts, and verifying bank alerts.",
    },
  ];

  return (
    <section className={`${inter.className} relative w-full border-t border-black/10 bg-white py-20 px-5 md:py-28 md:px-8 overflow-hidden`}>
      {/* Subtle fine print grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(rgba(247, 247, 247, 0.15) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* EDITORIAL MASTHEAD & HEADING */}
        <div className="max-w-4xl">
          <h2 className={`${poppins.className} text-2xl font-bold tracking-tight text-[#111827] sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.12]`}>
            Make buying from you effortless.
          </h2>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-baseline gap-3 text-base sm:text-lg text-[#4b5563] leading-relaxed">
            <span className="font-semibold text-[#111827]">
              Someone discovers your product on Instagram.
            </span>
            <span className="text-[#6b7280]">
              They like it. They want to buy it. But before they can pay you,
              look at what they have to go through:
            </span>
          </div>
        </div>

        {/* ASYMMETRIC EDITORIAL SPREAD */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: THE DM FRICTION TIMELINE (6.5 COLS) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative border-l border-black/15 pl-6 sm:pl-8 space-y-6">
              {frictionSteps.map((item, idx) => (
                <div key={item.step} className="relative group">
                  {/* Timeline indicator node */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-black/30 group-hover:border-blue-600 transition-colors">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/40 group-hover:bg-blue-600 transition-colors" />
                  </span>

                  <div className="rounded-2xl rounded-tl-none border border-black/8 bg-white/90 p-5 shadow-xs transition-all duration-300 hover:border-black/20 hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex items-center justify-between text-xs text-[#9ca3af] font-mono mb-2">

                      <span className="flex items-center gap-1 text-[#6b7280]">
                        <Clock className="h-3 w-3" />
                        {item.time}
                      </span>
                    </div>

                    <h3 className={`${poppins.className} text-base sm:text-lg font-bold text-[#111827] leading-snug`}>
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      {item.desc || item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: EDITORIAL VISUAL & BLACK FRIDAY IMPACT (5.5 COLS) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* BLACK FRIDAY WARNING - MOODY EDITORIAL BLOCK */}
            <div className="rounded-3xl border border-blue-300/10 bg-[#0c1527] text-white shadow-2xl relative overflow-hidden flex flex-col">
              {/* IMAGE AT THE TOP */}
              <div className="relative w-full aspect-video overflow-hidden bg-slate-400">
                <Image
                  src="/promo/black-friday.png"
                  alt="Black Friday customer demand and DM overload"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* CONTENT BELOW */}
              <div className="p-6 sm:p-8 flex flex-col relative z-10">
                {/* FLOATING SHARP VECTOR SHAPES (TOP RIGHT CLUSTER) */}
              

                {/* HEADING WITH HIGHLIGHTING */}
                <h3 className={`${poppins.className} text-xl sm:text-2xl font-bold text-white leading-snug sm:leading-tight pr-16 sm:pr-20`}>
                  Now imagine handling{" "}
                  <span className="text-cyan-300 font-extrabold underline decoration-cyan-400/50 decoration-2 underline-offset-4">
                    400 customers everyday
                  </span>{" "}
                  during this {" "}
                  <span className="relative inline-block whitespace-nowrap mx-1 mt-1 sm:mt-0">
                    <span className="absolute -inset-x-2 -inset-y-0.5 rounded-lg bg-amber-400 -rotate-1 shadow-md shadow-amber-400/20" />
                    <span className="relative z-10 px-1.5 text-slate-950 font-black tracking-tight">
                      Black Friday
                    </span>
                    {/* Sharp vector sparkle at the corner */}
                    <svg
                      className="absolute -top-2.5 -right-2.5 w-4 h-4 text-amber-200 z-20 animate-pulse pointer-events-none drop-shadow-[0_0_6px_rgba(253,224,71,0.8)]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
                    </svg>
                  </span>
                  .
                </h3>

                {/* DESCRIPTION WITH HIGHLIGHTING */}
                <p className="mt-3.5 text-sm text-white/70 leading-relaxed">
                  When sales rush in, unanswered DMs turn into{" "}
                  <span className="text-rose-300 font-semibold underline decoration-rose-400/40 underline-offset-2">
                    lost buyers
                  </span>{" "}
                  who head straight to competitors. An overloaded DM inbox cannot
                  scale your sales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FULL-WIDTH RESOLUTION CARD WITH STORE SHOWCASE */}
        <div className="mt-14 rounded-3xl border border-blue-200/30 bg-white overflow-hidden flex flex-col relative">
          {/* STORE SHOWCASE IMAGE (ZERO PADDING/MARGIN LEFT, RIGHT, TOP) */}
          <div className="relative w-full h-64 sm:h-80 md:h-[380px] lg:h-[420px] overflow-hidden bg-white">
            <Image
              src="/promo/store-showcase.jpg"
              alt="Professional online store storefront and shopping catalogue preview"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            {/* CLEAN FADE GRADIENT AT THE END TO TRANSITION INTO TEXT */}
            <div className="absolute inset-x-0 bottom-0 h-44 sm:h-64 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />
          </div>

          {/* TEXT CONTENT & CTA BUTTON (FADES CLEANLY IN) */}
          <div className="relative z-10 px-6 pb-8 pt-2 sm:px-10 sm:pb-10 sm:pt-4 -mt-12 sm:-mt-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className={`${poppins.className} text-xl sm:text-2xl font-bold text-[#111827] leading-snug`}>
                  A professional online store gives your customers a much easier
                  way to shop, while giving your business a more organized way to
                  receive orders.
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#4b5563] leading-relaxed">
                  Zero missed sales. Seamless cart checkout. Automatic order
                  notifications sent directly to your phone.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="#package"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-105 active:scale-95"
                >
                  <span>See Package Details</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
