import {
  AudienceCards,
  BeforeAfterSection,
  FAQSection,
  FinalCTA,
  Footer,
  Header,
  Hero,
  MaterialsSection,
  PackageCards,
  ProblemSection,
  ProcessSteps,
  ReferralPartnerSection,
  ServiceAreaSection,
  ServiceCards,
  StickyMobileCTA,
  WarrantySection,
} from "@/components/landing";
import { QuoteForm } from "@/components/QuoteForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AudienceCards />
        <ProblemSection />
        <ProcessSteps />
        <ServiceCards />
        <PackageCards />
        <BeforeAfterSection />
        <MaterialsSection />
        <WarrantySection />
        <ServiceAreaSection />
        <ReferralPartnerSection />
        <section id="quote" className="bg-charcoal py-[89px] text-ivory">
          <div className="section-shell grid gap-[34px] lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="sticky top-8 space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne">
                Photo quote request
              </p>
              <h2 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95]">
                Get a fast preliminary range from real project photos.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-stone">
                Start with project scope, ZIP, and photos before contact
                details. Lustre will review surface condition, location, and
                finish direction before quoting next steps.
              </p>
              <div className="border-l border-champagne pl-5 text-sm leading-6 text-stone">
                Quote ranges are preliminary until surface condition,
                measurements, access, material selection, and scope are
                confirmed.
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
