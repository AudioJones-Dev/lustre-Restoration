# Competitor Design/UX Research: America Refinishing Pros (americarefinishingpros.com)

**Method note:** The site's heavy Elementor markup (~600KB pages) defeated markdown conversion twice, so the crawl was completed by downloading raw HTML directly and parsing it. Pages analyzed: homepage, /contact, /gallery, /bathtub-refinishing, /faq, /refinishing-blog, /the-refinishing-process, /fort-lauderdale-bathtub-tile-refinishing, plus the XML sitemap. All pages returned HTTP 200.

## 1. Homepage structure (section-by-section order)
1. Top utility bar: logo, two phone numbers (Miami + Broward), six social icons (FB, Twitter, YouTube, IG, LinkedIn, TikTok)
2. Nav bar with dropdowns
3. Hero: badge line ("a wiser way of remodeling" angle), savings claim, star-rating line (5.0 / 1,004 reviews), background photo
4. Very long SEO text block #1 containing the H1 + phone CTA button
5. Long SEO text block #2 ("years of experience") — continues for several screens
6. Long SEO text block #3 ("top-of-the-line products") + second phone CTA + "contact us" link
7. "Our services" — 7 service cards with short blurbs
8. "Why choose us" — 4 pillars (Experience, Superior Quality, Honesty, Affordability)
9. Contact block with both phone numbers
10. Animated stat counters (Projects / Hours Working / Happy Clients)
11. Testimonial carousel ("What Our Clients Say")
12. Guarantee banner (100% satisfaction + price-beat promise)
13. Footer: massive two-county city-link farm (Miami-Dade + Broward location pages), contact form, credit-card icons, copyright

## 2. Hero headline (paraphrase + angle)
Paraphrased: "A smarter way to remodel — save about 75% compared to replacement, from a dependable refinishing company." The angle is **cost-avoidance vs. replacement**, backed immediately by a social-proof rating line. It leads with savings and dependability, not beauty, luxury, or transformation. The actual H1 sits below the hero and is a keyword string ("Save with America Refinishing Pros on tub refinishing, tile refinishing, countertop refinishing or cabinet refinishing") — written for Google, not humans.

## 3. Primary CTA (text + placement)
"**Call for a free consultation**" — a tel: link button (tel:786-223-6175) repeated after each major homepage text block and on service pages. The entire conversion model is phone-first. Header phone numbers are also click-to-call. There is no "Get a Quote" button in the hero itself.

## 4. Secondary CTA
"**Contact Us**" (link/button to /contact) plus an always-present footer contact form on every page under the recurring heading "Enjoy top quality at truly affordable prices." Tertiary: "For more pictures click here" → gallery, on service pages. No booking, scheduling, or instant-estimate CTA exists anywhere (no Calendly/Housecall Pro/Jobber detected).

## 5. Navigation items
Home | About Refinishing (dropdown: The Refinishing Process, Why Refinish) | Our Services (dropdown: Bathtub Refinishing, Tile Refinishing, Cabinet Refinishing, Countertop Refinishing, Sink Refinishing, Bathtub Repair, Bathtub Safety Step, Faux Granite Finishes) | Gallery | FAQ | Blog | Contact. Notably there is **no "About Us" company page** — "About Refinishing" is about the technique, not the team.

## 6. Service categories
Seven cards on the homepage: Bathtub Refinishing, Tile Refinishing, Countertop Refinishing, Sink Refinishing, Bathtub Repair, Cabinet Refinishing, Bathtub Safety Step (tub-to-shower accessibility cut). Nav adds an eighth: Faux Granite Finishes. Separate URLs also exist for bathtub-resurfacing and countertop-resurfacing (near-duplicate keyword pages).

## 7. Quote / booking flow (steps, friction points)
There is no quote flow — only (a) call one of two phone numbers, or (b) submit a generic contact form and wait. Friction points: two different phone numbers segmented by county forces the visitor to self-route; no service picker, no photo upload, no ballpark pricing, no online scheduling, no SMS option, no response-time promise. The contact page actually contains **multiple duplicate forms** (three Contact Form 7 instances plus an Elementor form), which is confusing and signals template sloppiness.

