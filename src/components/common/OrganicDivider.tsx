import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "light" | "dark";
};

/**
 * Organic SVG divider: a single stylised leaf glyph, centered. No
 * horizontal hairlines on either side any more (they read as '--' clutter).
 */
export function OrganicDivider({ className, variant = "light" }: Props) {
  const fill = variant === "dark" ? "#D8C9A3" : "#588157";
  return (
    <div
      aria-hidden
      className={cn(
        "mx-auto flex w-full max-w-4xl items-center justify-center px-6 py-12 md:py-16",
        className
      )}
    >
      <svg viewBox="0 0 36 36" className="h-8 w-8 md:h-10 md:w-10" fill="none">
        <path
          d="M18 4 C9 8, 5 16, 8 28 C12 24, 17 21, 24 18 C17 23, 14 27, 15 30 C24 30, 30 22, 30 13 C30 8, 25 4, 18 4 Z"
          fill={fill}
          fillOpacity="0.85"
        />
        <path
          d="M18 4 C16 13, 18 22, 22 28"
          stroke="#1B2A20"
          strokeOpacity="0.45"
          strokeWidth="0.9"
          fill="none"
        />
      </svg>
    </div>
  );
}
