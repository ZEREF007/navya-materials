import { Container } from "@/components/common/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { products } from "@/data/products";

const statusStyles: Record<string, string> = {
  Pilot: "bg-secondary text-secondary-foreground",
  "R&D": "bg-foreground/10 text-foreground",
  "Prototyping Stage": "bg-accent text-accent-foreground",
  "Planning Stage": "bg-sand-200 text-foreground",
};

export function ProductsGrid() {
  return (
    <section className="py-10 md:py-14 lg:py-16 bg-background">
      <Container>
        <Reveal>
          <h2 className="display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium uppercase tracking-tighter2 leading-[0.95] text-foreground">
            Catalogue
          </h2>
          <p className="mt-4 max-w-2xl font-display italic text-lg md:text-xl lg:text-2xl font-light text-muted-foreground leading-snug">
            Materials in the lab, and on their way out.
          </p>
        </Reveal>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <StaggerItem key={p.name} className="group flex flex-col">
              <div className="relative aspect-[5/6] overflow-hidden rounded-3xl bg-sand-100">
                <ImageWithFallback
                  src={p.image}
                  alt={p.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform [transition-duration:1200ms] ease-out group-hover:scale-105"
                />
                <span
                  className={
                    "absolute top-4 right-4 z-10 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-eyebrow " +
                    (statusStyles[p.status] ?? "")
                  }
                >
                  {p.status}
                </span>
              </div>
              <div className="mt-5">
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-muted-foreground">
                  {p.category}
                </p>
                <h3 className="mt-1 font-display text-xl md:text-2xl font-medium">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
