# spectryeep.com (Astro static site)

Multilingual static site for JIEBO Instrument (Optical Emission Spectrometer manufacturer). Built for SEO + GEO — fast crawlable HTML, rich schema.org, and an LLM-friendly knowledge base.

## Stack

- **Astro 5** static output, zero-JS by default
- **i18n**: `en` (default at `/`), `ru`, `es`, `ar` (RTL)
- **Deploy target**: Cloudflare Pages (`npm run build` → publish `dist/`)
- **No DB, no CMS** — content lives in `src/data/*.ts` and `src/i18n/ui.ts`

## Local dev

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output → dist/
npm run preview    # preview built site locally
```

## Project map

```
src/
├── consts.ts                  # site facts, products list, locale metadata
├── i18n/
│   ├── ui.ts                  # all UI strings × 4 langs
│   └── utils.ts               # t(), localizedPath, whatsappUrl, hreflang
├── layouts/Base.astro         # <html lang dir>, meta, schema injection, header/footer/FAB
├── components/
│   ├── Header.astro           # nav + language switcher
│   ├── Footer.astro
│   ├── WhatsAppFab.astro      # sticky bottom-right WhatsApp button, lang+context aware
│   ├── SchemaOrg.astro        # Organization + Product + Article + FAQPage + BreadcrumbList
│   ├── FactsCard.astro        # "JIEBO at a glance" dl/dt/dd
│   ├── HomePage.astro         # single home template, takes locale prop
│   ├── ProductT5Page.astro    # Innovate T5 template
│   └── LearnOesPage.astro     # "What is OES?" article template
├── data/
│   ├── innovate-t5.ts         # T5 specs / overview / applications / FAQ × 4 langs
│   └── learn-what-is-oes.ts   # article sections + FAQ × 4 langs
├── pages/                     # routing only — actual content via shared components
│   ├── index.astro                              → /
│   ├── ru/index.astro                           → /ru/
│   ├── es/index.astro                           → /es/
│   ├── ar/index.astro                           → /ar/
│   ├── products/innovate-t5.astro               → /products/innovate-t5/
│   ├── (ru|es|ar)/products/innovate-t5.astro
│   ├── learn/what-is-oes.astro                  → /learn/what-is-oes/
│   └── (ru|es|ar)/learn/what-is-oes.astro
└── styles/global.css          # plain CSS w/ logical properties (RTL-safe)
public/
├── robots.txt                 # allow all AI bots (GPTBot, ClaudeBot, PerplexityBot, ...)
├── llms.txt                   # hand-curated LLM index
└── favicon.svg
```

## SEO/GEO checklist — current status

| Signal | Status |
|---|---|
| Crawlable static HTML (no JS gate) | ✅ |
| `robots: index, follow` on every page | ✅ |
| Canonical URL on every page | ✅ |
| hreflang for all locales + x-default | ✅ |
| Auto sitemap with hreflang annotations | ✅ |
| `robots.txt` allow-list for AI crawlers | ✅ |
| `llms.txt` summary file | ✅ |
| `<html lang="ar" dir="rtl">` for Arabic | ✅ |
| Organization schema (logo + address + contactPoint + sameAs) | ✅ |
| Product schema with offers + breadcrumbs | ✅ (T5 only) |
| FAQ schema on product + article | ✅ |
| Article schema on /learn/ | ✅ |
| Sticky WhatsApp button, lang+context aware | ✅ |
| og:image (per-page custom image) | ⚠️ placeholder only |
| Real product photos | ❌ to be added |

## Roadmap (next sessions)

**Content gaps (priority order):**
1. **Remaining 4 product pages** — Noble T7, T4 Mini Spark, CS995, CS996 (copy spec table from T5 file, swap values)
2. **`/about/` page** — full Organization entity card (founder, certifications, factory photos)
3. **`/contact/` page** — regional sales contacts, map, WhatsApp QR
4. **`/products/` index page** — comparison table across all 5 models (huge GEO win — LLMs cite comparison tables)
5. **More `/learn/` articles** that are GEO bait:
   - `OES vs XRF: Which is right for your foundry?`
   - `How to choose an OES spectrometer (decision guide)`
   - `OES sample preparation best practices`
   - `Carbon analysis in cast iron: complete guide`

**Asset gaps:**
- Real product photos (currently no images)
- og:image files at `/og/<slug>.png` (1200×630, with product photo + JIEBO logo)
- Factory / team photos for About page

**Post-launch (within 30 days of going live):**
- Submit sitemap to Google Search Console + Bing Webmaster Tools
- Apply for Wikidata entity for "JIEBO Instrument" (free; AI engines pull entity facts from here)
- Submit company profile to industry directories (LinkedIn Company, Crunchbase, GlobalSpec, IndustrySearch)
- Add Google Analytics 4 (or Plausible — both work with static)

**Translation review:**
- AI-assisted translations (ru/es/ar) MUST be reviewed by native speakers before launch
- B2B copy errors destroy trust at the very first email
- Look for: industry term accuracy ("Paschen-Runge", "argon purity", "lollipop sampling"), CTA tone, RTL number/unit formatting in Arabic

## Deploy to Cloudflare Pages

1. Push to GitHub: `gh repo create spectryeep --public --source=.`
2. Cloudflare dashboard → Pages → Create → Connect to Git → select repo
3. Build command: `npm run build` · Output dir: `dist`
4. Cloudflare Pages will pick up the new build on each `git push`
5. DNS: in Cloudflare, point `spectryeep.com` to the Pages project (CNAME or "use as custom domain")
6. **Disable the existing WAF / JS challenge** on the root domain — your current `/hcdn-cgi/jschallenge` 403s every crawler

## License / ownership

Site copy and product data are owned by Wuxi JIEBO Electronic Technology Co., Ltd. The Astro source code is unlicensed and private to the project.
