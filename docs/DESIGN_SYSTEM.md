# Lustre Surface Restoration — Design System

## Status

Draft, updated with competitive design research (2026-07-08). The competitive research pass required by the approval gate is complete — see `research/competitor-analysis/README.md`. Remaining gates: final palette selection, typography licensing, logo lockup, mockup validation, mobile quote form test.

## Purpose

Create a premium, trustworthy, conversion-focused visual system for Lustre Surface Restoration that supports residential, rental, commercial, and future floor/stone restoration services.

## Brand feel

The interface should feel:

- Premium
- Clean
- Polished
- Local but not small
- High-trust
- Transformation-focused
- Material-forward
- Modern without looking trendy

Avoid:

- Cheap contractor-template aesthetics
- Overly industrial visuals
- Cluttered service menus
- Generic stock-photo remodeling imagery
- Claims-heavy hero sections without proof

## Visual positioning

Lustre should sit between:

- Luxury interior design studio
- Premium home-service contractor
- Commercial surface specialist
- Fast quote-driven local service business

It should not look like:

- A handyman site
- A car-wrap shop
- A discount remodeler
- A generic cleaning company

## Competitive research amendments (2026-07-08)

Findings from the 8-competitor crawl (`research/competitor-analysis/`) that directly update this system. Every direct competitor runs a template-grade WordPress/Elementor build; the premium visual lane is empty.

### Validated by research (keep, now evidence-backed)

