import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { timeline } from "@/data/timeline";

export function Timeline() {
  return (
    <section className="section bg-sand-50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Timeline"
            title={
              <>
                From a single observation to{" "}
                <span className="italic font-light">a materials platform.</span>
              </>
            }
            size="lg"
          />
        </Reveal>

        <StaggerGroup className="mt-16">
          <ol className="relative space-y-12 border-l border-foreground/15 pl-8 md:pl-12">
            {timeline.map((t, i) => (
              <StaggerItem key={t.year}>
                <li className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[42px] md:-left-[58px] top-2 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-mono text-[10px]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="grid gap-2 md:grid-cols-[7rem_1fr] md:gap-8">
                    <p className="font-display text-3xl font-medium leading-none text-primary">
                      {t.year}
                    </p>
                    <div>
                      <h3 className="font-display text-2xl font-medium">{t.title}</h3>
                      <p className="mt-2 max-w-2xl text-base text-muted-foreground leading-relaxed">
                        {t.body}
                      </p>
                    </div>
                  </div>
                </li>
              </StaggerItem>
            ))}
          </ol>
        </StaggerGroup>
      </Container>
    </section>
  );
}
