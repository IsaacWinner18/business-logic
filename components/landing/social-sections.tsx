import { SectionHeading } from "@/components/landing/shared";

const reviews = [
  {
    name: "Adanna Okoro",
    role: "Managing Partner, Advisory Brand",
    text:
      "They translated our positioning into a website that finally feels aligned with the level of client we serve.",
  },
  {
    name: "David Cole",
    role: "Growth Lead, B2B SaaS",
    text:
      "The team moved quickly, but never at the expense of taste. The finished site feels premium and intentional.",
  },
  {
    name: "Maya Laurent",
    role: "Founder, Private Client Studio",
    text:
      "From structure to polish, every section felt thoughtfully engineered. We looked more established overnight.",
  },
  {
    name: "Tunde Alabi",
    role: "CMO, Venture-backed Startup",
    text:
      "They gave us a sharper narrative, cleaner design system, and a site our sales team is proud to send prospects to.",
  },
  {
    name: "Rachel Hart",
    role: "Director, Executive Services",
    text:
      "The responsiveness, pacing, and final presentation all reflected the kind of detail senior buyers notice.",
  },
];

const faqItems = [
  {
    question: "What type of clients do you work best with?",
    answer:
      "We are best suited to premium service firms, funded startups, SaaS teams, and brands that need a more credible digital presence.",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Yes. We can work from an existing direction or handle the design-engineering process end to end depending on the engagement.",
  },
  {
    question: "Can you improve an existing website instead of rebuilding it?",
    answer:
      "Absolutely. Many projects begin with selective redesigns, page restructuring, or frontend refinement before expanding further.",
  },
  {
    question: "How quickly can a project start?",
    answer:
      "Smaller engagements can start quickly. Larger projects usually begin with a short discovery and planning phase.",
  },
];

export function TestimonialsSection() {
  const items = [...reviews, ...reviews];

  return (
    <section
      id="about"
      className="section-shell relative overflow-hidden rounded-[1.5rem] px-3 py-10 sm:rounded-[2rem] sm:px-5 sm:py-14 lg:px-10 lg:py-18 bg-black/10"
    >
      <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="pill inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-sky-100">
            Testimonials
          </div>
          <h2 className="font-display mt-3 text-[1.9rem] leading-tight text-black sm:text-4xl lg:text-[3.2rem]">
            Trusted by teams that care about how they show up
          </h2>
          <p className="text-gray-700 mt-3 max-w-xl text-sm leading-6 sm:leading-7">
            The work is designed to feel sharp on first impression and
            dependable under closer review, which is exactly what premium buyers
            expect.
          </p>
        </div>

        <div className="text-left lg:text-right">
          <p className="font-display text-5xl text-sky-600 sm:text-6xl">94%</p>
          <p className="text-sm text-slate-700">
            of clients say the new site better reflects their market position
          </p>
        </div>
      </div>

      <div className="testimonial-fade relative mt-8 overflow-hidden sm:mt-10">
        <div className="testimonial-track flex w-max gap-3 sm:gap-4">
          {items.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="w-[260px] shrink-0 rounded-[1.35rem] border border-white/6 bg-black/[0.03] backdrop-blur-sm p-4 sm:w-[320px] sm:rounded-[1.6rem] sm:p-5"
            >
              <div className="p-2 bg-white/30 rounded-[1.35rem]">
                <p className="text-sm leading-6 text-slate-900 sm:leading-7">
                  {review.text}
                </p>
                <div className="mt-5">
                  <p className="font-display text-lg text-black sm:text-xl">
                    {review.name}
                  </p>
                  <p className="text-xs text-slate-700 sm:text-sm">
                    {review.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section
      id="community"
      className="section-shell relative rounded-[1.5rem] px-3 py-10 sm:rounded-[2rem] sm:px-5 sm:py-14 lg:px-10 lg:py-18 bg-sky-300/50"
    >
      <SectionHeading
        badge="FAQ"
        title="Questions we usually answer before a build begins"
        description="A quick view into how we approach projects, who we are best for, and what to expect when we work together."
      />

      <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="rounded-[1.2rem] border border-white/6 bg-black/[0.025] px-3 py-3 sm:rounded-[1.35rem] sm:px-4 sm:py-4"
            >
              <summary className="cursor-pointer list-none text-sm text-black sm:text-base font-bold">
                <div className="flex items-center justify-between gap-3">
                  <span>{item.question}</span>
                  <span className="text-slate-500">
                    {index === 0 ? "-" : "+"}
                  </span>
                </div>
              </summary>
              <p className="text-gray-700 mt-3 max-w-2xl text-sm leading-6 sm:leading-7">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <aside className="md:relative rounded-[1.4rem] p-2 sm:rounded-[1.65rem] bg-white/40 backdrop-bur-sm hidden md:block">
          <div className="bg-sky-700/30 h-full md:relative rounded-[1.4rem] sm:rounded-[1.65rem] p-4">
            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-700">
              What clients value
            </p>
            <h3 className="font-display mt-2 text-2xl text-black sm:text-3xl">
              Taste, speed, and{" "}
              <span className="text-sky-800">attention to </span> detail
            </h3>
            <p className="my-3 text-sm leading-6 text-slate-600 font-bold sm:leading-7 absolute bottom-0">
              We build websites that feel considered, not generic, while still
              moving with the pace ambitious teams need.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
