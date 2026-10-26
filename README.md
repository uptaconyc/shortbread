# Shortbread cookie consent

Place the complete snippet before Google tags or GTM in the document head:

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
<script src="https://tryshortbread.com/shortbread.js" async></script>
```

Shortbread was previously named Kindnod. The old repository URL redirects here. The legacy package remains available so existing installations keep working. The hosted dashboard and documentation are at [tryshortbread.com](https://tryshortbread.com).

## Install and claim your dashboard

To receive a dashboard claim link, add your email address:

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
<script src="https://tryshortbread.com/shortbread.js" data-owner="you@example.com" async></script>
```

On a public domain, the first configuration request creates a site. You can claim it afterward. Local development hosts receive a preview without creating a site.

To block a non-essential script until consent, mark its category:

```html
<script type="text/plain" data-cookieconsent="statistics">
  // Add your analytics initialization here.
</script>
```

The banner supports Google Consent Mode v2, category-based script blocking, Global Privacy Control, and Cookiebot consent carry-over. Configuration and installation order matter. Follow the [installation guides](https://tryshortbread.com/docs) for your platform.

## React and Next.js

The published package retains the name `@kindnod/consent`:

```bash
npm install @kindnod/consent
```

```jsx
import { KindnodConsent } from '@kindnod/consent/react';

export function Consent() {
  return <KindnodConsent src="https://tryshortbread.com/shortbread.js" />;
}
```

Include the inline head initialization above when using React too. A React effect runs after head scripts. The package exports retain their Kindnod names. Use the script tag above if you prefer an installation without a package dependency. The renamed `@shortbread/consent` package is prepared in `packages/shortbread` and awaits publication. Until it is published, use the script tag or the legacy package above.

## Coding agents

Use the [agent installation guide](https://tryshortbread.com/docs/agents) and [machine-readable documentation](https://tryshortbread.com/llms.txt). The hosted MCP endpoint is:

```text
https://tryshortbread.com/api/mcp
```

You can install the banner before creating an account. Do not install another consent banner alongside it.

## Repository contents

- The `banner/kindnod.ts` file contains the browser banner source under its original name.
- The `packages/kindnod` directory contains the published package's loader, React component, and types.
- The `agents` directory contains installation instructions for coding tools.

To build the banner source in this repository, run:

```bash
npm install
npm run build
```

The hosted application has a separate source repository. This repository does not contain the dashboard, billing system, or consent database.

## License

MIT. See `LICENSE`.
