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

const featuredBrands = [
  {
    name: "DBEN Real Estate",
    src: "/dben_logo.webp",
    width: 124,
    height: 126,
    className: "rounded-sm",
  },
  {
    name: "Farmergiant",
    src: "/farmergiant_logo.png",
    width: 500,
    height: 500,
    className: "scale-125",
  },
  {
    name: "Earnstak",
    src: "/earnstak_logo.webp",
    width: 96,
    height: 66,
  },
  {
    name: "Santorini",
    src: "/santorini-main-logo.png",
    width: 475,
    height: 525,
    className: "brightness-0 opacity-80",
  },
];

export default function LandingPage() {
  return (
    <main className="page-shell">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col ">
        <HeroSection />
        <ServicesSection />

        <section className="section-shell overflow-hidden px-5 py-8 md:px-8 bg-white">
          <div className="w-full min-w-0">
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
                  className="mx-4 flex h-16 items-center justify-center border border-black/8 bg-white/70 px-6 sm:mx-5"
                >
                  <Image
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    width={brand.width}
                    height={brand.height}
                    className={`h-10 w-auto object-contain ${brand.className || "opacity-85"}`}
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
    </main>
  );
}
