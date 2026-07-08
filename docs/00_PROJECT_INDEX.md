# Lustre Surface Restoration — Project Index

**Read this first.** This is the single source of truth for what Lustre is, where every document lives, what is canonical vs. draft, and what is being built next. Any human or AI agent onboarding to this repository starts here.

## Vision

Lustre Surface Restoration renews high-visibility interior surfaces — countertops, cabinets, vanities, and commercial surfaces — without demolition, replacement, or long remodel timelines. Premium materials, clear scope, documented workmanship, days instead of weeks.

- **Category:** Premium Surface Restoration
- **Tagline:** Restore. Renew. Reveal.
- **Positioning line:** Premium surface transformations without replacement.
- **Market:** South Florida (Miami-Dade, Broward, Palm Beach) for validation

## Current launch wedge

**Countertop & cabinet wrapping** (plus vanities, rental/Airbnb refreshes, and commercial architectural surface film). The public brand is broad; the active offer stays narrow until operational capability is proven — see `SERVICE_ARCHITECTURE.md`.

## Future divisions (phased — see `EXPANSION_ROADMAP.md`)

1. **Phase 1 — Surface Wrap Division** (active wedge)
2. **Phase 2 — Stone & Hard-Surface Restoration**
3. **Phase 3 — Floor Restoration Division**
4. **Phase 4 — Lustre Care** (recurring maintenance program)

No division is sold publicly until its readiness gates (training, equipment, insurance, SOPs, QC) are complete.

## Document map

### Brand & strategy

| Doc | Purpose |
| --- | --- |
| `BRAND_FOUNDATION.md` | Name, tagline, positioning, ICPs, voice, messaging pillars, naming rules |
| `SERVICE_ARCHITECTURE.md` | Service catalog structure; narrow-offer / broad-brand principle |
| `EXPANSION_ROADMAP.md` | Phase 1–4 division sequencing and readiness gates |
| `LAUNCH_BLUEPRINT.md` | 30-day validation launch plan and founding offer |
| `OPERATING_GUARDRAILS.md` | Claims discipline and operating rules |

### Customer & sales

| Doc | Purpose |
| --- | --- |
| `PRICING_MODEL.md` | Pricing structure and margin discipline |
| `OUTREACH_SCRIPTS.md` | Sales and outreach messaging |
| `CRM_PIPELINE.md` | Lead pipeline stages and handling |
| `QUOTE_FORM_SCHEMA.md` | Quote form fields, validation, and lead data model |

### Research & evidence

| Doc | Purpose |
| --- | --- |
| `../research/competitor-analysis/` | 8-competitor design/UX/conversion/SEO crawl: synthesis (README) + per-site 20-point reports |
| `DESIGN_RESEARCH_PLAN.md` | Research plan that scoped the crawl |
| `SUPPLIER_STRATEGY.md` | Material tiering and supplier selection principles |
| `VALIDATION_SCORECARD.md` | 30-day go/no-go signals and decision rule |

### Product & build

| Doc | Purpose |
| --- | --- |
| `DESIGN_SYSTEM.md` | Visual system: palette, type, components, motion, accessibility (draft + research amendments) |
| `LANDING_PAGE_SPEC.md` | Landing page structure, copy, and conversion requirements |
| `WEBSITE_IMPLEMENTATION_PLAN.md` | Buildable scaffold: stack, routes, components, form, SEO, acceptance criteria |
| `BUILD_TASKS.md` | Website build task list |

## Build status

| Area | Status |
| --- | --- |
| Brand foundation | ✅ Done |
| Validation framework | ✅ Done |
| Competitor research | ✅ Done |
| Design system | 🟢 Brand core locked v1.0 (2026-07-08) — implementation gates remain: logo lockup, mockup validation, mobile form test, copy QA |
| Website | 🔄 Planned |
| CRM | 🔄 Planned |
| AI quote engine | ⏳ Backlog (post-validation) |
| Customer portal | ⏳ Backlog |
| Supplier network | 🔄 Research |
| Installer training | 🔄 Research |
| Stone restoration | 📋 Phase 2 |
| Floor restoration | 📋 Phase 3 |
| Lustre Care | 📋 Phase 4 |

## Doctrine lifecycle (ratification workflow)

Documents evolve through an explicit provenance chain rather than silent rewrites:

```text
Draft doctrine
      │
      ▼
Research / evidence gathering        (e.g. research/competitor-analysis/)
      │
      ▼
Research amendments                  (appended, clearly labeled + dated,
      │                               citing the evidence)
      ▼
Ratification review                  (owner accepts/rejects each amendment;
      │                               accepted items merge into the body,
      ▼                               amendment section collapses to a changelog note)
Canonical vX.0
```

Rules:

- Evidence lives in `research/`; doctrine lives in `docs/`. Research is never doctrine by itself.
- Amendments are appended in clearly labeled, dated sections that cite their evidence — they do not overwrite foundational intent.
- A doc becomes canonical (v1.0) only after its approval gate passes and amendments are ratified into the body. Until then it is Draft.
- Every canonical revision keeps a one-line provenance note pointing to the research that motivated it.

**Ratified:** `DESIGN_SYSTEM.md` brand core locked v1.0 on 2026-07-08 (typography, color system, materials palette, signature conversion primitive) — see its changelog. Implementation gates remain open.

**Currently awaiting ratification:** `LANDING_PAGE_SPEC.md` and `WEBSITE_IMPLEMENTATION_PLAN.md` each carry a "Competitive research amendments (2026-07-08)" section sourced from `research/competitor-analysis/`.

## Planned repository structure

Once the current doc PRs merge, the repository splits into two domains so business doctrine stays separate from implementation detail:

```text
/business   — strategy, pricing, research, SOPs, marketing, brand, sales
/product    — website, CRM, quote engine, AI, customer portal, APIs,
              design tokens, components
```

Until that migration, everything lives under `docs/` and `research/` as mapped above.

## Guardrail (applies to everything)

Never claim licenses, insurance, certifications, warranties, completed projects, or active service lines that are not true and documented. See `OPERATING_GUARDRAILS.md` and the compliance sections of the product docs.
