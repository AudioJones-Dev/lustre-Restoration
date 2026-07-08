# Competitor Design/UX Research: Miracle Method of Miami North
**Pages crawled:** `/miami-north` (franchise homepage), `/miami-north/bathtub-refinishing` (served fiberglass-tub-repair content), `/miami-north/photo-gallery`, `/miami-north/reviews`, `/miami-north/contact-us`, `miraclemethod.com` (national homepage), `/miami-north/faq`. The national "Solutions Center" linked in navigation returned 404 at the URLs attempted and could not be assessed.

**Franchise context (applies throughout):** Miami North is a templated instance of a ~200-location national system. The local page inherits the national hero, national stats (1979 founding, 1.1M+ customers), national design system, and identical page architecture — with local phone number, address, service-area counties, and a short franchisee bio swapped in. Strengths (borrowed national credibility) and weaknesses (generic, non-local content; thin genuinely local proof) both flow from this model.

## 1. Homepage structure (section-by-section order)
Local franchise homepage (`/miami-north`), top to bottom:
1. Header: logo, service mega-menu, phone CTA, "Visit our Showroom / Contact Us"
2. Hero with headline + refinish-vs-replace value proposition
3. Quote request form (first instance)
4. Before/after image carousel (4 transformation pairs, dot navigation)
5. Three-column benefits section (time / cost / results, icon-based)
6. Company background narrative (national history + local franchisee story)
7. Designer Colors showcase (with "Get Started" CTA)
8. Commercial services promotion block
9. Testimonial + trust-badge section (BBB, financing, Age-Safe America)
10. Second quote form
11. Footer: service links, support links, address/phone, hiring banner, social, legal

The national homepage follows nearly the same skeleton (hero → carousel → 3 benefits → credibility copy → 4 stat blocks → BBB/testimonial → lead form → footer), confirming a shared template.

## 2. Hero headline
Paraphrase: "Refinishing beats replacement" — refinish your existing tubs, tile, showers, and counters instead of ripping them out, saving time and money. **Angle:** a category-framing/objection-killing angle. It doesn't sell the company or the outcome first; it sells the *method* against the default alternative (replacement/remodel). Rational, cost-and-hassle-avoidance positioning rather than aspirational or premium. The national subhead ("we make it beautiful again") adds a light emotional note, but economy is the lead.

## 3. Primary CTA
The phone number is the true primary CTA: **"Call the Pros: (954) 890-0817"** — persistent in the header, repeated in hero, body, and footer. The tagline "Do it right the first time. Call the Pros." reinforces phone-first conversion. Secondary in visual weight but primary for web capture: **"Request a quote today"** paired with an embedded lead form that appears twice on the page (mid-page and lower).

## 4. Secondary CTA
"Visit our Showroom / Contact Us" (header) and "Get Started" (under Designer Colors). On the national site, "Find your Nearest Location" (header) acts as the routing CTA into franchise pages. Notably, showroom visits are by appointment only, which undercuts that CTA.

## 5. Navigation items
Local nav is service-dominant: a Residential dropdown (Bathtub, Countertop, Ceramic Tile, Cabinet, Bathroom Vanity, Floor Refinishing; Fiberglass Tub Repair; Bathing Safety; Grout Cleaning; Additional Services) plus top-level **Commercial Services, Designer Colors, Reviews, Jobs, Gallery**. National nav: RESIDENTIAL (same dropdown), COMMERCIAL, DESIGNER COLORS, PHOTO GALLERY, SOLUTIONS CENTER. Notable: "Jobs"/hiring occupies prime nav and banner space on the local site — recruiting competes with lead-gen.

## 6. Service categories
Bathtub refinishing; countertop refinishing; ceramic tile refinishing; shower refinishing; bathroom vanity refinishing; cabinet refinishing/solutions; floor refinishing; fiberglass tub repair; chip/scratch and surface repair; grout cleaning; bathing safety / aging-in-place (walk-in conversions); commercial services. Broad, kitchen-and-bath-centric taxonomy — one page per service, each with a local URL.

## 7. Quote / booking flow (steps, friction points)
Flow: fill a short embedded lead form (or call) → franchise contacts you → in-home/showroom estimate. Single-step form, no multi-step wizard, no instant pricing, no online scheduling.
**Friction points:** (a) the dedicated Contact Us page has *no form at all* — only phone and an appointment-only showroom, a dead end for form-preferring users; (b) no response-time promise ("we'll call within X"); (c) aggressive marketing-consent language (autodialed calls/texts disclosure) sits right at the point of conversion; (d) no photo upload, no ballpark estimator, no calendar booking; (e) phone-first design excludes after-hours and phone-averse buyers.

