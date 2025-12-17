import { config } from "./config";

/**
 * Generate WhatsApp deep link with prefilled message
 */
export function getWhatsAppLink(message?: string): string {
  const defaultMessage = config.whatsapp.defaultMessage;
  const fullMessage = message
    ? `${defaultMessage} ${message}`
    : defaultMessage;
  const encodedMessage = encodeURIComponent(fullMessage);
  return `https://wa.me/${config.whatsapp.number}?text=${encodedMessage}`;
}

/**
 * Open WhatsApp in new tab/window
 */
export function openWhatsApp(message?: string): void {
  const link = getWhatsAppLink(message);
  window.open(link, "_blank", "noopener,noreferrer");
}

/**
 * Track WhatsApp click for attribution
 */
export function trackWhatsAppClick(source?: string): void {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get("ref") || params.get("utm_source") || source || "direct";
  const campaign = params.get("utm_campaign") || "default";

  // Store attribution in sessionStorage
  sessionStorage.setItem("lead_source", ref);
  sessionStorage.setItem("lead_campaign", campaign);
  sessionStorage.setItem("lead_channel", "whatsapp");

  // Optional: Send to analytics
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "whatsapp_click", {
      source: ref,
      campaign: campaign,
    });
  }
}

