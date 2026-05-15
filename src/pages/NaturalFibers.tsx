import { Seo } from "@/lib/seo";
import { SubHero } from "@/components/sections/SubHero";
import { FiberDeepDive } from "@/components/sections/FiberDeepDive";
import { CTASection } from "@/components/sections/CTASection";

export default function NaturalFibers() {
  return (
    <>
      <Seo
        title="Natural Fibers — Banana, Hemp, Himalayan Nettle"
        description="Our three flagship natural fibers — banana pseudo-stem, hemp, and Himalayan nettle (allo) — characterized, processed, and prepared for sustainable products."
        path="/natural-fibers"
      />
      <SubHero
        eyebrow="Natural fibers"
        title={
          <>
            Three fibers from{" "}
            <span className="italic font-light">field, forest, and foothill.</span>
          </>
        }
        lede="Each plant brings its own properties, its own communities, and its own place in a sustainable material future."
        image="https://images.unsplash.com/photo-1646750421466-a04e689254d4?auto=format&fit=crop&w=2880&q=90"
        imageAlt="Close-up of natural fiber threads on a loom"
      />
      <FiberDeepDive />
      <CTASection
        title="Want fiber samples or specs?"
        body="We supply lab-tested samples to qualified research partners and brands. Get in touch with use case and quantities."
        primary={{ href: "/contact", label: "Request samples" }}
        secondary={{ href: "/collaborate", label: "Collaborate" }}
      />
    </>
  );
}
