import type { Metadata } from "next";
import type { Viewport } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "For Shubh - A Memory Gift",
  description:
    "A soft, respectful memory website - a small chapter of college life, preserved with gratitude and honesty.",
  applicationName: "For Shubh",
  authors: [{ name: "A friend from B.Tech" }],
  keywords: [
    "memory",
    "gratitude",
    "college",
    "B.Tech",
    "timeline",
    "letter",
    "romantic",
    "respectful",
  ],
  openGraph: {
    title: "For Shubh - A Memory Gift",
    description:
      "Some stories don't need labels to stay unforgettable. A gentle memory website, made with respect.",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#070a17",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bodoni.variable} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col bg-midnight text-ivory font-sans selection:bg-blush/30 selection:text-ivory">
        {children}
      </body>
    </html>
  );
}
