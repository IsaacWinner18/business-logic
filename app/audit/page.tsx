"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { poppins, inter } from "@/lib/font";

type SubmissionState = "idle" | "submitting" | "success" | "error";

interface StepConfig {
  id: string;
  question: string;
  subtitle?: string;
  type: "intro" | "text" | "choice" | "email";
  placeholder?: string;
  options?: { key: string; label: string }[];
}

const steps: StepConfig[] = [
  {
    id: "intro",
    question: "Free Website Audit",
    subtitle:
      "Send us your website link. We’ll record a 5-minute video teardown showing where you're losing customers and how to fix it.",
    type: "intro",
  },
  {
    id: "websiteUrl",
    question: "What is your website URL?",
    subtitle: "We'll review your live desktop and mobile experience.",
    placeholder: "https://yourcompany.com",
    type: "text",
  },
  {
    id: "primaryGoal",
    question: "What is the main goal of your site?",
    subtitle: "Select the outcome you care about most.",
    type: "choice",
    options: [
      { key: "A", label: "Book consultations & clients" },
      { key: "B", label: "Generate inbound quote requests" },
      { key: "C", label: "Sell products online" },
      { key: "D", label: "Build brand authority & trust" },
    ],
  },
  {
    id: "biggestIssue",
    question: "What is the biggest issue right now?",
    subtitle: "We'll focus our teardown on this specific problem.",
    type: "choice",
    options: [
      { key: "A", label: "Visitors bounce without converting" },
      { key: "B", label: "Looks outdated compared to competitors" },
      { key: "C", label: "Unclear messaging or confusing offer" },
      { key: "D", label: "Need an honest expert second opinion" },
    ],
  },
  {
    id: "fullName",
    question: "What is your name?",
    placeholder: "Jane Doe",
    type: "text",
  },
  {
    id: "email",
    question: "Where should we email your video teardown?",
    subtitle: "We'll send your private 5-minute video review within 48 hours.",
    placeholder: "jane@company.com",
    type: "email",
  },
];

