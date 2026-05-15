import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { impactStats, stories } from "@/data/impact";

export function ImpactStats() {
  return (
    <>
      <section className="section bg-sand-50">
        <Container>
          <Reveal>
            <p className="eyebrow">Impact, measured</p>
            <h2 className="display mt-5 max-w-3xl text-balance text-4xl md:text-5xl font-medium leading-[1.05]">
              People come <span className="italic font-light">before</span> products.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-12">
            {impactStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <p className="display text-5xl md:text-6xl lg:text-7xl font-light leading-none">
                  {s.value}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-eyebrow text-muted-foreground">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Reveal>
            <p className="eyebrow">Stories from the field</p>
            <h2 className="display mt-5 max-w-3xl text-balance text-4xl md:text-5xl font-medium leading-[1.05]">
              Communities make this work{" "}
              <span className="italic font-light">possible.</span>
            </h2>
          </Reveal>

          <div className="mt-16 space-y-20 md:space-y-28">
            {stories.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <article
                  className={
                    "grid items-center gap-10 md:grid-cols-12 md:gap-14 " +
                    (i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : "")
                  }
                >
                  <div className="md:col-span-7">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                      <ImageWithFallback
                        src={s.image}
                        alt={s.alt}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <p className="font-mono text-[10px] uppercase tracking-eyebrow text-muted-foreground">
                      {s.location}
                    </p>
                    <h3 className="mt-3 font-display text-3xl md:text-4xl font-medium leading-[1.1]">
                      {s.title}
                    </h3>
                    <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
