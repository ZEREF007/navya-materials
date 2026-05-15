import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export function AboutStory({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "py-16" : "py-14 md:py-20 lg:py-24"}>
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-12 lg:gap-16 items-start">
          <Reveal className="md:col-span-5 lg:col-span-5">
            <span className="eyebrow">Our story</span>
            <h2 className="display mt-4 text-balance text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05]">
              Waste seen as <span className="italic font-light">possibility.</span>
            </h2>
            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-3xl bg-forest-100">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1653481006616-aab561a77a3b?auto=format&fit=crop&w=1600&q=90"
                alt="Banana plantation, the source of natural pseudo-stem fiber"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-sand-50">
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-sand-200/85">
                  Lowland Nepal · Banana belt
                </p>
                <p className="mt-1 font-display text-lg md:text-xl font-medium leading-tight">
                  Pseudo-stems, before the field reclaims them.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 lg:col-span-7 space-y-6 text-pretty text-base md:text-lg leading-relaxed text-foreground/80">
            <p>
              We are <strong className="font-medium text-foreground">Navya Engineering Solution</strong>.
              The company was founded in 2023 by mechanical engineer <em>Roshan Ojha</em> and team,
              with one goal: turn Nepal&apos;s untapped natural resources into useful,
              sustainable material systems.
            </p>
            <p>
              The story began with a simple observation. Large amounts of agricultural waste,
              especially banana pseudo-stems, were being thrown away after harvest, even though
              they had clear value. Through experimentation we found the waste could be turned
              into a natural fiber suitable for textiles. That became our foundation.
            </p>
            <p>
              Today we work as a platform for fiber research, processing technology, and
              community-rooted manufacturing. We collaborate with farmers, women&apos;s groups,
              academic partners, and industry across Nepal to build a decentralized, ecologically
              grounded materials economy.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
