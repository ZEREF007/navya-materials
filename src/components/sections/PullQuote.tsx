import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  quote: string;
  attribution?: string;
  variant?: "default" | "dark";
  className?: string;
};

/**
 * Editorial pull quote. Oversized Fraunces serif with a stitched left rule.
 * Sits between content blocks as a breath of voice.
 */
export function PullQuote({ quote, attribution, variant = "default", className }: Props) {
  const dark = variant === "dark";
  return (
    <section
      className={cn(
        "relative",
        dark ? "bg-forest-900 text-sand-50" : "bg-sand-50 text-foreground",
        className
      )}
    >
      <Container className="py-24 md:py-32">
        <Reveal>
          <div className="grid items-start gap-8 md:grid-cols-12 md:gap-12">
            <div
              aria-hidden
              className={cn(
                "md:col-span-1 hidden md:flex md:flex-col md:items-center md:gap-2 pt-4",
                dark ? "text-sand-200/60" : "text-primary/70"
              )}
            >
              <Mark />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] [writing-mode:vertical-rl] rotate-180">
                Note
              </span>
              <Mark />
            </div>
            <blockquote className="md:col-span-11">
              <p
                className={cn(
                  "display text-balance text-3xl md:text-5xl lg:text-6xl font-light italic leading-[1.08] tracking-tightish",
                  dark ? "text-sand-50" : "text-foreground"
                )}
              >
                &ldquo;{quote}&rdquo;
              </p>
              {attribution ? (
                <footer
                  className={cn(
                    "mt-8 text-sm uppercase tracking-[0.18em] font-semibold",
                    dark ? "text-sand-200/85" : "text-primary"
                  )}
                >
                  {attribution}
                </footer>
              ) : null}
            </blockquote>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Mark() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor" aria-hidden>
      <path d="M8 0 C4 2, 2 6, 4 11 C5 9, 6 8, 9 7 C6 9, 5 11, 6 13 C9 13, 12 10, 12 6 C12 3, 10 0, 8 0 Z" />
    </svg>
  );
}
