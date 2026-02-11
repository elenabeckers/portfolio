import clsx from "clsx";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  href: string;
}

export default function LinkButton({
  children,
  variant = "primary",
  className: externalClassName,
  ...rest
}: LinkButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-full border px-6 py-4",
    "font-sans text-sm font-medium tracking-wide whitespace-nowrap",
    "transition-[background-color,border-color,box-shadow] duration-200",
    "focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none",
    "hover:ring-offset-background hover:shadow-sm hover:ring-2 hover:ring-blue-400 hover:ring-offset-2",

    variant === "primary" &&
      "border-zinc-800 bg-zinc-800 text-zinc-50 hover:border-zinc-800 hover:bg-black hover:text-white",

    variant === "secondary" &&
      "border-zinc-200 bg-transparent hover:border-zinc-300 hover:bg-white",

    externalClassName
  );

  return (
    <Link className={classes} {...rest}>
      {children}
    </Link>
  );
}
