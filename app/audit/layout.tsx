import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Audit & Video Teardown",
  description:
    "Request a free 5-minute video teardown of your website. We'll identify UX bottlenecks, conversion leaks, and messaging gaps to help you turn visitors into paying clients.",
  alternates: {
    canonical: "/audit",
  },
  openGraph: {
    title: "Free Website Audit & Video Teardown | Business Logic",
    description:
      "Get a personalized 5-minute video review of your website. Actionable conversion fixes delivered to your inbox in 48 hours.",
    url: "https://mybl.online/audit",
  },
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
