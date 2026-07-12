import LandingPage from "@/components/landingpage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Logic | Premium Web Development Agency",
  description: "We build high-performance websites and web applications that drive real business results. Partner with Business Logic for your next digital project.",
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Business Logic",
  image: "https://mybl.online/opengraph-image.png",
  url: "https://mybl.online",
  telephone: "",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG"
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage />
    </>
  );
}
