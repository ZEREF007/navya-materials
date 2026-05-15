import { Seo } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { PillarsStrip } from "@/components/sections/PillarsStrip";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { FibersGrid } from "@/components/sections/FibersGrid";
import { AboutStory } from "@/components/sections/AboutStory";
import { PullQuote } from "@/components/sections/PullQuote";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { OrganicDivider } from "@/components/common/OrganicDivider";

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
      <OrganicDivider />
      <PullQuote
        quote="The materials of the next century already exist. They are in the fields, the forests, and the hands of the people who have always worked with them."
        attribution="Roshan Ojha, Founder"
      />
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