## 8. Form fields
Contact page main form: First Name*, Last Name*, Email*, Subject*, Phone*, Message*. Duplicate CF7 variants: Name*, Email*, Phone*, Message*. Site-wide footer Elementor form: First Name*, Last Name*, Email*, Phone Number*, Message*, "Send" button. Every field is required; there is no service-type dropdown, no address/city field, no photo upload, no preferred-contact-time field.

## 9. Trust signals
- Star widget: "Rating 5.0 / 5 based on 1,004 reviews" (static Elementor stars, no source attribution or link)
- "Licensed and insured," "family-owned," "years of experience" (no founding year, no license number)
- Credit-cards-accepted icon strip in footer
- Animated counters — but the values are broken/absurd: 3,032,014 projects, 7,121,988 hours, 6,101,990 happy clients (they appear to be dates typed into counter fields). This actively damages credibility.
- No BBB, no manufacturer certifications, no association badges, no team photos, no awards.

## 10. Warranty / guarantee language (the promise)
Three-part promise: (1) "All refinishing jobs are 100% satisfaction guaranteed and come with a competitive warranty"; (2) FAQ specifics — minimum 1-year warranty against peeling/adhesion failure covering product, labor, and workmanship on tubs, sinks, wall tile, and fiberglass, with claimed ~10-year average job life, terms printed on the invoice; (3) a price guarantee: "We will beat any written estimate by at least 5%." Strong claims, but the headline warranty is vague ("competitive") and the 1-year floor is weak versus the 10-year life claim.

## 11. Before-after gallery pattern
Elementor Pro multi-gallery: filterable justified **grid** (7 tag groups, presumably one per service), 5 columns desktop / 3 tablet / 2 mobile, 3:2 crops, hover fade overlay, lightbox on click, lazy-loaded. No interactive before/after slider anywhere. Before/after is conveyed via side-by-side composite JPEGs (e.g., "Bathtub-refinsihing-pics-before-after.jpg" — note the typo in the filename). Images use generic numbered filenames (1.jpg, 10-2.jpg), and gallery items have **no captions, no locations, no project stories**.

## 12. Review / testimonial strategy
Elementor testimonial carousel (swiper) repeated on homepage, service pages, and process page: ~6 rotating quotes with all-caps customer names, small avatar images, truncated text with "Continue Reading" links. Reviews name technicians ("Joel, Silvio") which adds authenticity, but the platform source is never attributed (no Google/Yelp logos or links), the same six quotes repeat site-wide, and one contains an uncorrected typo ("from the begging to the end"). The 1,004-review claim is never linked to a verifiable source.

