# Lustre Surface Restoration — Design System

## Status

Brand core locked v1.0 on 2026-07-08.

The following decisions are now canonical for the first public website and launch assets:

- Typography: **Cormorant Garamond** for display/headings and **Inter** for body/UI
- Color system: warm luxury palette governed by golden-ratio usage weights
- Materials palette: curated Lustre Collections for finish selection, sample kits, content, and future visualizer workflows
- Signature conversion primitive: photo quote CTA + draggable before/after slider + sticky mobile Call/Text/Photo-Quote bar

Remaining implementation gates before the full web design system is considered production-complete:

- Logo lockup updated to **Surface Restoration**
- Website mockup validates the tokens in context
- Mobile quote form is tested
- Copy QA confirms zero typos and consistent claims/numbers sitewide

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

Findings from the 8-competitor crawl (`business/research/competitor-analysis/`) that directly update this system. Every direct competitor runs a template-grade WordPress/Elementor build; the premium visual lane is empty.

### Validated by research (keep, now evidence-backed)

- **Warm premium palette (charcoal/ivory/champagne/stone):** no competitor uses anything like it. The field is contractor blue (#1868a5, #0581ab), car-shop red/black, acid yellow (#efeb48), and neon cyan/teal (#00A6FA). The Lustre palette differentiates on sight.
- **Sticky mobile CTA:** zero competitors have one, despite all being phone-first. Ship it as a three-action bar: Call · Text · Photo Quote.
- **Before/after image block:** no competitor has an interactive comparison slider anywhere (best-in-field is a static 4-pair carousel). Upgrade this primitive to a **draggable before/after slider with a metadata caption bar** (surface · finish · city · turnaround) and treat it as the brand's signature component.
- **Photo-quote-first button hierarchy:** no competitor offers any on-screen estimate; every funnel dead-ends in a callback. "Get My Free Photo Quote" is a category-first CTA.

### New rules from research

- **Banned typefaces:** Poppins, Open Sans, Roboto, and Outfit are the default faces of the competitive field and of the Elementor templates behind it. Do not use them.
- **Banned patterns:** ALL-CAPS shouty banner headings, sentence-length H1s, "Click here" link text, clip-art/icon-badge trust rows, footer city-link farms, keyword-stuffed hero copy. All appear across competitors and read as low-tier.
- **Trust components are a component family, not copy:** live Google review embed (aggregate score + count + link), named-guarantee badge, credential strip (license/insurance/certs — only once true), technician profile card. Competitors' proof is universally self-asserted and unverifiable; verified proof is a visible differentiator.
- **Copy integrity is a design token:** competitor sites carry live typos, broken stat counters, and inconsistent years-in-business claims. Zero-defect copy and consistent numbers are part of the premium signal — add a copy QA pass to the approval gate.
- **Performance budget:** competitor pages run 400–600KB of HTML before assets with lazy-load failures. Target fast LCP on 4G, responsive images, and no builder bloat.
- **Schema is part of the system:** LocalBusiness, Service, FAQPage, and AggregateRating markup on every relevant template from day one. Only one competitor has FAQ schema; none have review schema.

## Locked color system v1.0

The Lustre palette is not governed by arbitrary color decoration. It uses a restrained luxury system: warm surfaces, dark contrast, and limited metallic accent.

### Golden-ratio usage weights

The golden ratio should guide **visual weight**, not literal hue math. Gold should remain scarce so it feels premium.

| Role | Usage weight | Token | Hex | Use |
| --- | ---: | --- | --- | --- |
| Light field | 61.8% | `--color-ivory` | `#F8F4EA` | Page backgrounds, cards, form fields |
| Structure / text | 23.6% | `--color-ink` | `#15120D` | Primary text, header, footer, high-contrast blocks |
| Stone neutral | 9.0% | `--color-stone` | `#D8CBB8` | Section breaks, surface context, subtle borders |
| Accent | 3.4% | `--color-champagne` | `#C8A45D` | Primary accents, icon strokes, premium highlights |
| Deep accent | 1.3% | `--color-bronze` | `#8A653A` | Hover states, premium badges, subdued emphasis |
| Utility | 1.0% | Utility tokens | See below | Success, warning, error, info |

### Core tokens

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

### Utility tokens

```css
--color-success: #2F6B4F;
--color-warning: #A36A1F;
--color-error: #8E2F2F;
--color-info: #355C7D;
```

### Color usage rules

- Use ivory as the dominant field color.
- Use ink/charcoal for premium contrast and structure.
- Use champagne as a restrained accent, not as a large background color.
- Use bronze for subdued emphasis and hover states.
- Use stone neutrals to connect the interface to material reality.
- Avoid bright contractor blues, car-wrap reds, neon teals, acid yellows, and large gold fills.

## Locked typography system v1.0

### Display / headings

**Cormorant Garamond**

Use for:

- Hero headlines
- H1/H2 display moments
- Premium editorial section titles
- Collection names
- Quote pullouts

Why it fits:

- Premium and architectural
- Restoration-oriented rather than tech-generic
- Strong contrast with utilitarian competitors
- Pairs naturally with the existing Lustre logo direction

### Body / UI

**Inter**

Use for:

- Body copy
- Buttons
- Forms
- Navigation
- Labels
- CRM/product interfaces
- Mobile UI

Why it fits:

- Highly readable
- Excellent for forms and dashboards
- Scales from public website to future customer portal/CRM
- Keeps the interface practical while the display face carries the premium signal

### Banned typography

Do not use the competitor-default typefaces for the Lustre public brand:

- Poppins
- Open Sans
- Roboto
- Outfit

## Type scale

Use a responsive golden-ratio-inspired modular scale, softened for web usability.

| Token | Desktop | Mobile | Font |
| --- | ---: | ---: | --- |
| Caption | 12px | 12px | Inter |
| Small | 14px | 14px | Inter |
| Body | 18px | 16px | Inter |
| Lead | 24–29px | 20–22px | Inter |
| H3 | 32–38px | 26–30px | Cormorant Garamond |
| H2 | 48–60px | 34–42px | Cormorant Garamond |
| H1 | 64–76px | 42–52px | Cormorant Garamond |
| Hero Display | 88–123px | 48–60px | Cormorant Garamond |

Implementation note: clamp values in CSS so headlines stay elegant on mobile.

## Spacing system

Use an 8px base with Fibonacci/golden-ratio steps for premium section rhythm.

```text
4
8
13
21
34
55
89
144
```

Rules:

- Use 8/13/21 for compact UI spacing.
- Use 34/55 for card and section internal spacing.
- Use 89/144 for large section spacing and hero rhythm.
- Avoid cramped contractor-template layouts.

## Materials palette v1.0

Lustre should not present materials as an overwhelming catalog of random finishes. It should sell curated finish stories that help customers make faster decisions.

### Stone Collection

- Carrara Marble
- Calacatta Gold
- Statuario Marble
- Travertine
- Limestone
- Soapstone
- Black Granite

### Concrete Collection

- Polished Concrete
- Architectural Concrete
- Warm Concrete
- Charcoal Concrete

### Wood Collection

- White Oak
- European Oak
- Walnut
- Smoked Oak
- Ash
- Ebony

### Metal Collection

- Brushed Brass
- Champagne Bronze
- Satin Nickel
- Matte Black
- Stainless Steel

### Matte Collection

- Soft White
- Graphite
- Greige
- Olive
- Sand

## Curated Lustre Collections v1.0

### Carrara Collection

**Palette:** Carrara Marble · White Oak · Champagne Bronze · Warm Ivory

Mood: bright, timeless, luxury coastal.

Best for:

- South Florida condos
- Bright kitchens
- Airbnb refreshes targeting premium photography
- Homeowners who want classic luxury without visual heaviness

### Palm Collection

**Palette:** Travertine · White Oak · Limestone · Soft Brass

Mood: warm South Florida contemporary.

Best for:

- Coastal homes
- Bathroom vanities
- Neutral kitchen refreshes
- Luxury rental properties

### Soho Collection

**Palette:** Matte Graphite · Walnut · Black Metal · Concrete

Mood: modern urban.

Best for:

- Apartments
- Condos
- Office surfaces
- Younger design-forward homeowners

### Executive Collection

**Palette:** Black Granite · Smoked Oak · Champagne Bronze · Charcoal

Mood: commercial, hospitality, executive.

Best for:

- Reception desks
- Restaurant bars
- Office casework
- Retail fixtures
- Premium commercial surfaces

### Rental Refresh Collection

**Palette:** Soft White · Greige · Warm Concrete · Light Oak

Mood: clean, durable, neutral, easy to re-rent.

Best for:

- Landlords
- STR operators
- Property managers
- Unit turns
- Investor refreshes

## Material presentation rules

- Use collections first, raw material catalogs second.
- Every finish shown on the website must be clearly labeled as sample, supplier image, mockup, or completed Lustre project.
- Do not imply a supplier sample is a completed Lustre install.
- When real portfolio work exists, prioritize actual before/after proof over material renders.
- Future AI visualizer should map recommended finishes to these collections first.

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
- TrustStrip
- BeforeAfterSlider
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

- Draggable before/after slider
- Smooth scroll to quote form
- Light hover states
- Subtle image reveal
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

**Completed 2026-07-08.** An 8-competitor design/UX/conversion/SEO crawl covering wrap specialists, refinishers, a national franchise, and adjacent remodelers lives at `business/research/competitor-analysis/` (synthesis in its README, full 20-point per-site reports in `sites/`). It covers all the extraction targets below: color patterns, typography patterns, CTA patterns, hero structure, proof strategy, form UX, before/after presentation, commercial vs residential positioning, common trust markers, and what to avoid. Key amendments are folded into the "Competitive research amendments" section above.

## Design system approval gate

This file is now canonical for **brand core v1.0**. Remaining gates apply to production implementation of the website UI:

1. ~~Competitive design research is completed.~~ Done — `business/research/competitor-analysis/`.
2. ~~Final color palette is selected.~~ Done — locked 2026-07-08.
3. ~~Typography is selected.~~ Done — Cormorant Garamond + Inter locked 2026-07-08.
4. Logo lockup is updated to Surface Restoration.
5. Website mockup uses these tokens successfully.
6. Mobile quote form is tested.
7. Copy QA pass confirms zero typos and consistent claims/numbers sitewide.

## Changelog

### 2026-07-08 — Brand core locked v1.0

- Locked Option A typography: Cormorant Garamond + Inter
- Converted draft palette into golden-ratio-governed color system
- Added material palettes and curated Lustre Collections
- Promoted competitive research findings into operating design rules
