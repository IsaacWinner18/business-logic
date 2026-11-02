"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { poppins, inter } from "@/lib/font";

interface StepConfig {
  id: string;
  stepNumber: number;
  question: string;
  subtitle?: string;
  placeholder?: string;
  type: "text" | "tel" | "select";
  options?: { value: string; label: string }[];
}

const steps: StepConfig[] = [
  {
    id: "businessName",
    stepNumber: 1,
    question: "What is the name of your business?",
    subtitle: "Your store name, brand, or registered business name",
    placeholder: "e.g. MobileX, Aurora Fashion, Glitz Beauty...",
    type: "text",
  },
  {
    id: "whatTheySell",
    stepNumber: 2,
    question: "What do you sell?",
    subtitle: "Tell us the products or items you want in your online store",
    placeholder: "e.g. Smartphones & accessories, bags, hair, clothing...",
    type: "text",
  },
  {
    id: "readyToStart",
    stepNumber: 3,
    question: "Are you ready to start your project right now?",
    subtitle: "Pick the timeline that best matches your business schedule",
    type: "select",
    options: [
      {
        value: "ready to start immediately",
        label: "Yes, I am ready to start immediately",
      },
      {
        value: "ready to start within the next 2–3 days",
        label: "Yes, within the next 2–3 days",
      },
      {
        value: "ready to start this week",
        label: "Yes, sometime this week",
      },
      {
        value: "exploring and ready to start soon",
        label: "Just inquiring / exploring for now",
      },
    ],
  },
  {
    id: "phone",
    stepNumber: 4,
    question: "What is your WhatsApp or phone number?",
    subtitle: "We will connect with you on WhatsApp to kick off your store build",
    placeholder: "e.g. +234 812 345 6789 or 080...",
    type: "tel",
  },
];

const WHATSAPP_PHONE_NUMBER = "2348119188295";

