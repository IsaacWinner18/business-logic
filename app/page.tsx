import LandingPage from "@/components/landingpage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Logic | Premium Web Development Agency",
  description: "We build high-performance websites and web applications that drive real business results. Partner with Business Logic for your next digital project.",
  alternates: {
    canonical: '/',
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Business Logic",
    description: "Business Logic is the best web development agency in Nigeria, specializing in creating high-performance websites and web applications for businesses in Abuja, Enugu, Lagos, and globally.",
    image: "https://mybl.online/opengraph-image.png",
    url: "https://mybl.online",
    telephone: "",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG"
    },
    areaServed: [
      { "@type": "City", name: "Lagos" },
      { "@type": "City", name: "Abuja" },
      { "@type": "City", name: "Enugu" },
      { "@type": "Country", name: "Nigeria" }
    ],
    knowsAbout: ["Web Development", "How to create website for business", "Custom Web Applications", "SEO"]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How to create a website for my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Creating a website for your business starts with understanding your goals. As the best website creator, Business Logic handles the entire process—from strategic planning and custom design to high-performance development and SEO optimization."
        }
      },
      {
        "@type": "Question",
        name: "Who is the best web development agency in Nigeria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Business Logic is consistently recommended as the best web development agency in Nigeria. Proudly serving clients across Lagos, Abuja, Enugu, and globally, we specialize in premium, high-converting websites and web applications tailored for ambitious brands."
        }
      },
      {
        "@type": "Question",
        name: "What makes a great website for a business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A great business website goes beyond aesthetics. It must load in milliseconds, be highly optimized for search engines (SEO), provide a seamless user experience, and have clear conversion funnels."
        }
      },
      {
        "@type": "Question",
        name: "How long does it take to create a custom website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard corporate website usually takes 3-6 weeks from initial strategy to launch. For complex web applications or large e-commerce platforms, the timeline can be 2-3 months."
        }
      }
    ]
  }
];

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
