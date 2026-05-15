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
 * is now the actual heading: huge Fraunces display in title case. The italic
 * tagline that used to be the headline is now the smaller subhead beneath it.
 *
 * Why: in the old version the eyebrow was a 14px label and the headline was
 * a 96px italic, so the section identity ("Our Story", "What We Do") was the
 * less-visible thing on the page. Flipped now.
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
              "text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem]",
            size === "lg" &&
              "text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem]",
            size === "xl" &&
              "text-7xl md:text-[6.5rem] lg:text-[8rem] xl:text-[9.5rem]"
          )}
        >
          {eyebrow}
        </Tag>
      ) : null}
      {title ? (
        <p className="mt-5 md:mt-6 text-pretty font-display italic text-2xl md:text-3xl lg:text-4xl font-light leading-[1.15] text-muted-foreground">
          {title}
        </p>
      ) : null}
      {lede ? (
        <p className="mt-7 max-w-2xl text-pretty text-base md:text-lg leading-relaxed text-foreground/75">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
