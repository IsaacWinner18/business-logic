import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Online Store | ₦120,000 Promo Application",
  description:
    "Quick 1-minute application for the ₦120,000 Business Logic online store package. Tell us what you sell and connect with us on WhatsApp.",
  alternates: {
    canonical: "/promo/apply",
  },
  openGraph: {
    title: "Apply for the ₦120,000 Online Store Package | Business Logic",
    description:
      "Quick 1-minute application for the ₦120,000 online store package. Tell us what you sell and connect directly on WhatsApp.",
    url: "https://mybl.online/promo/apply",
    siteName: "Business Logic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/promo/test_preview.jpg",
        secureUrl: "https://mybl.online/promo/test_preview.jpg",
        width: 1024,
        height: 576,
        type: "image/jpeg",
        alt: "Business Logic Online Store Preview Mockup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply for the ₦120,000 Online Store Package | Business Logic",
    description:
      "Quick 1-minute application for the ₦120,000 online store package with Business Logic.",
    images: [
      {
        url: "/promo/test_preview.jpg",
        width: 1024,
        height: 576,
        alt: "Business Logic Online Store Preview Mockup",
      },
    ],
  },
};

export default function PromoApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

