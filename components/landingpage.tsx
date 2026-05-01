import {
  ContactSection,
  FooterCtaSection,
  HeroSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/landing";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const featuredBrands = [
  {
    name: "DBEN Real Estate",
    src: "/logos/dben.svg",
    width: 240,
  },
  {
    name: "Farmergiant",
    src: "/logos/farmergiant.svg",
    width: 260,
  },
  {
    name: "Earnstak",
    src: "/logos/earnstak.svg",
    width: 240,
  },
  {
    name: "IGiftways",
    src: "/logos/igiftways.svg",
    width: 240,
  },
  {
    name: "Aurora Luxury Estates",
    src: "/logos/aurora.svg",
    width: 250,
  },
];

export default function LandingPage() {
  return (
    <main className="page-shell">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-6 px-2 py-3 md:px-4 md:py-4">
        <HeroSection />

        <section className="section-shell overflow-hidden px-5 py-8 md:px-8">
          <div className="grid gap-6 md:grid-cols-[0.6fr_1.4fr] md:items-center">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl text-[var(--accent)] md:text-5xl">
                150%
              </span>
              <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--ink-faint)]">
                Average lead increase
              </div>
            </div>

            <div className="min-w-0">
              <Marquee
                autoFill
                gradient
                gradientColor="#f7f1e9"
                gradientWidth={60}
                speed={36}
                pauseOnHover
                className="overflow-hidden"
              >
                {featuredBrands.map((brand) => (
                  <div
                    key={brand.name}
                    className="mx-4 flex h-16 items-center justify-center border border-black/8 bg-white/70 px-4 sm:mx-5"
                  >
                    <Image
                      src={brand.src}
                      alt={`${brand.name} logo`}
                      width={brand.width}
                      height={72}
                      className="h-10 w-auto object-contain opacity-85"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </section>

        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
        <FooterCtaSection />
      </div>
    </main>
  );
}
