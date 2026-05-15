import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  size?: "default" | "lg" | "xl";
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
  as = "h2",
  size = "default",
}: Props) {
  const Tag = as;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Tag
        className={cn(
          "display mt-5 text-balance font-medium leading-[1.05] tracking-tightish text-foreground",
          size === "default" && "text-4xl md:text-5xl",
          size === "lg" && "text-5xl md:text-6xl",
          size === "xl" && "text-5xl md:text-7xl lg:text-[5.5rem]"
        )}
      >
        {title}
      </Tag>
      {lede ? (
        <p className="mt-6 max-w-2xl text-pretty text-lg md:text-xl leading-relaxed text-muted-foreground">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
