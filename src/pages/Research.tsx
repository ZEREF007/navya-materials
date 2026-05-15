import { Seo } from "@/lib/seo";
import { SubHero } from "@/components/sections/SubHero";
import { FocusAreas } from "@/components/sections/FocusAreas";
import { CTASection } from "@/components/sections/CTASection";

export default function Research() {
  return (
    <>
      <Seo
        title="Research & Innovation — Navya Materials"
        description="Material science, process engineering, lifecycle analysis, and bio-composite design — research focused on locally adaptable, sustainable material systems."
        path="/research"
      />
      <SubHero
        eyebrow="Research & innovation"
        title={
          <>
            Science is{" "}
            <span className="italic font-light">how nature gets translated.</span>
          </>
        }
        lede="Our research bridges lab and field — characterising indigenous fibers, engineering low-energy processing, and measuring the full lifecycle of what we make."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=80"
        imageAlt="Engineering and laboratory workspace"
        meta={[
          { label: "Disciplines", value: "4" },
          { label: "Method", value: "Iterative" },
          { label: "Partners", value: "Open" },
          { label: "Output", value: "Open notes" },
        ]}
      />
      <FocusAreas />
      <CTASection
        title="Research with us."
        body="We publish open lab notes and welcome co-authored studies with universities, NGOs, and industry R&D groups."
        primary={{ href: "/collaborate", label: "Propose a study" }}
        secondary={{ href: "/contact", label: "Contact us" }}
      />
    </>
  );
}
