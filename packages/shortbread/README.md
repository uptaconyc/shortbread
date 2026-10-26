# shortbread

GDPR cookie consent for any site, with Google Consent Mode v2, script blocking, a consent log, and a Cookiebot-compatible JavaScript API. 23 KB. No account needed to install: the site is provisioned on first load from a public domain and the owner claims the dashboard later.

```bash
npm install @shortbread/consent
```

## React / Next.js

```tsx
// app/layout.tsx
import { ShortbreadConsent } from "@shortbread/consent/react";

export default function RootLayout({ children }) {
  return (
    <html><body>
      <ShortbreadConsent owner="you@example.com" />
      {children}
    </body></html>
  );
}
```

Gate anything that sets cookies:

```tsx
import { Gated, useConsent } from "@shortbread/consent/react";

<Gated category="statistics"><Analytics /></Gated>
```

## Plain JavaScript

```js
import { loadShortbread, onConsent } from "@shortbread/consent";
loadShortbread();
onConsent((c) => { if (c.marketing) initPixel(); });
```

## Options

| Option | Meaning |
|---|---|
| `siteKey` | A site you created in the dashboard. Omit for keyless. |
| `owner` | Site owner's email. They get a link to claim the dashboard. |
| `via` | Which tool installed it, for attribution. |
| `config` | Inline overrides: position, theme, texts, regions. |
| `src` | Self-hosted banner URL. |

Docs: https://tryshortbread.com/docs/nextjs. For AI agents: https://tryshortbread.com/llms.txt. MIT.
