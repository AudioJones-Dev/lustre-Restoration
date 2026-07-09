# Lustre Surface Restoration — Website Implementation Plan

## Purpose

This document gives Codex/Claude a clean implementation target for the first Lustre landing page. It converts the strategy docs into a buildable website scaffold without requiring the agent to infer business logic.

## Build objective

Create a fast, mobile-first landing page that converts South Florida surface restoration prospects into quote requests.

## Recommended stack

Use a simple, maintainable stack first. Avoid overbuilding.

### Preferred option

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod validation
- Vercel deployment

### Acceptable MVP option

- Static HTML / Astro / Next.js single page
- Form posts to email, CRM webhook, Airtable, Google Sheet, or GoHighLevel

## Initial route map

The MVP should start as a one-page site.

```text
/
```

Future routes:

```text
/services
/gallery
/commercial
/materials
/referral-partners
/quote
/privacy
/terms
```

## Page sections

Build the homepage in this order:

1. Header
2. Hero
3. Audience cards
4. Problem section
5. Solution / process section
6. Services section
7. Package tiers
8. Before/after proof section
9. Materials section
10. Warranty / expectations section
11. Service area section
12. Referral partner section
13. FAQ
14. Final CTA
15. Footer

## Component plan

Recommended components:

```text
components/
  Header.tsx
  Hero.tsx
  AudienceCards.tsx
  ProblemSection.tsx
  ProcessSteps.tsx
  ServiceCards.tsx
  PackageCards.tsx
  BeforeAfterSection.tsx
  MaterialsSection.tsx
  WarrantySection.tsx
  ServiceAreaSection.tsx
  ReferralPartnerSection.tsx
  FAQSection.tsx
  QuoteForm.tsx
  FinalCTA.tsx
  Footer.tsx
  StickyMobileCTA.tsx
  BeforeAfterSlider.tsx
  TrustStrip.tsx
```

Component notes from competitive research (`business/research/competitor-analysis/README.md`):

- `BeforeAfterSlider`: draggable comparison slider with a caption bar (surface · finish · area · turnaround). No competitor has one; this is the signature visual component. `BeforeAfterSection` composes it.
- `TrustStrip`: response-time promise + guarantee badge + verifiable review proof, rendered adjacent to the hero CTA and the quote form. Only display claims that are true and documented.
- `StickyMobileCTA`: three actions — Call · Text · Photo Quote. No competitor has a sticky mobile bar despite all being phone-first.
- `QuoteForm`: max 3 steps, scope questions before contact fields (tap-friendly radio cards → photos + ZIP → contact + time preference). Never require contact info to start.

## Content source of truth

Use these docs as source material:

- `product/LANDING_PAGE_SPEC.md`
- `product/QUOTE_FORM_SCHEMA.md`
- `business/CRM_PIPELINE.md`
- `business/BRAND_FOUNDATION.md`
- `business/OPERATING_GUARDRAILS.md`
- `business/research/competitor-analysis/README.md` (design/conversion patterns to adopt and avoid)

## Visual direction

The site should feel:

- Premium
- Clean
- Modern
- Trustworthy
- High-contrast
- Mobile-first
- Visual proof driven

Avoid:

- Cheap contractor template feel
- Overly busy effects
- Unverified claims
- Stock-heavy design that looks generic
- Too many CTAs competing with the quote request

## Brand copy

### Primary headline

Refresh countertops and cabinets without a full remodel.

### Subheadline

Lustre Surface Restoration helps South Florida homeowners, landlords, Airbnb hosts, and property managers renew high-visibility surfaces with premium wraps and restoration options — fast, clean, and without demolition.

### Primary CTA

Get My Free Photo Quote

### Secondary CTA

Text Photos for Estimate

## Quote form implementation

Build `QuoteForm` with the minimum viable fields:

- full_name
- phone
- email
- zip_code
- project_type
- property_type
- timeline
- photos
- notes
- sms_consent

Validation rules:

- full_name required
- phone required
- zip_code required
- project_type required
- property_type required
- timeline required
- sms_consent required
- photos optional but strongly encouraged

