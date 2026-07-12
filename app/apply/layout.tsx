import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply to Work With Us",
  description: "Tell us about your business needs and let's scale your digital presence together.",
  alternates: {
    canonical: "/apply",
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
