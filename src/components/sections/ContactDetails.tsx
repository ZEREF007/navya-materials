import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const channels = [
  {
    label: "Email",
    value: "navyamaterials.official@gmail.com",
    href: "mailto:navyamaterials.official@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+977-9868583973",
    href: "tel:+9779868583973",
    icon: Phone,
  },
  {
    label: "Address",
    value: "Kriti Marga, Koteshowor-32, Kathmandu",
    href: "https://maps.google.com/?q=Kriti+Marga,+Koteshowor-32,+Kathmandu",
    icon: MapPin,
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/navya-materials",
    icon: Linkedin,
  },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
];

export function ContactDetails() {
  return (
    <section className="border-b border-foreground/10 bg-sand-50">
      <Container className="py-10 md:py-14">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="group flex items-start gap-5 border-t border-foreground/10 pt-6 hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="text-[11px] uppercase tracking-eyebrow text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="mt-1 font-display text-xl md:text-2xl font-medium leading-tight underline-grow inline-block">
                      {c.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-foreground/10 pt-8">
            <p className="text-[11px] uppercase tracking-eyebrow text-muted-foreground">
              Follow our work
            </p>
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" /> {s.label}
                </a>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
