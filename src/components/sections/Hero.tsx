import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import { Container } from "@/components/common/Container";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="hero-section relative isolate min-h-[92vh] w-full overflow-hidden bg-forest-900 text-sand-50">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1653481006616-aab561a77a3b?auto=format&fit=crop&w=2880&q=90"
          alt="Banana plantation, the source of natural pseudo-stem fiber"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-forest-900/85 via-forest-900/55 to-transparent" />
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
            We work with natural fibers from Nepal: banana, hemp, and Himalayan nettle.
            The goal is biodegradable materials for textiles, construction, and beyond,
            built with the rural communities that grow them.
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
      </Container>
      {reduce ? null : null}
    </section>
  );
}
