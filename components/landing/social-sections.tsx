// import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/landing/shared";

const reviews = [
  {
    name: "Adanna O.",
    role: "Business Consultant",
    avatar: "AO",
    text:
      "Before Business Logic, I was embarrassed to share my website link. Now I send it to every potential client with confidence.",
  },
  {
    name: "Tunde A.",
    role: "Company Founder",
    avatar: "TA",
    text:
      "They built exactly what I described, finished on time, and explained everything in plain language. No tech confusion at all.",
  },
  {
    name: "David C.",
    role: "Service Business Owner",
    avatar: "DC",
    text:
      "My old website was just a page. Now it actually brings in customers. I have already gotten 3 new clients from it.",
  },
  {
    name: "Maya L.",
    role: "Private Practice Owner",
    avatar: "ML",
    text:
      "I did not know where to start. They handled everything and showed me what to expect at every step.",
  },
];

// const screenshotTestimonials = [
//   {
//     id: "whatsapp-feedback",
//     src: "/images/testimonials/whatsapp-feedback.jpg",
//     alt: "WhatsApp testimonial screenshot from a client",
//   },
//   {
//     id: "client-email",
//     src: "/images/testimonials/client-email.jpg",
//     alt: "Client email testimonial screenshot",
//   },
//   {
//     id: "voice-note-summary",
//     src: "/images/testimonials/voice-note-summary.jpg",
//     alt: "Voice note testimonial screenshot summary",
//   },
//   {
//     id: "follow-up-message",
//     src: "/images/testimonials/follow-up-message.jpg",
//     alt: "Follow-up testimonial message screenshot",
//   },
// ];

const faqItems = [
  {
    question: "How much does a website cost?",
    answer:
      "Our projects start from N200,000 depending on what you need. We will give you a clear price before any work begins with no hidden charges.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most websites are done in 2 to 6 weeks. We will give you a timeline when we review your project.",
  },
  {
    question: "Do I need to know anything about websites or tech?",
    answer:
      "Not at all. We handle everything. You just tell us about your business and what you want customers to know, and we take it from there.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We can improve it instead of starting from scratch. Many clients come to us just to fix what they already have.",
  },
  {
    question: "What if I am not happy with the result?",
    answer:
      "We work with you until it is right. You review the site before it goes live and give feedback, so we do not launch anything you are not satisfied with.",
  },
];

export function TestimonialsSection() {
  const items = [...reviews, ...reviews];
  // const proofItems = [...screenshotTestimonials, ...screenshotTestimonials];

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
            What Our Clients Say After Working With Us
          </h2>
          <p className="text-gray-700 mt-3 max-w-xl text-sm leading-6 sm:leading-7">
            Real feedback from business owners who wanted a website they could
            finally feel confident sharing with serious customers.
          </p>
        </div>

        <div className="text-left lg:text-right">
          <p className="font-display text-5xl text-sky-600 sm:text-6xl">94%</p>
          <p className="text-sm text-slate-700">
            of our clients say their new website helped them win better
            customers faster
          </p>
        </div>
      </div>

      <div className="testimonial-fade relative mt-8 overflow-hidden sm:mt-10">
        {/* <div className="testimonial-track mb-4 flex w-max gap-3 sm:mb-5 sm:gap-4">
          {proofItems.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              className="w-[280px] shrink-0 rounded-[1.45rem] border border-slate-200/80 bg-white/80 p-2 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:w-[340px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] border border-slate-200/70 bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 280px, 340px"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div> */}

        <div className="testimonial-track flex w-max gap-3 sm:gap-4">
          {items.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="w-[260px] shrink-0 rounded-[1.35rem] border border-white/6 bg-black/[0.03] p-4 shadow-[0_18px_48px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:w-[320px] sm:rounded-[1.6rem] sm:p-5"
            >
              <div className="rounded-[1.35rem] bg-white/45 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-slate-900 text-sm font-bold text-white shadow-[0_10px_22px_rgba(15,23,42,0.18)]">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-display text-lg text-black sm:text-xl">
                        {review.name}
                      </p>
                      <p className="text-xs text-slate-700 sm:text-sm">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-sky-500/12 text-sky-700">
                    <Quote size={18} />
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-900 sm:leading-7">
                  {review.text}
                </p>
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
      className="section-shell relative rounded-[1.5rem] px-3 py-10 sm:rounded-[2rem] sm:px-5 sm:py-14 lg:px-10 lg:py-18 bg-sky-300/10"
    >
      <SectionHeading
        badge="FAQ"
        title="Questions People Ask Before Getting Started"
        description="A simple look at pricing, timelines, and what it is like to work with us if you are not technical."
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
              Before you start
            </p>
            <h3 className="font-display mt-2 text-2xl text-black sm:text-3xl">
              Clear answers.{" "}
              <span className="text-sky-800">No pressure.</span>
            </h3>
            <p className="my-3 text-sm leading-6 text-slate-600 font-bold sm:leading-7 absolute bottom-0">
              We explain things in plain language, give clear prices, and make
              the whole process easier to trust.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
