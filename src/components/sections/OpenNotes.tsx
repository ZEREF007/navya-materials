import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/common/Reveal";
import { notes } from "@/data/notes";

/**
 * Journal-card teaser. Three short open-lab notes with date and category.
 * Functions as a preview link into /research without duplicating that
 * page's focus-areas + methodology grids.
 */
export function OpenNotes() {
  return (
    <section className="bg-sand-50 border-t border-foreground/10">
      <Container className="py-16 md:py-20 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Open lab
              </p>
              <h2 className="display mt-3 text-2xl md:text-3xl lg:text-4xl font-medium uppercase tracking-tighter2 leading-[0.95] text-foreground">
                Notes from this season.
              </h2>
            </div>
            <Link
              to="/research"
              className="group inline-flex items-center gap-2 font-medium text-primary"
            >
              <span className="underline-grow">All research</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {notes.map((n) => (
            <StaggerItem
              key={n.title}
              className="group flex flex-col rounded-2xl border border-foreground/10 bg-card p-7 transition-colors hover:border-foreground/20"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {n.date}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary">
                  {n.category}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl md:text-2xl font-medium leading-tight text-foreground">
                {n.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {n.body}
              </p>
              <span aria-hidden className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read note <ArrowUpRight className="h-3 w-3" />
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
