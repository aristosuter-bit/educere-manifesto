# Educere

**Ein Manifest der Lehrerinnen und Lehrer für die Primarschule.**

Educere (lat. _herausführen, hervorlocken_) is the root of "education" — and the thesis of this movement: only humans can draw forth what's in a child. Tools can pour in.

This repo builds the movement's public home: a static, multilingual single-page site presenting the manifesto, letting Swiss teachers and parents add their names.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
```

Language paths: `/de/` (default), `/fr/`, `/it/`. Root `/` redirects to `/de/`.

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the build
```

## Deploy

The `dist/` folder is a fully static site. Deploy to any static host:

- **Netlify**: connect repo, build command `npm run build`, publish directory `dist`. Netlify Forms auto-detects `data-netlify="true"` on the form.
- **Vercel**: connect repo, framework preset "Astro", build command `npm run build`, output directory `dist`.

## Plug in the form endpoint

The form currently uses `data-netlify="true"` (works out of the box on Netlify). To switch:

1. Open `src/pages/[lang]/index.astro`, find the `<form>` element (~line 90).
2. Replace `data-netlify="true"` with your endpoint:
   - **Formspree**: `action="https://formspree.io/f/YOUR_FORM_ID" method="POST"`
   - **Netlify**: no change needed (deploy to Netlify and it just works)
   - **Custom**: set `action="YOUR_ENDPOINT"` and `method="POST"`
3. Rebuild: `npm run build`

## Comment moderation

The form includes an optional free-text comment field (max 280 chars). **Comments must pass moderation before public display** — never auto-publish free text on a children's-education site.

Netlify Forms stores submissions in the dashboard; you review before publishing. To display approved signatories:

1. Export approved submissions from Netlify.
2. Add them to the signatories section in `src/pages/[lang]/index.astro` (see the HTML comment template at the bottom of the page).
3. Rebuild.

A future backend integration could automate this. Tracked in BUILD-NOTES.md.

## Rename "Educere"

The movement name appears in:

- `astro.config.mjs` — i18n config
- `src/data/content.js` — `wordmark` and `name` fields (all languages)
- `src/layouts/Base.astro` — `<title>` and OG meta
- `src/pages/[lang]/index.astro` — wordmark block
- `src/pages/index.astro` — redirect page text
- `public/sitemap.xml` — domain
- `public/robots.txt` — domain

Localised names (Bereit / Prêts / Pronti): a TODO note in BUILD-NOTES.md.

## Add Romansh (`rm`)

1. Add an `rm: { ... }` block to `src/data/content.js` (copy the `de` structure, translate all fields).
2. Add `"rm"` to the `locales` array in `astro.config.mjs`.
3. Add `{ params: { lang: "rm" } }` to `getStaticPaths()` in `src/pages/[lang]/index.astro`.
4. Add `"RM"` to the lang switcher loop in `src/layouts/Base.astro`.
5. Add `rm` routes to `public/sitemap.xml`.
6. Rebuild.

All dynamic content is driven by `content.js` — no template changes needed beyond the switcher.

## Design

- Type: Newsreader (body) + Archivo (UI/wordmark)
- Palette: ink #1F2D3A, accent #2E5A6E, muted #5B6B78, hairline #C9D3D9, paper #FBFAF7
- Print stylesheet: manifesto fits one A4 page
- WCAG AA: sufficient contrast, visible focus states, `prefers-reduced-motion` respected

## Tech

- [Astro](https://astro.build) 5.x — static site generation
- Zero runtime JS beyond the form (comment counter + submit UX)
- All content in `src/data/content.js` — one source, three languages
- All manifesto text is plain HTML at build time (crawlers, previews, screen readers)

## License

Manifesto text: CC BY 4.0. Code: MIT.
