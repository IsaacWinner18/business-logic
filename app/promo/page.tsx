import type { Metadata } from "next";
import { PromoView } from "@/components/promo/promo-view";

export const metadata: Metadata = {
  title: "Get a Professional Online Store for Your Business | ₦120,000 Promo",
  description:
    "Get your business online with a complete product catalogue, shopping cart and automated customer ordering for just ₦120,000 with Business Logic.",
  alternates: {
    canonical: "/promo",
  },
  openGraph: {
    title: "Get a Professional Online Store for Your Business | Business Logic",
    description:
      "Complete product catalogue, shopping cart and automated customer ordering experience for just ₦120,000. Launch in 5–7 days.",
    url: "https://mybl.online/promo",
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
    title: "Get a Professional Online Store for Your Business | ₦120,000 Promo",
    description:
      "Get your business online with a complete product catalogue, shopping cart and automated customer ordering for just ₦120,000.",
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

export default function PromoPage() {
  return <PromoView />;
}
