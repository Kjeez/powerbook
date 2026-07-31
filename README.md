# Powerbook — Next.js

Premium notebooks with built-in power. A Kamlesh Group brand.

A single Next.js (App Router, TypeScript) project: a landing page plus one statically-generated page per model (`/models/[slug]`). All product data lives in `lib/models.ts` — edit prices, variants, features, and images there and every page updates.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Structure

- `app/page.tsx` — landing page (hero, variants L1–L4, features, materials, collection, corporate, gallery, contact)
- `app/models/[slug]/page.tsx` — dynamic model page (`generateStaticParams` + `generateMetadata`)
- `lib/models.ts` — all product data (variants + 22 models). **Edit this to change prices/models.**
- `components/` — Header, Footer, FloatingCTA, ContactBand, ScrollReveal, icons
- `app/globals.css` — brand design system (white / Inter / red #EF4343)
- `public/assets/` — images and product videos

## Notes

- Enquiries go to phone/WhatsApp `+91 98117 00286` and `contact@kamleshgroup.com` (in `lib/site.ts`).
- Prices are indicative starting prices — confirm and edit in `lib/models.ts`.
- Some models reuse representative photos; drop finish/brand photos into `public/assets/` and point the model's `img` at them.

# powerbook