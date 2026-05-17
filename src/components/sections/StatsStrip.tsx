import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { NumberTicker } from "@/components/common/NumberTicker";
import { stats } from "@/data/stats";

export function StatsStrip() {
  return (
    <section className="relative bg-forest-800 text-sand-100">
      <div aria-hidden className="absolute inset-0 bg-grain opacity-25 mix-blend-overlay" />
      <Container className="relative py-12 md:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-x-12">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div>
                <p className="display text-5xl md:text-6xl lg:text-7xl font-light leading-none tracking-tightish">
                  <NumberTicker value={s.value} />
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] font-semibold text-sand-100">
                  {s.label}
                </p>
                {s.suffix ? (
                  <p className="mt-2 text-xs text-sand-200/65 italic">{s.suffix}</p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
