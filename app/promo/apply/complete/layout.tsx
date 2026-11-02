import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Received | Business Logic",
  description:
    "Your online store application has been received. Redirecting you to WhatsApp to connect with our team.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CompleteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

