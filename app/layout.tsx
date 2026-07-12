import type { Metadata } from "next";
import localFont from "next/font/local";
import { Caveat, Unbounded } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { NoiseOverlay } from "@/components/ui/noise-overlay";

const nohemi = localFont({
  src: "../public/fonts/Nohemi-Bold.ttf",
  variable: "--font-nohemi",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mybl.online'),
  title: {
    default: "Business Logic | Web Development Agency",
    template: "%s | Business Logic",
  },
  description: "Business Logic is a premium web development agency building high-performance websites and web applications for ambitious brands.",
  keywords: ["Web Development", "Web Agency", "React", "Next.js", "Business Logic", "Software Development"],
  authors: [{ name: "Business Logic" }],
  creator: "Business Logic",
  publisher: "Business Logic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mybl.online",
    siteName: "Business Logic",
    title: "Business Logic | Web Development Agency",
    description: "Business Logic is a premium web development agency building high-performance websites and web applications for ambitious brands.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Logic | Web Development Agency",
    description: "Business Logic is a premium web development agency building high-performance websites and web applications for ambitious brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${nohemi.variable} ${caveat.variable} ${unbounded.variable} h-full antialiased`}>
      <body className="min-h-full">
        <SmoothScrollProvider>
          <NoiseOverlay />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
