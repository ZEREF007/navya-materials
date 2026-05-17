import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/common/Container";
import { navItems } from "@/data/nav";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/navya-materials", icon: Linkedin },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="relative mt-16 bg-forest-900 text-sand-100">
      <div
        aria-hidden
        className="absolute inset-0 bg-grain opacity-25 mix-blend-overlay pointer-events-none"
      />
      <Container className="relative py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-16">
          <div className="space-y-6">
            <Logo mono />
            <p className="max-w-sm text-pretty text-base text-sand-200/85 leading-relaxed">
              Engineering the future of sustainable materials, from natural fibers grown,
              gathered, and refined in Nepal.
            </p>
            <div className="space-y-3 text-sm text-sand-200/80">
              <a
                href="https://maps.google.com/?q=Kriti+Marga,+Koteshowor-32,+Kathmandu"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-start gap-3 hover:text-sand-50 transition-colors"
              >
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Kriti Marga, Koteshowor-32, Kathmandu, Nepal</span>
              </a>
              <a
                href="mailto:navyamaterials.official@gmail.com"
                className="flex items-center gap-3 hover:text-sand-50 transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>navyamaterials.official@gmail.com</span>
              </a>
              <a
                href="tel:+9779868583973"
                className="flex items-center gap-3 hover:text-sand-50 transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>+977-9868583973</span>
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] uppercase tracking-eyebrow text-sand-300 mb-5">
              Explore
            </p>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sand-200/85 hover:text-sand-50 underline-grow"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] uppercase tracking-eyebrow text-sand-300 mb-5">
              Follow
            </p>
            <ul className="space-y-3 text-sm">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="inline-flex items-center gap-3 text-sand-200/85 hover:text-sand-50 transition-colors"
                    >
                      <Icon className="h-4 w-4" /> {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-8 text-[11px] uppercase tracking-eyebrow text-sand-300 mb-3">
              Newsletter
            </p>
            <p className="text-xs text-sand-200/70 leading-relaxed">
              Updates on research, products, and partner opportunities, roughly quarterly.
              Email us to subscribe.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-sand-100/10 pt-6">
          <p className="text-xs text-sand-200/70">
            © {new Date().getFullYear()} Navya Engineering Solution. Based in Nepal. Working
            toward sustainable material innovation through natural fibers and engineering.
          </p>
        </div>
      </Container>
    </footer>
  );
}
