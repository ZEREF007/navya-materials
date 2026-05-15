import { Seo } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { PillarsStrip } from "@/components/sections/PillarsStrip";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { FibersGrid } from "@/components/sections/FibersGrid";
import { AboutStory } from "@/components/sections/AboutStory";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Seo
        title="Navya Materials. Engineering the Future of Sustainable Materials"
        description="Nepal-rooted research and engineering on natural fibers, banana, hemp, Himalayan nettle, for textiles, construction, and bio-based materials."
      />
      <Hero />
      <PillarsStrip />
      <WhatWeDo />
      <FibersGrid preview />
      <AboutStory />
      <StatsStrip />
      <CTASection
        title="Build something with us, from fiber to finished form."
        body="Whether you're a brand, a researcher, an investor, or a community partner, there's a way in."
        primary={{ href: "/collaborate", label: "Collaborate with us" }}
        secondary={{ href: "/contact", label: "Get in touch" }}
      />
    </>
  );
}
