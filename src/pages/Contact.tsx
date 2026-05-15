import { Seo } from "@/lib/seo";
import { SubHero } from "@/components/sections/SubHero";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Navya Materials, Kathmandu, Nepal. Email, WhatsApp, and visits welcome by appointment."
        path="/contact"
      />
      <SubHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk{" "}
            <span className="italic font-light">materials, fibers, futures.</span>
          </>
        }
        lede="Reach us by email, WhatsApp, or in person. We respond within 2–3 working days."
      />
      <ContactDetails />

      <section className="section">
        <Container size="narrow">
          <Reveal>
            <p className="eyebrow">Send a note</p>
            <h2 className="display mt-5 text-balance text-4xl md:text-5xl font-medium leading-[1.05]">
              We&apos;d love to hear from you.
            </h2>
          </Reveal>
          <div className="mt-12">
            <ContactForm compact />
          </div>
        </Container>
      </section>

      <MapEmbed />
    </>
  );
}
