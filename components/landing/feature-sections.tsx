import { SectionHeading } from "@/components/landing/shared";
import { ArrowUpRight, Check, CircleDashed, TrendingUp, UserRoundSearch } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: UserRoundSearch,
    title: "Business Websites",
    copy: "Professional websites for companies, brands, and service businesses.",
  },
  {
    icon: CircleDashed,
    title: "E-commerce Websites",
    copy: "Online stores that help you sell products and receive payments easily.",
  },
  {
    icon: TrendingUp,
    title: "Landing Pages",
    copy: "High-converting pages designed for ads, promotions, and lead generation.",
  },
  {
    icon: Check,
    title: "Website Redesign",
    copy: "Transform outdated websites into modern, professional platforms.",
  },
  {
    icon: CircleDashed,
    title: "Website Maintenance",
    copy: "We help keep your website updated, secure, and running smoothly.",
  },
  {
    icon: UserRoundSearch,
    title: "Custom Web Applications",
    copy: "Need something more advanced? We also build custom systems tailored to your business.",
  },
];

const projects = [
  {
    title: "Dben Real Estates",
    category: "Real Estate · Scaling Architecture",
    metric: "+32% lead quality",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1775340748/Screenshot_2026-04-04_231209_scjkvp.png",
  },
  {
    title: "Buychow Ng Group",
    category: "Foodtech · Strategic Overhaul",
    metric: "40% growth in inquiries",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1778334695/Screenshot_2026-05-09_144304_n36rfa.png",
  },
];

const positioningPoints = [
  {
    title: "Modern Design",
    copy: "We create clean websites that immediately improve your brand image.",
  },
  {
    title: "Fast Communication",
    copy: "No disappearing. No endless delays. Clear updates throughout the project.",
  },
  {
    title: "Mobile First",
    copy: "Most Nigerians browse with phones. Your website will be optimized for mobile users first.",
  },
  {
    title: "Results Focused",
    copy: "We build with business goals in mind - not just aesthetics.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    copy: "We understand your business, goals, and what you need.",
  },
  {
    number: "02",
    title: "Design",
    copy: "We create a modern design tailored to your brand.",
  },
  {
    number: "03",
    title: "Development",
    copy: "We build your website using fast and reliable technologies.",
  },
  {
    number: "04",
    title: "Launch",
    copy: "Your website goes live and is ready for customers.",
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
          badge="Services"
          title="Our Services"
          description="We build websites and web-based systems that help businesses look professional, attract customers, and grow online."
          centered={false}
        />
        <p className="max-w-md text-sm leading-7 text-[var(--ink-soft)] lg:justify-self-end lg:pt-12">
          Every project is tailored to the stage of your business, your goals,
          and the experience your customers need when they land on your site.
        </p>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden border border-black/8 bg-black/8 md:grid-cols-2 xl:grid-cols-3">
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
                  unoptimized
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
    <>
      <section
        id="positioning"
        className="section-shell px-5 py-16 md:px-8 md:py-20 lg:px-12"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--ink-faint)]">
              WHY CHOOSE US
            </p>
            <h2 className="font-display mt-4 max-w-md text-[2.2rem] leading-[1] text-black md:text-[3.4rem]">
              Why Businesses Choose Business Logic
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--ink-soft)]">
              We build websites that look professional, work smoothly on mobile,
              and stay aligned with the business goals that matter most to you.
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

            <div className="absolute -bottom-20 left-0 max-w-[15rem] translate-x-[-2%] translate-y-[18%] bg-[var(--accent)] p-5 text-white shadow-[0_20px_40px_rgba(79,55,21,0.24)] md:bottom-0">
              <p className="font-display text-3xl">4+</p>
              <p className="mt-2 text-[10px] uppercase leading-5 tracking-[0.22em] text-white/85">
                Years of combined digital strategy and execution across the market
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell px-5 py-16 md:px-8 md:py-20 lg:px-12">
        <SectionHeading
          badge=""
          title="Our Process"
          description="A clear workflow that keeps your project moving from idea to launch without confusion."
        />

        <div className="mt-10 grid gap-px overflow-hidden border border-black/8 bg-black/8 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.number} className="bg-[var(--panel)] p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--ink-faint)]">
                {step.number} - {step.title}
              </p>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--ink-soft)]">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
