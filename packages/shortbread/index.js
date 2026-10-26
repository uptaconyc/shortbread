// shortbread: loads the Shortbread banner script once. Works with no options at all.
//   import { loadShortbread } from "@shortbread/consent";
//   loadShortbread();                              // keyless: the site is provisioned on first load
//   loadShortbread({ owner: "you@example.com" });  // get the claim link by email
//   loadShortbread({ siteKey: "abc123" });         // a site you already created
const DEFAULT_SRC = "https://tryshortbread.com/shortbread.js";
let pending = null;

export function loadShortbread(opts = {}) {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.Shortbread) return Promise.resolve(window.Shortbread);
  if (pending) return pending;
  const src = opts.src || DEFAULT_SRC;
  pending = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src="' + src + '"]');
    if (existing) { existing.addEventListener("load", () => resolve(window.Shortbread || null)); return; }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    if (opts.siteKey) s.setAttribute("data-site", opts.siteKey);
    if (opts.owner) s.setAttribute("data-owner", opts.owner);
    s.setAttribute("data-via", opts.via || "npm");
    if (opts.config) s.setAttribute("data-config", JSON.stringify(opts.config));
    s.onload = () => resolve(window.Shortbread || null);
    s.onerror = () => { pending = null; reject(new Error("shortbread.js failed to load")); };
    (document.head || document.documentElement).appendChild(s);
  });
  return pending;
}

// Subscribe to consent decisions. The callback receives { necessary, preferences, statistics, marketing, method }.
export function onConsent(fn) {
  if (typeof window === "undefined") return () => {};
  const handler = () => { const c = window.Shortbread && window.Shortbread.consent; if (c) fn(c); };
  loadShortbread().then((w) => { if (!w) return; w.on("consent", handler); if (w.consent) fn(w.consent); });
  return () => {};
}

// Current decision, or null before the visitor has answered.
export function getConsent() {
  return typeof window !== "undefined" && window.Shortbread ? window.Shortbread.consent : null;
}

// Convenience: true once the visitor allowed the category (or no consent is required in their region).
export function allowed(category) {
  const c = getConsent();
  return !!(c && c[category]);
}
