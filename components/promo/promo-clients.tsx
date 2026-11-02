"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ClientBubble {
  name: string;
  logo: string;
  width: number;
  height: number;
  className?: string;
  sizeClass: string;
  positionClass: string;
  floatDelay?: number;
}

// 8 CLIENT BUBBLES IN 3 STAGGERED COLUMNS MATCHING THE REFERENCE IMAGE EXACTLY
const clientBubbles: ClientBubble[] = [
  // COLUMN 1 (LEFT)
  {
    name: "Farmergiant",
    logo: "/farmergiant_logo.png",
    width: 500,
    height: 500,
    className: "h-9 sm:h-10 w-auto object-contain",
    sizeClass: "w-28 h-28 sm:w-32 sm:h-32",
    positionClass: "top-4 left-2 sm:left-4",
    floatDelay: 0,
  },
  {
    name: "DBEN Real Estate",
    logo: "/dben_logo.webp",
    width: 124,
    height: 126,
    className: "h-8 sm:h-9 w-auto object-contain",
    sizeClass: "w-32 h-32 sm:w-36 sm:h-36",
    positionClass: "top-40 left-0",
    floatDelay: 0.9,
  },
  {
    name: "B'Bonds Heavy Haul",
    logo: "/bbonds_logo.webp",
    width: 512,
    height: 512,
    className: "h-8 sm:h-9 w-auto object-contain",
    sizeClass: "w-28 h-28 sm:w-32 sm:h-32",
    positionClass: "top-80 left-3 sm:left-5",
    floatDelay: 1.5,
  },

  // COLUMN 2 (CENTER - STAGGERED VERTICALLY)
  {
    name: "Earnstak",
    logo: "/earnstak_logo.webp",
    width: 96,
    height: 66,
    className: "h-8 sm:h-9 w-auto object-contain",
    sizeClass: "w-36 h-36 sm:w-40 sm:h-40",
    positionClass: "top-14 left-36 sm:left-44",
    floatDelay: 0.4,
  },
  {
    name: "Tino Rides",
    logo: "/tino_rides_logo.png",
    width: 512,
    height: 512,
    className: "h-8 sm:h-9 w-auto object-contain",
    sizeClass: "w-32 h-32 sm:w-36 sm:h-36",
    positionClass: "top-60 left-36 sm:left-44",
    floatDelay: 1.2,
  },

  // COLUMN 3 (RIGHT - ADJACENT TO HEADLINE)
  {
    name: "Santorini",
    logo: "/santorini-main-logo.png",
    width: 475,
    height: 525,
    className: "h-8 sm:h-9 w-auto object-contain brightness-0 opacity-80",
    sizeClass: "w-28 h-28 sm:w-32 sm:h-32",
    positionClass: "top-3 left-72 sm:left-88",
    floatDelay: 0.7,
  },
  {
    name: "Business Logic",
    logo: "/logo-mark-black.png",
    width: 256,
    height: 256,
    className: "h-9 sm:h-10 w-auto object-contain",
    sizeClass: "w-36 h-36 sm:w-40 sm:h-40",
    positionClass: "top-44 left-72 sm:left-88",
    floatDelay: 1.8,
  },
  {
    name: "DBEN Luxury",
    logo: "/dben_logo.webp",
    width: 124,
    height: 126,
    className: "h-7 sm:h-8 w-auto object-contain opacity-85",
    sizeClass: "w-28 h-28 sm:w-30 sm:h-30",
    positionClass: "top-84 left-72 sm:left-88",
    floatDelay: 1.1,
  },
];

export function PromoClients() {
  return (
    <section className="relative w-full border-t border-black/[0.08] bg-[#FAFAFA] py-20 px-5 md:py-28 md:px-10 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT: FLOATING CIRCLE LOGO CLUSTER (7 COLS) */}
          <div className="lg:col-span-7 flex justify-center items-center">
            {/* DESKTOP FLOATING CLUSTER VIEW - EXACT 3-COLUMN STAGGERED CLOUD */}
            <div className="relative hidden lg:block w-full h-[480px] max-w-[500px]">
              {clientBubbles.map((client, idx) => (
                <motion.div
                  key={`${client.name}-${idx}`}
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: client.floatDelay || 0,
                  }}
                  className={`absolute ${client.positionClass} ${client.sizeClass} rounded-full bg-white shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-black/[0.04] flex items-center justify-center p-5 transition-transform duration-300 hover:scale-105 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] cursor-pointer`}
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={client.width}
                    height={client.height}
                    className={client.className}
                  />
                </motion.div>
              ))}
            </div>

            {/* MOBILE & TABLET RESPONSIVE CLUSTER VIEW */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:hidden w-full max-w-sm sm:max-w-md mx-auto py-4">
              {clientBubbles.slice(0, 6).map((client, idx) => (
                <motion.div
                  key={`mobile-${client.name}-${idx}`}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (idx * 0.3) % 1.5,
                  }}
                  className="aspect-square rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-black/[0.04] flex items-center justify-center p-3.5"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={client.width}
                    height={client.height}
                    className={client.className}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: HEADLINE - MINIMAL & CLEAN EXACTLY LIKE REFERENCE */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#111827] leading-[1.12]">
              Clients we have
              <br />
              enjoyed working with
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

