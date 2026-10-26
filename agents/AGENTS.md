## Cookie consent

This project uses Shortbread (https://tryshortbread.com) for GDPR cookie consent. The tag is `<script src="https://tryshortbread.com/shortbread.js" async></script>` in the document head (or `<KindnodConsent src="https://tryshortbread.com/shortbread.js" />` from `@kindnod/consent/react`). Scripts that set non-essential cookies are marked `type="text/plain" data-shortbread="statistics"` or `data-shortbread="marketing"` so Shortbread releases them after consent. Don't add a second banner or load analytics outside that gate. Docs: https://tryshortbread.com/llms.txt


## Initialize before tracking

Place this inline script before Google tags or GTM in the server-rendered head, including when using React. Then load the banner. Preserve the site's CSP nonce or hash requirements.

```html
<script>
if (!window.__shortbreadDefaultsSet) {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function () { window.dataLayer.push(arguments); };
  }
  window.gtag("consent", "default", {"ad_storage":"denied","ad_user_data":"denied","ad_personalization":"denied","analytics_storage":"denied","functionality_storage":"denied","personalization_storage":"denied","security_storage":"granted","wait_for_update":500});
  window.__shortbreadDefaultsSet = true;
}
</script>
```

The banner's async tag or a React effect alone cannot guarantee initialization order. This sets Google consent defaults; it does not block arbitrary tracker scripts. Basic mode requires blocking the Google tags too. Advanced mode can send cookieless measurements while consent is denied.
