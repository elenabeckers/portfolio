import LinkButton from "../common/LinkButton";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <span className="md:text-md font-geist-mono text-sm tracking-wide">
        {"{"}&nbsp;Welcome&nbsp;to&nbsp;my&nbsp;portfolio&nbsp;{"}"}
      </span>
      <div className="hidden md:block">
        <LinkButton href="#contact" className="mr-2">
          Contact Me!
        </LinkButton>
        <LinkButton href="#cv" variant="secondary" target="_blank" rel="noopener noreferrer">
          Download CV ↓
        </LinkButton>
      </div>

      <button className="p-2 text-foreground md:hidden" aria-label="Toggle Menu">
        ☰
      </button>
    </header>
  );
}
