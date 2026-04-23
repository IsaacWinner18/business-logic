"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

function mapBudgetRange(value: string) {
  switch (value) {
    case "200k-500k":
      return "Under $500";
    case "500k-1m":
      return "$500-$1,500";
    case "1m+":
      return "$1,500-$5,000";
    default:
      return undefined;
  }
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      fullName: formData.get("name")?.toString().trim(),
      businessName: formData.get("businessName")?.toString().trim(),
      emailAddress: formData.get("email")?.toString().trim(),
      contactChannel: "Website form",
      contactHandleOrNumber: formData.get("phone")?.toString().trim(),
      whatTheyNeed: formData.get("whatTheyNeed")?.toString().trim(),
      budgetRange: mapBudgetRange(formData.get("budget")?.toString() ?? ""),
      pipelineStatus: "New",
      yourNotes: formData.get("business")?.toString().trim() || undefined,
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
        throw new Error(result.error || "We could not send your message right now.");
      }

      setIsSubmitting(false);
      setIsSuccessOpen(true);
      form.reset();
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not send your message right now.",
      );
    }
  }

  return (
    <>
      <section
        id="contact"
        className="section-shell hero-panel relative overflow-hidden rounded-[1.5rem] px-3 py-10 sm:rounded-[2rem] sm:px-5 sm:py-14 lg:px-10 lg:py-18"
      >
        <div className="relative z-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="pill inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-sky-100">
              Free call
            </div>
            <h2 className="font-display mt-3 text-[2rem] leading-tight text-white sm:text-4xl lg:text-[3.4rem]">
              Ready to Get a Website That Works for your Business?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:leading-7">
              Tell us about your business. We will review it and tell you
              exactly what we would recommend, and how we can help. It starts with a free 15-minute call.
            </p>

            <div className="mt-6 grid gap-2 sm:gap-3">
              {[
                "We reply within 24 hours",
                "We explain everything in plain language",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/6 bg-white/[0.03] px-3 py-3 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative z-10 rounded-[1.4rem] border border-white/6 bg-[rgba(6,10,20,0.82)] p-3 sm:rounded-[1.7rem] sm:p-5"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-200">
                <span>Your Name</span>
                <input
                  required
                  name="name"
                  className="rounded-xl border border-white/6 bg-white/[0.03] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400/30"
                  placeholder="Your full name"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-200">
                <span>Business Name</span>
                <input
                  required
                  name="businessName"
                  className="rounded-xl border border-white/6 bg-white/[0.03] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400/30"
                  placeholder="Your business or brand name"
                />
              </label>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-200">
                <span>Your Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="rounded-xl border border-white/6 bg-white/[0.03] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400/30"
                  placeholder="name@email.com"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-200">
                <span>Your Phone Number</span>
                <input
                  required
                  type="tel"
                  name="phone"
                  className="rounded-xl border border-white/6 bg-white/[0.03] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400/30"
                  placeholder="0800 000 0000"
                />
              </label>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-200">
                <span>What Do You Need Help With?</span>
                <select
                  required
                  name="whatTheyNeed"
                  className="rounded-xl border border-white/6 bg-black px-3 py-3 text-sm text-white outline-none focus:border-sky-400/30"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select what you need
                  </option>
                  <option value="New website">New website</option>
                  <option value="Redesign">Redesign</option>
                  <option value="Landing page">Landing page</option>
                  <option value="E-commerce store">E-commerce store</option>
                  <option value="Web app">Web app</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm text-slate-200">
                <span>What is Your Budget?</span>
                <select
                  name="budget"
                  className="rounded-xl border border-white/6 bg-black px-3 py-3 text-sm text-white outline-none focus:border-sky-400/30"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select budget
                  </option>
                  <option value="200k-500k">N200k - N500k</option>
                  <option value="500k-1m">N500k - N1M</option>
                  <option value="1m+">N1M+</option>
                </select>
              </label>
            </div>

            <label className="mt-3 grid gap-2 text-sm text-slate-200">
              <span>What Does Your Business Do?</span>
              <textarea
                required
                name="business"
                rows={5}
                className="rounded-xl border border-white/6 bg-white/[0.03] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400/30"
                placeholder="Tell us what your business does."
              />
            </label>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-slate-500">
                Fill the form above and we will reach out within 24 hours.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="primary-button rounded-full px-5 py-3 text-sm font-medium text-white disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>

            {errorMessage ? (
              <p className="mt-3 text-sm text-rose-300">{errorMessage}</p>
            ) : null}
          </form>
        </div>
      </section>

      {isSuccessOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-md rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,14,26,0.98),rgba(5,7,14,0.98))] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="pill inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-sky-100">
                  Success
                </div>
                <h3 className="font-display mt-3 text-2xl text-white">
                  Message received
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsSuccessOpen(false)}
                className="secondary-button grid h-9 w-9 place-items-center rounded-full text-sm text-white"
              >
                x
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Thanks for reaching out. We have your details and will contact you
              as soon as possible.
            </p>
            <Link href="http://wa.me/2348119188295">
              <button
                type="button"
                onClick={() => setIsSuccessOpen(false)}
                className="primary-button mt-6 rounded-full px-5 py-3 text-sm font-medium text-white"
              >
                Message me on Whatsapp
              </button>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
