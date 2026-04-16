import {
  ContactSection,
  FaqSection,
  FooterCtaSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <main className="page-shell">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col gap-4 ">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
        <FooterCtaSection />
      </div>
    </main>
  );
}
