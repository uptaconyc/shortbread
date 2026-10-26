const deniedDefaults = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "granted",
  wait_for_update: 500,
};

// Run this before loading Google tags or a tag manager.
export function initializeConsentDefaults() {
  if (typeof window === "undefined" || window.__shortbreadDefaultsSet) return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function () { window.dataLayer.push(arguments); };
  }
  window.gtag("consent", "default", { ...deniedDefaults });
  window.__shortbreadDefaultsSet = true;
}

// Keep this as text: server bundlers can remove browser-only function bodies.
export const consentDefaultsScript = `if (!window.__shortbreadDefaultsSet) {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function () { window.dataLayer.push(arguments); };
  }
  window.gtag("consent", "default", ${JSON.stringify(deniedDefaults)});
  window.__shortbreadDefaultsSet = true;
}`;
