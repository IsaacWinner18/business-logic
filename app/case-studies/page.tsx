"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    id: "01",
    brand: "Dben Real Estates",
    title: "Scaling Architecture for High-Volume Lead Generation",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1780229406/Screenshot_2026-05-31_130940_y1tuf3.png",
    metrics: [
      { value: "+32%", label: "LEAD QUALITY" },
      { value: "4x", label: "CONVERSION RATE" },
      { value: "-45%", label: "COST PER ACQUISITION" },
      { value: "10k+", label: "MONTHLY VISITORS" },
    ],
    overview:
      "Dben Real Estates came to us looking to modernize their digital presence. Their old website was not reflecting the premium quality of their properties, leading to low engagement and poor lead quality in a highly competitive market.",
    problem:
      "The main challenge was the fragmented user journey. Potential buyers were getting lost in a clunky search interface. Furthermore, the lack of trust signals meant that even when they found a property, they hesitated to reach out and schedule a viewing.",
    solution: [
      {
        title: "Premium Visual Identity",
        description:
          "We completely overhauled the design to match the luxury properties they sell, incorporating a sleek, modern aesthetic.",
      },
      {
        title: "Streamlined Search",
        description:
          "Implemented a lightning-fast, intuitive property search with advanced filtering, reducing the time to find a property by half.",
      },
      {
        title: "Conversion Optimization",
        description:
          "Redesigned property pages to highlight key details, add trust badges, and make inquiries frictionless.",
      },
    ],
  },
  {
    id: "02",
    brand: "Buychow Ng Group",
    title: "Strategic Overhaul for a Foodtech Pioneer",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1778334695/Screenshot_2026-05-09_144304_n36rfa.png",
    metrics: [
      { value: "40%", label: "GROWTH IN INQUIRIES" },
      { value: "2.5x", label: "USER RETENTION" },
      { value: "60%", label: "FASTER LOAD TIME" },
      { value: "15k+", label: "ACTIVE USERS" },
    ],
    overview:
      "Buychow Ng Group is a leading foodtech platform connecting hungry customers with top-tier restaurants. As they scaled, their existing infrastructure struggled to keep up with the increasing demand and complex order flows.",
    problem:
      "Users experienced frustrating load times during peak hours, and the checkout process was overly complicated. This resulted in a high cart abandonment rate and negative feedback regarding the user interface on mobile devices.",
    solution: [
      {
        title: "Performance Engineering",
        description:
          "Rebuilt the core architecture to handle high traffic seamlessly, resulting in a 60% faster page load time.",
      },
      {
        title: "UX Redesign",
        description:
          "Simplified the ordering process down to three steps, drastically reducing friction and cart abandonment.",
      },
      {
        title: "Mobile-First Approach",
        description:
          "Optimized the entire platform for mobile, recognizing that 80% of their users were ordering from their phones.",
      },
    ],
  },
  {
    id: "03",
    brand: "Exampreps",
    title: "Building a Seamless Platform for EdTech Growth",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783873796/Screenshot_2026-07-12_172934_qxzilr.png", // Placeholder
    metrics: [
      { value: "50k+", label: "STUDENTS ENROLLED" },
      { value: "92%", label: "COMPLETION RATE" },
      { value: "3x", label: "REVENUE GROWTH" },
      { value: "100+", label: "NEW COURSES" },
    ],
    overview:
      "Exampreps provides essential study materials and courses for students preparing for major exams. They needed a platform that could support massive concurrent users without sacrificing the learning experience.",
    problem:
      "Their previous system lacked the interactive features necessary to keep students engaged. Video playback was inconsistent, and the progress tracking was unreliable, leading to student frustration and churn.",
    solution: [
      {
        title: "Interactive Dashboards",
        description:
          "Created personalized dashboards for students to track their progress, view upcoming tests, and access materials easily.",
      },
      {
        title: "Robust Video Streaming",
        description:
          "Integrated a reliable video hosting solution that adjusts quality based on the user's internet connection.",
      },
      {
        title: "Gamification",
        description:
          "Introduced badges and leaderboards to motivate students and increase the overall course completion rate.",
      },
    ],
  },
  {
    id: "04",
    brand: "FeemTech",
    title: "Establishing Corporate Trust in the Tech Sector",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783873692/Screenshot_2026-07-12_164904_wpahph.png", // Placeholder
    metrics: [
      { value: "200%", label: "B2B LEADS" },
      { value: "1st", label: "PAGE RANKING" },
      { value: "85%", label: "BOUNCE RATE REDUCTION" },
      { value: "5+", label: "ENTERPRISE DEALS" },
    ],
    overview:
      "FeemTech is an innovative software solutions provider looking to establish authority in the enterprise sector. They needed a corporate website that communicated trust, expertise, and their unique value proposition.",
    problem:
      "Their old site felt like a generic template and failed to articulate the complexity and value of their enterprise solutions. It wasn't generating qualified B2B leads.",
    solution: [
      {
        title: "Authority Positioning",
        description:
          "Redesigned the site with a clean, professional aesthetic that positions them as industry leaders rather than a startup.",
      },
      {
        title: "Clear Value Proposition",
        description:
          "Rewrote the copy to clearly articulate the ROI of their software for enterprise clients.",
      },
      {
        title: "Lead Generation Funnels",
        description:
          "Implemented strategic lead magnets and contact forms to capture high-value prospects.",
      },
    ],
  },
  {
    id: "05",
    brand: "Farmergiant",
    title: "E-Commerce Transformation for Agrotech",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783875916/Screenshot_2026-07-12_180458_h6ojxe.png",
    metrics: [
      { value: "150%", label: "INCREASE IN SALES" },
      { value: "10k+", label: "ORDERS PROCESSED" },
      { value: "-20%", label: "SUPPORT TICKETS" },
      { value: "99%", label: "UPTIME" },
    ],
    overview:
      "Farmergiant supplies high-quality agricultural equipment and resources to farmers. They wanted to transition from primarily offline sales to a robust e-commerce platform.",
    problem:
      "Farmers found the initial online ordering system too complex. The lack of clear product specifications and a confusing checkout process meant many abandoned their carts and called in to order instead.",
    solution: [
      {
        title: "Simplified E-Commerce",
        description:
          "Built a custom, straightforward e-commerce experience tailored to the specific needs and technical proficiency of their target audience.",
      },
      {
        title: "Detailed Product Catalogs",
        description:
          "Structured product data to provide clear, easily readable specifications for complex agricultural machinery.",
      },
      {
        title: "Seamless Checkout",
        description:
          "Implemented a frictionless checkout process with multiple payment options suitable for rural businesses.",
      },
    ],
  },
  {
    id: "06",
    brand: "Earnstak",
    title: "Streamlining Workflows for a Fintech Startup",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783940517/Screenshot_2026-07-13_115221_vpr9lr.png", 
    metrics: [
      { value: "5x", label: "USER ACQUISITION" },
      { value: "< 1s", label: "API RESPONSE TIME" },
      { value: "100%", label: "COMPLIANCE" },
      { value: "Zero", label: "DOWNTIME" },
    ],
    overview:
      "Earnstak is a fintech web app designed to help users manage their investments and track returns. They required a secure, lightning-fast application to handle sensitive financial data.",
    problem:
      "The initial MVP was slow and lacked the visual polish expected of modern financial tools. Users were hesitant to link their accounts due to the unrefined interface and slow loading times.",
    solution: [
      {
        title: "Bank-Grade Security",
        description:
          "Implemented robust security measures and encryption to ensure user data is protected and compliant with regulations.",
      },
      {
        title: "Real-Time Data Visualization",
        description:
          "Built dynamic charts and graphs that update in real-time, giving users an instant overview of their portfolio.",
      },
      {
        title: "High-Performance Architecture",
        description:
          "Optimized the backend to handle complex financial calculations and API integrations without lag.",
      },
    ],
  },
  {
    id: "07",
    brand: "Santorini",
    title: "Elevating the Digital Experience for Luxury Hospitality",
    image:
      "https://res.cloudinary.com/dcvlszzoy/image/upload/v1783874011/Screenshot_2026-07-12_173311_dqd6ee.png", // Placeholder
    metrics: [
      { value: "80%", label: "DIRECT BOOKINGS" },
      { value: "3x", label: "TIME ON SITE" },
      { value: "Mobile", label: "OPTIMIZED" },
      { value: "5 Star", label: "USER REVIEWS" },
    ],
    overview:
      "Santorini is a luxury boutique hotel offering exclusive experiences. They wanted their website to reflect the elegance and tranquility of their physical location.",
    problem:
      "Their existing site relied heavily on third-party booking platforms, costing them significantly in commission fees. The design was outdated and failed to capture the luxury essence of the brand.",
    solution: [
      {
        title: "Immersive Visuals",
        description:
          "Centered the design around high-quality, full-screen imagery and video to immediately immerse the visitor in the hotel's atmosphere.",
      },
      {
        title: "Custom Booking Engine",
        description:
          "Integrated a seamless, custom-built booking system that keeps users on the site and maximizes direct revenue.",
      },
      {
        title: "Elegant Interactions",
        description:
          "Added subtle, sophisticated micro-animations that enhance the feeling of luxury as users navigate the site.",
      },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="page-shell bg-white">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1000px] flex-col gap-6 pt-32 px-5 md:px-8 lg:px-12">
        {/* HERO SECTION */}
        <section className="mb-24">
          <p className="font-caveat text-2xl text-[var(--ink-faint)]">
            [CASE STUDIES / WINS]
          </p>
          <h1 className="font-unbounded mt-4 text-[3rem] leading-[1.05] text-black md:text-[5rem]">
            Real numbers, <br />
            real growth.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
            Explore our portfolio of selected engagements across various industries. 
            We partner with ambitious brands to create digital experiences that drive real business results.
          </p>
        </section>

        {/* CASE STUDIES LIST */}
        <div className="flex flex-col gap-32 pb-32">
          {caseStudies.map((study, index) => (
            <motion.article 
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-12 border-t border-black/10 pt-16"
            >
              {/* HEADER */}
              <div className="flex flex-col gap-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink-faint)] font-bold">
                  CASE STUDY · {study.id}
                </p>
                <div className="flex items-baseline gap-4 mt-2">
                  <span className="font-unbounded text-5xl md:text-7xl text-[var(--accent)] opacity-20">
                    {study.id}
                  </span>
                  <h2 className="font-unbounded text-4xl md:text-6xl text-black">
                    {study.brand}
                  </h2>
                </div>
              </div>

              {/* SCREENSHOT */}
              <div className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-[#f4f4f4] overflow-hidden rounded-xl border border-black/5 group">
                <Image 
                  src={study.image}
                  alt={`${study.brand} website screenshot`}
                  fill
                  unoptimized
                  className="object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* METRICS GRID */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-black/5 bg-[#FAFAFA] px-8 rounded-xl">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <span className="font-unbounded text-3xl md:text-4xl text-black">
                      {metric.value}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[var(--ink-soft)] font-semibold max-w-[120px]">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* STORY CONTENT */}
              <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
                <div className="flex flex-col gap-4">
                  <h3 className="font-unbounded text-2xl md:text-3xl leading-tight">
                    {study.title}
                  </h3>
                </div>
                
                <div className="flex flex-col gap-12">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-black">
                      overview
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed text-[var(--ink-soft)]">
                      {study.overview}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-black">
                      the problem
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed text-[var(--ink-soft)]">
                      {study.problem}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-6">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-black">
                      the solution
                    </h4>
                    <ul className="flex flex-col gap-6">
                      {study.solution.map((item, idx) => (
                        <li key={idx} className="flex flex-col gap-1">
                          <strong className="text-black font-semibold text-lg">{item.title}</strong>
                          <span className="text-[var(--ink-soft)] leading-relaxed">
                            {item.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER CTA */}
        <section className="border-t border-black/10 py-32 flex flex-col items-center text-center gap-6">
           <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink-faint)] font-bold">
            [ NEXT STEP ]
          </p>
          <h2 className="font-unbounded text-4xl md:text-6xl text-black">
            Be our next case study.
          </h2>
          <p className="mt-2 max-w-xl text-lg text-[var(--ink-soft)]">
            Ready to scale your digital presence? Let's talk about your goals and how we can help you achieve them.
          </p>
          <Link 
            href="/apply"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-400 px-8 py-4 font-unbounded text-sm text-white transition-all hover:bg-black/80"
          >
            Apply Now
            <ArrowUpRight size={16} />
          </Link>
        </section>

      </div>
    </main>
  );
}
