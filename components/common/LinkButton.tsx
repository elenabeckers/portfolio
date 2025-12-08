import { AnchorHTMLAttributes } from "react";
import clsx from "clsx";

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
    "inline-block cursor-pointer rounded-lg border px-5 font-geist-mono text-sm font-bold tracking-wider transition-all duration-300",

    variant === "primary" &&
      "bg-foreground py-3.5 text-background hover:bg-background hover:text-foreground",

    variant === "secondary" &&
      "border-foreground bg-transparent py-3 text-foreground hover:bg-foreground hover:text-background",

    externalClassName
  );

  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
}
