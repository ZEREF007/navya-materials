import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR =
  "a, button, [role=button], input, textarea, label, summary, .cursor-pointer";

/**
 * Simple branded cursor: small sage circle with a cream outline.
 *
 * Always visible on light, dark, and photographic backgrounds. No wobble,
 * no trailing dot, no direction-aware rotation. Keeps focus on the page.
 * Hover scales it up; click squeezes it down. That's it.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 540, damping: 38, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 540, damping: 38, mass: 0.3 });

  const lastTarget = useRef<Element | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduce) return;
    setEnabled(true);
    document.body.classList.add("custom-cursor-on");

    function onMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element | null;
      if (target === lastTarget.current) return;
      lastTarget.current = target;
      setHovering(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    }
    function onLeave() {
      x.set(-200);
      y.set(-200);
    }
    function onDown() {
      setClicking(true);
    }
    function onUp() {
      setClicking(false);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.body.classList.remove("custom-cursor-on");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-[0_0_0_2px_rgba(246,241,231,0.95),0_2px_6px_rgba(0,0,0,0.25)] will-change-transform"
      style={{ x: sx, y: sy }}
      animate={{ scale: clicking ? 0.7 : hovering ? 1.6 : 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    />
  );
}
