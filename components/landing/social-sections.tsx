"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blobTopLeftPaths = [
  "M 160,25 C 235,15 295,70 285,145 C 275,220 225,275 150,280 C 75,285 20,230 25,155 C 30,80 85,35 160,25 Z",
  "M 175,35 C 255,45 280,115 270,180 C 260,245 200,285 135,270 C 70,255 30,205 35,135 C 40,65 95,25 175,35 Z",
  "M 145,20 C 220,30 290,95 280,165 C 270,235 230,270 160,285 C 90,300 25,240 20,170 C 15,100 70,10 145,20 Z",
  "M 160,25 C 235,15 295,70 285,145 C 275,220 225,275 150,280 C 75,285 20,230 25,155 C 30,80 85,35 160,25 Z",
];

const blobBottomRightPaths = [
  "M 140,30 C 215,20 280,65 275,140 C 270,215 235,280 160,285 C 85,290 25,235 30,160 C 35,85 65,40 140,30 Z",
  "M 155,25 C 240,40 285,100 275,170 C 265,240 205,275 140,290 C 75,305 20,235 25,150 C 30,65 70,10 155,25 Z",
  "M 130,35 C 200,15 265,70 285,145 C 305,220 220,285 150,280 C 80,275 35,220 20,145 C 5,70 60,55 130,35 Z",
  "M 140,30 C 215,20 280,65 275,140 C 270,215 235,280 160,285 C 85,290 25,235 30,160 C 35,85 65,40 140,30 Z",
];

const testimonials = [
  {
    id: 1,
    quote:
      "Before we had this site, my team was answering the same questions all day on WhatsApp—prices, stock availability, bank details. Now customers go through the catalog, see the specs, and reach out ready to pay. It cut down our back-and-forth by half.",
    name: "Tunde Adeyemi",
    image: "/testimonials/tunde-adeyemi.jpg",
  },
  {
    id: 2,
    quote:
      "We were losing almost 20% on every single booking to third-party aggregator sites. Having our own booking website where guests can view room availability and pay directly in Naira has completely transformed our revenue.",
    name: "Chidinma Nwosu",
    image: "/testimonials/chidinma-nwosu.jpg",
  },
  {
    id: 3,
    quote:
      "When dealing with corporate clients, an Instagram page is not enough. They ask for your website before approving vendor registrations or invoice payments. Having a fast, polished site gave corporate clients the confidence to work with us.",
    name: "Ojo Feranmi",
    image: "/testimonials/ojo-feranmi.jpg",
  },
  {
    id: 4,
    quote:
      "Our previous store was slow and kept crashing when customers checked out on mobile networks. The new website loads in seconds, looks sharp, and people now complete their orders directly without calling us for manual account transfers.",
    name: "Amina Bello",
    image: "/testimonials/amina-bello.jpg",
  },
];

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth;
    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth;
    if (cardWidth > 0) {
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < testimonials.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section
      id="testimonials"
      className="relative px-5 py-20 md:px-8 md:py-28 lg:py-32 overflow-hidden bg-[#8338EC]"
    >
      {/* SECTION HEADER */}
      <div className="relative z-10 mx-auto max-w-3xl text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 mb-3 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7DE2D1]" />
          <span className="font-caveat text-lg text-white">
            Client Stories
          </span>
        </div>
        <h2 className="font-unbounded text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] leading-[1.06] font-bold text-white tracking-tight">
          What Business Owners Say
        </h2>
      </div>

      {/* COORDINATED CARD WRAPPER WITH 2 IRREGULAR BLOB SILHOUETTES */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* IRREGULAR ANIMATED BLOB SILHOUETTES FILLED #7DE2D1 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 select-none"
        >
          {/* 1. TOP-LEFT IRREGULAR BLOB SILHOUETTE */}
          <div className="absolute -top-24 -left-20 sm:-top-32 sm:-left-28 md:-top-44 md:-left-36 lg:-top-52 lg:-left-44 w-80 h-80 sm:w-[28rem] sm:h-[28rem] md:w-[36rem] md:h-[36rem] lg:w-[44rem] lg:h-[44rem] opacity-50">
            <div className="absolute inset-12 rounded-full bg-[#7DE2D1]/30 blur-[48px] pointer-events-none" />
            <motion.div
              className="relative w-full h-full will-change-transform"
              animate={{
                rotate: 360,
                scale: [0.96, 1.05, 0.96],
              }}
              transition={{
                rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <svg
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full select-none pointer-events-none"
              >
                <motion.path
                  animate={{ d: blobTopLeftPaths }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  fill="#7DE2D1"
                />
              </svg>
            </motion.div>
          </div>

          {/* 2. BOTTOM-RIGHT IRREGULAR BLOB SILHOUETTE */}
          <div className="absolute -bottom-24 -right-20 sm:-bottom-32 sm:-right-28 md:-bottom-44 md:-right-36 lg:-bottom-52 lg:-right-44 w-80 h-80 sm:w-[28rem] sm:h-[28rem] md:w-[36rem] md:h-[36rem] lg:w-[44rem] lg:h-[44rem] opacity-50">
            <div className="absolute inset-12 rounded-full bg-[#7DE2D1]/30 blur-[48px] pointer-events-none" />
            <motion.div
              className="relative w-full h-full will-change-transform"
              animate={{
                rotate: -360,
                scale: [1.04, 0.95, 1.04],
              }}
              transition={{
                rotate: { duration: 46, repeat: Infinity, ease: "linear" },
                scale: { duration: 11, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <svg
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full select-none pointer-events-none"
              >
                <motion.path
                  animate={{ d: blobBottomRightPaths }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  fill="#7DE2D1"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* TESTIMONIALS CAROUSEL CARD */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="relative z-10 flex overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full cursor-grab active:cursor-grabbing scroll-smooth"
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="snap-center w-full min-w-full flex-shrink-0 text-center px-2 md:px-4"
            >
              <div className="mx-auto w-full flex flex-col items-center bg-[#FAFAFA] border border-black/5 p-6 sm:p-10 md:p-14 rounded-3xl relative shadow-lg">
                <span 
                  aria-hidden="true" 
                  className="text-6xl sm:text-7xl md:text-8xl leading-none text-black/5 absolute top-3 left-4 sm:top-5 sm:left-8 font-serif select-none pointer-events-none"
                >
                  &rdquo;
                </span>
                
                <blockquote className="relative z-10 mt-3 md:mt-2 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-black/90 max-w-3xl font-medium tracking-normal">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center sm:text-left gap-3 sm:gap-4 border-t border-black/10 pt-5 w-full max-w-md justify-center">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0 bg-neutral-200">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="(max-width: 768px) 56px, 64px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-unbounded text-base sm:text-lg font-bold text-black/90 tracking-tight">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-neutral-500 font-medium mt-0.5 flex items-center justify-center sm:justify-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      Verified Client
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* INTERACTIVE CONTROLS: PREV / PAGINATION PILLS / NEXT */}
        <div className="relative z-10 flex items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={() => scrollToIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i ? "w-8 bg-[#7DE2D1]" : "w-2.5 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToIndex((activeIndex + 1) % testimonials.length)}
            aria-label="Next testimonial"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return null;
}

