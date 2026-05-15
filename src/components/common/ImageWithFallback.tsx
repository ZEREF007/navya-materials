import { useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackClassName?: string;
};

export function ImageWithFallback({
  src,
  alt,
  className,
  fallbackClassName,
  loading = "lazy",
  decoding = "async",
  ...rest
}: Props) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (errored || !src) {
    return (
      <div
        role="img"
        aria-label={alt || ""}
        className={cn(
          "h-full w-full bg-gradient-to-br from-forest-700 via-forest-600 to-secondary",
          fallbackClassName,
          className
        )}
      />
    );
  }

  return (
    <>
      {!loaded ? (
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 h-full w-full bg-gradient-to-br from-forest-100 via-sand-200 to-sand-100 animate-pulse",
            className
          )}
        />
      ) : null}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onError={() => setErrored(true)}
        onLoad={() => setLoaded(true)}
        className={cn(
          "transition-opacity duration-700",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...rest}
      />
    </>
  );
}
