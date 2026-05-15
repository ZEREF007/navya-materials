import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  /** Visual scale. xl is reserved for hero-flanking section heads. */
  size?: "default" | "lg" | "xl";
};

/**
 * Editorial section heading. Big Fraunces display, with a thin sage rule
 * sitting above the type to mark the section break. Heading sizes are now
 * substantially larger than browser defaults — a section head should feel
 * close to a sub-hero, not like a card title.
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
        <div
          className={cn(
            "flex items-center gap-4",
            align === "center" && "justify-center"
          )}
        >
          <span aria-hidden className="h-px w-10 bg-primary/70" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      ) : null}
      <Tag
        className={cn(
          "display mt-6 md:mt-8 text-balance font-medium leading-[1.0] tracking-tighter2 text-foreground",
          size === "default" &&
            "text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem]",
          size === "lg" &&
            "text-6xl md:text-8xl lg:text-[7rem] xl:text-[8rem]",
          size === "xl" &&
            "text-7xl md:text-[6.5rem] lg:text-[8rem] xl:text-[9.5rem]"
        )}
      >
        {title}
      </Tag>
      {lede ? (
        <p className="mt-8 max-w-2xl text-pretty text-lg md:text-xl leading-relaxed text-muted-foreground">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
