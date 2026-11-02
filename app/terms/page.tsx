import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Business Logic",
  description:
    "Business Logic Terms of Service. Understand the terms, conditions, and commitments governing our web development and online store packages.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const lastUpdated = "November 2, 2026";

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#171412] antialiased">
      {/* HEADER */}
      <header className="border-b border-black/10 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/promo" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Business Logic Logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg object-contain"
            />
            <span className="font-sans text-base font-bold tracking-tight text-[#171412]">
              Business Logic
            </span>
          </Link>

          <Link
            href="/promo"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#57534e] hover:text-black transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Store Offer</span>
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-4xl px-5 py-12 sm:py-16 md:py-20">
        <div className="border-b border-black/10 pb-8">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-800">
            Legal & Terms
          </span>
          <h1 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-[#78716c]">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="prose prose-neutral max-w-none mt-10 space-y-8 text-sm sm:text-base leading-relaxed text-[#334155]">
          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3">
              By accessing our website at{" "}
              <a href="https://mybl.online" className="text-blue-600 underline">
                mybl.online
              </a>
              , submitting an application through our promotional pages (including{" "}
              <code>/promo</code>), or engaging Business Logic for web development services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              2. Promotional Store Package (₦120,000 Offer)
            </h2>
            <p className="mt-3">
              The ₦120,000 promotional package includes the full design, setup, and deployment of a custom e-commerce online store. Scope of deliverables:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-[#475569]">
              <li>High-converting, responsive mobile and desktop online storefront.</li>
              <li>Product catalogue setup with filtering, inventory categories, and detail cards.</li>
              <li>Shopping cart and checkout ordering workflow (including WhatsApp or automated bank transfer ordering).</li>
              <li>Custom domain name setup and secure hosting configuration.</li>
              <li>Standard delivery timeline of 5 to 7 business days following content submission.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              3. Client Responsibilities
            </h2>
            <p className="mt-3">
              To guarantee our 5–7 day delivery timeline, clients agree to provide:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-[#475569]">
              <li>Product imagery, names, specifications, and pricing in a timely manner.</li>
              <li>Business branding assets (logo, brand colors, contact phone/WhatsApp).</li>
              <li>Timely feedback during the review and approval stages.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              4. Payment & Refund Policy
            </h2>
            <p className="mt-3">
              All agreed fees are communicated clearly upfront. Due to the custom, labor-intensive nature of custom web design and engineering, work begins once the agreed initial deposit or promotional payment is verified. We provide iterative revisions during the build to ensure the delivered store aligns with your expectations before final handover.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              5. Intellectual Property & Ownership
            </h2>
            <p className="mt-3">
              Upon final project payment and handover, the client maintains full ownership of all custom content, product catalogues, customer data, and domain assets associated with their website. Business Logic retains the right to display the completed work in portfolio case studies and promotional demonstrations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              6. Third-Party Platforms & Meta Disclaimer
            </h2>
            <p className="mt-3">
              This website and our promotional campaigns may be advertised on third-party networks, including Meta Platforms, Inc. (Facebook and Instagram). This site is completely independent and is not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc. FACEBOOK is a trademark of META PLATFORMS, Inc.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              7. Limitation of Liability
            </h2>
            <p className="mt-3">
              Business Logic shall not be held liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the delivered website, third-party hosting downtimes, or external payment processor disruptions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              8. Contact & Governing Law
            </h2>
            <p className="mt-3">
              These terms are governed by and construed in accordance with applicable business laws. For inquiries regarding our terms, please contact us at:
            </p>
            <div className="mt-3 rounded-xl border border-black/10 bg-white p-5 text-sm text-[#1e293b]">
              <p><strong>Business Logic Agency</strong></p>
              <p className="mt-1">Email: <a href="mailto:hello@mybl.online" className="text-blue-600 underline">hello@mybl.online</a></p>
              <p className="mt-1">Phone / WhatsApp: <a href="tel:+2348119188295" className="text-blue-600 underline">+234 811 918 8295</a></p>
              <p className="mt-1">Website: <a href="https://mybl.online" className="text-blue-600 underline">https://mybl.online</a></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

