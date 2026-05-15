import { Container } from "@/components/common/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { focusAreas, methodology } from "@/data/research";

export function FocusAreas() {
  return (
    <>
      <section className="section bg-background">
        <Container>
          <Reveal>
            <p className="eyebrow">Focus areas</p>
            <h2 className="display mt-5 max-w-3xl text-balance text-4xl md:text-5xl font-medium leading-[1.05]">
              Where we put the hours.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((f, i) => (
              <StaggerItem key={f.title}>
                <div className="flex flex-col gap-3 border-t border-foreground/15 pt-6">
                  <p className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-medium">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="section bg-sand-50">
        <Container>
          <Reveal>
            <p className="eyebrow">Methodology</p>
            <h2 className="display mt-5 max-w-3xl text-balance text-4xl md:text-5xl font-medium leading-[1.05]">
              Source → characterize → engineer → pilot.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base md:text-lg leading-relaxed text-muted-foreground">
              We don&apos;t romanticise process. The work is iterative, hands-on, and only
              meaningful at the point where lab insight meets a village workshop.
            </p>
          </Reveal>

          <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {methodology.map((m) => (
              <StaggerItem
                key={m.step}
                className="rounded-3xl border border-foreground/10 bg-card p-7"
              >
                <p className="font-mono text-sm text-primary">{m.step}</p>
                <h3 className="mt-4 font-display text-xl md:text-2xl font-medium">{m.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.body}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>
    </>
  );
}
