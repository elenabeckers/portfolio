import LinkButton from "@/components/common/LinkButton";
import Tag from "@/components/common/Tag";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-svh items-center justify-center px-16">
      <div className="flex flex-col items-end justify-center gap-2 lg:flex-row lg:pb-4">
        <div className="max-w-xl">
          <h2 className="text-lg font-bold text-zinc-800">👋 Hello, I&apos;m Elena Beckers!</h2>
          <h1 className="mt-2 font-geist-mono text-4xl font-extrabold tracking-tight lg:text-5xl">
            Frontend&nbsp;Engineer
          </h1>

          <div className="mt-2 flex flex-wrap justify-start gap-1 lg:gap-1">
            <Tag color="gray">4+ years experience</Tag>
            <Tag color="gray">React • Next.js • TypeScript</Tag>
          </div>

          <p className="mt-4 leading-relaxed lg:max-w-lg">
            Building <span className="font-bold">modern frontend</span> interfaces with a focus on{" "}
            <span className="font-bold">usability, maintainability</span>, and{" "}
            <span className="font-bold">clear, predictable</span> code.
          </p>

          <div className="mt-8 flex flex-col gap-2 lg:mt-6 lg:flex-row">
            <LinkButton href="#cv" target="_blank" rel="noopener noreferrer">
              View CV
            </LinkButton>
            <LinkButton href="#contact" variant="secondary">
              Contact Me
            </LinkButton>
          </div>

          <p className="mt-3 text-center text-xs lg:mt-2 lg:text-left">
            Open to remote frontend roles and full-time opportunities.
          </p>
        </div>
        <div className="mb-4 hidden lg:block">
          <Image src="/Hero.svg" alt="Hero Image" width={350} height={350} priority />
        </div>
      </div>
    </section>
  );
}
