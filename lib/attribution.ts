/**
 * Get attribution data from URL params and sessionStorage
 */
export function getAttribution() {
  if (typeof window === "undefined") {
    return {
      ref: null,
      utm_source: null,
      utm_campaign: null,
      utm_medium: null,
      channel: null,
    };
  }

  const params = new URLSearchParams(window.location.search);
  const ref = params.get("ref") || sessionStorage.getItem("lead_source");
  const utm_source =
    params.get("utm_source") || sessionStorage.getItem("lead_source");
  const utm_campaign =
    params.get("utm_campaign") || sessionStorage.getItem("lead_campaign");
  const utm_medium = params.get("utm_medium");
  const channel = sessionStorage.getItem("lead_channel");

  // Store in sessionStorage for persistence
  if (ref) sessionStorage.setItem("lead_source", ref);
  if (utm_campaign) sessionStorage.setItem("lead_campaign", utm_campaign);
  if (channel) sessionStorage.setItem("lead_channel", channel);

  return {
    ref,
    utm_source,
    utm_campaign,
    utm_medium,
    channel,
  };
}

