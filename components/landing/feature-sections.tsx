import Image from "next/image";
import { SectionHeading } from "@/components/landing/shared";

const services = [
  {
    title: "High-converting marketing sites",
    copy:
      "Launch brand-first websites built to win enterprise trust, explain complex offers, and move decision-makers faster.",
  },
  {
    title: "Product and dashboard interfaces",
    copy:
      "Design and ship premium internal tools, SaaS platforms, and customer portals with a clean, credible visual system.",
  },
  {
    title: "Ongoing design-engineering support",
    copy:
      "Work with a senior web team that can refine, extend, and optimize your site after launch without losing quality.",
  },
];

const clientTypes = [
  "Private equity backed teams",
  "High-growth SaaS brands",
  "Luxury and premium services",
  "Venture-funded startups",
  "Global professional firms",
  "Executive personal brands",
];

const projects = [
  {
    tag: "Recent Project",
    title: "Executive advisory firm relaunch",
    copy:
      "We redesigned a dated consultancy site into a high-trust digital presence with clearer positioning, sharper service pages, and faster conversion paths for qualified leads.",
    metrics: ["6 weeks delivery", "3x stronger lead quality", "Premium repositioning"],
    align: "left",
    image: "/project-placeholder-01.svg",
  },
  {
    tag: "Recent Project",
    title: "SaaS demand generation website",
    copy:
      "For a B2B software company, we built a modular marketing site with product storytelling, proof layers, and flexible landing page sections for sales campaigns.",
    metrics: ["Reusable page system", "Mobile-first rollout", "Sales-ready messaging"],
    align: "right",
    image: "/project-placeholder-02.svg",
  },
  {
    tag: "Recent Project",
    title: "Private client service brand refresh",
    copy:
      "We elevated the digital experience for a premium service business with restrained visuals, deliberate motion, and content structure designed for high-intent buyers.",
    metrics: ["Luxury-style direction", "Faster load times", "Clearer conversion flow"],
    align: "left",
    image: "/project-placeholder-03.svg",
  },
];

export function ServicesSection() {
  return (
    <section
      id="features"
      className="section-shell relative rounded-[1.5rem] px-3 py-10 sm:rounded-[2rem] sm:px-5 sm:py-14 lg:px-10 lg:py-18 bg-[#c6ddf7]/10"
    >
      <SectionHeading
        badge="Services"
        title="Web development built for"
        highlight=" premium brands"
        description="We design and develop polished websites for companies that need credibility, clarity, and execution that holds up under close scrutiny."
      />

      <div className="mt-8 grid sm:mt-10  lg:grid-cols-3 bg-white">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="border border-gray-500/6 bg-white/[0.025] p-3 sm:p-5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl text-sm text-gray-900/60 sm:h-12 sm:w-12 sm:text-base">
              0{index + 1}
            </div>
            <h3 className="font-display text-xl leading-tight text-black sm:text-2xl">
              {service.title}
            </h3>
            <p className="text-black/80 mt-3 text-sm leading-6 sm:leading-7">
              {service.copy}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-[0.5rem] border border-white/6 bg-white px-3 py-4 sm:mt-10 sm:px-5 sm:py-6">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-900">
              Ideal clients
            </p>
            <h3 className="font-display mt-2 text-2xl text-black sm:text-3xl">
              We <span className="text-sky-400"> partner</span> with teams that
              expect a sharper digital{" "}
              <span className="text-sky-400"> standard</span>
            </h3>
            <p className="text-gray-600 mt-3 max-w-xl text-sm leading-6 sm:leading-7">
              The visual language, spacing, and structure are intentionally
              restrained so the work feels credible for high-value buyers and
              top-tier brands.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
            {clientTypes.map((item) => (
              <div
                key={item}
                className="rounded-[1.1rem] border border-white/6 bg-white/[0.025] px-3 py-4 text-center text-xs text-slate-800 sm:text-sm font-extrabold uppercase"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="solution"
      className="section-shell relative rounded-[1.5rem] px-3 py-10 sm:rounded-[2rem] sm:px-5 sm:py-14 lg:px-10 lg:py-18 bg-red-400/10"
    >
      <SectionHeading
        badge="Recent Work"
        title="Recent projects for"
        highlight=" clients"
        description="A few examples of the kind of web experiences we build for ambitious brands that care about detail, speed, and presentation."
      />

      <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
        {projects.map((project) => {
          const reversed = project.align === "right";

          return (
            <article
              key={project.title}
              className="grid gap-3 rounded-[1.5rem] border border-white/6 bg-white/[0.025] p-3 sm:gap-4 sm:p-4 lg:grid-cols-2 lg:items-center lg:gap-8 lg:p-6"
            >
              <div className={reversed ? "lg:order-2" : ""}>
                <div className="pill inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-sky-100">
                  {project.tag}
                </div>
                <h3 className="font-display mt-3 text-2xl leading-tight text-black sm:text-3xl">
                  {project.title}
                </h3>
                <p className="text-gray-700 mt-3 max-w-xl text-sm leading-6 sm:leading-7">
                  {project.copy}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-white/6 bg-black/50 px-3 py-1 text-xs text-slate-100"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className={reversed ? "lg:order-1" : ""}>
                <div className="mesh-card overflow-hidden rounded-[1.5rem] p-2 sm:p-3">
                  <div className="overflow-hidden rounded-[1.15rem] border border-white/6 bg-black/20">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview placeholder`}
                      width={1200}
                      height={900}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
