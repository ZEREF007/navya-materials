import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Quote } from "lucide-react";

export function FounderCard() {
  return (
    <section className="section">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-12 lg:gap-16">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-forest-100">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                alt="Roshan Ojha, founder of Navya Engineering Solution"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-sand-50">
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-sand-200/80">
                  Founder · Mechanical Engineer
                </p>
                <p className="mt-1 font-display text-2xl font-medium">Roshan Ojha</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <Quote className="h-10 w-10 text-primary/30" />
            <p className="mt-6 font-display text-2xl md:text-3xl lg:text-4xl font-light italic leading-[1.2] text-foreground">
              &ldquo;The materials of the next century already exist — in the fields, the
              forests, and the hands of the people who&apos;ve always worked with them. Our
              job is to engineer the bridge from that knowledge to the world that needs it.&rdquo;
            </p>
            <p className="mt-8 text-sm uppercase tracking-eyebrow text-muted-foreground">
              — Roshan Ojha, Founder
            </p>
            <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
              Roshan founded Navya Engineering Solution in 2023 after years of fieldwork
              across Nepal&apos;s agricultural belts. His background combines mechanical
              engineering with a deep belief that meaningful technology must be locally
              adaptable.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
