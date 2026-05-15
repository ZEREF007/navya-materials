import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  /** Pause when not in viewport to save bandwidth. */
  pauseOffscreen?: boolean;
};

export function VideoLoop({ src, poster, className, pauseOffscreen = true }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!pauseOffscreen || !ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pauseOffscreen]);

  if (errored && poster) {
    return (
      <img
        src={poster}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className={cn("h-full w-full object-cover", className)}
      />
    );
  }

  return (
    <>
      {!loaded && poster ? (
        <img
          src={poster}
          alt=""
          aria-hidden
          loading="eager"
          decoding="async"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            className
          )}
        />
      ) : null}
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlay={() => setLoaded(true)}
        onError={() => setErrored(true)}
        aria-hidden
        className={cn(
          "h-full w-full object-cover transition-opacity duration-700",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
    </>
  );
}
