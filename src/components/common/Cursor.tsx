import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR =
  "a, button, [role=button], input, textarea, label, summary, .cursor-pointer";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const angle = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 520, damping: 38, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 520, damping: 38, mass: 0.35 });
  const sAngle = useSpring(angle, { stiffness: 220, damping: 26 });

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
        angle.set((Math.atan2(dy, dx) * 180) / Math.PI);
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
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] -translate-x-[18%] -translate-y-1/2 will-change-transform"
      style={{ x: sx, y: sy, rotate: sAngle }}
      animate={{ scale: clicking ? 0.85 : hovering ? 1.25 : 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <svg
        width="72"
        height="20"
        viewBox="-2 -2 76 24"
        className="block overflow-visible drop-shadow-[0_1px_3px_rgba(255,255,255,0.45)]"
      >
        {/* trailing thread (dashed) */}
        <line
          x1="0"
          y1="10"
          x2="38"
          y2="10"
          stroke="#344E41"
          strokeOpacity="0.45"
          strokeWidth="1.4"
          strokeDasharray="3 4"
          strokeLinecap="round"
        />
        {/* sand outline around needle for contrast on dark backgrounds */}
        <g stroke="#F6F1E7" strokeWidth="2.6" strokeLinecap="round" fill="none">
          <circle cx="40" cy="10" r="3.4" />
          <line x1="43.4" y1="10" x2="62" y2="10" />
          <path d="M62 6.5 L70 10 L62 13.5 Z" />
        </g>
        {/* needle body */}
        <g>
          <circle
            cx="40"
            cy="10"
            r="3.4"
            fill="none"
            stroke="#344E41"
            strokeWidth="1.6"
          />
          <line
            x1="43.4"
            y1="10"
            x2="62"
            y2="10"
            stroke="#344E41"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M62 6.5 L70 10 L62 13.5 Z" fill="#344E41" />
          <circle cx="40" cy="10" r="1.4" fill="#588157" />
        </g>
      </svg>
    </motion.div>
  );
}
