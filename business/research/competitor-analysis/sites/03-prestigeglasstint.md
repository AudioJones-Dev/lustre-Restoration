# Competitor Design/UX Research: Prestige Glass Tint (prestigeglasstint.com)

**Prepared for Lustre Surface Restoration — 2026-07-08.** Site is WordPress + Elementor (Hello Elementor child theme) with WP Rocket caching. Pages crawled: homepage, /contact/, /about/, /gallery/ (+ /gallery/window-film/ and /gallery/window-film/boat-window-film/), /window-film/home-window-tint/, /blog/, plus sitemap and raw HTML/CSS inspection. All pages fetched successfully; no retries needed.

## 1. Homepage structure (section-by-section order)
1. Utility header bar: phone, email, address
2. Sticky navigation with multi-level dropdowns
3. Hero (full-bleed photo background with overlay) + tagline
4. Dual CTA buttons ("Call Now" / "Get Estimate")
5. Value proposition block ("Protect and Enhance...")
6. Niche audience block aimed at interior designers
7. Services intro + CTA
8. Four service category cards (Home, Commercial, Marine, Surface Protection)
9. Alternating benefit sections per service (each with full-width photo background)
10. Testimonials section ("Happy Client's")
11. Portfolio/gallery teaser
12. Business Window Tint detail block
13–16. Four stacked FAQ sections (one per service line — very long page)
17. Final contact CTA banner ("Call Now For a Free Quote", photo background)
18. Footer (4-column) + bottom Email Us / Call Us buttons

## 2. Hero headline
Paraphrase: "[City]'s premier window and countertop surface-protection experts." The angle is **local authority + category breadth** — it leads with geography and self-declared expert status rather than a customer outcome or emotional benefit. The subhead is a dense keyword paragraph (residential, commercial, marine, surface protection) written more for Google than for a human scanning the page.

## 3. Primary CTA
"**Call Now**" (tel: link) paired with "**Get Estimate**" (→ /contact/), placed directly under the hero and repeated at intervals down the page and again in the closing banner ("Call Now For a Free Quote"). Phone-first is clearly the intended conversion path.

## 4. Secondary CTA
"Get Estimate" / "Get a Quote" (→ contact form) is the consistent secondary path. Tertiary CTAs: "Learn More" on each service card, "View All Services," "View Our Gallery," "View All" (testimonials → Google Maps), "Let's Work Together" (About page), and social links (Facebook, Instagram, YouTube). CTA labels are inconsistent across pages ("Contact Us Now," "Connect With Us," "Get in Touch," "Get Support Now" all appear on one service page).

## 5. Navigation items
Home | Window Film (▾ Yacht Window Tint; Business Window Tint ▾ 6 film types; Home Window Tint ▾ 9 film types) | Countertop And Surface Protection Film (▾ 8 sub-services) | Service Area | About (▾ Blog) | Gallery (▾ Window Film Gallery, Surface Protection Film Gallery) | Contact. Notable: the "**Service Area**" nav item is a dead `href="#"` anchor — it goes nowhere. Three-level-deep dropdowns are heavy for mobile.

## 6. Service categories
Four top-level lines: (1) Home Window Tint, (2) Business/Commercial Window Tint, (3) Boat/Yacht Window Tint, (4) Countertop & Surface Protection Film. Beneath these sit ~23 sub-service pages: film types (UV, security, frosted, privacy, decorative, one-way, stained glass, sliding/patio door) and protection films by surface (kitchen countertop vinyl wrap, stainless steel, countertop, marble, floor, table, hardwood floor, wall). Surfaces named: marble, onyx, quartz, granite, travertine, acrylic/resin, butcher block, stainless, hardwood — directly overlapping Lustre's restoration territory.

