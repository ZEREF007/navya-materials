import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR =
  "a, button, [role=button], input, textarea, label, summary, .cursor-pointer";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 320, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 320, damping: 30, mass: 0.4 });
  const ringX = useSpring(x, { stiffness: 140, damping: 22, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 140, damping: 22, mass: 0.6 });
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
      const inside = target?.closest(INTERACTIVE_SELECTOR);
      setHovering(Boolean(inside));
    }
    function onLeave() {
      x.set(-100);
      y.set(-100);
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", (e) => {
      if (!e.relatedTarget) onLeave();
    });
    return () => {
      document.body.classList.remove("custom-cursor-on");
      window.removeEventListener("mousemove", onMove);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground mix-blend-difference"
        style={{ x: sx, y: sy }}
        animate={{ scale: hovering ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          opacity: hovering ? 0.9 : 0.55,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
      />
    </>
  );
}
