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

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage(null);

    const payload = {
      fullName: formData.get("name")?.toString().trim(),
      businessName: formData.get("businessName")?.toString().trim(),
      emailAddress: formData.get("email")?.toString().trim(),
      contactChannel: "Website form",
      contactHandleOrNumber: formData.get("phone")?.toString().trim(),
      whatTheyNeed: formData.get("whatTheyNeed")?.toString().trim(),
      budgetRange: mapBudgetRange(formData.get("budget")?.toString() ?? ""),
      timelineOrUrgency: formData.get("timeline")?.toString().trim(),
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
        throw new Error(
          result.error || "We could not send your details right now.",
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not send your details right now.",
      );
    }
  }

  return (
    <section
      id="contact"
      className="section-shell dark-panel overflow-hidden px-5 py-14 md:px-8 md:py-18 lg:px-12"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">
            Start your project
          </p>
          <h2 className="font-display mt-4 max-w-md text-[2.2rem] leading-[0.95] text-white md:text-[3.7rem]">
            Ready to Scale Your Revenue?
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
            Tell us what your business needs and we will review the project,
            recommend the right approach, and get back to you with the next
            steps.
          </p>

          <div className="mt-8 grid gap-3 sm:max-w-md">
            {[
              "Clear recommendations based on your business goals",
              "A fast response with practical next steps",
              "A second contact option through WhatsApp if you prefer",
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/80"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="http://wa.me/2348119188295"
              className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70"
            >
              Prefer WhatsApp instead? Start there
            </Link>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-white/10 bg-white/6 p-4 backdrop-blur-sm md:p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm text-white/80">
              <span>Your Name</span>
              <input
                required
                name="name"
                placeholder="Jane Doe"
                className="border border-white/10 bg-white/8 px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
            </label>

            <label className="grid gap-2 text-sm text-white/80">
              <span>Business Name</span>
              <input
                required
                name="businessName"
                placeholder="Aurora Solutions"
                className="border border-white/10 bg-white/8 px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
            </label>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm text-white/80">
              <span>Email Address</span>
              <input
                required
                type="email"
                name="email"
                placeholder="name@company.com"
                className="border border-white/10 bg-white/8 px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
            </label>

            <label className="grid gap-2 text-sm text-white/80">
              <span>Phone or WhatsApp</span>
              <input
                required
                type="tel"
                name="phone"
                placeholder="+234..."
                className="border border-white/10 bg-white/8 px-4 py-3 text-white outline-none placeholder:text-white/35"
              />
            </label>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm text-white/80">
              <span>What do you need?</span>
              <select
                required
                name="whatTheyNeed"
                defaultValue=""
                className="border border-white/10 bg-[var(--dark)] px-4 py-3 text-white outline-none"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="New website">New website</option>
                <option value="Redesign">Redesign</option>
                <option value="Landing page">Landing page</option>
                <option value="E-commerce store">E-commerce store</option>
                <option value="Web app">Web app</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm text-white/80">
              <span>Budget</span>
              <select
                required
                name="budget"
                defaultValue=""
                className="border border-white/10 bg-[var(--dark)] px-4 py-3 text-white outline-none"
              >
                <option value="" disabled>
                  Select your range
                </option>
                <option value="200k-500k">N200k - N500k</option>
                <option value="500k-1m">N500k - N1M</option>
                <option value="1m+">N1M+</option>
              </select>
            </label>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm text-white/80">
              <span>Timeline</span>
              <select
                name="timeline"
                defaultValue=""
                className="border border-white/10 bg-[var(--dark)] px-4 py-3 text-white outline-none"
              >
                <option value="" disabled>
                  Select urgency
                </option>
                <option value="ASAP">ASAP</option>
                <option value="Within 2 weeks">Within 2 weeks</option>
                <option value="Within 1 month">Within 1 month</option>
                <option value="Flexible">Flexible</option>
              </select>
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm text-white/80">
            <span>Tell us about the business</span>
            <textarea
              required
              rows={5}
              name="business"
              placeholder="What do you do, who do you serve, and what are you trying to improve?"
              className="border border-white/10 bg-white/8 px-4 py-3 text-white outline-none placeholder:text-white/35"
            />
          </label>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs leading-6 text-white/55">
              Share a few details and we will reach out with the best next step.
            </p>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="primary-button inline-flex items-center justify-center rounded-none px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white disabled:opacity-70"
            >
              {status === "submitting" ? "Submitting..." : "Submit"}
            </button>
          </div>

          {status === "success" ? (
            <p className="mt-4 text-sm text-emerald-300">
              Thanks. We have your details and will reach out soon.
            </p>
          ) : null}

          {status === "error" ? (
            <p className="mt-4 text-sm text-rose-300">{errorMessage}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
