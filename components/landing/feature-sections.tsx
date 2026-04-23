import Image from "next/image";
import { CircleAlert } from "lucide-react";
import { SectionHeading } from "@/components/landing/shared";

const problemPoints = [
  "Customers visit but never call or message",
  "Your site looks cheap compared to your competitors",
  "People cannot figure out what you do just from looking at it",
  "You are not sure if your website is helping your business at all",
];

const services = [
  {
    title: "A Website That Sells For You",
    copy:
      "We build your business a clean, fast website that explains what you offer, who it is for, and why people should choose you in a way that feels easy to understand and easy to trust.",
  },
  {
    title: "Online Platforms & Business Tools",
    copy:
      "Need more than a simple website? We build customer portals, booking systems, dashboards, and online platforms that help your business be better and your customers get served faster.",
  },
  {
    title: "Website Fixes & Improvements",
    copy:
      "Already have a website that is not performing? We will clean it up, improve how it looks, make it faster, and make sure it is doing its job by bringing you more business.",
  },
];

const clientTypes = [
  "SME's",
  "Service businesses",
  "New companies",
  "Founders who need trust online",
  "Businesses with weak current websites",
  "Businesses ready to grow",
];

const processSteps = [
  {
    step: "Step 1",
    title: "We Talk",
    copy:
      "You book a free call and tell us what your business does, who your customers are, and what you need. That is it.",
  },
  {
    step: "Step 2",
    title: "We Plan",
    copy:
      "We send you a clear plan showing what your website will include, how long it will take, and what it will cost. No surprises.",
  },
  {
    step: "Step 3",
    title: "We Build",
    copy:
      "Our team designs and builds your website. You see it before it goes live and you give feedback along the way.",
  },
  {
    step: "Step 4",
    title: "You Go Live",
    copy:
      "Your website launches fully working, fast, and ready to help bring in business.",
  },
];

