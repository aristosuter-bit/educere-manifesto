# BUILD-NOTES — Educere

Every known TODO, open decision, and integration point. Check things off as they're done.

## 🔴 P0 — Before public launch

### 1. Form endpoint
- [ ] **Netlify**: deploy site → Netlify Forms auto-works (no action needed)
- [ ] **Formspree alt**: replace `data-netlify="true"` in `src/pages/[lang]/index.astro` line ~90 with `action="https://formspree.io/f/YOUR_ID"`
- [ ] **Custom backend**: set `action` to your endpoint, handle POST
- File: `src/pages/[lang]/index.astro` (form element)

### 2. Comment moderation flow
- [ ] Define process: who reviews, how often, where pending comments live
- [ ] Comment field is free text (max 280 chars) — **must be moderated** before public display
- [ ] Netlify: review in dashboard → export approved → add to `signatories` section in `[lang]/index.astro` → rebuild
- [ ] Long-term: build a simple admin UI or connect to a headless CMS
- Risk: auto-publishing an inappropriate comment on a children's-education site is a reputation kill

### 3. Preamble native review (FR + IT)
- [ ] French preamble (`src/data/content.js`, `fr.preamble.p1` and `p2`): review by native speaker, remove `<!-- TODO: native review -->` comment
- [ ] Italian preamble: same
- The German preamble is the original; FR/IT were machine-translated

### 4. Domain
- [ ] Register `educere.ch`
- [ ] Configure DNS for Netlify/Vercel
- [ ] Update `public/sitemap.xml` domain
- [ ] Update `public/robots.txt` domain
- [ ] Update OG URLs in `src/layouts/Base.astro`

### 5. Share image ✅ DONE
- [x] Per-language 1200×630 OG images at `public/og/educere-{de,fr,it,en}.png`
- [x] Full OG + Twitter card meta in `src/layouts/Base.astro`
- [x] `site` set in `astro.config.mjs` → OG/canonical/hreflang URLs now absolute (was localhost)
- Regenerate: edit the card template (`scripts/og-card.html` — template + per-lang text),
  render each `?lang=xx` at 1200×630 in a headless browser, screenshot to PNG.
  Must use a real browser (loads the Fraunces webfont; sharp/SVG won't have it).

## 🟡 P1 — Before pilot school

### 6. Signatory backend
- [ ] Current: signatories are hardcoded HTML in `[lang]/index.astro`
- [ ] Needed: a backend that stores signatories per language, serves them at build time or via client-side fetch
- [ ] Consider: Netlify Functions + Netlify Forms webhook, or a simple Airtable/Notion backend, or Astro SSR with a DB
- [ ] Store: name, role, canton, comment (moderated), email (private), language, timestamp

### 7. Romansh (rm) support
- [ ] Add `rm` block to `src/data/content.js`
- [ ] Add `"rm"` to `astro.config.mjs` locales
- [ ] Add to `getStaticPaths()` in `src/pages/[lang]/index.astro`
- [ ] Add to lang switcher in `src/layouts/Base.astro`
- [ ] Add to `public/sitemap.xml`
- [ ] Translate: preamble, sign form labels, footer, etymology line
- [ ] Manifesto and principles text: translate (these are sacred — work with a Romansh-speaking teacher)

### 8. PDF poster
- [ ] Pre-rendered A4 PDF per language for download (print stylesheet exists — this is a static convenience)
- [ ] Cleanly typeset manifesto-only PDF (no preamble, no form)
- [ ] Link from the print link or as a separate download

## 🟢 P2 — Nice to have

### 9. Localised movement names
- [ ] DE: Bereit | FR: Prêts | IT: Pronti
- [ ] Decision: do we use these alongside "Educere"? As subtitles? As standalone?
- [ ] If used: update `content.js` and all references in README section "Rename"

### 10. Reading mode
- [ ] Consider a `/read/` path that renders only the manifesto text (no chrome, no form) — clean, shareable, frameable
- [ ] Similar: a plain-text `.txt` version for teachers to print and hand out

### 11. Accessibility audit
- [ ] Full WCAG AA audit with screen reader
- [ ] Test keyboard navigation through form
- [ ] Test voice control

### 12. Per-language cantons
- [ ] Current: German canton names used as values for all languages
- [ ] Option: store canton names per language in `content.js` and use language-specific values

## Files to update per change

| Change | Files |
|--------|-------|
| Rename movement | `content.js` (wordmark/name), `Base.astro` (title/meta), `[lang]/index.astro` (wordmark block), `index.astro` (redirect text), `sitemap.xml`, `robots.txt` |
| Form endpoint | `[lang]/index.astro` (form element) |
| Add language | `content.js`, `astro.config.mjs`, `[lang]/index.astro` (getStaticPaths), `Base.astro` (switcher), `sitemap.xml` |
| Signatories | `[lang]/index.astro` (signatories section) |
| Design tokens | All in `Base.astro` `<style is:global>` block |
| Preamble text | `content.js` (preamble.p1, p2) |
| Manifesto/principles | `content.js` (verbatim — only change with consensus) |

## Build & deploy command

```bash
npm run build    # → dist/
# Deploy dist/ to Netlify, Vercel, or serve with:
npx serve dist   # preview locally
```
