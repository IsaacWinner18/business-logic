"use client";

import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PromoInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PromoInquiryModal({ isOpen, onClose }: PromoInquiryModalProps) {
  const [businessName, setBusinessName] = useState("");
  const [productType, setProductType] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hi Business Logic, I want to get the ₦120,000 Online Store Promotional Package!\n\n*Business Name:* ${businessName || "Not provided"}\n*What I Sell:* ${productType || "Not provided"}\n*Phone / WhatsApp:* ${phone || "Not provided"}${instagram ? `\n*Instagram:* ${instagram}` : ""}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/2348119188295?text=${encoded}`, "_blank");
    onClose();
  };

  const directWhatsappUrl =
    "https://wa.me/2348119188295?text=Hi%20Business%20Logic,%20I'm%20ready%20to%20get%20the%20%E2%82%A6120,000%20Online%20Store%20package%20for%20my%20business.";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* MODAL DIALOG */}
      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-black/10 bg-white p-6 sm:p-8 shadow-2xl text-[#171412] max-h-[92vh] overflow-y-auto">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-black hover:bg-black/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* MODAL HEADER */}
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-[#171412] sm:text-3xl">
            Let&apos;s Build Your Store
          </h3>
          <p className="mt-1 text-sm text-[#736a63]">
            Tell us a little about what you sell, and we&apos;ll prepare your
            online store right away.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#4c433d] mb-1.5">
              Business or Brand Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Lumière Fragrances, Dben Fashion..."
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full rounded-xl border border-black/15 bg-[#faf8f5] px-4 py-3 text-sm text-[#171412] placeholder-[#a8a29e] outline-none transition focus:border-blue-600 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#4c433d] mb-1.5">
              What Products Do You Sell? *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Perfumes, Men's wear, Skincare, Gadgets..."
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="w-full rounded-xl border border-black/15 bg-[#faf8f5] px-4 py-3 text-sm text-[#171412] placeholder-[#a8a29e] outline-none transition focus:border-blue-600 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#4c433d] mb-1.5">
              WhatsApp or Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. 0801 234 5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-black/15 bg-[#faf8f5] px-4 py-3 text-sm text-[#171412] placeholder-[#a8a29e] outline-none transition focus:border-blue-600 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#4c433d] mb-1.5">
              Instagram Handle (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. @yourbrandname"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              className="w-full rounded-xl border border-black/15 bg-[#faf8f5] px-4 py-3 text-sm text-[#171412] placeholder-[#a8a29e] outline-none transition focus:border-blue-600 focus:bg-white"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-4 font-unbounded text-sm font-bold text-white transition-all shadow-xl shadow-blue-600/25 active:scale-95"
            >
              <span>Submit &amp; Open WhatsApp</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </form>

        {/* OR DIRECT WHATSAPP */}
        <div className="mt-5 border-t border-black/10 pt-4 text-center space-y-2.5">
          <Link
            href="/promo/apply"
            onClick={onClose}
            className="block text-xs font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4"
          >
            Launch the step-by-step application form →
          </Link>

          <div>
            <p className="text-xs text-[#78716c] mb-1.5">Prefer to chat right now?</p>
            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#171412] hover:text-blue-600 underline underline-offset-4"
            >
              <Image
                src="/whatsapp-svgrepo-com.svg"
                alt="WhatsApp"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>Skip form and message directly on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
