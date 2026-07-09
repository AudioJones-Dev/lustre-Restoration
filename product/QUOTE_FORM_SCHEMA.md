# Lustre Surface Restoration — Quote Form Schema

## Purpose

The quote form captures enough information to qualify a lead, estimate project value, route the inquiry by segment, and prepare a fast photo-based quote without creating too much friction.

## Primary form objective

Convert visitors into qualified quote requests with photos.

## Minimum viable form

Use this version for the first landing page.

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| full_name | text | Yes | Customer name |
| phone | tel | Yes | Primary follow-up channel |
| email | email | No | Useful for quote delivery, but do not require at launch if SMS is primary |
| zip_code | text | Yes | Service area and geo validation |
| project_type | select | Yes | Countertop, cabinets, vanity, commercial, rental, other |
| property_type | select | Yes | Homeowner, condo, rental, Airbnb/STR, multifamily, commercial, realtor/stager, investor |
| timeline | select | Yes | ASAP, 1–2 weeks, 30 days, planning/research |
| photos | file_upload | Strongly preferred | Allow multiple images |
| notes | textarea | No | Open context |
| sms_consent | checkbox | Yes | Required for SMS follow-up compliance |

## Recommended project_type options

- Countertop wrapping
- Cabinet wrapping
- Countertop + cabinet wrapping
- Bathroom vanity
- Rental / Airbnb refresh
- Commercial surface
- Unsure / need recommendation
- Future floor or stone restoration inquiry

## Recommended property_type options

- Homeowner
- Condo owner
- Landlord / rental owner
- Airbnb / short-term rental operator
- Property manager
- Fix-and-flip investor
- Realtor / stager
- Commercial property / business
- Other

## Recommended timeline options

- ASAP
- This week
- 1–2 weeks
- 30 days
- 60+ days
- Just researching

## Photo upload requirements

Ask for:

1. Wide photo of the full kitchen or room
2. Close-up of the surface condition
3. Photo of edges, corners, seams, or damage
4. Optional photo of desired inspiration finish

Accepted file types:

- jpg
- jpeg
- png
- heic
- webp

Recommended max upload size:

- 10 MB per file
- 8 files maximum at launch

## Lead scoring

Assign each lead a score from 0–100.

| Signal | Points |
| --- | ---: |
| Photos uploaded | 20 |
| ZIP in target area | 15 |
| Timeline within 30 days | 15 |
| Project type matches launch service | 15 |
| Property type is repeat-buyer segment | 15 |
| Notes indicate real project need | 10 |
| Phone number provided and SMS consent checked | 10 |

## Lead quality bands

| Score | Band | Action |
| ---: | --- | --- |
| 80–100 | Hot | Call/text same day. |
| 60–79 | Qualified | Reply within 24 hours. |
| 40–59 | Nurture | Send education, request photos, clarify scope. |
| Under 40 | Low quality | Do not over-invest time unless strategic. |

## CRM fields

Create these fields in the CRM or tracking sheet:

- lead_id
- created_at
- full_name
- phone
- email
- zip_code
- county
- project_type
- property_type
- timeline
- lead_source
- utm_source
- utm_campaign
- uploaded_photos_count
- estimated_project_value
- lead_score
- quote_status
- quote_amount
- quote_sent_at
- follow_up_1_at
- follow_up_2_at
- close_status
- lost_reason
- booked_date
- completed_date
- review_requested
- review_received
- referral_partner

## Automation rules

### New lead with photos

- Send confirmation SMS
- Notify owner/operator
- Create CRM record
- Set follow-up task for same day

### New lead without photos

- Send SMS requesting photos
- Include simple instructions for the 3 photo angles
- Set follow-up task for 24 hours

### Hot lead

- Notify immediately
- Call or text within 15 minutes when possible

### Quote sent

- Start follow-up sequence:
  - Day 1: confirm receipt
  - Day 3: answer questions / offer sample review
  - Day 7: final follow-up or nurture

### Job completed

- Send care instructions
- Request Google review
- Ask for referral if customer is satisfied
- Add before/after photos to portfolio review queue

## SMS consent language

Recommended checkbox copy:

> I agree to receive text messages from Lustre Surface Restoration about my quote request. Message and data rates may apply. I can opt out at any time.

## Submission confirmation copy

### With photos

Thanks — your photos were received. Lustre will review the surface, scope, and location, then follow up with a quote range or next question.

### Without photos

Thanks — your request was received. For the fastest estimate, please reply with 3 photos: a wide shot, a close-up, and a photo of any edges, seams, or damage.

## Guardrail

A quote form is not a guarantee of final price. Photo-based estimates must be framed as preliminary until surface condition, measurements, access, material selection, and scope are confirmed.
