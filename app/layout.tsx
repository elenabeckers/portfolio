import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Elena Beckers | React & Next.js Frontend Engineer Portfolio",
  description:
    "Fast, scalable, and resilient web application development by Elena Beckers. Frontend Engineer specializing in React, Next.js, and superior user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} min-h-screen bg-zinc-100 font-sans text-zinc-700 antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
