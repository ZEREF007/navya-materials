import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

/**
 * Editorial split card. One image, one body block. Surfaces a single focus
 * piece (a current pilot or material). Visual shape distinct from FibersGrid
 * and WhatWeDo so it doesn't read as another card grid.
 */
export function FeaturedHighlight() {
  return (
    <section className="bg-background">
      <Container className="py-10 md:py-14 lg:py-18">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14 lg:gap-20">
          <Reveal className="md:col-span-7">
            <div className="relative aspect-[5/4] md:aspect-[6/5] overflow-hidden rounded-3xl bg-forest-100">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=2400&q=90"
                alt="Hemp fiber being prepared for textile spinning"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-forest-900/45 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-sand-100/40 bg-forest-900/55 px-3 py-1.5 text-[10px] uppercase tracking-eyebrow text-sand-50 backdrop-blur">
                R&D · 2026
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-5">
            <h2 className="display text-3xl md:text-4xl lg:text-5xl font-medium uppercase tracking-tighter2 leading-[0.95] text-foreground">
              Hemp Fiber Textile
            </h2>
            <p className="mt-3 font-display italic text-lg md:text-xl text-muted-foreground leading-snug">
              From mid-hill bast to woven cloth.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/80">
              Hemp grows quickly with very little water and no pesticides. We
              are developing a hemp-based textile in partnership with mid-hill
              farmers and village-scale spinning groups. The aim is a durable,
              breathable cloth that traces back to a specific farm and a
              specific season.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 font-medium text-primary"
              >
                <span className="underline-grow">See the catalogue</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <span aria-hidden className="h-4 w-px bg-foreground/20" />
              <Link
                to="/natural-fibers"
                className="group inline-flex items-center gap-2 font-medium text-foreground/70"
              >
                <span className="underline-grow">About hemp</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
