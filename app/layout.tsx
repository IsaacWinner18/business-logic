import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { Caveat, Unbounded } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";

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
    <html lang="en" className={`${nohemi.variable} ${caveat.variable} ${unbounded.variable} antialiased`}>
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1674160167651592');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1674160167651592&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="min-h-screen">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
