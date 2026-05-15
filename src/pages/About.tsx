import { Seo } from "@/lib/seo";
import { SubHero } from "@/components/sections/SubHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { FounderCard } from "@/components/sections/FounderCard";
import { Timeline } from "@/components/sections/Timeline";
import { PillarsStrip } from "@/components/sections/PillarsStrip";
import { CTASection } from "@/components/sections/CTASection";

export default function About() {
  return (
    <>
      <Seo
        title="About — Navya Materials"
        description="Navya Engineering Solution — founded 2023 in Kathmandu by Roshan Ojha. Engineering, research, and community collaboration for sustainable materials."
        path="/about"
      />
      <SubHero
        eyebrow="About"
        title={
          <>
            A materials platform <span className="italic font-light">rooted in Nepal.</span>
          </>
        }
        lede="We turn under-utilised natural resources into engineered, sustainable materials — built in partnership with the communities that grow and gather them."
        image="https://images.unsplash.com/photo-1681635851078-57a587a6c2d8?auto=format&fit=crop&w=2880&q=90"
        imageAlt="Snow-capped Himalayan mountain range over Nepal"
        meta={[
          { label: "Founded", value: "2023" },
          { label: "Base", value: "Kathmandu" },
          { label: "Founder", value: "R. Ojha" },
          { label: "Focus", value: "Natural fibers" },
        ]}
      />
      <AboutStory compact />
      <FounderCard />
      <PillarsStrip />
      <Timeline />
      <CTASection
        title="Want to work together?"
        body="From research collaborations to manufacturing partnerships — we're open to conversations that lead to real-world impact."
        primary={{ href: "/collaborate", label: "Collaborate with us" }}
        secondary={{ href: "/contact", label: "Contact" }}
      />
    </>
  );
}
