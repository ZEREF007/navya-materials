import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { MapPin } from "lucide-react";

export function MapEmbed() {
  return (
    <section className="section">
      <Container>
        <Reveal>
          <div className="grid items-end gap-6 md:grid-cols-2">
            <div>
              <p className="eyebrow">Find us</p>
              <h2 className="display mt-5 text-balance text-4xl md:text-5xl font-medium leading-[1.05]">
                Kathmandu, Nepal.
              </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed md:max-w-md md:justify-self-end">
              Our workshop and team are based in Koteshowor. Visits are by appointment.
              Get in touch and we&apos;ll be happy to host you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-foreground/10">
            <div className="aspect-[16/9] w-full bg-forest-100">
              <iframe
                title="Navya Materials, Kathmandu location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=85.3380%2C27.6760%2C85.3580%2C27.6900&amp;layer=mapnik&amp;marker=27.6830%2C85.3480"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 bg-card px-6 py-5">
              <p className="flex items-center gap-2 text-sm text-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Kriti Marga, Koteshowor-32, Kathmandu, Nepal
              </p>
              <a
                href="https://maps.google.com/?q=Kriti+Marga,+Koteshowor-32,+Kathmandu"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-medium text-primary underline-grow"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
