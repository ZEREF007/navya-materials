import { Container } from "@/components/common/Container";
import { StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { pillars } from "@/data/pillars";

export function PillarsStrip() {
  return (
    <section className="relative border-y border-foreground/10 bg-sand-50">
      <Container className="py-14 md:py-16">
        <StaggerGroup className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title} className="group flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {p.body}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
