import { Container } from "@/components/common/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/Reveal";

type Step = { n: string; title: string; body: string };

const steps: Step[] = [
  {
    n: "01",
    title: "Plant",
    body: "Banana, hemp, allo. Crops that work with local soil and water cycles.",
  },
  {
    n: "02",
    title: "Harvest",
    body: "Smallholder farms, women-led groups, and community cooperatives.",
  },
  {
    n: "03",
    title: "Process",
    body: "Decortication, retting, and degumming. Low-energy, rural-deployable.",
  },
  {
    n: "04",
    title: "Make",
    body: "Yarn, fabric, composite board, cordage. Engineered to spec.",
  },
  {
    n: "05",
    title: "Return",
    body: "Compostable end-of-life. The material goes back into the cycle.",
  },
];

/**
 * Lifecycle strip. Five sequential steps in a single row of editorial cards.
 * Numbered Fraunces head + short body. A faint horizontal rule connects the
 * steps on desktop; stacks vertically on mobile.
 */
export function LifecycleStrip() {
  return (
    <section className="relative bg-sand-100 border-y border-foreground/10">
      <Container className="py-16 md:py-20 lg:py-24">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            The lifecycle
          </p>
          <h2 className="display mt-3 text-2xl md:text-3xl lg:text-4xl font-medium uppercase tracking-tighter2 leading-[1] text-foreground">
            Five steps, one closed loop.
          </h2>
        </Reveal>

        <div className="relative mt-12">
          {/* Horizontal connector for md+ */}
          <div
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-[1.1rem] h-px bg-foreground/15"
          />
          <StaggerGroup className="relative grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-6">
            {steps.map((s) => (
              <StaggerItem key={s.n} className="relative">
                <div className="flex items-center gap-3 md:block">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-mono text-xs">
                    {s.n}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-medium md:mt-5">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 md:mt-3 text-sm md:text-[0.95rem] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
