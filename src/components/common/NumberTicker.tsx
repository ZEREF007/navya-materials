import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type Props = {
  value: string;
  /** ms to animate from 0 → numeric part. Default 1400. */
  duration?: number;
  className?: string;
};

/**
 * Animated count-up that respects mixed values like "100+", "3+", "2023", "0".
 *
 * Parses the leading integer, animates from 0 to it on first viewport entry,
 * then re-attaches any trailing suffix ("+", "k", etc). For purely textual
 * values (no leading digit) it renders the string as-is.
 */
export function NumberTicker({ value, duration = 1400, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState<string>(target == null ? value : "0" + suffix);

  useEffect(() => {
    if (target == null || !inView) return;
    const controls = animate(0, target, {
      duration: duration / 1000,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(Math.round(latest).toString() + suffix);
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
