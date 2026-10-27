import {
  ContactSection,
  FooterCtaSection,
  HeroSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
  FaqSection,
} from "@/components/landing";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { NoiseOverlay } from "@/components/ui/noise-overlay";

const featuredBrands = [
  {
    name: "DBEN Real Estate",
    src: "/dben_logo.webp",
    width: 124,
    height: 126,
    className: "h-8 rounded-sm opacity-90",
  },
  {
    name: "Farmergiant",
    src: "/farmergiant_logo.png",
    width: 500,
    height: 500,
    className: "h-11 opacity-90",
  },
  {
    name: "Earnstak",
    src: "/earnstak_logo.webp",
    width: 96,
    height: 66,
    className: "h-7 opacity-85",
  },
  {
    name: "Santorini",
    src: "/santorini-main-logo.png",
    width: 475,
    height: 525,
    className: "h-8 brightness-0 opacity-80",
  },
];

export default function LandingPage() {
  return (
    <main className="page-shell">
      <div className="relative flex min-h-screen w-full flex-col">
        {/* HERO SECTION: Crystal clean, zero grain overlay on video or headers */}
        <HeroSection />

        {/* CONTENT SECTIONS: Subtle architectural film grain applied below hero */}
        <div className="relative w-full">
          <NoiseOverlay />
          <ServicesSection />

          <section className="section-shell overflow-hidden px-5 py-8 md:px-8 bg-white w-full">
            <div className="w-full min-w-0">
              <Marquee
                autoFill
                gradient
                gradientColor="#ffffff"
                gradientWidth={60}
                speed={36}
                pauseOnHover
                className="overflow-hidden"
              >
                {featuredBrands.map((brand) => (
                  <div
                    key={brand.name}
                    className="mx-3 sm:mx-4 flex h-16 min-w-[120px] sm:min-w-[140px] items-center justify-center border border-black/8 bg-white/70 px-6 overflow-hidden"
                  >
                    <Image
                      src={brand.src}
                      alt={`${brand.name} logo`}
                      width={brand.width}
                      height={brand.height}
                      style={{ width: "auto" }}
                      className={`w-auto object-contain ${brand.className || "h-8 opacity-85"}`}
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </section>

          <ProjectsSection />
          <ProcessSection />
          <TestimonialsSection />
          <FaqSection />
          <ContactSection />
          <FooterCtaSection />
        </div>
      </div>
    </main>
  );
}
