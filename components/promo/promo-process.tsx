"use client";

import { MessageSquare, UploadCloud, Palette, Rocket } from "lucide-react";
import { poppins, inter } from "@/lib/font";

export function PromoProcess() {
  const steps = [
    {
      num: "01",
      icon: MessageSquare,
      title: "Tell us about your business",
      desc: "Contact our team and tell us what you sell, your business name and the kind of website you need.",
      detail: "Quick 10-minute kickoff over WhatsApp or call.",
    },
    {
      num: "02",
      icon: UploadCloud,
      title: "Send us your products and brand details",
      desc: "Provide your product pictures, prices, descriptions, logo and other necessary information.",
      detail: "Simply send them via Google Drive or WhatsApp.",
    },
    {
      num: "03",
      icon: Palette,
      title: "We design and build your website",
      desc: "Our team creates your online store, organizes your products and builds the shopping experience around your brand.",
      detail: "Crafted with fast performance and mobile-first layout.",
    },
    {
      num: "04",
      icon: Rocket,
      title: "Review and launch",
      desc: "We'll share the website with you for review, make the agreed adjustments and help you get your online store live.",
      detail: "Your store goes live, ready to take real customer orders.",
    },
  ];

  return (
    <section className={`${inter.className} relative w-full border-t border-black/10 bg-[#fbf8f3] py-20 px-5 md:py-28 md:px-8`}>
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`${poppins.className} text-3xl font-bold tracking-tight text-[#171412] sm:text-4xl md:text-5xl md:leading-[1.15]`}>
            Getting your online store is straightforward.
          </h2>
          <p className="mt-4 text-base text-[#57534e] sm:text-lg">
            We handle the technical setup and heavy lifting from start to finish.
            Here is how simple it is:
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative flex flex-col justify-between rounded-2xl border border-black/10 bg-white/90 p-7 shadow-xs transition-all duration-300 hover:border-black/25 hover:shadow-md hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`${poppins.className} text-2xl font-black text-blue-600 tracking-tight`}>
                      {step.num}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className={`${poppins.className} mt-6 text-lg font-bold text-[#171412] leading-snug`}>
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#736a63]">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-black/5 pt-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    {step.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
