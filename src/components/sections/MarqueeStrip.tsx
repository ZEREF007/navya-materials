import { cn } from "@/lib/utils";

type Props = {
  items?: string[];
  className?: string;
  variant?: "default" | "dark";
};

const DEFAULT_ITEMS = [
  "Natural Fibers",
  "Banana Pseudo-stem",
  "Hemp Bast",
  "Himalayan Nettle",
  "Bio-composites",
  "Engineered Textiles",
  "Rural Workshops",
  "Rooted in Nepal",
];

/**
 * Editorial marquee. Big Fraunces italic strip of keywords drifts horizontally
 * between sections. Leaf glyphs separate items. Loop is pure CSS, no JS.
 */
export function MarqueeStrip({ items = DEFAULT_ITEMS, className, variant = "default" }: Props) {
  const dark = variant === "dark";
  const track = [...items, ...items];
  return (
    <section
      aria-hidden
      className={cn(
        "relative isolate overflow-hidden border-y",
        dark
          ? "bg-forest-900 text-sand-100 border-forest-800"
          : "bg-sand-100 text-forest-800 border-foreground/10",
        className
      )}
    >
      <div className="relative flex w-full overflow-hidden py-10 md:py-14 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-12 md:gap-16 will-change-transform">
          {track.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-12 md:gap-16 font-display text-4xl md:text-6xl lg:text-7xl font-light italic tracking-tightish whitespace-nowrap"
            >
              {item}
              <Leaf className={dark ? "text-sand-200/40" : "text-forest-600/45"} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-6 w-6 md:h-8 md:w-8 shrink-0", className)}
      fill="currentColor"
      aria-hidden
    >
      <path d="M16 4 C9 8, 5 16, 8 26 C12 22, 16 19, 22 17 C16 21, 13 25, 14 28 C22 28, 28 21, 28 13 C28 8, 23 4, 16 4 Z" />
    </svg>
  );
}