## 7. Quote / booking flow
Single step: navigate to /contact/ (or click-to-call), fill one long form, submit, wait for callback. Sitemap reveals a thank-you page (/typ-window-tint/) confirming conversion tracking, plus three dedicated PPC landing pages (/lp-commercial-window-tint/, /lp-residential-window-tint/, /lp-boat-window-tint/). Friction points: 20+ fields with conditional branches, no progress indicator, no pricing calculator or instant estimate, no online scheduling/calendar, mandatory terms + SMS-consent checkboxes before submission.

## 8. Form fields
First Name*, Last Name*, Email*, Phone*, Type of Service* (dropdown: Home Window Tint / Business Window Tint / Boat Tint / Surface Protection Film); conditional: Boat Year/Make/Model, Marina Name; Type of Commercial Space (Commercial Office / Commercial Retail Space), Business Name; Street Address, City, State, Zip; Number of Floors, Number of Windows, Number of Windows Per Floor; Countertop Type; Project Details (textarea); Terms & Conditions checkbox*, SMS-consent checkbox*.

## 9. Trust signals
Brand-name borrowing is the main device: "premium films from SunTek, 3M, Xpel, Samurai Film, American Standard." Others: "years of hands-on experience and certifications" (unspecified), "Certified Installers," "trusted by yacht owners, captains, brokers," a claim that "the world's largest marina operator trusts us," "available 24/7." **Missing:** founding year, named certifications, review counts/star ratings, insurance/licensing numbers, project counts, awards, team photos.

## 10. Warranty / guarantee language
Vague: a "Best-in-Class Satisfaction Guarantee" and a "flawless installation guarantee" on the homepage; the service page mentions film lasting "15 years or more" but no written warranty duration, terms, or transferability anywhere. The About page has no guarantee language at all. The promise is essentially "we'll make you happy" without contractual specifics.

## 11. Before-after gallery pattern
No before/after mechanism at all — no comparison sliders, no paired shots, no captions. Architecture is a three-click drill-down: Gallery index page (zero images, just two category cards) → Window Film Gallery (three more category cards) → final gallery (Elementor e-gallery grid with lightbox/Swiper, roughly a dozen project photos, no captions, locations, or project stories). Deep, image-poor, and context-free.

## 12. Review / testimonial strategy
Weak. The homepage "Happy Client's" [sic — apostrophe error live on site] section contains no actual customer quotes, names, star ratings, or embedded review widgets — just self-written prose about why customers love them, with a "View All" link out to Google Maps. No third-party review platform integration (Google review carousel, Yelp, BBB), no video testimonials, no case studies.

## 13. Color palette impression
Elementor global tokens: primary **#00A6FA** (bright cyan-blue), secondary **#00DABB** (teal), accent **#00F29F** (neon mint-green), text #333, with black/white/light-gray (#E9E9E9) neutrals. Reads as tech-startup blue/teal/neon over dark photo overlays — energetic but generic, and notably **not** premium/luxury despite the "Prestige" name. No warm or luxury cues (no gold, charcoal, stone tones).

## 14. Typography impression
Google Fonts: **Outfit** (a geometric modern sans) for headings/UI, **Roboto** for body — a safe, contemporary but characterless template pairing. No serif or display face to signal craftsmanship or premium positioning; hierarchy comes from size/weight only.

## 15. Photography style
Stock-flavored, generically named category images (Home-window-tint.jpg, commercial-window-tint.jpg, Banner-Slider1.jpg) uploaded in one batch (2025/08) — likely a mix of stock and supplier photos, used as full-width background images with dark overlays. Real job-site photos only appear buried in the deepest gallery pages (boat tinting shots, 2025/09). No people, no team, no process shots on primary pages, no video content despite a YouTube link.

## 16. Mobile UX observations (inferred)
Sticky header present (11 sticky references in markup); phone number is a proper tel: link in header, hero, body, and footer, so click-to-call works everywhere — that is their strongest mobile asset. No dedicated floating call/quote button detected. Concerns: three-level dropdown nav is painful on touch; extremely long homepage (4 FAQ sections stacked); the 20+-field contact form will be grueling on a phone; large full-bleed background images (1920px, though served via WP Rocket/Jetpack CDN with srcset) risk slow LCP on cellular.

