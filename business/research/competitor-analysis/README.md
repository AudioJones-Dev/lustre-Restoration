# Lustre Surface Restoration — Competitor Design Research

**Date:** 2026-07-08 · **Scope:** 8 competitor websites, crawled live (homepage + 3–7 internal pages each: services, gallery, quote flow, about, reviews, sitemaps/raw HTML where useful). Patterns and observations only — no copied language or assets.

Full per-site 20-point reports live in [`sites/`](sites/):

| # | Competitor | Type | Web presence verdict |
|---|---|---|---|
| 1 | [Kitchen Wrap Direct](sites/01-kitchenwrapdirect.md) | Kitchen wrap specialist | **Strongest direct competitor.** Best funnel in the set (ZIP micro-commitment, 3-step wizard, photo upload, pricing in nav, visualizer). Shallow beneath the funnel: ~6-project gallery, no third-party reviews, no phone, no team, no location SEO. |
| 2 | [Wrap Master Pro](sites/02-wrapmasterpro.md) | Cabinet refacing/wrap | Lean paid-traffic lead-gen shell. Great mobile contact stack (call/SMS/WhatsApp, bilingual), but 4 pages deep, no portfolio, no warranty, no content. Moat is ad spend, not web presence. |
| 3 | [Prestige Glass Tint](sites/03-prestigeglasstint.md) | Window film + surface protection | Mid-tier. Deep service-silo SEO and PPC landing pages, but stock imagery, zero real reviews on-site, a 20+-field quote form, and a dead "Service Area" nav link. |
| 4 | [AWS Wrap](sites/04-awswrap.md) | Automotive wrap shop w/ kitchen bolt-on | Weak in this category. Kitchen page shows car photos; kitchen leads funnel into a generic 4-field form; dark car-shop branding alienates home buyers. |
| 5 | [All Surface Refinishing](sites/05-refinishing-florida.md) (refinishing-florida.com) | Refinishing generalist | **SEO-strong, experience-weak.** 14,000-project claim, Kohler authorization, near-daily blog, two generations of city pages — but call-only conversion, dated Divi design, mismatched nav slugs, typo in the warranty banner. |
| 6 | [America Refinishing Pros](sites/06-americarefinishingpros.md) | Refinishing generalist | SEO-strong (~109-page city farm, FAQ schema), design-weak: broken stat counters (6M "happy clients"), unattributed "1,004 reviews," typos, walls of keyword text, no quote flow. |
| 7 | [Miracle Method (Miami North)](sites/07-miraclemethod-miami-north.md) | National refinishing franchise | Formidable at capturing search (200+ location subtrees, 45-year national trust stack) but thin after the click: form-less contact page, empty-rendering reviews page, caption-less gallery, warranty buried in FAQ. |
| 8 | [Factory Direct Renovations](sites/08-factorydirectrenovations.md) | Kitchen/bath remodeler | Strongest broader-budget competitor. Real trust fundamentals (since 1991, GC license # sitewide, lifetime warranty, financing) on a dated Elementor template with an acid-yellow contractor palette and callback-only lead flow. |

**Read on the field:** Kitchen Wrap Direct is the strongest *direct* competitor (best conversion machinery). Factory Direct Renovations is the strongest *broader-budget* competitor (real credentials + financing for bigger tickets), with Wrap Master Pro as the paid-traffic threat. The organic-search incumbents to respect long-term are All Surface Refinishing, America Refinishing Pros, and Miracle Method — they own volume, not experience.

---

## Synthesis

### Common design patterns (what everyone does)

- **Template-grade WordPress builds.** 7 of 8 sites are WordPress + Elementor/Divi/Astra with stock Google fonts (Poppins, Open Sans, Roboto, Outfit). Nobody has a designed brand system; "premium" is claimed in copy and contradicted by the pixels.
- **Cost-avoidance positioning, universally.** Every site sells "save 75% vs. replacement," "no demolition," "affordable." The entire category anchors on being the cheap alternative to remodeling. Not one competitor sells craftsmanship, design outcome, or asset value.
- **Phone-first conversion.** Click-to-call `tel:` links everywhere; forms are callback requests, never bookings. Zero sites offer online scheduling, instant estimates, or a stated response-time SLA.
- **"Free Quote / Free Estimate" CTA repeated 4–6× down a long single-page scroll**, usually routing to one generic contact form.
- **Static photo-grid galleries.** No competitor has interactive before/after sliders. Best-in-set is Miracle Method's small 4-pair carousel and Kitchen Wrap Direct's static side-by-side pairs. Captions, locations, and project stories are absent almost everywhere.
- **Self-hosted, unverifiable social proof.** Star ratings and quotes are hand-pasted; none embed a live Google review widget, none use Review/AggregateRating schema, several recycle the same 2–6 quotes across every page.
- **Vague warranties.** "Competitive warranty," "backed by guarantees," "lifetime warranty — some limitations apply." Only Kitchen Wrap Direct (5-year written) and All Surface Refinishing (5-year, own nav item) make concrete promises, and even those bury terms.
- **FAQ accordions as the main content asset**, usually without FAQPage schema.

### Strongest conversion patterns observed (worth adapting)

1. **ZIP-code micro-commitment in the hero** (Kitchen Wrap Direct) — a one-field ask that starts the funnel before any contact details.
2. **Multi-step radio-button quote wizard with optional photo upload** (Kitchen Wrap Direct: door style → quantity → contact) — low-effort scoping steps front-load commitment before the contact ask.
3. **Dollar-savings testimonials** (Kitchen Wrap Direct: "Saved $16,000" with name + city) — quantified proof beats adjectives.
4. **Pricing in the top nav / "from $X" anchoring** (Kitchen Wrap Direct) and **real price anchors in FAQ** (All Surface Refinishing: $350–$650 tubs) — transparency is rare and confidence-signaling.
5. **Multi-channel mobile contact stack** (Wrap Master Pro: call + SMS + WhatsApp, bilingual) — meets the South Florida mobile buyer where they are.
6. **Single relentless CTA verb** (Factory Direct: "Schedule a Consultation" identically worded in header, hero, mid-page, footer) — consultation framing suits high-ticket sales.
7. **Visualizer / interactive tools** (Kitchen Wrap Direct's wrap visualizer; AWS Wrap's vehicle price calculator) — the only self-serve interactivity in the category, and it's barely used.
8. **License number displayed sitewide** (Factory Direct CGC #1522290; All Surface CGC 016486) — cheap, concrete trust.
9. **Objection-killing FAQ with hard numbers** (Miracle Method: "3–5 hours, usable in 24," refinish-vs-reglaze explainer).

### Weakest UX patterns observed (avoid all of these)

- Contact pages with **no form** (Miracle Method) or **three duplicate forms** (America Refinishing Pros).
- **20+ field quote forms** with conditional branches and consent legalese at the conversion moment (Prestige Glass Tint; Wrap Master Pro's 9 required fields).
- **Quote funnels that dead-end without a number** — collect scoping data, then "we'll call you."
- **Galleries that hide the product:** three-click drill-downs to reach ~12 uncaptioned images (Prestige), raw uncaptioned phone dumps (All Surface's ~160 images), car photos on a kitchen page (AWS Wrap).
- **No sticky mobile CTA bar anywhere** despite phone-first models — the number scrolls away.
- **Trust-destroying sloppiness:** broken stat counters showing 6.1M happy clients, "WARRANY" typos, "Happy Client's," "FAQ FAQ" title tags, dead nav links, mismatched slugs (/tub/ = gallery, /bathroom/ = contact), inconsistent years-in-business claims on the same site.
- **Recycled testimonials** — the same quote appearing on a national homepage and a local franchise page, exposing the template.

### Best CTA language (category patterns, adapt don't copy)

- **Action + value + zero risk:** "Get Your Free Estimate" outperforms generic "Contact Us" / "Learn More" / "Click Here" (all live in this set).
- **Consultation framing for high tickets:** "Schedule a Consultation" positions expertise; "Free Quote" positions price.
- **Micro-commitment first:** ZIP entry or "see if we serve your area" before asking for name/phone.
- **The open lane for Lustre:** nobody says anything like "Get an instant estimate from a photo" / "Text us a photo, get a price today." An AI-photo-quote CTA is simultaneously the lowest-friction ask in the category and an unmistakable differentiator. Pair it with a "response within X hours" promise — no competitor states one.

### Best proof strategy (assembled from fragments — no one does all of it)

1. **Verified review architecture:** embedded live Google review widget with aggregate score + count + links, Review/AggregateRating schema, reviews placed *next to the quote form*, not on a separate page. (Zero competitors do this; it instantly out-credentials all eight.)
2. **Quantified outcome testimonials:** name + neighborhood + dollar figure or timeline.
3. **Interactive before/after sliders with metadata captions** (surface, finish, city, turnaround, ballpark cost band) and per-project stories.
4. **Concrete credential strip:** license number, insurance, named certifications/manufacturer authorizations (Kohler-style), years, project count — consistent everywhere it appears.
5. **Humans:** founder story, named technicians, team photos, process video. The entire competitive set is faceless.
6. **A named, written guarantee** rendered as a designed badge near every CTA, with plain-English terms one click away.

### Best homepage structure (synthesized from what works, gaps filled)

1. Hero: outcome-led headline (transformation + premium, not price) + AI photo-quote entry (photo upload or ZIP) + secondary "See transformations"
2. Trust strip: aggregate Google rating (live), license #, guarantee badge, project count
3. Signature before/after slider showcase (3–4 projects, captioned)
4. Services grid (surface-first: stone, tubs/tile, cabinets, countertops…)
5. "How it works" — 3 steps ending in a scheduled slot, with response-time SLA
6. Audience router: Homeowners / Airbnb & investors / Property managers & commercial
7. Guarantee section (named warranty, plain terms)
8. Reviews (embedded, verifiable) + team/craft section
9. Transparent pricing anchor or estimate ranges
10. FAQ (with FAQPage schema) → final CTA repeating the photo-quote ask
11. Clean footer (no city-link farms)

### Opportunities for Lustre to differentiate

1. **Own the premium lane — it is empty.** All eight competitors position on cheap/fast/no-demo. "Premium architectural surface restoration" has zero incumbents; the buyer who cares about finish quality, design, and asset value currently has nowhere to land.
2. **AI photo quote = category-first instant estimate.** Nobody offers any on-screen number. Even the best funnel (Kitchen Wrap Direct) collects photos and then goes silent. An instant ballpark from a photo collapses the category's biggest friction point.
3. **Investor / Airbnb / property-manager packages.** Commercial is either absent (5 of 8 sites), a single thin page (Miracle Method, AWS), or quietly penalized (All Surface halves its warranty for commercial work). Turn-focused packages — unit-turn pricing, downtime math, ROI framing, portfolio/maintenance plans, an account-manager promise — face no competition.
4. **Interactive before/after storytelling** — sliders + captions + project narratives. The whole category sells visual transformation and no one presents it well.
5. **Verified-proof stack** (live reviews, schema, license, named guarantee, faces). Every competitor's proof is self-asserted.
6. **Online scheduling + response SLA.** Every competitor is a callback lottery.
7. **City landing pages done right** — small number, genuinely local (projects, reviews, landmarks), full LocalBusiness/Service/FAQ/Review schema. The SEO incumbents' geo pages are templated keyword farms with visible copy-paste errors; most direct competitors have none at all.
8. **Pricing transparency, premium-framed** — "how pricing works" + honest ranges positions above the price-shopper frame the incumbents anchor ($350 tubs) without hiding the ball like everyone else.
9. **Financing** — only Factory Direct and All Surface mention it; "as low as $X/mo" is absent from every direct wrap/refinish competitor.
10. **Speed and polish as trust.** Competitor pages run 400–600KB of HTML with lazy-load failures and hidden mobile heroes. A fast, flawless site is itself a differentiator in a category riddled with typos and broken widgets.

### Recommended Lustre design system updates

- **Palette:** light, warm, interior-design-adjacent premium — stone/plaster neutrals, deep charcoal ink, one refined metallic-warm accent (brass/bronze family) for CTAs. Explicitly avoid the category's contractor blue, car-shop red/black, and acid yellow. High-contrast accent reserved for conversion actions only.
- **Typography:** one distinctive display face for headlines (an editorial serif or high-character sans — something no Elementor template ships with) + a clean humanist sans for UI/body. Sentence-case headlines; ban ALL-CAPS shouting and sentence-length H1s.
- **Photography direction:** consistent color grade; three mandated shot types per project — true before (honest), styled after (editorial), and craft close-up (texture/finish detail); plus team-at-work and founder portraits. No stock, no raw phone dumps on public pages.
- **Signature component: the before/after slider** with a metadata caption bar (surface · finish · location · turnaround). Make it the brand's visual trademark — it doubles as the AI-quote marketing proof.
- **Trust components:** live review widget, guarantee badge (named warranty), credential strip (license/insurance/certs), technician profile cards. Designed once, reused near every CTA.
- **Mobile pattern:** sticky bottom action bar — Call · Text · Photo Quote. No competitor has one.
- **Performance budget:** fast LCP on 4G, responsive images, no builder bloat — measurable superiority over the 600KB Elementor field.
- **Schema layer as part of the system:** LocalBusiness, Service, FAQPage, AggregateRating on every relevant template from day one.

### Recommended landing page changes

1. **Hero rebuild:** outcome-led premium headline + the AI photo quote as the primary CTA ("upload a photo → instant estimate range"), ZIP fallback for the camera-shy, "See transformations" secondary. Kill any generic "Contact Us" primary.
2. **Put the guarantee and live review score above the fold** (trust strip directly under the hero).
3. **Replace the generic contact form with a 3-step wizard:** (1) surface type (visual radio cards) → (2) photos + ZIP → (3) contact + preferred time slot; show an instant estimate range at step 3 and confirm a scheduled assessment, not a callback. State the response SLA on the form.
4. **Add the audience router** (Homeowners / Airbnb & investors / Property managers) with dedicated landing pages: investor pages lead with unit-turn cost, downtime, and portfolio pricing; homeowner pages lead with design outcome and guarantee.
5. **Ship the before/after slider section with captioned project stories** on the homepage and every service page; retire any uncaptioned grid.
6. **Reviews beside the form,** quantified where possible; link everything to the live Google profile.
7. **Add a "How pricing works" section/page** with honest ranges — premium-framed transparency.
8. **Add financing messaging** near price anchors.
9. **Sticky mobile bottom bar** (Call · Text · Photo Quote) on all pages.
10. **SEO hygiene from launch:** one canonical URL pattern, keyword-clean titles (no "Home - Brand"), one clear H1 per page, FAQ schema on FAQ content, a handful of genuinely local city pages instead of a footer city farm.

---

*Method note: crawled 2026-07-08 via parallel research agents using live page fetches (markdown conversion + raw HTML/CSS/sitemap inspection where converters failed). One caveat: Miracle Method's reviews page and Wrap Master Pro's gallery render via JavaScript and could not be fully assessed from static fetches — noted in the per-site reports.*
