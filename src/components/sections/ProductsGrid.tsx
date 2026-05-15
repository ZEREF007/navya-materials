import { Container } from "@/components/common/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { products } from "@/data/products";

const statusStyles: Record<string, string> = {
  Pilot: "bg-secondary text-secondary-foreground",
  Prototype: "bg-accent text-accent-foreground",
  "In R&D": "bg-foreground/10 text-foreground",
};

export function ProductsGrid() {
  return (
    <section className="section bg-background">
      <Container>
        <Reveal>
          <p className="eyebrow">Catalogue</p>
          <h2 className="display mt-5 max-w-3xl text-balance text-4xl md:text-5xl font-medium leading-[1.05]">
            Materials in the lab,{" "}
            <span className="italic font-light">and on their way out.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <StaggerItem key={p.name} className="group flex flex-col">
              <div className="relative aspect-[5/6] overflow-hidden rounded-3xl bg-sand-100">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="h-full w-full object-cover transition-transform [transition-duration:1200ms] ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span
                  className={
                    "absolute top-4 right-4 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-eyebrow " +
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
