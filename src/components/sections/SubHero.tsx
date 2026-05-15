import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  image?: string;
  imageAlt?: string;
  meta?: { label: string; value: string }[];
};

export function SubHero({ eyebrow, title, lede, image, imageAlt, meta }: Props) {
  return (
    <section className="relative isolate overflow-hidden border-b border-foreground/10 bg-sand-50">
      {image ? (
        <div className="absolute inset-0 -z-10">
          <img
            src={image}
            alt={imageAlt || ""}
            className="h-full w-full object-cover opacity-40"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sand-50/40 via-sand-50/70 to-background" />
        </div>
      ) : null}
      <Container className="pb-20 pt-32 md:pb-28 md:pt-40">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display mt-6 max-w-4xl text-balance text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tighter2">
            {title}
          </h1>
          {lede ? (
            <p className="mt-7 max-w-2xl text-pretty text-lg md:text-xl text-foreground/75 leading-relaxed">
              {lede}
            </p>
          ) : null}
          {meta && meta.length > 0 ? (
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="text-[11px] uppercase tracking-eyebrow text-muted-foreground">
                    {m.label}
                  </dt>
                  <dd className="mt-1 font-display text-lg font-medium">{m.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
