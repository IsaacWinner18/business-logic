import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Client Wins",
  description: "Explore our portfolio of selected engagements across various industries. See how we've helped ambitious brands drive real business results.",
  alternates: {
    canonical: "/case-studies",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Business Logic Case Studies",
  description: "Explore our portfolio of selected engagements across various industries.",
  url: "https://mybl.online/case-studies"
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