const projects = [
  {
    tag: "Recent Project",
    title: "Real Estate Company - Full Website Overhaul",
    copy:
      "Their old site was confusing and slow. We rebuilt it from scratch so their properties look premium, clients can browse easily, and the team gets more serious inquiries every week.",
    metrics: ["More qualified leads", "Fewer time-wasters", "Clearer browsing"],
    align: "left",
    image: "/project-placeholder-01.svg",
  },
  {
    tag: "Recent Project",
    title: "Business Consulting Firm - New Website Launch",
    copy:
      "They had no website, just a phone number and word of mouth. We built them a professional online presence that helped them look as credible as the bigger firms they compete with.",
    metrics: ["Strong first impression", "Corporate-ready presence", "First corporate client in 2 weeks"],
    align: "right",
    image: "/project-placeholder-02.svg",
  },
  {
    tag: "Recent Project",
    title: "Premium Service Brand - Redesign",
    copy:
      "Their website was losing customers before anyone made contact. We redesigned it to be clean, clear, and convincing so sales conversations became much easier.",
    metrics: ["3x better lead quality", "Cleaner message", "Easier sales conversations"],
    align: "left",
    image: "/project-placeholder-03.svg",
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="section-shell relative overflow-hidden rounded-[1.5rem] bg-white px-3 py-10 sm:rounded-[2rem] sm:px-5 sm:py-14 lg:px-10 lg:py-18"
    >
      <div className="pointer-events-none absolute inset-0" />
      <SectionHeading
        badge="The Problem"
        title="Does Any of This Sound Familiar?"
        description="Most website are not special advantages to businesses. That is the problem we fix."
      />

      <div className="relative mt-8 grid gap-4 sm:mt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="grid gap-3 md:grid-cols-2">
          {problemPoints.map((point, index) => (
            <article
              key={point}
              className="group rounded-[1.35rem] border border-slate-200/70 bg-slate-950/[0.065] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.04)] backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-300/70 bg-red-500/70 text-slate-50">
                  <CircleAlert size={18} />
                </div>
                <span className="text-[15px] uppercase tracking-[0.24em] text-slate-400">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-900">{point}</p>
            </article>
          ))}
        </div>

        <aside className="rounded-[1.6rem] border border-slate-200/80 bg-slate-950/[0.04] p-3 shadow-[0_25px_70px_rgba(15,23,42,0.06)]">
          <div className="rounded-[1.35rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(248,250,252,0.92))] p-6">
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
              What is going wrong
            </p>
            <h3 className="font-display mt-3 text-3xl leading-tight text-slate-950">
              Having a website is not enough if nobody understands what to do
              next.
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Most visitors decide in seconds whether your business feels clear,
              professional, and worth contacting. If the site is confusing, you
              lose trust before the conversation even starts.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section
      id="features"
      className="section-shell relative px-3 py-10 sm:rounded-[2rem] sm:px-5 sm:py-14 lg:px-10 lg:py-18 bg-slate-100/10"
    >
      <SectionHeading
        badge="Services"
        title="Here is Exactly What We Build For You"
        description="Simple, clear websites and business tools that help people understand what you do, trust your business, and take the next step."
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
              Who it is for
            </p>
            <h3 className="font-display mt-2 text-2xl text-black sm:text-3xl">
              We work best with business owner&#39;s who are{" "}
              <span className="text-sky-400">serious about growth</span>
            </h3>
            <p className="text-gray-600 mt-3 max-w-xl text-sm leading-6 sm:leading-7">
              If your business needs a stronger first impression, clearer
              messaging, and a website you feel proud to share, we are a strong
              fit.
            </p>
          </div>

          <div className="grid  gap-2 sm:grid-cols-3 sm:gap-3 ">
            {clientTypes.map((item) => (
              <div
                key={item}
                className="rounded-[1.1rem] border border-white/6 bg-white/[0.025] px-3 py-4 text-xs text-slate-800 sm:text-sm font-extrabold uppercase"
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

export function ProcessSection() {
  return (
    <section
      id="process"
      className="section-shell relative rounded-[1.5rem] bg-emerald-100/40 px-3 py-10 sm:rounded-[2rem] sm:px-5 sm:py-14 lg:px-10 lg:py-18"
    >
      <SectionHeading
        badge="How It Works"
        title="How We Build Your Website - Step by Step"
        description="We keep the process simple, clear, and easy to follow from the first call to launch."
      />

      <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-4">
        {processSteps.map((item) => (
          <article
            key={item.step}
            className="rounded-[1.3rem] border border-black/8 bg-white/80 p-5"
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
              {item.step}
            </p>
            <h3 className="font-display mt-3 text-2xl text-black">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="solution"
      className="section-shell relative rounded-[1.5rem] px-3 py-10 sm:rounded-[2rem] sm:px-5 sm:py-14 lg:px-10 lg:py-18 bg-red-100/10"
    >
      <SectionHeading
        badge="Recent Work"
        title="Businesses We Have Helped Look Better and Grow Faster"
        description="A few examples of what happens when the website becomes clearer, more professional, and easier for customers to trust."
      />

      <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
        {projects.map((project) => {
          const reversed = project.align === "right";

          return (
            <article
              key={project.title}
              className="grid gap-3 rounded-[1.5rem] border border-white/6 bg-white/[0.025] p-3 sm:gap-4 sm:p-4 lg:grid-cols-2 lg:items-center lg:gap-8 lg:p-6 mb-8 md:mb-4"
            >
              <div className={reversed ? "lg:order-2" : ""}>
              
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
                      className=" border border-white/6 bg-black/50 px-3 py-1 text-xs text-slate-100"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className={reversed ? "lg:order-1" : ""}>
                {/* <div className="mesh-card overflow-hidden rounded-[1.5rem] p-2 sm:p-3">
                  <div className="overflow-hidden rounded-[1.15rem] border border-white/6 bg-black/20">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview placeholder`}
                      width={600}
                      height={450}
                      className="object-contain"
                    />
                  </div>
                </div> */}
                  <Image
                      src={project.image}
                      alt={`${project.title} preview placeholder`}
                      width={600}
                      height={450}
                      className="object-contain"
                    />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
