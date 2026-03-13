import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="flex min-h-16 items-center justify-center">
      <span className="text-sm text-zinc-500">{t("title")}</span>
    </footer>
  );
}
