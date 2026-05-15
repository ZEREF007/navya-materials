import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "light" | "dark";
};

/**
 * Organic SVG divider drawn as a stylised leaf vein. Sits between sections as
 * a quiet identity mark. Stroke colour follows variant; the asymmetric curl
 * keeps it from feeling like a generic horizontal rule.
 */
export function OrganicDivider({ className, variant = "light" }: Props) {
  const stroke = variant === "dark" ? "#D8C9A3" : "#588157";
  return (
    <div
      aria-hidden
      className={cn(
        "mx-auto flex w-full max-w-4xl items-center justify-center px-6 py-12 md:py-16",
        className
      )}
    >
      <svg viewBox="0 0 480 36" className="w-full h-9" fill="none">
        <path
          d="M2 18 H 210"
          stroke={stroke}
          strokeOpacity="0.45"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <g transform="translate(220 8)">
          <path
            d="M20 4 C12 8, 8 14, 11 22 C14 18, 17 16, 23 14 C18 17, 16 21, 17 24 C24 24, 28 18, 28 11 C28 6, 24 4, 20 4 Z"
            fill={stroke}
            fillOpacity="0.85"
          />
          <path
            d="M20 4 C18 11, 19 17, 22 23"
            stroke="#1B2A20"
            strokeOpacity="0.5"
            strokeWidth="0.8"
            fill="none"
          />
        </g>
        <path
          d="M270 18 H 478"
          stroke={stroke}
          strokeOpacity="0.45"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
