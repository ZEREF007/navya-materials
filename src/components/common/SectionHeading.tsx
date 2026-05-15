import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  /** Big section title, e.g. "Our Story" / "What We Do" / "Natural Fibers". */
  eyebrow?: string;
  /** Smaller italic tagline / subhead under the title. */
  title?: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  /** Visual scale of the big title. */
  size?: "default" | "lg" | "xl";
};

/**
 * Editorial section heading. The label that used to live in the small eyebrow
 * is now the actual heading: Fraunces display in title case. The italic
 * tagline that used to be the headline is now the smaller subhead beneath it.
 */
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
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <Tag
          className={cn(
            "display font-medium uppercase tracking-tighter2 leading-[0.95] text-foreground",
            size === "default" &&
              "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
            size === "lg" &&
              "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
            size === "xl" &&
              "text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          )}
        >
          {eyebrow}
        </Tag>
      ) : null}
      {title ? (
        <p className="mt-4 md:mt-5 text-pretty font-display italic text-lg md:text-xl lg:text-2xl font-light leading-[1.2] text-muted-foreground">
          {title}
        </p>
      ) : null}
      {lede ? (
        <p className="mt-6 max-w-2xl text-pretty text-base md:text-lg leading-relaxed text-foreground/75">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