## Form options

### project_type

- Countertop wrapping
- Cabinet wrapping
- Countertop + cabinet wrapping
- Bathroom vanity
- Rental / Airbnb refresh
- Commercial surface
- Unsure / need recommendation
- Future floor or stone restoration inquiry

### property_type

- Homeowner
- Condo owner
- Landlord / rental owner
- Airbnb / short-term rental operator
- Property manager
- Fix-and-flip investor
- Realtor / stager
- Commercial property / business
- Other

### timeline

- ASAP
- This week
- 1–2 weeks
- 30 days
- 60+ days
- Just researching

## Form submission behavior

For the first scaffold, form submission can be mocked or routed to a placeholder API endpoint.

Required UX behavior:

- Show success state after submission
- If photos were uploaded, confirm photos received
- If no photos were uploaded, request photos in the confirmation copy
- Do not imply a final quote was generated automatically

Future integrations:

- GoHighLevel webhook
- Airtable lead table
- Google Sheets validation dashboard
- SMS follow-up
- Email notification
- CRM pipeline creation

## Analytics events

Add event hooks or placeholder comments for:

- page_view
- hero_cta_click
- sticky_cta_click
- quote_form_start
- quote_form_submit
- photo_upload
- call_click
- text_click
- referral_partner_cta_click

## SEO basics

### Title

Lustre Surface Restoration | Countertop & Cabinet Wrapping in South Florida

### Description

Refresh countertops, cabinets, vanities, rental units, and commercial surfaces without full replacement. Fast photo quotes for South Florida homeowners, Airbnb hosts, landlords, and property managers.

### Local keywords

- countertop wrapping South Florida
- cabinet wrapping Miami
- kitchen wrapping Miami
- countertop wrap Broward
- cabinet wrap Palm Beach
- Airbnb rental refresh Miami
- surface restoration South Florida

### SEO hygiene rules (from competitor audit)

The competitive field is riddled with fixable SEO errors — avoid all of them:

- One clean H1 per page, human-readable (no keyword strings or slashed variants)
- Title pattern: `{Value proposition} | Lustre Surface Restoration` — never "Home - Brand"
- One canonical URL pattern; no duplicate slugs or trailing-hyphen URLs
- FAQPage schema on the FAQ section; LocalBusiness schema with the real service area (no 130-city areaServed stuffing)
- No footer city-link farms; city pages come later, few and genuinely local
- Meta description present on every route
- Performance budget: fast LCP on 4G, responsive images, minimal JS (competitor pages ship 400–600KB of HTML)

## Compliance and claims guardrails

Do not claim:

- Licensed contractor unless true
- Insured unless active coverage exists
- Certified installer unless certification exists
- Lifetime warranty
- Scratch-proof, heat-proof, or damage-proof
- Completed Lustre projects before portfolio exists
- Floor restoration as active service before readiness gates are complete

Do say:

- Photo-based quote request
- Preliminary estimate
- Surface suitability must be confirmed
- Material and workmanship warranty terms depend on scope and product
- Floor restoration is planned for a future division

## File structure target

```text
app/
  page.tsx
  layout.tsx
  globals.css
components/
  Header.tsx
  Hero.tsx
  QuoteForm.tsx
  ...
lib/
  quote-schema.ts
  lead-scoring.ts
content/
  landing-page.ts
```

## Acceptance criteria

The implementation is acceptable when:

- The homepage renders without runtime errors
- The page is mobile responsive
- The primary CTA scrolls to or opens the quote form
- The quote form validates required fields
- The success state is clear
- No unverified claims are present
- Copy aligns with the landing page spec
- Future floor restoration is represented only as planned expansion
- Code is organized for later CRM/API integration

## Non-goals for MVP

Do not build yet:

- AI estimator
- Finish visualizer
- Customer portal
- Payment processing
- Full CRM dashboard
- Auth system
- Multi-page SEO site
- Admin backend

Those belong after the validation landing page is live and producing leads.
