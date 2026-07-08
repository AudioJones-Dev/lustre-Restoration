# Lustre Surface Restoration — Design System

## Status

Initial draft. This design system needs visual research, brand refinement, and implementation validation before it becomes canonical.

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

Before this becomes canonical, run a design scrape/research pass across premium restoration, architectural film, stone restoration, luxury remodeling, and commercial interior surface brands.

Research should extract:

- Color patterns
- Typography patterns
- CTA patterns
- Hero structure
- Proof strategy
- Form UX
- Before/after presentation
- Commercial vs residential positioning
- Common trust markers
- What to avoid

## Design system approval gate

This file becomes canonical only after:

1. Competitive design research is completed.
2. Final color palette is selected.
3. Typography is selected and licensing is confirmed.
4. Logo lockup is updated to Surface Restoration.
5. Website mockup uses these tokens successfully.
6. Mobile quote form is tested.
