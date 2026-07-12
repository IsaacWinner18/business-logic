import Image from "next/image";

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
      className="section-shell px-5 py-18 md:px-8 md:py-24 overflow-hidden"
    >
      <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 hide-scrollbar w-full max-w-5xl mx-auto cursor-grab active:cursor-grabbing">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="snap-center w-full min-w-full flex-shrink-0 text-center px-2 md:px-4"
          >
            <div className="mx-auto w-full flex flex-col items-center bg-[#FAFAFA] border border-black/5 p-6 md:p-12 rounded-3xl relative shadow-sm">
              <p className="text-6xl md:text-8xl leading-none text-black/5 absolute top-4 left-4 md:top-6 md:left-8 font-serif">&rdquo;</p>
              <blockquote className="relative z-10 mt-4 md:mt-2 font-display text-[0.95rem] leading-relaxed text-black/90 md:text-[1.4rem] lg:text-[1.6rem] max-w-3xl">
                "{testimonial.quote}"
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
      <div className="flex justify-center mt-2 gap-2 pointer-events-none">
        {testimonials.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-black/10" />
        ))}
      </div>
    </section>
  );
}

export function FaqSection() {
  return null;
}
