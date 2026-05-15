import { Seo } from "@/lib/seo";
import { SubHero } from "@/components/sections/SubHero";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { CTASection } from "@/components/sections/CTASection";

export default function Products() {
  return (
    <>
      <Seo
        title="Products — Navya Materials"
        description="Prototypes, pilot products, and in-R&D materials — from banana-fiber textile to hemp composite boards and rural decortication machinery."
        path="/products"
      />
      <SubHero
        eyebrow="Products"
        title={
          <>
            Prototypes, pilots,{" "}
            <span className="italic font-light">and the road ahead.</span>
          </>
        }
        lede="A working catalogue of what we make today and what we&apos;re refining for tomorrow. Brand partners and product designers welcome at any stage."
        image="https://images.unsplash.com/photo-1569909115134-a0426936c879?auto=format&fit=crop&w=2880&q=90"
        imageAlt="Stack of natural-colour textiles"
        meta={[
          { label: "Categories", value: "4" },
          { label: "Pilot", value: "2" },
          { label: "Prototype", value: "2" },
          { label: "In R&D", value: "2" },
        ]}
      />
      <ProductsGrid />
      <CTASection
        title="Custom development?"
        body="We co-develop materials with brands, designers, and manufacturers. Bring a spec — or just a question — and we'll explore."
        primary={{ href: "/collaborate", label: "Start a project" }}
        secondary={{ href: "/contact", label: "Contact" }}
      />
    </>
  );
}
