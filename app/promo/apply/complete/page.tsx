"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { poppins, inter } from "@/lib/font";
import { trackMetaEvent } from "@/lib/fpixel";

const DEFAULT_WHATSAPP_URL =
  "https://wa.me/2348119188295?text=Hi%20Business%20Logic,%20I%20have%20completed%20my%20%E2%82%A6120,000%20Online%20Store%20promotional%20application.";

function CompleteContent() {
  const searchParams = useSearchParams();
  const rawTarget = searchParams.get("target");

  // Determine valid target URL
  let destinationUrl = DEFAULT_WHATSAPP_URL;
  if (rawTarget) {
    try {
      destinationUrl = rawTarget.startsWith("http")
        ? rawTarget
        : decodeURIComponent(rawTarget);
    } catch {
      destinationUrl = rawTarget;
    }
  }

  const [countdown, setCountdown] = useState(3);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fire Meta standard events when the application is successfully completed
    trackMetaEvent("Lead", {
      content_name: "₦120,000 Online Store Package Application",
      currency: "NGN",
      value: 120000,
    });
    trackMetaEvent("SubmitApplication", {
      content_name: "₦120,000 Online Store Package Application",
      currency: "NGN",
      value: 120000,
    });

    const duration = 3000; // 3 seconds auto-redirect
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remainingSeconds = Math.max(0, Math.ceil((duration - elapsed) / 1000));
      const currentProgress = Math.min(100, (elapsed / duration) * 100);

      setCountdown(remainingSeconds);
      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        trackMetaEvent("Contact", {
          content_name: "WhatsApp Auto Redirect",
        });
        window.location.href = destinationUrl;
      }
    }, 50);

    return () => clearInterval(interval);
  }, [destinationUrl]);

  return (
    <main
      className={`${inter.className} relative min-h-screen min-h-[100dvh] w-full overflow-x-hidden flex items-center justify-center bg-[#fdfbf7] px-4 py-12 md:py-16`}
    >
      {/* Background grain texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-45 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "150px 150px",
        }}
      />

      {/* Atmospheric ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-35">
        <div className="absolute w-[80vw] h-[80vw] max-w-[650px] max-h-[650px] rounded-full bg-emerald-200/50 blur-3xl mix-blend-multiply" />
        <div className="absolute -translate-y-1/4 translate-x-1/4 w-[50vw] h-[50vw] max-w-[450px] max-h-[450px] rounded-full bg-blue-200/50 blur-3xl mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-lg">
        {/* TOP BRAND HEADER */}
        <div className="mb-6 flex items-center justify-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Business Logic Logo"
            width={36}
            height={36}
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg object-contain"
          />
          <span className="font-sans text-base tracking-tight text-[#171412] font-bold">
            Business Logic
          </span>
        </div>

        {/* CARD CONTAINER */}
        <div className="rounded-3xl border border-black/10 bg-white/95 p-7 sm:p-9 shadow-2xl backdrop-blur-md text-center">
          {/* ANIMATED SUCCESS ICON */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-100/60 shadow-lg shadow-emerald-500/10 mb-6">
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
          </div>

          {/* HEADING */}
          <h1
            className={`${poppins.className} text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] leading-snug`}
          >
            You&apos;re All Set!
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-sm mx-auto">
            Opening WhatsApp in{" "}
            <span className="font-semibold text-emerald-600 font-mono">
              {countdown > 0 ? `${countdown}s` : "..."}
            </span>
            ...
          </p>

          {/* MINIMAL PROGRESS BAR */}
          <div className="mt-4 mx-auto max-w-xs h-1.5 w-full rounded-full bg-black/5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-blue-600 transition-all duration-75 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* INSTANT CTA BUTTON */}
          <div className="mt-6">
            <a
              href={destinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackMetaEvent("Contact", {
                  content_name: "WhatsApp Consultation Click",
                })
              }
              className="group w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 px-6 py-3.5 sm:py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <Image
                src="/whatsapp-svgrepo-com.svg"
                alt="WhatsApp"
                width={18}
                height={18}
                className="w-4 h-4 sm:w-5 sm:h-5 brightness-0 invert"
              />
              <span>Continue to WhatsApp</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* TRUST / SECURITY NOTE */}
          <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-[#9ca3af]">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>Official Business Logic WhatsApp (+234 811 918 8295)</span>
          </div>

          {/* RETURN LINK */}
          <div className="mt-6 pt-5 border-t border-black/5">
            <Link
              href="/promo"
              className="text-xs font-semibold text-[#6b7280] hover:text-black transition-colors"
            >
              ← Back to Promo Overview
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function PromoApplyCompletePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7]">
          <div className="h-8 w-8 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin" />
        </div>
      }
    >
      <CompleteContent />
    </Suspense>
  );
}