export default function AuditPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({
    websiteUrl: "",
    primaryGoal: "",
    biggestIssue: "",
    fullName: "",
    email: "",
  });

  const [status, setStatus] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const activeStep = steps[currentStep];

  useEffect(() => {
    // Auto focus input when step changes
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep]);

  const updateValue = (value: string) => {
    setFormData((prev) => ({ ...prev, [activeStep.id]: value }));
  };

  const sanitizeUrl = (url: string) => {
    let clean = url.trim();
    if (clean && !clean.startsWith("http://") && !clean.startsWith("https://")) {
      clean = "https://" + clean;
    }
    return clean;
  };

  const isCurrentStepValid = () => {
    if (activeStep.type === "intro") return true;
    const val = (formData[activeStep.id] || "").trim();
    if (!val) return false;

    if (activeStep.id === "websiteUrl") {
      return val.length > 3;
    }
    if (activeStep.id === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    }
    return val.length > 1;
  };

  const handleNext = () => {
    if (!isCurrentStepValid()) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleChoiceSelect = (label: string) => {
    updateValue(label);
    setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      }
    }, 180);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (status === "success" || status === "submitting") return;

      if (e.key === "Enter" && activeStep.type !== "choice") {
        e.preventDefault();
        if (isCurrentStepValid()) {
          handleNext();
        }
      }

      // Quick key selection for choice options (A, B, C, D)
      if (activeStep.type === "choice" && activeStep.options) {
        const pressedKey = e.key.toUpperCase();
        const matched = activeStep.options.find((opt) => opt.key === pressedKey);
        if (matched) {
          e.preventDefault();
          handleChoiceSelect(matched.label);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep, formData, status]);

  async function handleSubmit() {
    setStatus("submitting");
    setErrorMessage(null);

    const fullUrl = sanitizeUrl(formData.websiteUrl);

    const formattedNotes = [
      `[FREE AUDIT REQUEST]`,
      `Website: ${fullUrl}`,
      `Primary Goal: ${formData.primaryGoal}`,
      `Main Issue: ${formData.biggestIssue}`,
    ].join("\n\n");

    const payload = {
      fullName: formData.fullName.trim(),
      emailAddress: formData.email.trim(),
      contactChannel: "Website form",
      whatTheyNeed: "Website Audit",
      existingWebsiteUrl: fullUrl,
      pipelineStatus: "New",
      yourNotes: formattedNotes,
    };

    try {
      const response = await fetch("/api/notion/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Could not submit. Please try again.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  const progressPercent = Math.round(
    (currentStep / (steps.length - 1)) * 100
  );

  return (
    <main
      className={`${inter.className} relative flex min-h-screen flex-col justify-between bg-[#fdfbf7] text-[#171412] antialiased`}
    >
      {/* TOP SLIM PROGRESS BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-black/5">
        <motion.div
          className="h-full bg-orange-600 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* TOP HEADER */}
      <header className="mx-auto flex w-full max-w-2xl items-center justify-between px-6 pt-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center border border-black/15 bg-white text-[11px] font-bold text-black">
            BL
          </span>
          <span
            className={`${poppins.className} text-sm font-semibold tracking-tight text-black`}
          >
            Business Logic
          </span>
        </Link>

        {currentStep > 0 ? (
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#736a63] hover:text-orange-600 transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} />
            Back
          </button>
        ) : (
          <Link
            href="/"
            className="text-xs uppercase tracking-widest text-[#736a63] hover:text-orange-600 transition-colors"
          >
            ← Exit
          </Link>
        )}
      </header>

      {/* MAIN STEP CONTAINER */}
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-12">
        {status === "success" ? (
          /* SUCCESS STATE */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-white shadow-sm">
              <CheckCircle2 size={30} />
            </div>

            <h1
              className={`${poppins.className} mt-6 text-3xl font-bold text-black sm:text-4xl`}
            >
              Audit Requested.
            </h1>

            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#736a63]">
              We’ve added <strong className="text-black">{formData.websiteUrl}</strong> to our queue. We’ll email your private 5-minute video teardown to{" "}
              <strong className="text-black">{formData.email}</strong> within 48 business hours.
            </p>

            <div className="mt-8">
              <Link
                href="/"
                className="inline-block border border-orange-600 bg-orange-600 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-orange-500 transition-colors shadow-sm"
              >
                Return to Homepage
              </Link>
            </div>
          </motion.div>
        ) : (
          <div>
            {errorMessage && (
              <div className="mb-6 border border-red-200 bg-red-50 p-3.5 text-xs text-red-800">
                {errorMessage}
              </div>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="w-full"
              >
                {/* STEP NUMBER LABEL */}
                {activeStep.type !== "intro" && (
                  <span
                    className={`${poppins.className} mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-orange-600`}
                  >
                    Step {currentStep} of {steps.length - 1}
                  </span>
                )}

                {/* QUESTION */}
                <h2
                  className={`${poppins.className} text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl`}
                >
                  {activeStep.question}
                </h2>

                {/* SUBTITLE */}
                {activeStep.subtitle && (
                  <p className="mt-2 text-sm text-[#736a63] sm:text-base">
                    {activeStep.subtitle}
                  </p>
                )}

                {/* INPUT TYPES */}
                <div className="mt-8">
                  {activeStep.type === "intro" ? (
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-3 bg-orange-600 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-orange-500 transition-colors cursor-pointer shadow-sm"
                      >
                        Start 2-Minute Audit
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  ) : activeStep.type === "choice" ? (
                    <div className="space-y-2.5">
                      {activeStep.options?.map((opt) => {
                        const selected = formData[activeStep.id] === opt.label;
                        return (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() => handleChoiceSelect(opt.label)}
                            className={`flex w-full items-center justify-between border p-4 text-left transition-all cursor-pointer ${
                              selected
                                ? "border-orange-600 bg-orange-600 text-white shadow-sm"
                                : "border-black/15 bg-white text-[#171412] hover:border-orange-500 hover:bg-orange-50/70"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`flex h-6 w-6 items-center justify-center border text-xs font-semibold ${
                                  selected
                                    ? "border-white/40 text-white bg-orange-700"
                                    : "border-black/20 text-[#736a63]"
                                }`}
                              >
                                {opt.key}
                              </span>
                              <span className="text-sm font-medium">
                                {opt.label}
                              </span>
                            </div>

                            {selected && <Check size={16} />}
                          </button>
                        );
                      })}
                      <p className="pt-2 text-[11px] text-[#736a63]">
                        Tip: Press <kbd className="border border-black/20 px-1 py-0.5 text-[10px]">A</kbd>,{" "}
                        <kbd className="border border-black/20 px-1 py-0.5 text-[10px]">B</kbd>,{" "}
                        <kbd className="border border-black/20 px-1 py-0.5 text-[10px]">C</kbd>, or{" "}
                        <kbd className="border border-black/20 px-1 py-0.5 text-[10px]">D</kbd> on your keyboard.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <input
                        ref={inputRef}
                        type={activeStep.type}
                        value={formData[activeStep.id] || ""}
                        onChange={(e) => updateValue(e.target.value)}
                        placeholder={activeStep.placeholder}
                        className="w-full border-b-2 border-black/20 bg-transparent py-3 text-xl text-black placeholder:text-black/25 focus:border-orange-600 focus:outline-none sm:text-2xl"
                      />

                      <div className="mt-8 flex items-center gap-4">
                        <button
                          type="button"
                          disabled={!isCurrentStepValid() || status === "submitting"}
                          onClick={handleNext}
                          className={`inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold uppercase tracking-widest transition-colors ${
                            isCurrentStepValid() && status !== "submitting"
                              ? "bg-orange-600 text-white hover:bg-orange-500 cursor-pointer shadow-sm"
                              : "bg-black/15 text-black/35 cursor-not-allowed"
                          }`}
                        >
                          {currentStep === steps.length - 1 ? (
                            status === "submitting" ? (
                              "Submitting..."
                            ) : (
                              <>
                                Get Free Video Audit
                                <Check size={14} />
                              </>
                            )
                          ) : (
                            <>
                              OK
                              <Check size={14} />
                            </>
                          )}
                        </button>

                        <span className="text-xs text-[#736a63]">
                          press <strong className="text-black font-semibold">Enter ↵</strong>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* FOOTER BAR */}
      <footer className="mx-auto flex w-full max-w-2xl items-center justify-between px-6 pb-8 text-[11px] text-[#736a63]">
        <span>© 2026 Business Logic</span>
        <span>Confidential & Free</span>
      </footer>
    </main>
  );
}
