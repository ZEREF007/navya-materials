import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import { useRef } from "react";
import { Container } from "@/components/common/Container";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <section
      ref={ref}
      className="hero-section relative isolate min-h-[92vh] w-full overflow-hidden bg-forest-900 text-sand-50"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1653481006616-aab561a77a3b?auto=format&fit=crop&w=2400&q=80"
          alt="Banana plantation — source of natural pseudo-stem fiber"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-tr from-forest-900/85 via-forest-900/55 to-transparent"
      />
      <div className="absolute inset-0 bg-grain opacity-[0.12] pointer-events-none" />

      <Container className="relative z-10 flex min-h-[92vh] flex-col justify-end pb-20 pt-32 md:pb-24 lg:pb-28">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="max-w-4xl"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="inline-flex items-center gap-2 rounded-full border border-sand-100/30 bg-sand-100/10 px-3 py-1.5 text-[11px] uppercase tracking-eyebrow backdrop-blur"
          >
            <Leaf className="h-3 w-3" /> Rooted in Nepal · Engineered for the planet
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="display mt-6 text-balance text-5xl font-light leading-[1.02] tracking-tighter2 md:text-7xl lg:text-[5.75rem] xl:text-[6.5rem]"
          >
            Engineering the future of{" "}
            <span className="italic font-medium text-sand-200">sustainable materials.</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
            }}
            className="mt-7 max-w-2xl text-pretty text-base md:text-lg lg:text-xl text-sand-100/85 leading-relaxed"
          >
            Research. Innovate. Sustain. Empowering rural communities and crafting
            biodegradable solutions from the natural fibers of Nepal.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="group bg-sand-50 text-forest-900 hover:bg-sand-100 shadow-lg"
            >
              <Link to="/natural-fibers">
                Explore our work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-sand-100/60 text-sand-50 hover:bg-sand-100 hover:text-forest-900">
              <Link to="/collaborate">Collaborate with us</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 1.2, duration: 0.8 }}
          className="mt-16 hidden items-center gap-6 text-[11px] uppercase tracking-eyebrow text-sand-200/75 md:flex"
        >
          <span className="font-mono">01 / Hero</span>
          <span className="h-px flex-1 max-w-32 bg-sand-100/30" />
          <motion.span
            animate={reduce ? {} : { y: [0, 4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll to explore ↓
          </motion.span>
        </motion.div>
      </Container>
    </section>
  );
}