## 8. Form fields
The embedded quote form is minimal: name, email, phone (contact fields), a marketing-consent checkbox (with autodial/text/voicemail disclosure and "reply STOP" opt-out), and standard msg/data-rate disclaimer. No zip field visible, no service-type dropdown, no project description box, no photo upload observed. (Form renders partly via script, so a hidden field or two is possible, but the visible flow is name/email/phone + consent.)

## 9. Trust signals
- "Founded in 1979" / "45+ Years of experience" / "44 Years of Excellence" badge
- "Over 1.1 million satisfied customers" (also "1.5MM+ customers" on national — inconsistent figures)
- "200+ Locations coast to coast"; volume claim: more refinishing projects annually "than all of our competitors — combined"
- BBB seal (A+ highlighted nationally; local seal tied to Davie, FL profile)
- Financing badge (FOA Home Improvement); Age-Safe America Certified Home Safety Specialist logo
- Licensed & insured; trained/certified technicians; proprietary MM-4 bonding agent (technology moat claim)
- Local: family-owned, six East Coast franchises, in the MM system since 2005; "independently owned and operated" disclaimer

Almost all trust equity is *national*; local trust (local reviews, local awards, named local team) is thin.

## 10. Warranty / guarantee language
The homepage only implies it ("honest service backed by a great warranty") and leans on a durability claim: finishes "last 10-15 years or more." The concrete promise is buried in the FAQ: a **five-year warranty on bathtubs, wall tile, and fiberglass units covering workmanship, peeling, or other adhesion failure; 1-year warranty on commercial work.** No satisfaction/money-back guarantee. The strongest reassurance a buyer needs is effectively hidden.

## 11. Before-after gallery pattern
Two patterns: (a) on homepage/service pages, a small **carousel of 4 numbered before/after pairs** shown side-by-side, with dot navigation; service pages add short captions ("hard to clean, outdated bathroom given new life") and Pinterest/Facebook share buttons. (b) The dedicated Photo Gallery page is a **plain grid (~20 images) with only two filter tabs (Kitchen / Bathroom)**, no before/after pairing, no interactive sliders, **no captions**, no project stories, no location or service tags. Photos are real jobs but presented without context — a major missed opportunity.

## 12. Review / testimonial strategy
Weak. The homepage shows a **single curated quote** with no name, star rating, date, or platform attribution ("What a boost to my morale…" — the *same* quote appears on the national homepage, exposing the template). The local Reviews page rendered essentially **empty** in a static fetch — just a "Customer Reviews" header and a "Write a Review" link (to `/miami-north/reviews-prequal`, implying a gated/pre-qualified submission flow); reviews are likely injected by a JS widget, meaning they may be invisible to crawlers and slow-loading users. No aggregate rating, no Google review count, no review schema evident.

## 13. Color palette impression
Corporate blue/teal-led scheme with white space-heavy layouts and the red-accented Miracle Method logo; trust-badge blues (BBB) reinforce it. Reads as clean, safe, corporate franchise — competent but generic home-services branding, not premium/design-forward. Nothing evokes "luxury surfaces" despite the Designer Colors product line.

## 14. Typography impression
Modern, large sans-serif headlines carrying the key claims ("Refinishing beats replacement"), with unremarkable body type. Functional and legible, template-consistent across national and local pages, but no distinctive typographic personality — it reads corporate-standard rather than crafted or premium.

## 15. Photography style
Predominantly **authentic job-site documentation**: real befores (stained, chipped, dated tubs and tile) against real afters. This is credible but unglamorous — inconsistent lighting/framing, no styled or editorial shots, no people/technicians at work, no video. The Designer Colors section is the only place with a more polished, aspirational visual treatment.

## 16. Mobile UX observations (inferred)
- Phone number is rendered as a tap-to-call link in the header with a mobile icon — click-to-call is clearly the intended mobile conversion path.
- Repeating the quote form twice and the phone CTA 4+ times per page suggests long-scroll mobile pages relying on repetition rather than a **sticky bottom CTA bar** (none evident in markup).
- Mega-menu with 11 residential sub-items will collapse into a deep hamburger tree — several taps to reach a service page.
- Carousel-based before/afters (dot navigation) are thumb-friendly but low-information on small screens; the caption-less gallery grid gives mobile users little to engage with.
- Consent legalese under the form adds visual weight at the exact conversion moment on mobile.

