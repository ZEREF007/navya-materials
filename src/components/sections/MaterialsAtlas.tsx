import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";

type Region = {
  id: "banana" | "hemp" | "allo";
  name: string;
  scientific: string;
  region: string;
  elevation: string;
  property: string;
  /** 0..100 svg coords on a 100x60 viewBox */
  x: number;
  y: number;
};

const regions: Region[] = [
  {
    id: "banana",
    name: "Banana Fiber",
    scientific: "Musa spp.",
    region: "Lowland belt, southern Nepal",
    elevation: "100–500 m",
    property: "Lustrous · biodegradable · high tensile",
    x: 30,
    y: 48,
  },
  {
    id: "hemp",
    name: "Hemp Fiber",
    scientific: "Cannabis sativa",
    region: "Mid-hills, central Nepal",
    elevation: "1000–2000 m",
    property: "Drought-tolerant · UV resistant · long staple",
    x: 50,
    y: 33,
  },
  {
    id: "allo",
    name: "Himalayan Nettle",
    scientific: "Girardinia diversifolia",
    region: "Foothills, western & eastern Nepal",
    elevation: "1500–3000 m",
    property: "Hand-processed · pest-resistant · fine handfeel",
    x: 72,
    y: 18,
  },
];

/**
 * Three-fibers atlas. A stylised Nepal-shaped silhouette with three numbered
 * pins. To the right, a vertical list of the same three fibers expanded with
 * scientific name, region, elevation band, and key properties. Distinct from
 * FibersGrid (used on /natural-fibers) so this Home block doesn't duplicate.
 */
export function MaterialsAtlas() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <Container>
        <Reveal>
          <h2 className="display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium uppercase tracking-tighter2 leading-[0.95] text-foreground">
            Three Fibers, Three Regions
          </h2>
          <p className="mt-4 max-w-2xl font-display italic text-lg md:text-xl lg:text-2xl font-light text-muted-foreground leading-snug">
            One country. Three altitudes. Three plants.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-12 md:gap-14 lg:gap-16">
          <Reveal className="md:col-span-5">
            <div className="relative rounded-3xl border border-foreground/10 bg-sand-50 p-6 md:p-8">
              <svg
                viewBox="0 0 100 60"
                className="w-full h-auto"
                role="img"
                aria-label="Stylised map of Nepal showing the three fiber regions"
              >
                {/* Stylised Nepal silhouette (simplified, decorative). */}
                <path
                  d="M5 38 L18 30 L28 27 L40 23 L52 22 L62 19 L72 15 L84 12 L94 11
                     L96 16 L92 22 L86 26 L78 30 L70 33 L60 36 L48 41 L36 45
                     L24 47 L14 46 L8 43 Z"
                  fill="#EFE7D4"
                  stroke="#344E41"
                  strokeOpacity="0.4"
                  strokeWidth="0.6"
                  strokeLinejoin="round"
                />
                {/* Himalayan ridge: short jagged line near top. */}
                <path
                  d="M22 24 L28 21 L34 23 L40 19 L48 21 L56 18 L66 17 L74 14 L84 11"
                  fill="none"
                  stroke="#344E41"
                  strokeOpacity="0.35"
                  strokeWidth="0.4"
                  strokeLinejoin="round"
                />
                {regions.map((r, i) => (
                  <g key={r.id} transform={`translate(${r.x} ${r.y})`}>
                    <circle r="2.6" fill="#344E41" />
                    <circle r="1.1" fill="#F6F1E7" />
                    <text
                      x="0"
                      y="-4"
                      textAnchor="middle"
                      fontSize="2.6"
                      fontFamily="Switzer, system-ui"
                      fontWeight="600"
                      fill="#344E41"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </text>
                  </g>
                ))}
              </svg>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Nepal · Stylised, not to scale
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-7">
            <ol className="space-y-6">
              {regions.map((r, i) => (
                <li
                  key={r.id}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 md:grid-cols-[3rem_1fr] md:gap-6 border-t border-foreground/10 pt-5 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-sm text-primary pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="font-display text-xl md:text-2xl font-medium leading-tight text-foreground">
                        {r.name}
                      </h3>
                      <span className="font-mono text-xs italic text-muted-foreground">
                        {r.scientific}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-foreground/75">{r.region}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                      <span className="rounded-full border border-foreground/15 px-2.5 py-0.5">
                        {r.elevation}
                      </span>
                      <span className="rounded-full border border-foreground/15 px-2.5 py-0.5">
                        {r.property}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <Link
              to="/natural-fibers"
              className="group mt-8 inline-flex items-center gap-2 font-medium text-primary"
            >
              <span className="underline-grow">See every fiber in depth</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
