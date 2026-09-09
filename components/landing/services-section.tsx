"use client";

import { CircleDashed, UserRoundSearch } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FloatingPills } from "./floating-pills";
import { WebsiteMaintenanceVisual } from "./website-maintenance-visual";

const services = [
  {
    icon: UserRoundSearch,
    title: "All Types of Websites",
    copy: "Professional websites for businesses, companies, startups, brands, and service businesses.",
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
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Smooth percentage-based translation: moves Card 1 -> Card 2 -> Card 3 fully into view
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  return (
    <section
      ref={targetRef}
      id="services"
      className="relative h-[230vh] bg-[#471612]"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden px-5 md:px-8 lg:px-12 py-4 md:py-6">
        {/* SECTION HEADER */}
        <div className="mx-auto w-full max-w-[1440px] mb-4 md:mb-6 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div className="max-w-2xl">
              <p className="font-caveat text-xl md:text-2xl text-white/80">
                Services
              </p>
              <h2 className="font-unbounded mt-0.5 text-[1.9rem] leading-[1.1] text-white sm:text-[2.6rem] tracking-tight drop-shadow-sm">
                Our Services
              </h2>
              <p className="mt-1.5 max-w-xl text-xs sm:text-sm leading-relaxed text-white/85 font-normal">
                We build websites and web-based systems that help businesses look
                professional, attract customers, and grow online.
              </p>
            </div>

          </div>
        </div>

        {/* HORIZONTAL CARDS TRACK */}
        <div className="relative w-full overflow-visible">
          <motion.div
            style={{ x, willChange: "transform" }}
            className="flex gap-6 md:gap-8 w-max items-stretch pr-16 md:pr-28 [transform:translateZ(0)]"
          >
            {services.map((service, index) => {
              return (
                <article
                  key={service.title}
                  className="group relative flex flex-col md:flex-row overflow-hidden rounded-2xl border border-white/50 bg-[#FFFDFD]  transition-all duration-500 w-[88vw] sm:w-[640px] md:w-[740px] lg:w-[840px] xl:w-[900px] h-[550px] sm:h-[560px] shrink-0"
                >
                  {/* CONTENT AREA */}
                  <div className="relative z-10 flex flex-col justify-between p-6 md:p-8 md:w-[36%] lg:w-[34%] shrink-0">
                    <div>
                      <h3 className="font-unbounded text-[1.3rem] md:text-[1.55rem] leading-tight text-neutral-900">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-[0.92rem] leading-relaxed text-neutral-600">
                        {service.copy}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tag.map((t) => (
                        <span
                          key={t}
                          className="font-caveat text-[1.1rem] px-3 py-1 bg-red-50/70 border border-red-100 text-red-950 rounded-full transition-colors hover:bg-red-100/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* VISUAL / INTERACTIVE AREA */}
                  <div className="relative flex-1 md:w-[64%] lg:w-[66%] h-full min-h-[320px] md:min-h-full border-t md:border-t-0 md:border-l border-neutral-200/60 overflow-hidden flex items-stretch bg-transparent">
                    {index === 0 ? (
                      <FloatingPills />
                    ) : index === 1 ? (
                      <WebsiteMaintenanceVisual />
                    ) : (
                      <div className="relative w-full h-full min-h-[300px] md:min-h-full p-4 md:p-8 flex items-center justify-center bg-gradient-to-br from-neutral-50/90 to-neutral-100/60">
                        <div className="relative w-full h-full min-h-[260px] overflow-hidden rounded-xl border border-black/8 bg-white shadow-sm">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 65vw"
                            className="object-cover object-left-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
