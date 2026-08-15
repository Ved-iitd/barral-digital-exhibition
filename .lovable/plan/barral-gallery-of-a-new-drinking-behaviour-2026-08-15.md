# BARRAL — Gallery of a New Drinking Behaviour

A single cinematic homepage at `/`, nine scrolled scenes, built on your uploaded Mr. Barral artwork, the signature cup render and the BARRAL mark.

## Design system

- Palette: true black, off-white, Barral red (sampled from your artwork), plus per-flavour accents (citrus/ice, deep brown, street red, cocoa-hazelnut). No gradients, no glassmorphism, no rounded cards.
- Type: Bodoni Moda for oversized editorial headlines, Manrope for nav, body and buttons. Loaded via a font `<link>` in the root route.
- Texture: fine hairline dividers, film grain overlay, spotlight vignettes, large section numerals (01–09), generous negative space.
- All colours as semantic tokens in `src/styles.css`; nothing hardcoded in components.

## Assets

Your six uploads become CDN assets: Mr. Barral holding the sachet, full-body mascot, the panipuri cup portrait, the black cup front/back render, the shrug pose (transparent-friendly on black) and the logo lockup. They drive Scenes 1, 2, 3, 6 and 9. The 24 collectible designs use numbered placeholders wired to one data file, so you drop in real art later without touching components.

## Scenes

1. **Opening** — black full-screen, Mr. Barral + cup as an editorial painting, masked headline reveal, two CTAs, "Scroll to prepare" indicator.
2. **Category reveal** — pinned scroll; the finished cup separates into Cup / Mixer / Cold Water / 10–15 Seconds with hairline connectors and labels, then reassembles.
3. **Preparation** — scroll-scrubbed four-step sequence (TEAR → POUR → ADD WATER → STIR. SIP. BARRAL.) with replaceable frame slots; liquid resolves to the selected flavour colour.
4. **Flavour gallery** — four full-screen environments cross-fading by colour and texture, each with its own copy line and a "Discover This Flavour" expanding panel. Not a card grid.
5. **24 Designs** — dark gallery; horizontal scroll on desktop, swipe on mobile, tilt on hover, click opens a detail view with number, name and personality.
6. **Manifesto** — black-and-white Mr. Barral, line-by-line text reveal, grain and a slow moving spotlight.
7. **Proposition** — split editorial comparison (Old Routine vs Barral Ritual), no table, closing centred line.
8. **Pre-order** — deliberately calmer. Pack of 6 and Pack of 24, quantity selector, flavour picker, Add to Cart / Buy Now, details, ingredients, preparation, shipping and FAQ accordions. Every price, image, stock and delivery value is a clearly marked placeholder — I invent no prices, claims or certifications.
9. **Final moment** — Mr. Barral with cups, both CTAs, Instagram line.

Footer: logo, nav links, contact, Instagram, four policy pages (stub routes), FSSAI placeholder, copyright.

## Motion and mobile

GSAP + ScrollTrigger for pinned/scrubbed scenes, Framer Motion for component-level reveals, Lenis for smooth scroll. Mobile gets shorter pins, no heavy parallax, tap/swipe instead of hover, and a persistent Pre-Order button. `prefers-reduced-motion` collapses everything to static states. Custom minimal cursor on desktop only.

## Checkout

You chose full checkout. That comes in two steps:

1. **This build** — the full storefront UI plus a working client cart, backed by Lovable Cloud for pre-order/cart records. No prices invented; you fill them in the data file.
2. **Payments** — enabled after this build, once you confirm real prices, GST/FSSAI details and shipping terms. Lovable's built-in payments needs a paid workspace plan; if you'd rather not upgrade I can connect your own Stripe keys instead. I'll surface that choice when we get there.

## Technical notes

- TanStack Start routes: `/` (all scenes) plus `/privacy`, `/terms`, `/shipping`, `/refund` stubs.
- `src/data/barral.ts` holds flavours, packs, 24 designs, FAQ and copy — single source of truth.
- Uploaded images go through Lovable Assets (CDN pointers), served responsive and lazy below the fold.
- SEO: unique title/description/OG/Twitter on each route, Product + Organization JSON-LD placeholders, semantic headings, visible focus states, descriptive alt text.

## Open items (won't block the build)

Instagram handle, contact email, FSSAI number, prices and launch date stay as placeholders until you send them.
