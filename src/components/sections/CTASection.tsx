import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  variant?: "default" | "dark";
};

export function CTASection({
  eyebrow = "Collaborate",
  title,
  body,
  primary = { href: "/collaborate", label: "Start a conversation" },
  secondary,
  variant = "default",
}: Props) {
  const dark = variant === "dark";
  return (
    <section className={dark ? "section bg-forest-900 text-sand-50" : "section bg-sand-100"}>
      <Container>
        <Reveal>
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className={"eyebrow " + (dark ? "text-sand-200/85" : "")}>{eyebrow}</span>
              <h2
                className={
                  "display mt-5 text-balance text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] " +
                  (dark ? "text-sand-50" : "text-foreground")
                }
              >
                {title}
              </h2>
              {body ? (
                <p
                  className={
                    "mt-6 max-w-xl text-pretty text-base md:text-lg leading-relaxed " +
                    (dark ? "text-sand-100/85" : "text-muted-foreground")
                  }
                >
                  {body}
                </p>
              ) : null}
            </div>
            <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
              <Button
                asChild
                size="lg"
                className={dark ? "bg-sand-50 text-forest-900 hover:bg-sand-100" : ""}
              >
                <Link to={primary.href}>
                  {primary.label} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {secondary ? (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className={
                    dark
                      ? "border-sand-100/60 text-sand-50 hover:bg-sand-100 hover:text-forest-900"
                      : ""
                  }
                >
                  <Link to={secondary.href}>{secondary.label}</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
