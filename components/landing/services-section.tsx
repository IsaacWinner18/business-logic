"use client";

import { CircleDashed, UserRoundSearch } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ParticleBackground3D } from "./particle-background";

const services = [
  {
    icon: UserRoundSearch,
    title: "All Types of Websites",
    copy: "Professional websites for small businesses, companies, startups, brands, and service businesses.",
    tag: ["E-commerce", "Landing Pages", "Website Redesign"],
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1780227747/Choose-Business-logic-for-Website-Development-Agency-In-trusted_ets6xj.webp",
  },
  {
    icon: CircleDashed,
    title: "Website Maintenance",
    copy: "We help keep your website updated, secure, and running smoothly. You don't need to know what's happening behind the scenes.",
    tag: [
      "Optimization",
      "Error Monitoring",
      "Feature Integration",
      "Content Updates",
    ],
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1780227649/Business-logic-website-management_yb93hq.png",
  },
  {
    icon: UserRoundSearch,
    title: "Search Engine Optimization (SEO)",
    copy: "Rank higher above your competitor online, get the traffic from organic searches.",
    tag: [
      "Google Search",
      "AI Chatbot Visibility",
      "Mobile Audits",
      "Marketing Strategy",
    ],
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1780227664/google-analytics-screen_gf6eb5.webp",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative px-5 py-16 md:px-8 md:py-20 lg:px-12 overflow-hidden bg-white"
    >
      {/* 3D PARTICLE FIELD BACKGROUND */}
      <ParticleBackground3D />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#d1d1d1_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-16 max-w-3xl"
      >
        <p className="font-caveat text-2xl text-[var(--ink-faint)]">
          Services
        </p>
        <h2 className="font-unbounded mt-2 text-[2.2rem] leading-[1.05] text-black sm:text-[3rem]">
          Our Services
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--ink-soft)] md:text-base">
          We build websites and web-based systems that help businesses look
          professional, attract customers, and grow online.
        </p>
      </motion.div>

      {/* BENTO GRID WRAPPER */}
      <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const isWide = index === 0 || index === 2;
          
          // Asymmetric Bento configurations for desktop (3 columns layout)
          const bentoClasses =
            index === 0
              ? "md:col-span-2 lg:col-span-2 min-h-[400px]"
              : index === 1
                ? "md:col-span-1 lg:col-span-1 lg:row-span-2 min-h-[480px] lg:min-h-full"
                : "md:col-span-1 lg:col-span-2 min-h-[400px]";

          return (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={service.title}
              className={`group relative flex overflow-hidden border border-black/5 bg-[#FAFAFA]/90 backdrop-blur-sm transition-all duration-500 hover:border-black/20 ${
                isWide ? "flex-col md:flex-row" : "flex-col"
              } ${bentoClasses}`}
            >
              {/* CONTENT AREA */}
              <div className={`relative z-10 flex flex-col justify-between p-6 md:p-8 ${isWide ? "md:w-[55%]" : "h-auto"}`}>
                <div>
                  <h3 className="font-unbounded mt-4 max-w-md text-[1.4rem] leading-tight text-black md:text-[1.7rem]">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
                    {service.copy}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {service.tag.map((t) => (
                    <span
                      key={t}
                      className="font-caveat text-[1.1rem] px-3 py-1 bg-black/[0.03] text-black/80 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* IMAGE AREA */}
              <div className={`relative ${isWide ? "md:w-[45%]" : "flex-1"} min-h-[240px] bg-[#fdfcfb] overflow-hidden border-t ${isWide ? 'md:border-t-0 md:border-l' : ''} border-black/5`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-w-780px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
