import {
  ArrowRight,
  Building2,
  Check,
  Home,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles,
  TimerReset,
} from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { TrustStrip } from "@/components/TrustStrip";
import { landingPage } from "@/content/landing-page";

const scrollToQuote = "#quote";

export function Header() {
  return (
    <header id="top" className="sticky top-0 z-40 border-b border-stone/70 bg-ivory/95 backdrop-blur">
      <div className="section-shell flex min-h-20 items-center justify-between gap-5">
        <a className="font-display text-3xl font-semibold leading-none" href="#top">
          Lustre
          <span className="block font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-bronze">
            Surface Restoration
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-gray lg:flex">
          {landingPage.nav.map((item) => (
            <a className="transition hover:text-ink" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="focus-ring hidden bg-ink px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ivory md:inline-flex"
          href={scrollToQuote}
        >
          Get My Free Photo Quote
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-stone bg-ivory py-[55px] md:py-[55px]">
      <div className="section-shell grid gap-[34px] lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div>
          <p className="max-w-sm border-l border-champagne pl-4 text-sm font-semibold uppercase tracking-[0.16em] text-bronze">
            {landingPage.hero.promise}
          </p>
          <h1 className="mt-6 font-display text-[clamp(3rem,6.3vw,5.8rem)] leading-[0.98]">
            {landingPage.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-gray md:text-xl">
            {landingPage.hero.subheadline}
          </p>
          <p className="mt-5 max-w-lg text-base leading-7 text-ink">
            New look. No demo. Less downtime. {landingPage.hero.supporting}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 bg-ink px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ivory"
              href={scrollToQuote}
            >
              Get My Free Photo Quote
              <ArrowRight aria-hidden className="h-4 w-4" />
            </a>
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 border border-ink px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ink"
              href={landingPage.textHref}
            >
              <MessageSquare aria-hidden className="h-4 w-4" />
              Text Photos for Estimate
            </a>
          </div>
          <div className="mt-8">
            <TrustStrip />
          </div>
        </div>
        <BeforeAfterSlider />
      </div>
    </section>
  );
}

export function AudienceCards() {
  const icons = [Home, TimerReset, Building2];

  return (
    <section className="py-[55px]">
      <div className="section-shell grid gap-4 md:grid-cols-3">
        {landingPage.audiences.map((audience, index) => {
          const Icon = icons[index];

          return (
            <article className="border border-stone bg-white p-6" key={audience.title}>
              <Icon aria-hidden className="h-7 w-7 text-bronze" />
              <h2 className="mt-6 font-display text-3xl">{audience.title}</h2>
              <p className="mt-3 min-h-20 text-base leading-7 text-muted-gray">
                {audience.copy}
              </p>
              <a
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-bronze"
                href={scrollToQuote}
              >
                {audience.cta}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section className="bg-stone/45 py-[89px]">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          kicker="Why restoration"
          title="Replacement is not always the smartest move."
        />
        <div>
          <p className="text-lg leading-8 text-muted-gray">
            Full remodels can be expensive, slow, messy, and unnecessary when
            the existing structure is still functional. Lustre focuses on
            visible surface transformation: countertops, cabinets, vanities,
            and commercial surfaces that need to look new without being torn
            out.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {landingPage.painPoints.map((point) => (
              <div className="flex items-start gap-3 bg-ivory p-4" key={point}>
                <Check aria-hidden className="mt-1 h-5 w-5 text-bronze" />
                <span className="text-sm leading-6">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSteps() {
  return (
    <section id="process" className="py-[89px]">
      <div className="section-shell">
        <SectionHeading
          kicker="Process"
          title="A cleaner path to a better-looking space."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {landingPage.process.map((step, index) => (
            <article className="border-t border-champagne bg-white p-5" key={step.title}>
              <span className="font-display text-5xl text-stone">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-gray">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCards() {
  return (
    <section id="services" className="bg-ink py-[89px] text-ivory">
      <div className="section-shell">
        <SectionHeading kicker="Launch services" title="Built for visible surfaces first." />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {landingPage.services.map((service) => (
            <div className="border border-stone/25 p-5" key={service}>
              <Sparkles aria-hidden className="h-5 w-5 text-champagne" />
              <p className="mt-5 text-lg font-semibold">{service}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-base leading-7 text-stone">
          Lustre is built as a broader surface restoration company. Stone, tile,
          grout, terrazzo, concrete, and floor restoration are planned future
          divisions after training, equipment, and quality-control standards
          are in place.
        </p>
      </div>
    </section>
  );
}

export function PackageCards() {
  return (
    <section className="py-[89px]">
      <div className="section-shell">
        <SectionHeading kicker="Packages" title="Choose the right project lane." />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {landingPage.packages.map((tier) => (
            <article className="border border-stone bg-white p-6" key={tier.title}>
              <h3 className="font-display text-4xl">{tier.title}</h3>
              <p className="mt-3 min-h-16 text-sm leading-6 text-muted-gray">
                {tier.audience}
              </p>
              <ul className="mt-6 space-y-3">
                {tier.points.map((point) => (
                  <li className="flex gap-3 text-sm leading-6" key={point}>
                    <Check aria-hidden className="mt-1 h-4 w-4 text-bronze" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-bronze"
                href={scrollToQuote}
              >
                {tier.cta}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeforeAfterSection() {
  return (
    <section className="bg-stone/45 py-[89px]">
      <div className="section-shell grid gap-[34px] lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading kicker="Proof" title="Proof beats promises." />
          <p className="mt-6 text-base leading-7 text-muted-gray">
            Until owned portfolio assets exist, Lustre should use approved
            supplier sample visuals or clearly labeled concept/mockup imagery.
            This comparison is a concept mockup of the intended before/after
            experience, not a completed Lustre project.
          </p>
        </div>
        <BeforeAfterSlider />
      </div>
    </section>
  );
}

export function MaterialsSection() {
  return (
    <section id="materials" className="py-[89px]">
      <div className="section-shell grid gap-[34px] lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          kicker="Materials"
          title="Professional materials. Clear expectations."
        />
        <div>
          <p className="text-lg leading-8 text-muted-gray">
            Lustre evaluates architectural films and surface products based on
            appearance, durability, technical documentation, cleaning guidance,
            warranty support, and installation behavior. We do not build paid
            professional work around generic consumer peel-and-stick material.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {landingPage.collections.map((collection) => (
              <div className="border border-stone bg-white p-4" key={collection}>
                <p className="font-display text-2xl">{collection}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WarrantySection() {
  return (
    <section className="bg-charcoal py-[89px] text-ivory">
      <div className="section-shell grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading kicker="Expectations" title="Clear scope. Clear care. Clear warranty." />
        <div className="space-y-5 text-base leading-8 text-stone">
          <p>
            Every project should define the surface, finish, prep requirements,
            warranty boundaries, and care instructions before installation
            begins.
          </p>
          <p>
            Material warranty and workmanship warranty are not the same. Lustre
            should only state warranty terms that are actually supported by the
            material supplier and the written customer agreement.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ServiceAreaSection() {
  return (
    <section className="py-[89px]">
      <div className="section-shell">
        <SectionHeading kicker="Service area" title="Serving South Florida" />
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="bg-white p-6">
            {landingPage.serviceAreas.map((area) => (
              <p className="flex items-center gap-3 border-b border-stone py-4 text-xl last:border-b-0" key={area}>
                <MapPin aria-hidden className="h-5 w-5 text-bronze" />
                {area}
              </p>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {landingPage.priorityAreas.map((area) => (
              <div className="border border-stone bg-white p-4 text-sm" key={area}>
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReferralPartnerSection() {
  return (
    <section className="bg-stone/45 py-[89px]">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <SectionHeading
            kicker="Referral partners"
            title="For property managers, realtors, STR operators, and investor teams"
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-gray">
            If your clients or units need a fast cosmetic surface refresh,
            Lustre can quote from photos and pilot a project with clear
            before/after documentation.
          </p>
        </div>
        <a
          className="focus-ring inline-flex justify-center bg-ink px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ivory"
          href={scrollToQuote}
        >
          Become a Referral Partner
        </a>
      </div>
    </section>
  );
}

export function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landingPage.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-[89px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="section-shell">
        <SectionHeading kicker="FAQ" title="What to know before you quote" />
        <div className="mt-10 divide-y divide-stone border-y border-stone">
          {landingPage.faqs.map((faq) => (
            <details className="group py-5" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-2xl">
                {faq.question}
                <span className="text-bronze transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-gray">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-ink py-[89px] text-ivory">
      <div className="section-shell text-center">
        <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.8rem,7vw,5.8rem)] leading-[0.95]">
          Ready to see what your surface could become?
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            className="focus-ring inline-flex justify-center bg-champagne px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ink"
            href={scrollToQuote}
          >
            Get My Free Photo Quote
          </a>
          <a
            className="focus-ring inline-flex justify-center border border-stone px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ivory"
            href={landingPage.textHref}
          >
            Text Photos for Estimate
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal pb-28 pt-10 text-stone md:pb-10">
      <div className="section-shell flex flex-col justify-between gap-6 text-sm md:flex-row">
        <p>
          <span className="font-display text-2xl text-ivory">Lustre</span>
          <span className="ml-3">Surface Restoration</span>
        </p>
        <p>South Florida surface wrapping and restoration quote requests.</p>
      </div>
    </footer>
  );
}

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-stone bg-ivory shadow-2xl md:hidden">
      <a
        className="flex flex-col items-center gap-1 border-r border-stone px-2 py-3 text-xs font-bold uppercase tracking-[0.08em]"
        href={landingPage.phoneHref}
      >
        <Phone aria-hidden className="h-5 w-5 text-bronze" />
        Call
      </a>
      <a
        className="flex flex-col items-center gap-1 border-r border-stone px-2 py-3 text-xs font-bold uppercase tracking-[0.08em]"
        href={landingPage.textHref}
      >
        <MessageSquare aria-hidden className="h-5 w-5 text-bronze" />
        Text
      </a>
      <a
        className="flex flex-col items-center gap-1 px-2 py-3 text-xs font-bold uppercase tracking-[0.08em]"
        href={scrollToQuote}
      >
        <Sparkles aria-hidden className="h-5 w-5 text-bronze" />
        Photo Quote
      </a>
    </div>
  );
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bronze">
        {kicker}
      </p>
      <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.5rem,6vw,4.9rem)] leading-[0.95]">
        {title}
      </h2>
    </div>
  );
}
