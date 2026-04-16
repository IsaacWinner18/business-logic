import Link from "next/link";

export function FooterCtaSection() {
  return (
    <section className="section-shell relative overflow-hidden rounded-tl-[1.5rem] rounded-tr-[1.5rem] sm:rounded-tl-[2rem] sm:rounded-tr-[2rem] ">
      <div className="mx-auto max-w-6xl text-center bg-sky-400/20 backdrop-blur-sm md:px-8 md:py-4 px-4 py-6 border-1 border-black/30">
        <h2 className="font-display text-[2rem] leading-tight text-black sm:text-5xl lg:text-[4.5rem]">
          Built to help serious brands look the part online
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-700 sm:mt-5 sm:leading-7">
          We create websites with the polish, structure, and performance needed
          to earn trust from premium clients, partners, and investors.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
          <button className="primary-button rounded-full px-5 py-3 text-sm font-medium text-white sm:px-6">
            Start Now
          </button>
          <button className="secondary-button rounded-full px-5 py-3 text-sm text-white sm:px-6">
            Book a free Call
          </button>
        </div>
      </div>

      <div className="mt-12 border-t border-white/6 bg-sky-200/10 px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center border border-sky-400/20 bg-sky-500/10 text-lg text-black shadow-[0_0_28px_rgba(58,130,246,0.22)] sm:h-11 sm:w-11">
                [BL]
              </div>
              <div>
                <div className="font-display text-lg text-black sm:text-xl">
                  Business Logic
                </div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-800 sm:text-xs sm:tracking-[0.28em]">
                  Web Development Agency
                </p>
              </div>
            </div>
            <h3 className="font-display mt-5 max-w-md text-xl leading-tight text-black sm:mt-6 sm:text-xl">
              Refined websites for ambitious companies
            </h3>
            <p className="mt-5 text-sm text-slate-900 sm:mt-6">
              Copyright 2026. All rights reserved.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-700 sm:text-xs font-bold">
                Services
              </p>
              <div className="mt-4 text-sm text-slate-700 ">
                <Link href="/">Marketing Websites</Link> <br />
                <Link href="/">Product Interfaces</Link>
                <br />
                <Link href="/">Frontend Systems</Link>
                <br />
                <Link href="/">Site Optimization</Link>
                <br />
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-700 sm:text-xs font-bold">
                Company
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <Link href="/">Recent Work</Link>
                <br />
                <Link href="/">LinkedIn</Link> <br />
                <Link href="/">Contact</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-700 sm:text-xs font-bold">
                Legal
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <Link href="/">Privacy Policy</Link> <br />
                <Link href="/">Terms of Service</Link> <br />
                <Link href="/">Partnership</Link> <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
