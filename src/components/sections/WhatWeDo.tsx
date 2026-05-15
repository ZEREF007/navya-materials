import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { services } from "@/data/whatWeDo";

export function WhatWeDo() {
  return (
    <section className="section bg-background">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Five disciplines, <br className="hidden md:block" />
                <span className="italic font-light text-muted-foreground">
                  one shared mission.
                </span>
              </>
            }
            lede="Plant, processed fiber, finished form. We work across the chain so local materials can carry both story and performance."
            size="lg"
          />
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((s, i) => (
            <StaggerItem
              key={s.title}
              className={
                "group relative overflow-hidden rounded-3xl bg-card border border-foreground/5 transition-all duration-500 hover:border-foreground/10 hover:shadow-xl hover:-translate-y-1 " +
                (i === 0 ? "lg:row-span-2 lg:col-span-1" : "")
              }
            >
              <div className={"relative " + (i === 0 ? "aspect-[3/4] lg:aspect-auto lg:h-full" : "aspect-[4/3]")}>
                <ImageWithFallback
                  src={s.image}
                  alt={s.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform [transition-duration:1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 text-sand-50 z-10">
                  <span className="font-mono text-xs tracking-wider text-sand-200/80">
                    {s.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-medium leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm text-sand-100/85 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
