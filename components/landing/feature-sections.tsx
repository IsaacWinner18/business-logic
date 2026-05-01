import { SectionHeading } from "@/components/landing/shared";
import { ArrowUpRight, CircleDashed, TrendingUp, UserRoundSearch } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: UserRoundSearch,
    title: "Websites That Convert Visitors to Customers",
    copy:
      "A digital storefront designed with psychological precision to guide high-intent users toward action.",
  },
  {
    icon: CircleDashed,
    title: "Online Presence That Builds Instant Trust",
    copy:
      "We build identity that signals authority from your homepage to your inquiry flow and pricing architecture.",
  },
  {
    icon: TrendingUp,
    title: "Sales-Focused Landing Pages",
    copy:
      "Engineered funnels that articulate your value proposition with surgical clarity and developer-grade speed.",
  },
];

const projects = [
  {
    title: "Aura Luxury Estates",
    category: "Real Estate · Scaling Architecture",
    metric: "+32% lead quality",
    image: "/project-placeholder-01.svg",
  },
  {
    title: "Vertex Global Consulting",
    category: "Fintech · Strategic Overhaul",
    metric: "40% growth in inquiries",
    image: "/project-placeholder-02.svg",
  },
];

const positioningPoints = [
  {
    title: "Business Acumen",
    copy: "We understand your customer acquisition costs and lifetime value.",
  },
  {
    title: "Unrivaled Reliability",
    copy: "Projects are built with the discipline of a serious commercial operation.",
  },
  {
    title: "Architectural Scaling",
    copy: "Our foundations are structured for growth, not just a pretty launch day.",
  },
];

export function ProblemSection() {
  return null;
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-shell px-5 py-16 md:px-8 md:py-20 lg:px-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
        <SectionHeading
          badge="Our capabilities"
          title="Here is Exactly What We Build For You"
          description="Business websites, launch funnels, and trust systems designed to improve the quality of every inbound action."
          centered={false}
        />
        <p className="max-w-md text-sm leading-7 text-[var(--ink-soft)] lg:justify-self-end lg:pt-12">
          We strip away the noise and focus on the metrics that matter:
          conversion, positioning, and perception in-market.
        </p>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden border border-black/8 bg-black/8 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="bg-[var(--panel)] p-6 md:p-8"
            >
              <div className="grid h-10 w-10 place-items-center border border-black/10 bg-white text-[var(--accent-dark)]">
                <Icon size={16} />
              </div>
              <h3 className="font-display mt-8 max-w-xs text-[1.6rem] leading-tight text-black">
                {service.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--ink-soft)]">
                {service.copy}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-shell px-5 py-16 md:px-8 md:py-20 lg:px-12"
    >
      <SectionHeading
        badge="The track record"
        title="Case Studies: Proven Results"
        description="Selected engagements where clarity, premium positioning, and stronger conversion mechanics changed the conversation."
        centered={false}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title}>
            <div className="editorial-card overflow-hidden">
              <div className="relative aspect-[16/10] bg-[#e9dfd4]">
                <Image
                  src={project.image}
                  alt={`${project.title} case study preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-white px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                  {project.metric}
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-[1.9rem] leading-tight text-black">
                  {project.title}
                </h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-[var(--ink-faint)]">
                  {project.category}
                </p>
              </div>
              <ArrowUpRight className="mt-2 text-[var(--accent)]" size={18} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section
      id="positioning"
      className="section-shell px-5 py-16 md:px-8 md:py-20 lg:px-12"
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--ink-faint)]">
            The advantage
          </p>
          <h2 className="font-display mt-4 max-w-md text-[2.2rem] leading-[1] text-black md:text-[3.4rem]">
            Why Global Brands Choose Business Logic
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[var(--ink-soft)]">
            We are not just developers. We are business consultants who use code
            as a tool for financial expansion. Most agencies deliver a site. We
            deliver a system.
          </p>

          <div className="mt-8 space-y-5">
            {positioningPoints.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="mt-1 h-5 w-5 rounded-full border border-black/15" />
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-black">
                    {point.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-7 text-[var(--ink-soft)]">
                    {point.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          <div className="editorial-card relative overflow-hidden p-3">
            <div className="relative aspect-[4/4.6] bg-[#d9d1c8]">
              <Image
                src="/Isaac Winner 2.png"
                alt="Business consultant portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 34rem"
                className="object-cover grayscale"
              />
            </div>
          </div>

          <div className="absolute -bottom-20 md:bottom-0 left-0 max-w-[15rem] translate-x-[-2%] translate-y-[18%] bg-[var(--accent)] p-5 text-white shadow-[0_20px_40px_rgba(79,55,21,0.24)]">
            <p className="font-display text-3xl">15+</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] leading-5 text-white/85">
              Years of combined digital strategy and execution across the market
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
