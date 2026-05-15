import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  videoId: string;
  poster?: string;
  className?: string;
  /** Start playing only when in view, pause otherwise. Saves bandwidth. */
  pauseOffscreen?: boolean;
};

/**
 * Looping, muted, controls-free background YouTube embed with object-fit:cover behavior.
 * Uses youtube-nocookie domain (privacy enhanced).
 *
 * The iframe is intentionally over-sized + centered so it covers the parent box
 * regardless of aspect ratio (YouTube enforces 16:9 internally).
 */
export function YouTubeEmbed({ videoId, poster, className, pauseOffscreen = true }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!pauseOffscreen || !wrapRef.current) return;
    const el = wrapRef.current;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pauseOffscreen]);

  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${
    inView ? 1 : 0
  }&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&iv_load_policy=3&fs=0&showinfo=0&cc_load_policy=0`;

  return (
    <div
      ref={wrapRef}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none isolate", className)}
    >
      {poster ? (
        <img
          src={poster}
          alt=""
          aria-hidden
          loading="eager"
          decoding="async"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            loaded ? "opacity-0" : "opacity-100"
          )}
        />
      ) : null}
      <iframe
        title="Navya Materials ambient background"
        src={src}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
        aria-hidden
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700",
          /* Cover-crop: width = 177.78vh (16:9 of height), height = 56.25vw (9:16 of width). Whichever is larger fills. */
          "min-w-full min-h-full w-[177.78%] h-[177.78%] scale-[1.35]",
          loaded ? "opacity-100" : "opacity-0"
        )}
        style={{ border: 0 }}
      />
    </div>
  );
}
