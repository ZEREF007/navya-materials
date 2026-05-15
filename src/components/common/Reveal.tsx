import { motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { cardRise } from "@/lib/motion";

/**
 * In-view reveal that releases its GPU layer once the animation completes.
 *
 * Framer Motion leaves `transform: translate3d(...)` on the wrapper after an
 * animation. On retina, that promotes the element to a GPU layer permanently,
 * which makes child text look subtly blurry during page scroll. After the
 * animation runs we re-render the children inside a plain <div> so no inline
 * transform stays on the DOM.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);
  if (reduce || done) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      onAnimationComplete={() => setDone(true)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);
  if (reduce || done) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      onAnimationComplete={() => setDone(true)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const [done, setDone] = useState(false);
  if (done) return <div className={className}>{children}</div>;
  return (
    <motion.div
      variants={cardRise}
      onAnimationComplete={() => setDone(true)}
      className={className}
    >
      {children}
    </motion.div>
  );
}
