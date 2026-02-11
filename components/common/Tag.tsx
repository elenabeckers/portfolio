import clsx from "clsx";

interface TagProps {
  color?: "gray";
  children?: React.ReactNode;
  className?: string;
}

const colorMap = {
  gray: "bg-zinc-200 text-zinc-800",
};

export default function Tag({ color = "gray", children, className }: TagProps) {
  const variantStyles = colorMap[color];

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-4 py-2 lg:px-3 lg:py-1.5",
        "font-sans text-xs leading-tight lg:tracking-wide",
        variantStyles,
        className
      )}
    >
      {children}
    </span>
  );
}
