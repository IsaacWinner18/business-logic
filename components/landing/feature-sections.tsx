import { SectionHeading } from "@/components/landing/shared";
import { ArrowUpRight, CircleDashed, UserRoundSearch } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: UserRoundSearch,
    title: "All Types of Websites",
    copy: "Professional websites for small businesses, companies, startups, brands, and service businesses.",
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
    copy: "Most users browse with phones. Your website will be optimized for mobile users first.",
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
      <div className="mb-16 max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--ink-faint)]">
          Services
        </p>
        <h2 className="font-display mt-4 text-[2.5rem] leading-[1.05] text-black sm:text-[3.2rem]">
          Our Services
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--ink-soft)] md:text-base">
          We build websites and web-based systems that help businesses look
          professional, attract customers, and grow online.
        </p>
      </div>

      {/* BENTO GRID WRAPPER */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          // Asymmetric Bento configurations for desktop (3 columns layout)
          // Card 0: Wide (2 cols) | Card 1: Tall (1 col, spans 2 rows) | Card 2: Wide (2 cols)
          const bentoClasses =
            index === 0
              ? "md:col-span-2 lg:col-span-2 min-h-[440px]"
              : index === 1
                ? "md:col-span-1 lg:col-span-1 lg:row-span-2 min-h-[480px] lg:min-h-full"
                : "md:col-span-1 lg:col-span-2 min-h-[440px]";

          return (
            <article
              key={service.title}
              className={`group relative flex flex-col justify-between overflow-hidden border border-black/8 p-6 md:p-8 transition-all duration-300 hover:border-black/20 ${bentoClasses}`}
            >
              {/* IMAGE BACKGROUND LAYER */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-w-780px) 100vw, 50vw"
                  className="object-contain object-bottom  transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-600/70 to-black" />
              </div>

              {/* TOP CONTENT OVERLAY */}
              <div className="relative z-10">
                <div className="grid h-10 w-10 place-items-center border border-black/10 bg-white text-[var(--accent-dark)] shadow-sm">
                  <Icon size={16} />
                </div>

                <h3 className="font-display mt-8 max-w-md text-[1.6rem] leading-tight text-white md:text-[1.8rem]">
                  {service.title.split(" ")[0]} {service.title.split(" ")[1]}{" "}
                  {service.title.split(" ")[2]}{" "}
                  <span className="text-orange-700">
                    {service.title.split(" ")[3]}
                  </span>
                </h3>

                <p className="mt-4 max-w-xl text-base leading-7 text-gray-100">
                  {service.copy}
                </p>
              </div>

              {/* BOTTOM CONTENT OVERLAY: CHIPS/TAGS */}
              <div className="relative z-10 mt-12 flex flex-wrap gap-2">
                {service.tag.map((t) => (
                  <span
                    key={t}
                    className="border border-black/5 bg-white/20 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-white backdrop-blur-[1px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
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
