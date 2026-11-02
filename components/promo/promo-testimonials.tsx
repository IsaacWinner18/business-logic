"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Before we had this site, my team was answering the same questions all day on WhatsApp—prices, stock availability, bank details. Now customers go through the catalog, see the specs, and reach out ready to pay. It cut down our back-and-forth by half.",
    name: "Tunde Adeyemi",
    role: "Retail & Consumer Business Owner",
    image: "/testimonials/tunde-adeyemi.jpg",
  },
  {
    quote:
      "Our previous store was slow and kept crashing when customers checked out on mobile networks. The new website loads in seconds, looks sharp, and people now complete their orders directly without calling us for manual account transfers.",
    name: "Amina Bello",
    role: "E-Commerce Brand Founder",
    image: "/testimonials/amina-bello.jpg",
  },
  {
    quote:
      "We were losing almost 20% on every single booking to third-party aggregator sites. Having our own booking website where guests can view room availability and pay directly in Naira has completely transformed our revenue.",
    name: "Chidinma Nwosu",
    role: "Hospitality & Boutique Manager",
    image: "/testimonials/chidinma-nwosu.jpg",
  },
  {
    quote:
      "When dealing with corporate clients, an Instagram page is not enough. They ask for your website before approving vendor registrations or invoice payments. Having a fast, polished site gave corporate clients the confidence to work with us.",
    name: "Ojo Feranmi",
    role: "Logistics & Fleet Operator",
    image: "/testimonials/ojo-feranmi.jpg",
  },
];

export function PromoTestimonials() {
  return (
    <section className="relative w-full border-t border-black/10 bg-[#f9f5f0] py-20 px-5 md:py-28 md:px-8">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#171412] sm:text-4xl md:text-5xl md:leading-[1.15]">
            What Business Owners Say
          </h2>
          <p className="mt-4 text-base text-[#57534e] sm:text-lg">
            Real feedback from founders and brand owners who replaced manual DM
            chaos with automated online storefronts.
          </p>
        </div>

        {/* 4 TESTIMONIALS GRID */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-black/8 bg-white p-7 shadow-xs transition-all duration-300 hover:border-black/20 hover:shadow-md"
            >
              <div>
                {/* 5 STARS & QUOTE ICON */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-black/10" />
                </div>

                {/* QUOTE */}
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#292524] font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* AUTHOR */}
              <div className="mt-6 flex items-center gap-3.5 border-t border-black/5 pt-4">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-black/10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#171412]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#78716c]">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

