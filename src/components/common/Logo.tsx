import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Logo({ className, mono = false }: { className?: string; mono?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="Navya Materials home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        aria-hidden
        className={cn(
          "grid h-9 w-9 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-12",
          mono ? "bg-background/90 text-primary" : "bg-primary text-primary-foreground"
        )}
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
          <path
            d="M16 4 C8 10, 7 18, 11 25 C13 22, 16 19, 20 17 C16 21, 13 26, 14 30 C22 30, 27 22, 27 14 C27 8, 22 4, 16 4 Z"
            fill="currentColor"
          />
          <path
            d="M16 4 C13 13, 14 22, 18 28"
            stroke="currentColor"
            strokeOpacity="0.45"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-display font-semibold uppercase text-[1.05rem] tracking-[0.12em]",
            mono ? "text-background" : "text-foreground"
          )}
        >
          NAVYA
        </span>
        <span
          className={cn(
            "text-[10px] uppercase tracking-eyebrow",
            mono ? "text-background/70" : "text-muted-foreground"
          )}
        >
          Materials
        </span>
      </span>
    </Link>
  );
}