- **Warm premium palette (charcoal/ivory/champagne/stone):** no competitor uses anything like it. The field is contractor blue (#1868a5, #0581ab), car-shop red/black, acid yellow (#efeb48), and neon cyan/teal (#00A6FA). The draft tokens differentiate on sight.
- **Sticky mobile CTA:** zero competitors have one, despite all being phone-first. Ship it as a three-action bar: Call · Text · Photo Quote.
- **Before/after image block:** no competitor has an interactive comparison slider anywhere (best-in-field is a static 4-pair carousel). Upgrade this primitive to a **draggable before/after slider with a metadata caption bar** (surface · finish · city · turnaround) and treat it as the brand's signature component.
- **Photo-quote-first button hierarchy:** no competitor offers any on-screen estimate; every funnel dead-ends in a callback. "Get My Free Photo Quote" is a category-first CTA.

### New rules from research

- **Banned typefaces:** Poppins, Open Sans, Roboto, and Outfit are the default faces of the competitive field (and of the Elementor templates behind it). Do not use them. Pick one distinctive display face + one humanist sans not present in the competitor set.
- **Banned patterns:** ALL-CAPS shouty banner headings, sentence-length H1s, "Click here" link text, clip-art/icon-badge trust rows, footer city-link farms, keyword-stuffed hero copy. All appear across competitors and read as low-tier.
- **Trust components are a component family, not copy:** live Google review embed (aggregate score + count + link), named-guarantee badge, credential strip (license/insurance/certs — only once true), technician profile card. Competitors' proof is universally self-asserted and unverifiable; verified proof is a visible differentiator.
- **Copy integrity is a design token:** competitor sites carry live typos ("WARRANY," "Happy Client's," "FAQ FAQ"), broken stat counters, and inconsistent years-in-business claims. Zero-defect copy and consistent numbers are part of the premium signal — add a copy QA pass to the approval gate.
- **Performance budget:** competitor pages run 400–600KB of HTML before assets with lazy-load failures. Target fast LCP on 4G, responsive images, no builder bloat.
- **Schema is part of the system:** LocalBusiness, Service, FAQPage, and AggregateRating markup on every relevant template from day one. Only one competitor has FAQ schema; none have review schema.

## Color direction

### Primary palette direction

- Deep charcoal / near black for premium contrast
- Warm ivory / soft white for backgrounds
- Muted gold / champagne for accents
- Warm taupe / stone neutrals for surface context

### Candidate tokens

These are draft tokens, not final approved colors.

```css
--color-ink: #15120D;
--color-charcoal: #24211C;
--color-ivory: #F8F4EA;
--color-stone: #D8CBB8;
--color-champagne: #C8A45D;
--color-bronze: #8A653A;
--color-muted-gray: #78746C;
--color-white: #FFFFFF;
```

## Typography direction

The brand should use a premium display face for headings and a clean readable sans-serif for body/UI.

### Direction A — Premium editorial

- Display: high-contrast serif
- Body/UI: clean geometric sans-serif

### Direction B — Modern luxury service

- Display: warm serif
- Body/UI: modern humanist sans-serif

### Direction C — Clean architectural

- Display: refined serif or restrained display sans-serif
- Body/UI: neutral sans-serif

## Type scale draft

```text
Display / Hero: 48–72px desktop, 38–44px mobile
H1: 44–56px desktop, 34–40px mobile
H2: 32–42px desktop, 28–34px mobile
H3: 22–28px
Body: 16–18px
Small: 14px
Caption: 12–13px
```

## Layout principles

- Mobile-first
- Large before/after visuals
- Clear quote CTA above the fold
- Minimal navigation during validation
- Spacious sections
- Strong contrast
- No cluttered icon grids
- Proof and process over long claims

## Component primitives

Required primitives for the website:

- Button
- Secondary button
- Text link
- Input
- Select
- Textarea
- File upload
- Checkbox
- Card
- Section heading
- Badge
- Trust marker
- Before/after image block
- Package card
- FAQ item
- Sticky mobile CTA

## Button hierarchy

### Primary

Used for quote conversion.

Label examples:

- Get My Free Photo Quote
- Quote My Kitchen
- Quote a Rental Refresh

### Secondary

Used for call/text actions.

Label examples:

- Text Photos for Estimate
- Call Now

### Tertiary

Used for lower-priority navigation.

Label examples:

- View Services
- Learn About Materials

## Photography direction

Prioritize real proof over decorative imagery.

Required future asset types:

- Wide before/after kitchen photos
- Close-up material texture shots
- Surface prep shots
- Installation process shots
- Finished vanity shots
- Rental refresh before/after sets
- Commercial counter/reception desk shots
- Future floor/stone restoration proof only after service is real

## Imagery guardrail

Do not imply supplier sample photos or concept mockups are completed Lustre projects. Label them clearly until the portfolio is real.

## Icon direction

Use minimal line icons only where they clarify process. Avoid large decorative icon grids.

Preferred icon categories:

- Photo quote
- Material sample
- Schedule
- Install
- Reveal
- Warranty / care

## Motion direction

Use restrained motion:

- Subtle image reveal
- Smooth scroll to quote form
- Light hover states
- No excessive animations
- No slow hero effects that reduce mobile speed

## Accessibility requirements

- Strong text contrast
- Visible focus states
- Labels for all form fields
- Keyboard-accessible form
- Alt text for images
- Avoid text embedded in images where possible

## Design research required

**Completed 2026-07-08.** An 8-competitor design/UX/conversion/SEO crawl covering wrap specialists, refinishers, a national franchise, and adjacent remodelers lives at `research/competitor-analysis/` (synthesis in its README, full 20-point per-site reports in `sites/`). It covers all the extraction targets below: color patterns, typography patterns, CTA patterns, hero structure, proof strategy, form UX, before/after presentation, commercial vs residential positioning, common trust markers, and what to avoid. Key amendments are folded into the "Competitive research amendments" section above.

## Design system approval gate

This file becomes canonical only after:

1. ~~Competitive design research is completed.~~ Done — `research/competitor-analysis/`.
2. Final color palette is selected.
3. Typography is selected and licensing is confirmed.
4. Logo lockup is updated to Surface Restoration.
5. Website mockup uses these tokens successfully.
6. Mobile quote form is tested.
7. Copy QA pass confirms zero typos and consistent claims/numbers sitewide.
