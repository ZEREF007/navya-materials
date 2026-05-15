import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";

export function AboutStory({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "py-24" : "section"}>
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5 lg:col-span-4">
            <span className="eyebrow">Our story</span>
            <h2 className="display mt-5 text-balance text-4xl md:text-5xl font-medium leading-[1.05]">
              Waste seen as <span className="italic font-light">possibility.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 lg:col-span-7 lg:col-start-6 space-y-6 text-pretty text-base md:text-lg leading-relaxed text-foreground/80">
            <p>
              We are <strong className="font-medium text-foreground">Navya Engineering Solution</strong> —
              founded in 2023 by mechanical engineer <em>Roshan Ojha</em> and team, driven by a
              shared vision: turn Nepal&apos;s untapped natural resources into meaningful,
              sustainable material systems.
            </p>
            <p>
              The journey began with a simple observation: large amounts of agricultural
              waste — especially banana pseudo-stems — were being discarded after harvest,
              despite strong potential for value creation. Through experimentation, we found
              the waste could be transformed into a natural fiber suitable for textile
              applications. That became our foundation.
            </p>
            <p>
              From there we&apos;ve grown into a platform for fiber research, processing
              technology, and community-rooted manufacturing — collaborating with farmers,
              women&apos;s groups, academic partners, and industry across Nepal to build a
              decentralized, ecologically grounded materials economy.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
