export type AnalyticsEvent =
  | "page_view"
  | "hero_cta_click"
  | "sticky_cta_click"
  | "quote_form_start"
  | "quote_form_submit"
  | "photo_upload"
  | "call_click"
  | "text_click"
  | "referral_partner_cta_click";

export function trackEvent(
  event: AnalyticsEvent,
  metadata?: Record<string, string | number | boolean>,
) {
  void event;
  void metadata;
  // TODO: Connect analytics after the validation stack is selected.
}
