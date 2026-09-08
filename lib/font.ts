import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
    subsets: ['latin'],
    display: "swap",
    variable: "--font-inter"
});

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: "swap",
    variable: "--font-poppins"
});

export const nohemi = localFont({
  src: "../public/fonts/Nohemi-Bold.ttf",
  variable: "--font-nohemi",
  display: "swap",
});

