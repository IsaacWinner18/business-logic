"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
      "I honestly didn't expect this level of quality. The website made our business look far more established, and we've been getting more calls and inquiries ever since it went live.",
    name: "Ojo Feranmi",
    role: "CEO, Fedi Solutions Group",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1778334695/Screenshot_2026-05-09_144304_n36rfa.png",
  },
  {
    id: 2,
    quote:
      "Our old website wasn't bringing in sales. After the redesign, customers started placing orders almost immediately. The whole shopping experience just feels more trustworthy now.",
    name: "Ben Doha",
    role: "Founder, TechFlow",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1780229406/Screenshot_2026-05-31_130940_y1tuf3.png",
  },
  {
    id: 3,
    quote:
      "Working with the team was surprisingly easy. They listened to what we wanted, kept us updated throughout the project, and delivered a website we're genuinely proud to share with clients.",
    name: "David Obim",
    role: "Operations Director, Prime Estates",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1778334695/Screenshot_2026-05-09_144304_n36rfa.png",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative px-5 py-20 md:px-8 md:py-28 lg:py-32 overflow-hidden bg-[#8338EC]"
    >
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
        <div className="relative z-10 flex overflow-x-auto snap-x snap-mandatory pb-10 hide-scrollbar w-full cursor-grab active:cursor-grabbing">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="snap-center w-full min-w-full flex-shrink-0 text-center px-2 md:px-4"
            >
              <div className="mx-auto w-full flex flex-col items-center bg-[#FAFAFA] border border-black/5 p-6 md:p-12 rounded-3xl relative shadow-sm">
                <p className="text-6xl md:text-8xl leading-none text-black/5 absolute top-4 left-4 md:top-6 md:left-8 font-serif">&rdquo;</p>
                <blockquote className="relative z-10 mt-4 md:mt-2 font-display text-[0.95rem] leading-relaxed text-black/90 md:text-[1.4rem] lg:text-[1.6rem] max-w-3xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-center md:text-left gap-3 md:gap-5 border-t border-black/5 pt-6 w-full max-w-xl justify-center">
                  <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-black/10 flex-shrink-0">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div className="text-[9px] md:text-[11px] uppercase tracking-[0.15em] text-[var(--ink-faint)]">
                    <p className="font-bold text-black/90">{testimonial.name}</p>
                    <p className="mt-1 opacity-70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Swipe Indicator */}
        <div className="relative z-10 flex justify-center mt-2 gap-2 pointer-events-none">
          {testimonials.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#7DE2D1]/40" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return null;
}

