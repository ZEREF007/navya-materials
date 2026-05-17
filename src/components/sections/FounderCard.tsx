import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { Quote } from "lucide-react";

const ROSHAN = `${import.meta.env.BASE_URL}images/roshan.jpg`;

export function FounderCard() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-12 lg:gap-16">
          <Reveal className="md:col-span-5">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-forest-100">
              <ImageWithFallback
                src={ROSHAN}
                alt="Roshan Ojha, founder of Navya Engineering Solution"
                className="h-full w-full object-cover [object-position:62%_28%] transition-transform [transition-duration:1200ms] ease-out group-hover:scale-[1.04]"
              />
              {/* warm tint to lift the cool wall blue toward brand palette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-forest-900/15 via-transparent to-accent/15 mix-blend-multiply" />
              {/* bottom legibility gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-forest-900/70 via-forest-900/30 to-transparent" />
              {/* corner badge */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-sand-100/40 bg-forest-900/55 px-3 py-1.5 text-[10px] uppercase tracking-eyebrow text-sand-50 backdrop-blur">
                Kathmandu · Founder
              </div>
              {/* name block */}
              <div className="absolute bottom-6 left-6 right-6 text-sand-50">
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-sand-200/85">
                  Mechanical Engineer · Founder
                </p>
                <p className="mt-1 font-display text-2xl md:text-3xl font-medium leading-tight">
                  Roshan Ojha
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <Quote className="h-10 w-10 text-primary/30" />
            <p className="mt-6 font-display text-2xl md:text-3xl lg:text-4xl font-light italic leading-[1.2] text-foreground">
              &ldquo;The materials of the next century already exist. They are in the fields,
              the forests, and the hands of the people who have always worked with them. Our
              job is to build the bridge from that knowledge to the world that needs it.&rdquo;
            </p>
            <p className="mt-8 text-sm uppercase tracking-eyebrow text-muted-foreground">
              Roshan Ojha, Founder
            </p>
            <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
              Roshan founded Navya Engineering Solution in 2023, after years of fieldwork
              across Nepal&apos;s agricultural belts. His background combines mechanical
              engineering with a strong belief that good technology has to be locally
              adaptable.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
