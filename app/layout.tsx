import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AshwaCreations | SaaS & Scalable Web App Development for Startups",
  description:
    "AshwaCreations helps startups to design, build, and scale high-performance SaaS platforms. We focus on clean architecture, fast execution, and growth-ready digital products.",
  keywords: [
    "SaaS development agency",
    "web app development agency",
    "MVP development for startups",
    "SaaS product development company",
    "product engineering agency",
    "scalable web applications",
    "startup software development",
    "Next.js development agency",
    "React development company",
    "full stack development agency",
    "Mobile Application Development",
    "modern web application development",
  ],
  metadataBase: new URL("https://ashwacreations.com"),
  openGraph: {
    title: "AshwaCreations | SaaS & Scalable Web App Development for Startups",
    description:
      "AshwaCreations helps startups to design, build, and scale high-performance SaaS platforms. We focus on clean architecture, fast execution, and growth-ready digital products.",
    url: "https://ashwacreations.com",
    siteName: "AshwaCreations",
    images: [
      {
        url: "/showcard.png",
        width: 1200,
        height: 630,
        alt: "AshwaCreations Open Graph Image",
      },
    ],
    locale: " en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AshwaCreations | SaaS & Scalable Web App Development for Startups",
    description:
      "AshwaCreations helps startups to design, build, and scale high-performance SaaS platforms. We focus on clean architecture, fast execution, and growth-ready digital products.",
    images: [
      {
        url: "/showcard.png",
        width: 1200,
        height: 630,
        alt: "AshwaCreations Twitter Card Image",
      },
    ],
    creator: "@AshwaCreations",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {children}
        <Navbar />
      </body>
    </html>
  );
}
