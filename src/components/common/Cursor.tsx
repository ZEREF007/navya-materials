import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR =
  "a, button, [role=button], input, textarea, label, summary, .cursor-pointer";

/**
 * Branded leaf cursor.
 *
 * - Sage-green leaf (matches the Navya leaf-mark logo) with a deep-forest
 *   midrib and a sand outline halo — visible on light cream pages, dark hero
 *   sections, and photography alike.
 * - Rotates to follow cursor direction so it always feels rooted to motion.
 * - Soft drifting wobble at rest, scale-up on hover, scale-down on click.
 * - Companion small dot follows on a slower spring for a tactile trail.
 * - Disabled on coarse pointers + reduced-motion.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const angle = useMotionValue(20);

  // Tight spring for the leaf — follows finger.
  const sx = useSpring(x, { stiffness: 540, damping: 36, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 540, damping: 36, mass: 0.3 });
  const sAngle = useSpring(angle, { stiffness: 180, damping: 22 });

  // Slower spring for the trailing dot — lags slightly, adds depth.
  const tx = useSpring(x, { stiffness: 180, damping: 26, mass: 0.6 });
  const ty = useSpring(y, { stiffness: 180, damping: 26, mass: 0.6 });

  const lastPos = useRef({ x: 0, y: 0 });
  const lastTarget = useRef<Element | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduce) return;
    setEnabled(true);
    document.body.classList.add("custom-cursor-on");

    function onMove(e: MouseEvent) {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      if (Math.hypot(dx, dy) > 1.2) {
        // Leaf points along travel vector; +20° baseline so it never reads as a needle.
        angle.set((Math.atan2(dy, dx) * 180) / Math.PI + 20);
      }
      lastPos.current = { x: e.clientX, y: e.clientY };
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
  }, [x, y, angle]);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest-700 shadow-[0_0_0_2px_rgba(246,241,231,0.7)]"
        style={{ x: tx, y: ty }}
        animate={{ opacity: hovering ? 0.4 : 0.85, scale: clicking ? 0.7 : 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      />
      {/* Leaf */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[80] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{ x: sx, y: sy, rotate: sAngle }}
        animate={{ scale: clicking ? 0.85 : hovering ? 1.35 : 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        <motion.svg
          width="28"
          height="28"
          viewBox="-2 -2 40 40"
          className="block overflow-visible drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
          animate={{ rotate: [0, -3, 3, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Sand halo for contrast on dark hero */}
          <path
            d="M18 2 C8 6, 3 18, 7 30 C11 24, 17 20, 26 16 C18 22, 14 28, 16 34 C28 34, 34 22, 34 14 C34 6, 28 2, 18 2 Z"
            fill="none"
            stroke="#F6F1E7"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Leaf body */}
          <path
            d="M18 2 C8 6, 3 18, 7 30 C11 24, 17 20, 26 16 C18 22, 14 28, 16 34 C28 34, 34 22, 34 14 C34 6, 28 2, 18 2 Z"
            fill="#588157"
            stroke="#344E41"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* Highlight along upper edge */}
          <path
            d="M18 2 C12 5, 8 12, 8 22"
            stroke="#A3B98C"
            strokeWidth="1.1"
            fill="none"
            strokeLinecap="round"
          />
          {/* Midrib */}
          <path
            d="M18 2 C16 12, 18 22, 24 32"
            stroke="#1B2A20"
            strokeWidth="1.1"
            strokeOpacity="0.7"
            fill="none"
            strokeLinecap="round"
          />
          {/* Vein left */}
          <path
            d="M17 8 L12 14"
            stroke="#1B2A20"
            strokeWidth="0.6"
            strokeOpacity="0.45"
            fill="none"
            strokeLinecap="round"
          />
          {/* Vein right */}
          <path
            d="M19 16 L26 18"
            stroke="#1B2A20"
            strokeWidth="0.6"
            strokeOpacity="0.45"
            fill="none"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>
    </>
  );
}