export default function PromoApplyPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState<string>("");
  const advanceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentStepConfig = steps[currentStep];

  const isCurrentStepValid = () => {
    const value = formData[currentStepConfig.id]?.trim() || "";
    if (!value) return false;
    if (currentStepConfig.type === "tel") {
      return /^[\d\s\+\-\(\)]{7,}$/.test(value);
    }
    return value.length >= 2;
  };

  const handleNext = () => {
    // Clear any pending auto-advance timeout to prevent double-advancing
    if (advanceTimeoutRef.current) {
      clearTimeout(advanceTimeoutRef.current);
      advanceTimeoutRef.current = null;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (isCurrentStepValid()) {
        handleNext();
      }
    }
  };

  const handleComplete = () => {
    const business = formData.businessName?.trim() || "my business";
    const sell = formData.whatTheySell?.trim() || "my products";
    const readiness = formData.readyToStart?.trim() || "ready to start immediately";
    const phone = formData.phone?.trim() || "";

    // Formatted WhatsApp message without phone number
    const message = `Hi, I am the CEO of *${business}*, I want a website for my *${sell}*, I am *${readiness}*.`;
    const encoded = encodeURIComponent(message);
    const targetUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encoded}`;

    setRedirectUrl(targetUrl);
    setIsRedirecting(true);

    // Map readiness to exact existing Notion select options for "Timeline / urgency"
    const mapNotionTimeline = (val: string) => {
      if (val.includes("immediately") || val.includes("2–3") || val.includes("2-3")) {
        return "ASAP (next 2-4 weeks)";
      }
      if (val.includes("week")) {
        return "Within 1-3 months";
      }
      return "Just exploring ideas";
    };

    // Concurrently log lead in the background with keepalive so page transition doesn't abort it
    fetch("/api/notion/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: `${business} (CEO)`,
        businessName: business,
        contactChannel: "Website form",
        contactHandleOrNumber: phone,
        timelineOrUrgency: mapNotionTimeline(readiness),
        pipelineStatus: "New",
        yourNotes: `[₦120,000 Online Store Promo]\nProducts sold: ${sell}\nReadiness: ${readiness}\nPackage: ₦120,000 E-Commerce Website`,
      }),
      keepalive: true,
    }).catch(() => {
      // Non-blocking fallback
    });

    // Smooth redirection allowing visual feedback and robust network dispatch
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 600);
    }
  };

  return (
    <main
      className={`${inter.className} relative min-h-screen min-h-[100dvh] w-full overflow-x-hidden overflow-y-auto flex items-center justify-center bg-[#fdfbf7] px-5 py-12 md:py-16`}
    >
      {/* CRISP GRAINY PAPER CSS ART BACKGROUND */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-45 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "150px 150px",
        }}
      />

      {/* Subtle organic ambient glow spheres */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-30">
        <div
          className="absolute w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-blue-200/50 blur-3xl mix-blend-multiply animate-pulse"
          style={{ animationDuration: "7s" }}
        />
        <div className="absolute translate-x-1/3 -translate-y-1/4 w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-amber-100/60 blur-3xl mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* TOP NAVIGATION */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/promo"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#57534e] hover:text-black transition-colors w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Promo</span>
          </Link>
        </div>

        {isRedirecting ? (
          /* REDIRECTING / SUCCESS SCREEN */
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center py-10 px-4"
          >
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 shadow-xl shadow-emerald-500/15">
              <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping pointer-events-none" />
              <Image
                src="/whatsapp-svgrepo-com.svg"
                alt="WhatsApp"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>

            <h2
              className={`${poppins.className} text-3xl sm:text-4xl font-bold tracking-tight text-[#171412]`}
            >
              Opening WhatsApp...
            </h2>

            <p className="mt-3 max-w-md text-sm sm:text-base text-[#57534e] leading-relaxed">
              We&apos;re redirecting you to WhatsApp with your pre-formatted
              project message so we can kick off your website immediately.
            </p>

            <a
              href={redirectUrl}
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-600/25 transition-all hover:scale-105 active:scale-95"
            >
              <span>Click here if WhatsApp doesn&apos;t open automatically</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        ) : (
          /* MULTI-STEP QUESTIONNAIRE */
          <div className="min-h-[420px] flex flex-col justify-center">
            {/* 4-STEP PROGRESS INDICATOR */}
            <div className="mb-10 flex items-center gap-2.5 w-full">
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                    idx <= currentStep ? "bg-blue-600" : "bg-black/10"
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="w-full flex flex-col"
              >
                {/* STEP NUMBER & LABEL */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                  <span>Step {currentStep + 1} of {steps.length}</span>
                </div>

                {/* QUESTION */}
                <h1
                  className={`${poppins.className} mt-3 text-2xl sm:text-4xl md:text-[42px] font-bold text-[#171412] leading-[1.2]`}
                >
                  {currentStepConfig.question}
                </h1>

                {/* SUBTITLE */}
                {currentStepConfig.subtitle && (
                  <p className="mt-2 text-sm sm:text-base text-[#64748b]">
                    {currentStepConfig.subtitle}
                  </p>
                )}

                {/* INPUT CONTROL */}
                <div className="mt-8">
                  {currentStepConfig.type === "select" ? (
                    <div className="flex flex-col gap-3">
                      {currentStepConfig.options?.map((option) => {
                        const isSelected =
                          formData[currentStepConfig.id] === option.value;
                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setFormData({
                                ...formData,
                                [currentStepConfig.id]: option.value,
                              });
                              if (advanceTimeoutRef.current) {
                                clearTimeout(advanceTimeoutRef.current);
                              }
                              // Smooth auto-advance on option pick
                              advanceTimeoutRef.current = setTimeout(handleNext, 320);
                            }}
                            className={`flex items-center justify-between text-left px-5 sm:px-6 py-4 sm:py-5 rounded-2xl border-2 transition-all duration-200 text-base sm:text-lg font-medium cursor-pointer ${
                              isSelected
                                ? "border-blue-600 bg-blue-50/70 text-blue-950 shadow-md shadow-blue-600/10 font-semibold"
                                : "border-black/10 hover:border-blue-300 hover:bg-black/[0.02] text-[#334155]"
                            }`}
                          >
                            <span>{option.label}</span>
                            {isSelected && (
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white shrink-0">
                                <Check className="h-3.5 w-3.5 stroke-[3]" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="relative">
                      <input
                        id={currentStepConfig.id}
                        type={currentStepConfig.type}
                        autoFocus
                        placeholder={currentStepConfig.placeholder}
                        value={formData[currentStepConfig.id] || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [currentStepConfig.id]: e.target.value,
                          })
                        }
                        onKeyDown={handleKeyDown}
                        className={`${poppins.className} w-full bg-transparent border-b-2 border-black/20 focus:border-blue-600 outline-none text-xl sm:text-3xl text-[#171412] placeholder:text-black/25 py-3 sm:py-4 transition-colors font-semibold`}
                      />
                    </div>
                  )}
                </div>

                {/* ACTION BUTTONS & KEYBOARD HINT */}
                <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4">
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep((prev) => prev - 1)}
                      className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-[#171412] transition-all hover:bg-black/5 active:scale-95"
                    >
                      Back
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isCurrentStepValid()}
                    className="group inline-flex items-center gap-2.5 rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-white transition-all shadow-xl shadow-blue-600/30 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span>
                      {currentStep === steps.length - 1 ? "Submit" : "Continue"}
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  {currentStepConfig.type !== "select" && (
                    <span className="hidden sm:inline-block text-xs font-semibold text-[#94a3b8]">
                      Press Enter ↵
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </main>
  );
}
