import LocaleSwitcher from "@/components/layout/LocaleSwitcher";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-20 border-b border-zinc-200 bg-zinc-50/90 backdrop-blur-sm">
      <div className="flex h-18 items-center justify-center px-4 lg:px-12">
        <LocaleSwitcher />
      </div>
    </header>
  );
}
