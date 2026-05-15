import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { fibers } from "@/data/fibers";

export function FiberDeepDive() {
  return (
    <section className="section">
      <Container>
        <div className="space-y-24 md:space-y-32">
          {fibers.map((f, i) => (
            <Reveal key={f.slug}>
              <article
                className={
                  "grid items-center gap-10 md:grid-cols-12 md:gap-16 " +
                  (i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : "")
                }
                id={f.slug}
              >
                <div className="md:col-span-6 lg:col-span-7">
                  <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-3xl bg-forest-100">
                    <ImageWithFallback
                      src={f.image}
                      alt={f.imageAlt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${f.accent} via-forest-900/15 to-transparent`}
                    />
                    <div className="absolute bottom-6 left-6 right-6 text-sand-50 z-10">
                      <p className="font-mono text-[10px] uppercase tracking-eyebrow text-sand-200/80">
                        {String(i + 1).padStart(2, "0")} · {f.origin}
                      </p>
                      <p className="mt-2 font-display text-3xl md:text-4xl font-medium">
                        {f.name}
                      </p>
                      {f.scientific ? (
                        <p className="mt-1 text-sm italic text-sand-100/80">{f.scientific}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 lg:col-span-5">
                  <span className="eyebrow">{f.tagline}</span>
                  <h2 className="display mt-5 text-balance text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.05]">
                    {f.name}
                  </h2>
                  <p className="mt-6 text-pretty text-base md:text-lg text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>

                  <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <p className="text-[11px] uppercase tracking-eyebrow text-muted-foreground">
                        Properties
                      </p>
                      <ul className="mt-3 space-y-1.5 text-sm">
                        {f.properties.map((p) => (
                          <li key={p} className="text-foreground/85">
                            — {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-eyebrow text-muted-foreground">
                        Uses
                      </p>
                      <ul className="mt-3 space-y-1.5 text-sm">
                        {f.uses.map((u) => (
                          <li key={u} className="text-foreground/85">
                            — {u}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
