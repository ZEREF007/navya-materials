import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { fibers } from "@/data/fibers";

export function FibersGrid({ preview = false }: { preview?: boolean }) {
  const items = preview ? fibers : fibers;
  return (
    <section className="section bg-sand-50">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Natural fibers"
              title={
                <>
                  Three plants. <span className="italic font-light">Endless possibility.</span>
                </>
              }
              lede="Every fiber we work with solves more than one problem at once: for the land, for the maker, and for the material it becomes."
              size="lg"
            />
            {preview ? (
              <Link
                to="/natural-fibers"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                <span className="underline-grow">View all fibers</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ) : null}
          </div>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {items.map((f) => (
            <StaggerItem key={f.slug} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-forest-900">
                <ImageWithFallback
                  src={f.image}
                  alt={f.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform [transition-duration:1500ms] ease-out group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${f.accent} via-forest-900/20 to-transparent`} />
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-sand-50 z-10">
                  <span className="font-mono text-xs uppercase tracking-eyebrow text-sand-200/85">
                    {f.origin}
                  </span>
                  {f.scientific ? (
                    <span className="font-mono text-[10px] italic text-sand-200/70">
                      {f.scientific}
                    </span>
                  ) : null}
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-sand-50 z-10">
                  <p className="font-display text-2xl md:text-3xl font-medium leading-tight">
                    {f.name}
                  </p>
                  <p className="mt-1 text-sm italic text-sand-100/80">{f.tagline}</p>
                </div>
              </div>
              <div className="mt-5 px-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {f.properties.slice(0, 3).map((prop) => (
                    <li
                      key={prop}
                      className="rounded-full border border-foreground/10 bg-background px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {prop}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
