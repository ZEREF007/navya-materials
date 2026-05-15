import { Seo } from "@/lib/seo";
import { SubHero } from "@/components/sections/SubHero";
import { CollaborateAreas } from "@/components/sections/CollaborateAreas";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Collaborate() {
  return (
    <>
      <Seo
        title="Collaborate with Us"
        description="Research partnerships, product manufacturing, material development, community programmes, investment, brand collaboration, six ways to work with Navya Materials."
        path="/collaborate"
      />
      <SubHero
        eyebrow="Collaborate"
        title={
          <>
            Meaningful innovation is{" "}
            <span className="italic font-light">built together.</span>
          </>
        }
        lede="We partner with researchers, industries, designers, organisations, and communities who share our vision for sustainable material innovation."
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2880&q=90"
        imageAlt="Collaborative workshop"
      />
      <CollaborateAreas />

      <section className="section bg-sand-50">
        <Container size="narrow">
          <Reveal>
            <p className="eyebrow">Tell us about it</p>
            <h2 className="display mt-5 max-w-2xl text-balance text-4xl md:text-5xl font-medium leading-[1.05]">
              Start with a few details.{" "}
              <span className="italic font-light">We&apos;ll take it from there.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Brief or detailed, exploratory or specific, every collaboration starts with a
              short note. We respond within 3 working days.
            </p>
          </Reveal>
          <div className="mt-14">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
