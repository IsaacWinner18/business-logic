"use client";

import { SectionHeading } from "@/components/landing/shared";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Macbook3D } from "./macbook-3d";
import { useRef } from "react";

const projects = [
  {
    title: "Dben Real Estates",
    category: "Real Estate · Scaling Architecture",
    metric: "+32% lead quality",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1780229406/Screenshot_2026-05-31_130940_y1tuf3.png",
  },
  {
    title: "Buychow Ng Group",
    category: "Foodtech · Strategic Overhaul",
    metric: "40% growth in inquiries",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1778334695/Screenshot_2026-05-09_144304_n36rfa.png",
  },
  {
    title: "Exampreps",
    category: "EdTech · Platform Development",
    metric: "Seamless learning",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783873796/Screenshot_2026-07-12_172934_qxzilr.png", // Using a fallback image for now
  },
  {
    title: "Santorini",
    category: "Hospitality · Hotel Booking",
    metric: "Higher booking rate",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783874011/Screenshot_2026-07-12_173311_dqd6ee.png", // Using a fallback image for now
  },
];

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="section-shell px-5 py-16 md:px-8 md:py-20 lg:px-12"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <SectionHeading
          badge="The track record"
          title="Case Studies: Proven Results"
          description="Selected engagements where clarity, premium positioning, and stronger conversion mechanics changed the conversation."
          centered={false}
        />
        <div className="flex items-center gap-3 md:gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-black/10 bg-white transition-all hover:bg-black/5"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-black/10 bg-white transition-all hover:bg-black/5"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <Link 
            href="/case-studies"
            className="group inline-flex h-11 md:h-12 items-center gap-2 rounded-full border border-black/10 bg-white px-5 md:px-6 font-unbounded text-sm transition-all hover:border-black/30 hover:bg-black/5"
          >
            <span className="hidden md:inline">See all case studies</span>
            <span className="md:hidden">See all</span>
            <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={16} />
          </Link>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="mt-10 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar"
      >
        {projects.map((project, index) => (
          <motion.article 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            key={project.title}
            className="snap-start min-w-[85vw] md:min-w-[45vw] lg:min-w-[40vw] flex-shrink-0"
          >
            <div className="editorial-card overflow-hidden group">
              <div className="relative aspect-[16/10] bg-[#e9dfd4] overflow-hidden group-hover:bg-[#e0d4c8] transition-colors duration-[1s]">
                <Macbook3D imageSrc={project.image} />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full font-caveat text-[1.2rem] text-black shadow-sm">
                  {project.metric}
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-unbounded text-[1.7rem] leading-tight text-black">
                  {project.title}
                </h3>
                <p className="font-caveat mt-2 text-[1.4rem] text-[var(--ink-faint)]">
                  {project.category}
                </p>
              </div>
              <ArrowUpRight className="mt-2 text-[var(--accent)] flex-shrink-0" size={18} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
