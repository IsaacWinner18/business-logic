"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { poppins, inter } from "@/lib/font";

interface ProjectItem {
  brand: string;
  logo: string;
  invertLogo?: boolean;
  url: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

const promoProjects: ProjectItem[] = [
  {
    brand: "TINO RIDES",
    logo: "/tino_rides_logo.png",
    invertLogo: false,
    url: "https://tino-rides.vercel.app",
    category: "Automotive & Luxury Travel · Fleet Platform",
    title: "Premier Luxury Car Rental & VIP Fleet Platform",
    description:
      "A luxury car rental and chauffeur platform where clients view vehicles, see clear daily rates, and book online in minutes.",
    image: "/tino-rides-nano-banana.jpg",
  },
  {
    brand: "Dben Real Estates",
    logo: "/dben_logo.webp",
    invertLogo: true,
    url: "https://dben-real-estate.vercel.app/",
    category: "Real Estate · Luxury Property Discovery",
    title: "High-End Property Showcase & Inquiry Portal",
    description:
      "A luxury real estate website with fast property search, clean photo galleries, and direct WhatsApp inquiries for serious buyers.",
    image: "/dben-nano-banana.jpg",
  },
  {
    brand: "Earnstak",
    logo: "/earnstak_logo.webp",
    invertLogo: true,
    url: "https://earnstak.com",
    category: "Creator Economy · Commerce Hub",
    title: "All-in-One Storefront & Monetization Hub",
    description:
      "An all-in-one storefront for creators to sell products on their own page, sell event tickets, and accept customer payments directly.",
    image: "/earnstak-nano-banana.jpg",
  },
  {
    brand: "B'Bonds Heavy Haul",
    logo: "/bbonds_logo.png",
    invertLogo: false,
    url: "https://bbondddd.vercel.app",
    category: "Logistics & Transport · Industrial Fleet",
    title: "Industrial Logistics & Fleet Operations Website",
    description:
      "A heavy haul and logistics website that lets industrial clients request transport, track shipments, and move cargo across Nigeria.",
    image: "/bbonds-nano-banana.jpg",
  },
];

export function PromoProjects() {
  return (
    <section className={`${inter.className} relative w-full border-t border-black/10 bg-[#fbf8f3] py-20 px-5 md:py-28 md:px-8`}>
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`${poppins.className} text-3xl font-bold tracking-tight text-[#171412] sm:text-4xl md:text-5xl md:leading-[1.15]`}>
            Real Websites Built for Real Businesses
          </h2>
          <p className="mt-4 text-base text-[#57534e] sm:text-lg">
            Explore recent digital storefronts and web platforms designed and
            launched by the Business Logic team.
          </p>
        </div>

        {/* 4 PROJECTS GRID */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {promoProjects.map((project) => (
            <div
              key={project.brand}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-300 hover:border-black/25 hover:shadow-xl hover:-translate-y-1"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* BRAND BADGE AT TOP */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/60 px-3.5 py-1.5 backdrop-blur-md border border-white/15">
                  {project.logo && (
                    <div className="relative h-4 w-14">
                      <Image
                        src={project.logo}
                        alt={`${project.brand} logo`}
                        fill
                        sizes="56px"
                        className={`object-contain ${
                          project.invertLogo ? "invert" : ""
                        }`}
                      />
                    </div>
                  )}
                  <span className="text-xs font-semibold text-white">
                    {project.brand}
                  </span>
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {project.category}
                  </span>
                  <h3 className={`${poppins.className} mt-2 text-xl font-bold text-[#171412] leading-snug`}>
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#736a63]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-black/5 pt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#171412] group-hover:text-blue-600 transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

