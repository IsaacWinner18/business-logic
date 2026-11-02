"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PromoStickyBarProps {
  onOpenInquiry: () => void;
}

export function PromoStickyBar({ onOpenInquiry }: PromoStickyBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const whatsappUrl =
    "https://wa.me/2348119188295?text=Hi%20Business%20Logic,%20I%20want%20to%20get%20the%20%E2%82%A6120,000%20Online%20Store%20package.";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-black/10 bg-white/95 px-4 py-3 shadow-[0_-8px_25px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-unbounded text-sm sm:text-base font-extrabold text-[#171412]">
              ₦120,000
            </span>
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-800">
              Promo
            </span>
          </div>
          <span className="hidden text-xs text-[#78716c] sm:inline">
            Professional Online Store Setup
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2.5 text-xs font-semibold text-[#171412] hover:bg-neutral-50 shadow-xs"
          >
            <Image
              src="/whatsapp-svgrepo-com.svg"
              alt="WhatsApp"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/promo/apply"
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 hover:bg-blue-700 px-5 sm:px-6 py-2.5 font-unbounded text-xs sm:text-sm font-bold text-white transition-all shadow-md shadow-blue-600/25 active:scale-95"
          >
            <span>Get My Website</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

