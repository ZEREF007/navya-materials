import { Seo } from "@/lib/seo";
import { SubHero } from "@/components/sections/SubHero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { CTASection } from "@/components/sections/CTASection";

export default function Community() {
  return (
    <>
      <Seo
        title="Community & Impact — Navya Materials"
        description="Working alongside farmers, women-led groups, and rural fabricators across Nepal. Decentralised production. Shared livelihoods. Local material economies."
        path="/community"
      />
      <SubHero
        eyebrow="Community & impact"
        title={
          <>
            Materials are{" "}
            <span className="italic font-light">made by people.</span>
          </>
        }
        lede="Our work is built on relationships with farmers, women-led groups, and rural fabricators — distributed production, shared value, and skill exchange in both directions."
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80"
        imageAlt="Smallholder farming landscape in Nepal"
        meta={[
          { label: "Farmers engaged", value: "100+" },
          { label: "Women-led groups", value: "5" },
          { label: "Districts", value: "3" },
          { label: "Pesticide use", value: "0" },
        ]}
      />
      <ImpactStats />
      <CTASection
        title="Partner on a community programme."
        body="Development agencies, foundations, and NGOs — we'd love to scale skill-sharing and shared infrastructure together."
        primary={{ href: "/collaborate", label: "Get involved" }}
        secondary={{ href: "/contact", label: "Contact" }}
      />
    </>
  );
}
