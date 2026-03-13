import LinkButton from "@/components/common/LinkButton";
import Tag from "@/components/common/Tag";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="flex min-h-svh items-center justify-center px-16">
      <div className="flex flex-col items-end justify-center gap-2 lg:flex-row lg:pb-4">
        <div className="max-w-xl">
          <h2 className="text-lg font-bold text-zinc-800">{t("greeting")}</h2>

          <h1 className="mt-2 font-geist-mono text-4xl font-extrabold tracking-tight lg:text-5xl">
            {t("title")}
          </h1>

          <div className="mt-2 flex flex-wrap justify-start gap-1 lg:gap-1">
            <Tag color="gray">{t("experience")}</Tag>
            <Tag color="gray">{t("stack")}</Tag>
          </div>

          <p className="mt-4 leading-relaxed lg:max-w-lg">
            {t.rich("description", {
              strong: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </p>

          <div className="mt-8 flex flex-col gap-2 lg:mt-6 lg:flex-row">
            <LinkButton href="#cv" target="_blank" rel="noopener noreferrer">
              {t("viewCV")}
            </LinkButton>

            <LinkButton href="#contact" variant="secondary">
              {t("contact")}
            </LinkButton>
          </div>

          <p className="mt-3 text-center text-xs lg:mt-2 lg:text-left">{t("availability")}</p>
        </div>

        <div className="mb-4 hidden lg:block">
          <Image src="/Hero.svg" alt="Hero Image" width={350} height={350} priority />
        </div>
      </div>
    </section>
  );
}