## 13. Color palette impression
Patriotic utility palette matching the "America" brand: a mid corporate blue family (#1868a5, #135e95, #4fa8ed) as primary, red/orange accents (#f84d3b, #bd1e1a), white backgrounds and dark charcoal text (#0c0c0c, #2b2b2b), plus a stray teal (#5eead4). Reads as budget-friendly local contractor, not premium; zero luxury cues (no deep neutrals, golds, or restrained accents).

## 14. Typography impression
Poppins (geometric sans) nearly everywhere, with a grungy display font called "A Love of Thunder" for accent headings and Roboto as a secondary. Long paragraphs of keyword-dense copy in uniform sizes create wall-of-text fatigue; headings are inconsistently capitalized (mix of ALL CAPS, sentence case, and awkward slashed keyword strings like "Bathtub Refinishing/ bathtub reglazing in Miami & Fort Lauderdale").

## 15. Photography style
Real job-site photos (tubs, tile, cultured marble work) mixed with stock bathroom imagery as section backgrounds and a cartoon mascot logo (character holding a spray gun). Photos are documentation-grade — uncorrected color, cluttered bathrooms, no consistent framing, no people, no professional staging or lighting. Authentic but distinctly non-premium.

## 16. Mobile UX observations (inferred)
Click-to-call is well handled (tel: links on all phone CTAs — the strongest part of their mobile UX). A separate mobile hamburger nav exists. However: no sticky CTA bar (no Elementor sticky settings detected), several hero/decorative columns are simply hidden on mobile (elementor-hidden-mobile) so the mobile hero loses imagery, pages are ~400–600KB of HTML before assets (slow on 4G despite WP Rocket caching), and the enormous footer city-link farm forces heavy scrolling past the form. Two phone numbers likely confuse mobile callers.

## 17. Commercial vs residential positioning
Effectively 100% residential ("We'll treat your home as if it was our own"; kitchens and bathrooms of houses). There is no commercial page, no property-manager / hotel / landlord / multi-unit track, no volume-pricing mention — despite refinishing being a staple for hotels and apartment turnovers. This is a wide-open flank.

## 18. SEO page structure
- ~109 pages in the Yoast sitemap; classic local-SEO city-page farm covering Miami-Dade and Broward plus a Houston expansion page.
- **Inconsistent URL patterns**: `{city}-bathtub-tile-refinishing` (fort-lauderdale-…), `bathtub-tile-refinishing-{city}` (…-houston), `cabinet-refinishing-{city}`, `{city}-cabinet-refinishing`, and one broken slug with a trailing hyphen (`pembroke-pines-cabinet-refinishing-`).
- Titles/H1s are keyword-stuffed with slash constructions ("Bathtub Refinishing Miami & Fort Lauderdale/Tub Resurfacing Miami"); one title is literally "FAQ FAQ- America Refinishing Pros."
- Location pages are long (7,000+ raw words) but templated, with keyword-repeating H2s.
- Schema: Yoast WebPage/WebSite graph, FAQPage schema on the homepage, and a Product + HomeAndConstructionBusiness block whose areaServed stuffs ~130 city names — borderline schema spam. Image alts exist but are keyword-stuffed and duplicated; gallery filenames are unoptimized numbers.

## 19. Content strategy
Yes to all three: a maintained blog (~10+ posts: DIY-vs-pro, maintenance tips, material-specific guides like cast iron / cultured marble / porcelain, "2024 trends" — so updated at least through 2024), a 12-question FAQ page (with FAQ schema), and two educational hub pages ("Why Refinish," "The Refinishing Process" with a 4-stage walkthrough: preparation/pre-treatment, masking, spraying, re-caulking). Content is SEO-driven and text-heavy — no video, no downloadable guides, no cost calculator, no email capture.

## 20. Weaknesses Lustre can exploit
1. **No premium positioning at all** — everything is "cheap/affordable/save money." A luxury/craftsmanship brand owns an empty lane.
2. **No online quote or booking** — a photo-upload instant-quote form or scheduling integration beats "call us" decisively, especially for under-40 homeowners.
3. **Broken trust math** — the 6-million-happy-clients counters and unattributed "1,004 reviews" invite skepticism; verifiable, linked Google reviews would immediately out-credential them.
4. **No interactive before/after sliders, captions, or project stories** — their gallery is an anonymous photo dump.
5. **Design debt everywhere**: typos ("refinsihing," "FAQ FAQ," trailing-hyphen URL, testimonial typos), duplicate forms, dated Elementor template, walls of keyword text.
6. **No commercial/property-manager offering** — hotels, apartment turns, and Airbnb hosts are unaddressed.
7. **Vague warranty headline** ("competitive warranty") — a bold, specific multi-year written warranty would out-promise them.
8. **No people** — no team page, no founder story, no faces; "family-owned" is claimed but never shown.
9. **Performance** — 600KB HTML pages and hidden mobile hero; a fast, mobile-first site with a sticky call/quote bar wins on Core Web Vitals and UX.
10. **No video, no pricing transparency, no financing mention** — three easy differentiators.

---

**Overall verdict:** America Refinishing Pros is an SEO-strong but design-weak competitor — its ~109-page city-and-service content farm, FAQ schema, and maintained blog likely earn real organic traffic across two metro markets, and its phone-first, click-to-call funnel is competently wired. But the experience layer is a liability: a dated budget-contractor aesthetic, keyword-stuffed walls of text, broken trust counters, unattributed reviews, typo-ridden templates, and zero online quoting or booking. Lustre cannot beat them quickly on local-SEO volume, but can decisively outflank them on brand polish, premium positioning, verifiable social proof, interactive before/after storytelling, frictionless quoting, and the untouched commercial segment.
