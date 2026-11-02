"use client";

import { useState } from "react";
import { PromoHero } from "@/components/promo/promo-hero";
import { PromoProblem } from "@/components/promo/promo-problem";
import { PromoSolution } from "@/components/promo/promo-solution";
import { PromoClients } from "@/components/promo/promo-clients";
import { PromoProjects } from "@/components/promo/promo-projects";
import { PromoProcess } from "@/components/promo/promo-process";
import { PromoPositioning } from "@/components/promo/promo-positioning";
import { PromoPricing } from "@/components/promo/promo-pricing";
import { PromoTestimonials } from "@/components/promo/promo-testimonials";
import { PromoFaq } from "@/components/promo/promo-faq";
import { PromoFinalCta } from "@/components/promo/promo-final-cta";
import { PromoInquiryModal } from "@/components/promo/promo-inquiry-modal";
import { PromoStickyBar } from "@/components/promo/promo-sticky-bar";

export function PromoView() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const openInquiry = () => setIsInquiryOpen(true);
  const closeInquiry = () => setIsInquiryOpen(false);

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-[#171412] antialiased selection:bg-blue-200 selection:text-blue-950">
      {/* HERO SECTION */}
      <PromoHero onOpenInquiry={openInquiry} />

      {/* SECTION: THE INSTAGRAM / DM FRICTION PROBLEM */}
      <PromoProblem />

      {/* SECTION: SOLUTION & FEATURES */}
      <PromoSolution />

      {/* SECTION: CLIENTS WE HAVE ENJOYED WORKING WITH */}
      <PromoClients />

      {/* SECTION: 4 PROJECTS FROM MAIN WEBSITE */}
      <PromoProjects />

      {/* SECTION: 4-STEP PROCESS */}
      <PromoProcess />

      {/* SECTION: AGENCY POSITIONING & STANDARDS */}
      <PromoPositioning />

      {/* SECTION: PRICING PACKAGE (₦120,000) */}
      <PromoPricing onOpenInquiry={openInquiry} />

      {/* SECTION: TESTIMONIALS FROM MAIN WEBSITE */}
      <PromoTestimonials />

      {/* SECTION: FAQS / OBJECTION HANDLING */}
      <PromoFaq />

      {/* SECTION: FINAL CALL TO ACTION */}
      <PromoFinalCta onOpenInquiry={openInquiry} />

      {/* STICKY BOTTOM BAR FOR FAST MOBILE CONVERSIONS */}
      <PromoStickyBar onOpenInquiry={openInquiry} />

      {/* INQUIRY MODAL */}
      <PromoInquiryModal isOpen={isInquiryOpen} onClose={closeInquiry} />
    </main>
  );
}
