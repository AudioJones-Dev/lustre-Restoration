# Lustre Surface Restoration — Build Tasks

## Purpose

This task list translates the website implementation plan into discrete development tickets for Codex/Claude.

## Epic 1 — Project scaffold

### Task 1.1 — Initialize web app

Create a Next.js App Router project with TypeScript and Tailwind CSS.

Acceptance criteria:

- App runs locally
- TypeScript enabled
- Tailwind configured
- No demo boilerplate remains
- Basic metadata set for Lustre Surface Restoration

### Task 1.2 — Add content structure

Create `content/landing-page.ts` to hold page copy, service cards, package cards, FAQs, and service areas.

Acceptance criteria:

- Main page imports copy from content file
- No major page copy hardcoded across many components
- Content can be edited without touching layout logic

## Epic 2 — Landing page components

### Task 2.1 — Header and hero

Build header and hero with primary CTA and secondary click-to-text/call CTA.

Acceptance criteria:

- Hero uses approved headline
- CTA routes to quote form
- Mobile layout is clean
- No unverified trust claims appear

### Task 2.2 — Audience routing cards

Build cards for homeowners, rentals/Airbnbs, and commercial spaces.

Acceptance criteria:

- Each card has a clear audience-specific CTA
- CTAs route to quote form with intended project context when possible

### Task 2.3 — Process and services sections

Build process steps and launch-service cards.

Acceptance criteria:

- Process follows send photos → quote range → approve samples → schedule install → reveal transformation
- Launch services match `business/SERVICE_ARCHITECTURE.md`

### Task 2.4 — Package cards

Build package cards for Investor Refresh, Signature Surface Wrap, and Premium Architectural Finish.

Acceptance criteria:

- Package positioning matches `business/PRICING_MODEL.md`
- No hard final pricing shown unless explicitly approved
- CTA routes to quote form

### Task 2.5 — Materials, warranty, service area, referral, FAQ

Build remaining trust and conversion sections.

Acceptance criteria:

- Materials section avoids unsupported brand/certification claims
- Warranty section separates material and workmanship expectations
- FAQ states floor restoration is planned future expansion, not active launch service

## Epic 3 — Quote form

### Task 3.1 — Quote schema

Implement `lib/quote-schema.ts` using Zod.

Acceptance criteria:

- Required fields match `product/QUOTE_FORM_SCHEMA.md`
- SMS consent required
- Photos optional but encouraged

### Task 3.2 — Quote form UI

Build `components/QuoteForm.tsx`.

Acceptance criteria:

- Mobile-friendly
- Required fields validated
- Success and error states exist
- File upload UI supports multiple photos
- Confirmation copy differs depending on whether photos were uploaded

### Task 3.3 — Placeholder API route

Create a placeholder quote submission API.

Acceptance criteria:

- Form submission does not break
- Server validates payload
- Response includes success state
- Integration TODOs are documented for CRM/webhook

## Epic 4 — Analytics and conversion hooks

### Task 4.1 — Event placeholders

Add simple analytics helper or comments for conversion events.

Acceptance criteria:

- CTA clicks can be instrumented later
- Form start and form submission can be instrumented later
- Photo upload event can be instrumented later

### Task 4.2 — Mobile sticky CTA

Add sticky mobile CTA for quote and call/text action.

Acceptance criteria:

- Sticky CTA appears on mobile
- Does not cover form submit controls
- Routes to quote form or phone/SMS action

## Epic 5 — Quality and guardrails

### Task 5.1 — Claim audit

Review all visible copy for unsupported claims.

Acceptance criteria:

- No active floor restoration claim
- No license/insurance/certification claim unless true
- No completed-project claim before portfolio exists
- No warranty overclaim

### Task 5.2 — Responsive QA

Test mobile, tablet, and desktop.

Acceptance criteria:

- No horizontal scroll
- Form usable on phone
- CTAs visible
- Page loads cleanly

## Epic 6 — Deployment readiness

### Task 6.1 — Vercel deployment prep

Prepare the app for Vercel.

Acceptance criteria:

- Build passes
- Environment variable placeholders documented
- README includes local dev commands

## Non-goals

Do not build the following in the first implementation PR:

- AI estimator
- CRM dashboard
- Auth
- Customer portal
- Payment collection
- Finish visualizer
- Multi-page SEO expansion
