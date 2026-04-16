"use client";

import { FormEvent, useState } from "react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccessOpen(true);
      form.reset();
    }, 700);
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
              Start a project
            </div>
            <h2 className="font-display mt-3 text-[2rem] leading-tight text-white sm:text-4xl lg:text-[3.4rem]">
              Ready for a website that feels more credible?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:leading-7">
              Tell us what you are building, who you need to impress, and where
              the current site is falling short. We will follow up with the next
              best step.
            </p>

            <div className="mt-6 grid gap-2 sm:gap-3">
              {[
                "Strategy-led design and development",
                "Senior-level execution from concept to launch",
                "Refined responsive frontend with premium presentation",
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
                <span>Name</span>
                <input
                  required
                  name="name"
                  className="rounded-xl border border-white/6 bg-white/[0.03] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400/30"
                  placeholder="Your full name"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-200">
                <span>Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="rounded-xl border border-white/6 bg-white/[0.03] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400/30"
                  placeholder="name@company.com"
                />
              </label>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-200">
                <span>Company</span>
                <input
                  name="company"
                  className="rounded-xl border border-white/6 bg-white/[0.03] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400/30"
                  placeholder="Company name"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-200">
                <span>Budget range</span>
                <select
                  name="budget"
                  className="rounded-xl border border-white/6 bg-white/[0.03] px-3 py-3 text-sm text-white outline-none focus:border-sky-400/30"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  <option value="5k-10k">5k - 10k</option>
                  <option value="10k-25k">10k - 25k</option>
                  <option value="25k+">25k+</option>
                </select>
              </label>
            </div>

            <label className="mt-3 grid gap-2 text-sm text-slate-200">
              <span>Project details</span>
              <textarea
                required
                name="details"
                rows={5}
                className="rounded-xl border border-white/6 bg-white/[0.03] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400/30"
                placeholder="Tell us what you need, timeline, and the kind of clients you want the site to attract."
              />
            </label>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-slate-500">
                We typically reply within 1 to 2 business days.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="primary-button rounded-full px-5 py-3 text-sm font-medium text-white disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </div>
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
                  Inquiry received
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
              Thanks for reaching out. We have your details and will follow up
              with the next steps shortly.
            </p>
            <button
              type="button"
              onClick={() => setIsSuccessOpen(false)}
              className="primary-button mt-6 rounded-full px-5 py-3 text-sm font-medium text-white"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
