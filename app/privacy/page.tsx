import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Business Logic",
  description:
    "Business Logic Privacy Policy. Understand how we collect, use, and protect your personal data when using our website and digital services.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
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
            Legal & Compliance
          </span>
          <h1 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[#78716c]">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="prose prose-neutral max-w-none mt-10 space-y-8 text-sm sm:text-base leading-relaxed text-[#334155]">
          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              1. Introduction
            </h2>
            <p className="mt-3">
              Business Logic (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and ensuring that your personal information is handled with care and transparency. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website at{" "}
              <a href="https://mybl.online" className="text-blue-600 underline">
                mybl.online
              </a>{" "}
              or interact with our promotional pages (including{" "}
              <code>/promo</code>).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              We collect information that you voluntarily provide to us when you submit an inquiry form, apply for website development services, or contact us directly via WhatsApp or email. This information may include:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-[#475569]">
              <li>Full Name</li>
              <li>Business or Brand Name</li>
              <li>Email Address</li>
              <li>Phone or WhatsApp Number</li>
              <li>Product catalogue details and website preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">
              We use the collected information for legitimate business purposes, including:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-[#475569]">
              <li>Designing, setting up, and delivering your custom online store website.</li>
              <li>Communicating with you regarding project milestones, feedback, and support.</li>
              <li>Processing invoices, payments, and order onboarding.</li>
              <li>Analyzing website traffic and improving our service performance and user experience.</li>
              <li>Measuring the effectiveness of our marketing and promotional campaigns.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              4. Cookies, Analytics & Meta Pixel Notice
            </h2>
            <p className="mt-3">
              Our website uses cookies, web beacons, and tracking technologies, including the <strong>Meta Pixel</strong> (operated by Meta Platforms, Inc.), to measure advertising effectiveness, analyze visitor actions, and serve relevant promotional messages on platforms such as Facebook and Instagram.
            </p>
            <p className="mt-3">
              The Meta Pixel allows us to understand customer interactions after viewing our Meta ads. The data collected remains anonymous to us; however, Meta may store and process this data in accordance with their own Data Policy (available at{" "}
              <a
                href="https://www.facebook.com/about/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                facebook.com/about/privacy
              </a>
              ).
            </p>
            <p className="mt-3">
              You can opt out of interest-based ads via your Facebook Ad Preferences or browser privacy settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              5. Third-Party Services
            </h2>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information. We only share information with trusted third-party service providers strictly necessary to execute our services, such as:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-[#475569]">
              <li>Notion API (for secure lead management and client onboarding pipeline).</li>
              <li>Meta Platforms, Inc. (for campaign performance measurement).</li>
              <li>Payment infrastructure providers (for secure transactions).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              6. Data Security
            </h2>
            <p className="mt-3">
              We implement industry-standard technical and organizational security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              7. Your Rights
            </h2>
            <p className="mt-3">
              You have the right to access, update, or request the deletion of any personal information we hold about you. To exercise these rights, please reach out to us at{" "}
              <a href="mailto:hello@mybl.online" className="text-blue-600 underline">
                hello@mybl.online
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a]">
              8. Contact Us
            </h2>
            <p className="mt-3">
              If you have any questions or concerns regarding this Privacy Policy, please contact Business Logic at:
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

