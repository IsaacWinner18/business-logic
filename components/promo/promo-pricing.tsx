"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles, ArrowUpRight, ShieldCheck, Clock } from "lucide-react";

interface PromoPricingProps {
  onOpenInquiry?: () => void;
}

export function PromoPricing({ onOpenInquiry }: PromoPricingProps) {
  const packageInclusions = [
    "Professional e-commerce website.",
    "Mobile-responsive design.",
    "Product catalogue and categories.",
    "Shopping cart and ordering functionality.",
    "Order management dashboard.",
    "Business contact integration.",
    "Website launch assistance.",
  ];

  const whatsappUrl =
    "https://wa.me/2348119188295?text=Hi%20Business%20Logic,%20I%20want%20to%20claim%20the%20%E2%82%A6120,000%20PROMOTIONAL%20PACKAGE%20for%20my%20business%20store.";

  return (
    <section
      id="package"
      className="relative w-full border-t border-black/10 bg-[#f4eee6] py-20 px-5 md:py-28 md:px-8 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-200/40 blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* SECTION HEADER */}
        <div className=" max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#171412] sm:text-4xl md:text-5xl">
            Everything You Need to Sell Online
          </h2>
          <p className="mt-3 text-base text-[#57534e]">
            An all-in-one promotional package specifically created to take your
            business from DM chaos to an organized, automated digital
            storefront.
          </p>
        </div>

        {/* PRICING CARD */}
        <div className="mt-12 rounded-3xl border border-black/15 bg-white p-8 md:p-12 relative overflow-hidden">
          {/* TOP TAG */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                PROMOTIONAL PACKAGE
              </span>
              <h3 className="font-display mt-1 text-2xl font-bold text-[#171412] sm:text-3xl">
                Complete Website Setup
              </h3>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-800">
              <Clock className="h-3.5 w-3.5" />
              <span>5–7 Days Delivery</span>
            </div>
          </div>

          {/* PRICE ROW */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-baseline gap-2">
            <span className="font-unbounded text-4xl sm:text-6xl font-black text-[#171412] tracking-tight">
              ₦120,000
            </span>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#78716c]">
              One-Time Promotional Investment
            </span>
          </div>

          <p className="mt-3 text-sm text-[#57534e]">
            Transparent pricing. No hidden development charges. All fundamental
            e-commerce features included.
          </p>

          {/* INCLUSIONS CHECKLIST */}
          <div className="mt-8 pt-8 border-t border-black/10">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#736a63]">
              Your package includes:
            </h4>

            <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {packageInclusions.map((inclusion) => (
                <div
                  key={inclusion}
                  className="flex items-center gap-3 rounded-xl border border-black/5 bg-[#faf8f5] p-3 text-sm font-medium text-[#1c1917]"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>{inclusion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/promo/apply"
              className="group inline-flex w-full sm:flex-1 items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-4 font-unbounded text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-600/25"
            >
              <span>Get My Website (₦120,000)</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-semibold text-[#1e293b] shadow-xs hover:bg-[#faf8f5] transition-all"
            >
              <Image
                src="/whatsapp-svgrepo-com.svg"
                alt="WhatsApp"
                width={18}
                height={18}
                className="w-4 h-4"
              />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

         
        </div>
      </div>
    </section>
  );
}
