import {
  ContactSection,
  FaqSection,
  FooterCtaSection,
  HeroSection,
  ProblemSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <main className="">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col gap-4 ">
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
        <FooterCtaSection />
      </div>
    </main>
  );
}
