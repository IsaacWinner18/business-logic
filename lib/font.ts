import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
    subsets: ['latin'],
    display: "swap",
    variable: "--font-inter"
});

export const nohemi = localFont({
  src: "../public/fonts/Nohemi-Bold.ttf",
  variable: "--font-nohemi",
  display: "swap",
});

