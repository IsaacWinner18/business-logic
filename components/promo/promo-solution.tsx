"use client";

import {
  Store,
  Layers,
  LayoutGrid,
  ShoppingBag,
  Send,
  Smartphone,
  LayoutDashboard,
  MessageCircle,
} from "lucide-react";
import { poppins, inter } from "@/lib/font";

export function PromoSolution() {
  const features = [
    {
      icon: Store,
      title: "Professional storefront",
    },
    {
      icon: Layers,
      title: "Product catalogue",
    },
    {
      icon: LayoutGrid,
      title: "Product categories",
    },
    {
      icon: ShoppingBag,
      title: "Shopping cart",
    },
    {
      icon: Send,
      title: "Online ordering",
    },
    {
      icon: Smartphone,
      title: "Mobile-friendly design",
    },
    {
      icon: LayoutDashboard,
      title: "Order management",
    },
    {
      icon: MessageCircle,
      title: "Contact integration",
    },
  ];

  return (
    <section className={`${inter.className} relative w-full border-t border-black/10 bg-white py-20 px-5 md:py-28 md:px-8`}>
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* SECTION HEADER - LEFT ALIGNED */}
        <div className="text-left max-w-3xl">
          <h2 className={`${poppins.className} text-3xl font-bold tracking-tight text-[#171412] sm:text-4xl md:text-5xl md:leading-[1.18]`}>
            Your own online store. Your{" "}
            <span className="relative inline-block -rotate-2 px-2.5 sm:px-3 py-0.5 rounded-lg sm:rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/25 transition-transform hover:rotate-0">
              products
            </span>
            . Your brand.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#57534e] sm:text-lg">
            Business Logic builds professional e-commerce websites designed
            around your business and the products you sell.
          </p>

          <p className="mt-2 text-sm text-[#78716c] sm:text-base">
            Your customers get a proper online shopping experience, and you get
            a dedicated platform for showcasing and selling your products.
          </p>
        </div>

        {/* TIMELINE WITH CONNECTED BRANCHES */}
        <div className="mt-12 sm:mt-16 max-w-5xl">
          {/* DESKTOP (md+): TWO CONNECTED BRANCHES */}
          <div className="hidden md:block">
            {/* Overhead bridge connecting Branch 1 and Branch 2 */}
            <div className="relative h-6 mb-3">
              {/* Connecting line */}
              <div className="absolute top-3 left-0 right-0 h-0.5 bg-black/15" />
              {/* Branch 1 joint */}
              <div className="absolute top-2 left-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-600" />
              {/* Central feeder node */}
              <div className="absolute top-2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-black/30" />
              {/* Branch 2 joint */}
              <div className="absolute top-2 right-0 h-2.5 w-2.5 translate-x-1/2 rounded-full bg-blue-600" />
            </div>

            <div className="grid grid-cols-2 gap-x-12 lg:gap-x-20">
              {/* BRANCH 1 */}
              <div className="relative border-l-2 border-black/15 pl-8 space-y-7">
                {features.slice(0, 4).map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="group relative flex items-center gap-3.5 cursor-default"
                    >
                      {/* Node on trunk */}
                      <span className="absolute -left-[39px] flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-black/30 group-hover:border-blue-600 group-hover:bg-blue-600 transition-colors z-10 shadow-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-black/40 group-hover:bg-white transition-colors" />
                      </span>

                      {/* Branch connector */}
                      <div className="w-7 h-0.5 bg-black/15 group-hover:bg-blue-600 transition-colors shrink-0 -ml-2" />

                      {/* Feature Item */}
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-[#faf8f5] text-[#171412] group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className={`${poppins.className} text-base lg:text-lg font-semibold text-[#171412] group-hover:text-blue-600 transition-colors`}>
                          {feature.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* BRANCH 2 */}
              <div className="relative border-l-2 border-black/15 pl-8 space-y-7">
                {features.slice(4, 8).map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="group relative flex items-center gap-3.5 cursor-default"
                    >
                      {/* Node on trunk */}
                      <span className="absolute -left-[39px] flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-black/30 group-hover:border-blue-600 group-hover:bg-blue-600 transition-colors z-10 shadow-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-black/40 group-hover:bg-white transition-colors" />
                      </span>

                      {/* Branch connector */}
                      <div className="w-7 h-0.5 bg-black/15 group-hover:bg-blue-600 transition-colors shrink-0 -ml-2" />

                      {/* Feature Item */}
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-[#faf8f5] text-[#171412] group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className={`${poppins.className} text-base lg:text-lg font-semibold text-[#171412] group-hover:text-blue-600 transition-colors`}>
                          {feature.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MOBILE (< md): SINGLE UNIFIED TIMELINE */}
          <div className="md:hidden relative border-l-2 border-black/15 pl-6 space-y-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative flex items-center gap-3 cursor-default"
                >
                  {/* Node on trunk */}
                  <span className="absolute -left-[31px] flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white border-2 border-black/30 group-hover:border-blue-600 group-hover:bg-blue-600 transition-colors z-10">
                    <span className="h-1 w-1 rounded-full bg-black/40 group-hover:bg-white transition-colors" />
                  </span>

                  {/* Branch connector */}
                  <div className="w-5 h-0.5 bg-black/15 group-hover:bg-blue-600 transition-colors shrink-0 -ml-2" />

                  {/* Feature Item */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-[#faf8f5] text-[#171412] group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className={`${poppins.className} text-base font-semibold text-[#171412] group-hover:text-blue-600 transition-colors`}>
                      {feature.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
