import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elena Beckers – Frontend Developer",
  description: "Portfolio of frontend developer Elena Beckers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} min-h-screen bg-background text-foreground antialiased font-montserrat`}
      >
        <main className="mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
