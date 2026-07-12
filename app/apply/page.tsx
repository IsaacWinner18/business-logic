"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

function mapBudgetRange(value: string) {
  switch (value) {
    case "200k-500k":
      return "Under $500";
    case "500k-1m":
      return "$500-$1500";
    case "1m+":
      return "$1500-$5000";
    default:
      return undefined;
  }
}

type SubmissionState = "idle" | "submitting" | "success" | "error";

const steps = [
  {
    id: "intro",
    title: "Ready to Scale Your Revenue?",
    subtitle: "Tell us what your business needs and we'll recommend the right approach.",
    type: "info",
  },
  {
    id: "name",
    question: "What's your full name?",
    type: "text",
    placeholder: "Jane Doe",
  },
  {
    id: "businessName",
    question: "What is the name of your business?",
    type: "text",
    placeholder: "Aurora Solutions",
  },
  {
    id: "email",
    question: "What's your email address?",
    type: "email",
    placeholder: "name@company.com",
  },
  {
    id: "phone",
    question: "Your phone number or WhatsApp?",
    type: "tel",
    placeholder: "+234...",
  },
  {
    id: "whatTheyNeed",
    question: "What do you need help with?",
    type: "select",
    options: [
      { value: "New website", label: "New website" },
      { value: "Redesign", label: "Redesign" },
      { value: "Landing page", label: "Landing page" },
      { value: "E-commerce store", label: "E-commerce store" },
      { value: "Web app", label: "Web app" },
      { value: "Not sure yet", label: "Not sure yet" },
    ],
  },
  {
    id: "budget",
    question: "What is your estimated budget?",
    type: "select",
    options: [
      { value: "200k-500k", label: "N200k - N500k" },
      { value: "500k-1m", label: "N500k - N1M" },
      { value: "1m+", label: "N1M+" },
    ],
  },
  {
    id: "timeline",
    question: "When do you need this completed?",
    type: "select",
    options: [
      { value: "ASAP", label: "ASAP" },
      { value: "Within 2 weeks", label: "Within 2 weeks" },
      { value: "Within 1 month", label: "Within 1 month" },
      { value: "Flexible", label: "Flexible" },
    ],
  },
  {
    id: "business",
    question: "Tell us about the business",
    subtitle: "What do you do, who do you serve, and what are you trying to improve?",
    type: "textarea",
    placeholder: "Type your answer here...",
  },
];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && steps[currentStep].type !== "textarea") {
      e.preventDefault();
      if (isCurrentStepValid()) {
        handleNext();
      }
    }
  };

  const isCurrentStepValid = () => {
    const step = steps[currentStep];
    if (step.id === "intro") return true;
    
    const value = formData[step.id]?.trim() || "";
    if (value.length === 0) return false;
    
    if (step.type === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    if (step.type === "tel") {
      return /^[\d\s\+\-\(\)]{7,}$/.test(value);
    }
    
    return true;
  };

  async function handleSubmit() {
    setStatus("submitting");
    setErrorMessage(null);

    const payload = {
      fullName: formData.name?.trim(),
      businessName: formData.businessName?.trim(),
      emailAddress: formData.email?.trim(),
      contactChannel: "Website form",
      contactHandleOrNumber: formData.phone?.trim(),
      whatTheyNeed: formData.whatTheyNeed?.trim(),
      budgetRange: mapBudgetRange(formData.budget ?? ""),
      timelineOrUrgency: formData.timeline?.trim(),
      pipelineStatus: "New",
      yourNotes: formData.business?.trim() || undefined,
    };

    try {
      const response = await fetch("/api/notion/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(
          result.error || "We could not send your details right now."
        );
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not send your details right now."
      );
    }
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#fdfbf7]">
      {/* CRISP GRAINY PAPER CSS ART BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px',
        }}
      />
      
      {/* Subtle organic gradient shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-30">
         <div className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[#E8DCC9] blur-3xl opacity-50 mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
         <div className="absolute translate-x-1/3 -translate-y-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#d5cfc5] blur-3xl opacity-40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-2xl px-6 py-12">
        <Link 
          href="/" 
          className="absolute top-8 left-6 md:left-0 text-sm font-unbounded text-[var(--ink-soft)] hover:text-black transition-colors"
        >
          ← Back
        </Link>

        {status === "success" ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center gap-6"
          >
            <CheckCircle2 className="w-20 h-20 text-green-600" />
            <h2 className="font-unbounded text-3xl md:text-5xl text-black">
              Application Received
            </h2>
            <p className="text-lg text-[var(--ink-soft)]">
              Thank you for taking the time to share your details. We will review your project and reach out within 24 hours.
            </p>
            <Link 
               href="/"
               className="mt-8 rounded-full border border-black/10 bg-white px-8 py-4 font-unbounded text-sm hover:border-black/30 hover:bg-black/5 transition-all"
            >
              Return Home
            </Link>
          </motion.div>
        ) : (
          <div className="min-h-[400px] flex flex-col justify-center">
            {/* PROGRESS INDICATOR */}
            <div className="mb-12 flex gap-2 w-full max-w-[200px]">
              {steps.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1 flex-1 rounded-full transition-colors duration-500 ${idx <= currentStep ? 'bg-black' : 'bg-black/10'}`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="w-full flex flex-col"
              >
                {steps[currentStep].type === "info" ? (
                  <div className="flex flex-col gap-4">
                    <h1 className="font-unbounded text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
                      {steps[currentStep].title}
                    </h1>
                    <p className="text-xl text-[var(--ink-soft)] mt-4">
                      {steps[currentStep].subtitle}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-6 w-full">
                    <div className="flex items-baseline gap-4">
                       <span className="font-caveat text-2xl text-[var(--ink-soft)]">
                         {currentStep}.
                       </span>
                       <label htmlFor={steps[currentStep].id} className="font-unbounded text-2xl md:text-4xl text-black">
                         {steps[currentStep].question}
                       </label>
                    </div>

                    {steps[currentStep].subtitle && (
                      <p className="text-lg text-[var(--ink-soft)] -mt-2 ml-10">
                        {steps[currentStep].subtitle}
                      </p>
                    )}
                    
                    <div className="mt-8 ml-10">
                      {steps[currentStep].type === "textarea" ? (
                        <textarea
                          id={steps[currentStep].id}
                          autoFocus
                          rows={4}
                          placeholder={steps[currentStep].placeholder}
                          value={formData[steps[currentStep].id] || ""}
                          onChange={(e) => setFormData({ ...formData, [steps[currentStep].id]: e.target.value })}
                          className="w-full bg-transparent border-b-2 border-black/20 focus:border-black outline-none text-2xl md:text-3xl text-black placeholder:text-black/20 py-4 transition-colors resize-none"
                        />
                      ) : steps[currentStep].type === "select" ? (
                        <div className="flex flex-col gap-3">
                          {steps[currentStep].options?.map((option) => (
                            <button
                              key={option.value}
                              onClick={() => {
                                setFormData({ ...formData, [steps[currentStep].id]: option.value });
                                setTimeout(handleNext, 400); // Auto-advance on selection
                              }}
                              className={`text-left px-6 py-5 rounded-xl border-2 transition-all text-xl md:text-2xl font-medium ${
                                formData[steps[currentStep].id] === option.value 
                                  ? 'border-black bg-black/5 text-black' 
                                  : 'border-black/10 hover:border-black/30 hover:bg-black/5 text-[var(--ink-soft)]'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <input
                          id={steps[currentStep].id}
                          type={steps[currentStep].type}
                          autoFocus
                          placeholder={steps[currentStep].placeholder}
                          value={formData[steps[currentStep].id] || ""}
                          onChange={(e) => setFormData({ ...formData, [steps[currentStep].id]: e.target.value })}
                          onKeyDown={handleKeyDown}
                          className="w-full bg-transparent border-b-2 border-black/20 focus:border-black outline-none text-2xl md:text-4xl text-black placeholder:text-black/20 py-4 transition-colors"
                        />
                      )}
                    </div>
                  </div>
                )}
                
                {status === "error" && (
                  <p className="mt-6 text-rose-600 font-medium">
                    {errorMessage}
                  </p>
                )}

                <div className="mt-12 ml-10 flex flex-wrap items-center gap-4">
                  {currentStep > 0 && (
                    <button
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      disabled={status === "submitting"}
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-4 font-unbounded text-sm text-black transition-all hover:border-black/30 hover:bg-black/5 disabled:opacity-50"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    disabled={!isCurrentStepValid() || status === "submitting"}
                    className="group inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 font-unbounded text-sm text-white transition-all hover:bg-black/80 disabled:opacity-30 disabled:hover:bg-black"
                  >
                    {status === "submitting" ? "Submitting..." : (currentStep === steps.length - 1 ? "Submit Application" : "Continue")}
                    {status !== "submitting" && <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />}
                  </button>
                  {steps[currentStep].type !== 'select' && currentStep > 0 && currentStep < steps.length - 1 && (
                     <span className="text-sm text-[var(--ink-faint)]">
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
