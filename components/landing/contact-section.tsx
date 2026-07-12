"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-shell dark-panel relative overflow-hidden px-5 py-24 md:px-8 md:py-32 lg:px-12 flex flex-col items-center text-center"
    >
      {/* Background glow elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
         <div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-[var(--accent)] blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
         <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.28em] text-white/55 font-bold"
        >
          Start your project
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display mt-6 text-[2.8rem] leading-[1.05] text-white md:text-[4.5rem]"
        >
          Ready to Scale Your Revenue?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-lg leading-relaxed text-white/70 max-w-2xl"
        >
          We don't just build websites. We build scalable digital ecosystems that attract, convert, and retain high-value customers. Proudly partnering with businesses in Abuja, Enugu, Lagos, and across Nigeria to deliver the best web development solutions. Tell us what your business needs and we will recommend the right approach.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          <Link 
            href="/apply"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-orange-400 px-10 py-5 font-unbounded text-sm text-black transition-all hover:bg-white/90 hover:scale-105"
          >
            Apply Now
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <Link
            href="http://wa.me/2348119188295"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-8 py-5 font-unbounded text-sm text-white transition-all hover:bg-white/5"
          >
            <span>WhatsApp Us</span>
            <Image
              src="/whatsapp-svgrepo-com.svg"
              alt="Whatsapp icon"
              width={20}
              height={20}
            />
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-4 max-w-3xl"
        >
          {[
            "Clear recommendations",
            "Fast response time",
            "Strategic roadmap",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-white/80 backdrop-blur-md"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
