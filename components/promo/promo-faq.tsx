"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { poppins, inter } from "@/lib/font";

const promoFaqs = [
  {
    question: "I already sell on Instagram. Why do I need a website?",
    answer:
      "Instagram is great for discovering products, but exhausting for closing sales. When customers have to send a DM for prices, wait hours for availability confirmation, and manually exchange bank transfer receipts, many drop off and buy elsewhere. A website works for you 24/7. Your customers can browse your entire catalog with clear prices, pick their items, add to cart, and place orders in 60 seconds without waiting for you to reply.",
  },
  {
    question: "Do I need to know anything about website development?",
    answer:
      "Not at all. Business Logic handles 100% of the technical setup, responsive design, product structure, and launch. You don't need any coding or technical knowledge. Once your store is live, you get a straightforward, user-friendly dashboard where you can view incoming orders easily.",
  },
  {
    question: "Can I add my own products?",
    answer:
      "Yes, absolutely. We build and launch your store with your initial batch of products already formatted and organized into categories. After launch, you can easily add new items, update prices, upload fresh photos, or mark items as sold out directly from your phone or computer anytime.",
  },
  {
    question: "Will the website work on mobile phones?",
    answer:
      "Yes! More than 80% of Nigerian e-commerce shoppers buy using their mobile phones. That is why your store is engineered mobile-first—optimized for fast loading, crisp product photos, and a smooth thumb-friendly shopping experience on iPhones, Android devices, tablets, and computers.",
  },
  {
    question: "Can customers pay directly on my website?",
    answer:
      "The ₦120,000 promotional package includes an automated shopping cart with seamless WhatsApp order checkout by default—customers pick their items, enter delivery details, and submit their orders directly to your WhatsApp with full itemized totals. Direct on-site online payment gateway integration (such as Paystack or Flutterwave for Debit Card, USSD, and Bank Transfer checkout) is an optional add-on feature that comes with an additional setup charge. If you would like direct on-site payment gateway integration included, our team will gladly provide the add-on pricing.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "Because this is our streamlined promotional package with an optimized delivery process, your complete online store is delivered within 5 to 7 business days from the moment you provide your product pictures, prices, and business details.",
  },
  {
    question: "Is ₦120,000 the total price?",
    answer:
      "Yes. ₦120,000 is the complete promotional price covering the full design, mobile responsiveness, product catalogue setup, shopping cart, customer ordering, order dashboard, and website launch assistance. There are zero hidden development fees.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started takes less than 2 minutes. Click 'Get My Website' or reach out to our team directly on WhatsApp. Tell us your business name and what you sell, and we'll guide you step-by-step on sending your product details so we can begin building.",
  },
];

export function PromoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`${inter.className} relative w-full border-t border-black/10 bg-[#fdfbf7] py-20 px-5 md:py-28 md:px-8 overflow-hidden`}>
      {/* Background dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:gap-20">
        {/* LEFT HEADER */}
        <div className="flex flex-col gap-4 lg:w-1/3">
          <h2 className={`${poppins.className} text-3xl font-bold leading-tight text-[#171412] md:text-5xl`}>
            Frequently asked questions
          </h2>

          <p className="text-sm leading-relaxed text-[#57534e]">
            Have a question before launching your online store? Find clear,
            honest answers to the most common questions our clients ask.
          </p>

          <div className="mt-4 rounded-xl border border-black/10 bg-white/80 p-4 text-xs text-[#78716c]">
            <p>
              Have a unique question not listed here? Our team is available on
              WhatsApp to answer anything immediately.
            </p>
          </div>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="flex flex-col gap-3 lg:w-2/3">
          {promoFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "border-black/20 bg-white shadow-sm"
                    : "border-black/8 bg-white/60 hover:bg-white/90"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left focus:outline-none group"
                >
                  <h3 className={`${poppins.className} text-base md:text-lg font-bold text-[#171412] group-hover:text-blue-600 transition-colors pr-6`}>
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 relative w-6 h-6 flex items-center justify-center text-[#736a63]">
                    <AnimatePresence mode="popLayout">
                      {isOpen ? (
                        <motion.div
                          key="close"
                          initial={{ opacity: 0, rotate: -90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: 90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <X className="w-5 h-5 text-blue-600" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="open"
                          initial={{ opacity: 0, rotate: 90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: -90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Plus className="w-5 h-5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-sm leading-relaxed text-[#57534e] border-t border-black/5 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
