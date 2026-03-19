"use client";

import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeLabelMap: Record<(typeof routing.locales)[number], string> = {
  en: "EN",
  ru: "RU",
};

export default function LocaleSwitcher() {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const activeLocale = useLocale();

  return (
    <nav aria-label={t("languageSwitcher")}>
      <ul className="inline-flex items-center rounded-full border border-zinc-200 bg-white p-0.5">
        {routing.locales.map((locale) => {
          const isActive = locale === activeLocale;

          return (
            <li key={locale}>
              {isActive ? (
                <span
                  aria-current="page"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-800 px-2 py-2 text-xs font-medium tracking-wide text-zinc-50 shadow-sm"
                >
                  {localeLabelMap[locale]}
                </span>
              ) : (
                <Link
                  href={pathname}
                  locale={locale}
                  aria-label={t("switchTo", {
                    language: t(`locales.${locale}`),
                  })}
                  className={clsx(
                    "inline-flex items-center justify-center rounded-full px-2 py-2 text-xs font-medium tracking-wide transition-colors",
                    "text-zinc-500 hover:text-zinc-900",
                    "focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none"
                  )}
                >
                  {localeLabelMap[locale]}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
