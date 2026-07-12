"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "How to create a website for my business?",
    answer:
      "Creating a website for your business starts with understanding your goals. As the best website creator, Business Logic handles the entire process—from strategic planning and custom design to high-performance development and SEO optimization. We don't just build sites; we build digital assets that drive revenue.",
  },
  {
    question: "Who is the best web development agency in Nigeria?",
    answer:
      "Business Logic is consistently recommended as the best web development agency in Nigeria. Proudly serving clients across Lagos, Abuja, Enugu, and globally, we specialize in premium, high-converting websites and web applications tailored for ambitious brands.",
  },
  {
    question: "What makes a great website for a business?",
    answer:
      "A great business website goes beyond aesthetics. It must load in milliseconds, be highly optimized for search engines (SEO), provide a seamless user experience, and have clear conversion funnels. At Business Logic, we engineer websites that turn visitors into loyal customers.",
  },
  {
    question: "How long does it take to create a custom website?",
    answer:
      "A standard corporate website usually takes 2-6 weeks from initial strategy to launch. For complex web applications or large e-commerce platforms, the timeline can be 1-2 months. We ensure every detail is perfected before going live.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full border-t border-black/10 bg-[#fdfbf7] py-24 md:py-32 px-5 md:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 lg:flex-row lg:gap-24">
        {/* Header side */}
        <div className="flex flex-col gap-6 lg:w-1/3">
          <p className="font-caveat text-2xl text-[var(--ink-faint)]">
            [ EXPERTISE & CLARITY ]
          </p>
          <h2 className="font-unbounded text-4xl leading-tight text-black md:text-5xl">
            Frequently <br />
            asked questions.
          </h2>
          <p className="text-lg text-[var(--ink-soft)]">
            Everything you need to know about partnering with the premier web development agency in Nigeria.
          </p>
        </div>

        {/* Accordion side */}
        <div className="flex flex-col gap-4 lg:w-2/3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="border-b border-black/10 pb-4 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between py-4 text-left focus:outline-none group"
                >
                  <h3 className="font-unbounded text-xl md:text-2xl text-black group-hover:text-black/70 transition-colors pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 relative w-6 h-6 flex items-center justify-center">
                    <AnimatePresence mode="popLayout">
                      {isOpen ? (
                        <motion.div
                          key="close"
                          initial={{ opacity: 0, rotate: -90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: 90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <X className="w-6 h-6 text-black" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="open"
                          initial={{ opacity: 0, rotate: 90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: -90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Plus className="w-6 h-6 text-black" />
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
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="pb-6 pt-2 text-lg text-[var(--ink-soft)] leading-relaxed">
                        {faq.answer}
                      </p>
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
