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
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-forest-900 isolate">
              {/* Stage photo, full colour with light contrast lift */}
              <ImageWithFallback
                src={ROSHAN}
                alt="Roshan Ojha speaking at an event"
                className="h-full w-full object-cover [object-position:42%_30%] [filter:contrast(1.05)_saturate(0.92)] transition-transform [transition-duration:1400ms] ease-out group-hover:scale-[1.04]"
              />
              {/* Subtle warm wash to bridge cool stage light → brand palette */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-forest-900/15 via-transparent to-accent/15 mix-blend-multiply"
              />
              {/* Top vignette for cleaner edge */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-forest-900/55 to-transparent"
              />
              {/* Bottom legibility gradient */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-forest-900/85 via-forest-900/35 to-transparent"
              />
              {/* Film grain */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-grain opacity-15 mix-blend-overlay"
              />
              {/* Glass pill — top-left */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-sand-100/30 bg-forest-900/45 px-3 py-1.5 text-[10px] uppercase tracking-eyebrow text-sand-50 backdrop-blur">
                On stage · Kathmandu
              </div>
              {/* Name + role block — bottom-left */}
              <div className="absolute bottom-6 left-6 right-6 text-sand-50">
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-sand-200/85">
                  Mechanical Engineer · Founder, 2023
                </p>
                <p className="mt-1.5 font-display text-2xl md:text-3xl font-medium leading-tight">
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
