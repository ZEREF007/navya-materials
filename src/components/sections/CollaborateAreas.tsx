import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { collabAreas } from "@/data/collaborate";

export function CollaborateAreas() {
  return (
    <section className="section bg-background">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Areas of collaboration"
            title={
              <>
                We grow stronger together — with{" "}
                <span className="italic font-light">researchers, makers, and movers.</span>
              </>
            }
            lede="Six entry points to working with us. Whatever you bring — knowledge, equipment, capital, an audience — there is a way in."
            size="lg"
          />
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/10 md:grid-cols-2 lg:grid-cols-3">
          {collabAreas.map((a) => {
            const Icon = a.icon;
            return (
              <StaggerItem
                key={a.title}
                className="group relative bg-card p-8 transition-colors hover:bg-sand-50"
              >
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl md:text-2xl font-medium leading-tight">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {a.body}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
