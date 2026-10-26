# shortbread

GDPR cookie consent for any site, with Google Consent Mode v2, script blocking, a consent log, and a Cookiebot-compatible JavaScript API. 23 KB. No account needed to install: the site is provisioned on first load from a public domain and the owner claims the dashboard later.

```bash
npm install @shortbread/consent
```

## React / Next.js

```tsx
// app/layout.tsx
import { ShortbreadConsent } from "@shortbread/consent/react";
import { consentDefaultsScript } from "@shortbread/consent/defaults";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script dangerouslySetInnerHTML={{ __html: consentDefaultsScript }} />
        {/* Put Google tags or GTM after consent initialization. */}
      </head>
      <body>
      <ShortbreadConsent owner="you@example.com" />
      {children}
    </body></html>
  );
}
```

The head script must execute before Google tags or GTM. A React effect runs too late for tags already in the head. Apply your CSP nonce when required. The loader sets defaults when called, but cannot protect tags that ran earlier.

Gate non-essential scripts and configure tag-manager consent checks:

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
