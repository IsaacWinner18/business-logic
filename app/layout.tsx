import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nohemi = localFont({
  src: "../public/fonts/Nohemi-Bold.ttf",
  variable: "--font-nohemi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Business Logic",
  description: "AI-powered product landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nohemi.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
