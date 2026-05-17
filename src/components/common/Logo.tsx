import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const LOGO = `${import.meta.env.BASE_URL}images/logo.jpg`;

export function Logo({ className, mono = false }: { className?: string; mono?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="Navya Materials home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        aria-hidden
        className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white shadow-[0_0_0_1px_rgba(27,42,32,0.08)] transition-transform duration-500 group-hover:rotate-6"
      >
        <img
          src={LOGO}
          alt=""
          width="40"
          height="40"
          className="h-full w-full object-cover scale-110"
          loading="eager"
          decoding="async"
        />
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
