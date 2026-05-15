import { Seo } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { LifecycleStrip } from "@/components/sections/LifecycleStrip";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { FeaturedHighlight } from "@/components/sections/FeaturedHighlight";
import { FibersGrid } from "@/components/sections/FibersGrid";
import { PullQuote } from "@/components/sections/PullQuote";
import { OpenNotes } from "@/components/sections/OpenNotes";
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
      <LifecycleStrip />
      <WhatWeDo />
      <FeaturedHighlight />
      <FibersGrid preview />
      <PullQuote
        quote="The materials of the next century already exist. They are in the fields, the forests, and the hands of the people who have always worked with them."
        attribution="Roshan Ojha, Founder"
      />
      <OpenNotes />
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