## 17. Commercial vs residential positioning
Residential-first, commercial-attached. Residential owns the hero, nav dropdown, gallery, and Designer Colors; commercial gets one nav item, one promo block, and a dedicated `/miami-north/commercial` page. National copy claims commercial scale ("no job is too big," hotels-type volume claims) and the commercial 1-year warranty exists, but there is no commercial-specific proof (case studies, property-manager testimonials, downtime/ROI math) on the pages crawled. Commercial is a door left open, not a developed funnel.

## 18. SEO page structure
- **URL pattern:** `miraclemethod.com/{franchise-slug}/{service-slug}` — every franchise gets a full mirrored subtree (`/miami-north/bathtub-refinishing`, `/miami-north/photo-gallery`, `/miami-north/faq`, etc.). Classic franchise location-page architecture at scale.
- **Title tags:** service keyword + city/state ("Fiberglass Tub Repair Ft. Lauderdale, FL") — solid local-SEO titling.
- **H1s:** weaker — the service page H1 was the generic "Welcome to Miracle Method of Miami North" (branded, not keyword/service-targeted), and page content is largely duplicated national boilerplate across hundreds of franchise subtrees, with only counties/address localized. Oddity observed: the `/bathtub-refinishing` URL served fiberglass-tub-repair-titled content — a template mapping sloppiness.
- Local markers present: address, service-area counties, local BBB profile. Little evidence of unique local copy, city-specific landing pages beyond the one franchise slug, or visible review schema.

## 19. Content strategy
Modest and conversion-adjacent rather than a true content program. Assets: a per-franchise **FAQ (~13 questions in three groups — process, finish quality, differentiators)** with genuinely useful objection-handling (timelines "3-5 hours, usable in 24," refinishing-vs-reglazing explainer, warranty terms, partial cost comparison "$3,000+ to replace, save up to 75%"); educational blocks inside service pages (MM-4 bonding agent, material compatibility); Designer Colors as a product-content hybrid; a "Solutions Center" in national nav (404'd during this crawl — either broken or oddly routed). **No blog, no guides, no cost calculators, no video content, no downloadable resources** found. Pricing transparency is limited to comparative framing, never actual ranges.

## 20. Weaknesses Lustre can exploit
1. **Broken quote UX:** the Contact page has no form and the showroom is appointment-only. Lustre: a fast, always-visible quote form with photo upload, service selector, and a "response within X hours" promise — plus online scheduling.
2. **Invisible reviews:** an effectively empty reviews page and one anonymous recycled quote. Lustre: attributed Google reviews with counts, stars, dates, review schema, and video testimonials, surfaced on every page.
3. **Buried warranty:** their 5-year warranty lives in an FAQ. Lustre: put a bold, named guarantee front-and-center in the hero and near every CTA.
4. **Generic template feel:** identical copy across ~200 franchises, same testimonial nationally and locally, mismatched page titles. Lustre: genuinely local content — neighborhood project stories, named technicians, local landmarks/case studies.
5. **Caption-less, slider-less gallery:** Lustre: interactive before/after sliders with project narratives (problem, process, timeline, location).
6. **Economy positioning vacuum at the premium end:** their entire pitch is "cheaper than replacement." Lustre's premium positioning (craft, design, finish quality, white-glove service) is uncontested.
7. **No pricing transparency:** even ballpark ranges or a cost estimator would out-convert them.
8. **Consent-heavy, phone-first funnel** alienates digital-native buyers; text/chat-friendly, low-pressure contact options win that segment.
9. **Weak commercial proof** despite claimed commercial scale — case studies with downtime/ROI math could capture property managers.
10. **Dated visual brand:** authentic but unstyled photography and corporate-generic design leave the aspirational, design-led visual lane open.

---

**Overall verdict:** Miracle Method's web presence is a competent, SEO-scaled franchise machine — its mirrored location subtrees, keyword-localized titles, and 45-year/1.1M-customer national trust stack make it formidable at capturing "bathtub refinishing near me" search demand. But the individual franchise experience is thin: a form-less contact page, an empty-rendering reviews page, a caption-less gallery, a buried warranty, and copy-pasted national content mean it converts on brand inertia rather than experience quality. A locally authentic, review-rich, design-forward site with a frictionless quote flow can decisively outclass them on everything after the click, even if outranking them takes longer.
