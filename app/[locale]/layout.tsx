import "@/app/globals.css";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

import Footer from "@/components/layout/Footer";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["800"],
});

export const metadata: Metadata = {
  title: "Elena Beckers | React & Next.js Frontend Engineer Portfolio",
  description:
    "Fast, scalable, and resilient web application development by Elena Beckers. Frontend Engineer specializing in React, Next.js, and superior user experience.",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${geistMono.variable} bg-zinc-50 font-sans text-zinc-800 antialiased`}>
        <NextIntlClientProvider>
          {/* <Header /> */}
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
