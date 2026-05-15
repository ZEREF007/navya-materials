import { Container } from "@/components/common/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { focusAreas, methodology } from "@/data/research";

export function FocusAreas() {
  return (
    <>
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <Container>
          <Reveal>
            <h2 className="display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium uppercase tracking-tighter2 leading-[0.95] text-foreground">
              Focus Areas
            </h2>
            <p className="mt-4 max-w-2xl font-display italic text-lg md:text-xl lg:text-2xl font-light text-muted-foreground leading-snug">
              Where we put the hours.
            </p>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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

      <section className="py-16 md:py-20 lg:py-24 bg-sand-50">
        <Container>
          <Reveal>
            <h2 className="display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium uppercase tracking-tighter2 leading-[0.95] text-foreground">
              Methodology
            </h2>
            <p className="mt-4 max-w-3xl whitespace-nowrap overflow-hidden font-display italic text-base md:text-lg lg:text-xl font-light text-muted-foreground leading-snug">
              Source. Characterize. Engineer. Pilot.
            </p>
            <p className="mt-6 max-w-2xl text-pretty text-base md:text-lg leading-relaxed text-foreground/75">
              We don&apos;t romanticise process. The work is iterative, hands-on, and only
              meaningful where lab insight meets a village workshop.
            </p>
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
