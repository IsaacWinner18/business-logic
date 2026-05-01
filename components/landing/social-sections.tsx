const testimonial = {
  quote:
    "Business Logic didn't just build us a website; they reconstructed our entire sales engine. Within three months, our inbound lead quality shifted entirely toward high-ticket enterprise clients.",
  name: "Ojo Feranmi",
  role: "CEO, Fedi Solutions Group",
};

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-shell px-5 py-18 text-center md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-5xl leading-none text-[var(--accent)]">&rdquo;</p>
        <blockquote className="mt-6 font-display text-[1.5rem] leading-tight text-black md:text-[2.5rem]">
          {testimonial.quote}
        </blockquote>
        <div className="mt-8 text-[10px] uppercase tracking-[0.24em] text-[var(--ink-faint)]">
          <p>{testimonial.name}</p>
          <p className="mt-2">{testimonial.role}</p>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return null;
}