## 17. Commercial vs residential positioning
Deliberately straddles both but the heart is **marine/luxury commercial**: the About page story is yacht-first ("one of the few specialists trusted by yacht owners," marina-operator name-drop, boat-show blog posts), while residential is structurally present (largest sub-service tree) but emotionally secondary. They also court a B2B2C channel — a homepage section explicitly targets **interior designers** as referral partners. Separate PPC landing pages exist for commercial, residential, and boat, indicating segmented paid campaigns.

## 18. SEO page structure
- **URLs:** clean hierarchical silos — /window-film/{segment}/{film-type}/ and /surface-protection-film/{surface}/; ~49 pages in sitemap; separate galleries mirror the silos.
- **Titles:** "Fort Lauderdale {Service} - Prestige Glass Tinting LLC"; homepage title is a lazy "Home - Prestige Glass Tinting LLC" (wasted primary keyword slot).
- **H1s:** city + service ("Fort Lauderdale Home Window Tint").
- **Location strategy:** city names (Fort Lauderdale, Boca Raton, Hollywood, Miami, Palm Beach) sprinkled into copy, but **zero dedicated city/location landing pages** — and the "Service Area" nav link is literally a dead # anchor.
- **Schema:** Organization, WebSite/SearchAction, BreadcrumbList, ImageObject — but **no LocalBusiness, no Service, no Review/AggregateRating, no FAQPage** schema despite having FAQ content on-page.

## 19. Content strategy
Thin. Blog has only **two posts** (Nov–Dec 2025): a boat-show announcement and a "Yachting Pages" media mention — PR notes, not search content. No how-to guides, no cost/pricing articles, no film-comparison content, no care/maintenance guides. FAQs are their strongest content asset (6 per service, stacked on homepage and service pages, covering darkness, energy savings, night visibility, 15-year longevity, window compatibility) but aren't marked up as FAQPage schema. A /find-us-on-the-web/ citations page suggests a local-SEO checklist mindset.

## 20. Weaknesses Lustre can exploit
1. **No before/after storytelling** — for a surface-restoration/protection business this is the killer omission; Lustre should lead with interactive before/after sliders with project captions.
2. **Fake social proof** — no real reviews, names, or ratings on-site; Lustre can embed a live Google review widget with counts and stars.
3. **Vague guarantee** — "best-in-class satisfaction" with no terms; Lustre can publish a concrete written warranty (X years, transferable).
4. **Brutal quote form** — 20+ fields, no scheduling; Lustre can win with a 3-field instant-estimate form or online booking calendar.
5. **No pricing transparency** anywhere — even "starting at" ranges would differentiate.
6. **Dead "Service Area" nav link and zero city landing pages** — the local-SEO flank is wide open in every suburb they claim.
7. **No FAQPage/LocalBusiness/Review schema** — easy rich-result wins.
8. **Generic template aesthetic** — neon-blue Elementor look, stock photos, no team faces, typos live on the homepage ("Happy Client's"); a genuinely premium visual identity would outclass them instantly.
9. **Content vacuum** — two blog posts total; a modest guide library (stone care, film comparisons, cost explainers) would dominate informational queries.
10. **Homepage title tag is "Home - ..."** and the hero is keyword soup — sloppy fundamentals.

---

**Overall verdict:** Prestige Glass Tint has a structurally competent, keyword-siloed WordPress/Elementor site with strong click-to-call plumbing and dedicated PPC landing pages, but it is a template-grade execution whose "premium" positioning is undermined by stock imagery, neon-generic branding, absent real reviews, no before/after proof, and a punishing quote form. Its SEO architecture is deep on services but has an open flank on location pages, schema, and content — exactly where a disciplined competitor can outrank it within months. This is a beatable mid-tier competitor: solid bones, weak proof, and almost no emotional or visual differentiation for a company selling to yacht owners and luxury homeowners.
