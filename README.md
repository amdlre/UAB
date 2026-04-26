<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Unified Asset Bureau

React + Vite single-page site for Unified Asset Bureau, with SEO, Open Graph, favicon, and Formspree-powered inquiry forms.

View in AI Studio: https://ai.studio/apps/c3470b54-28a8-4766-8d19-ec186725768e

## Run Locally

**Prerequisites:** Node.js 20.19+ or 22.12+

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env template and fill in keys:
   ```bash
   cp .env.example .env.local
   ```
   Set `GEMINI_API_KEY` if needed. Formspree IDs default to the production form IDs in `src/lib/formspree.ts` and only need to be overridden via env if you swap forms.
3. Run the app:
   ```bash
   npm run dev
   ```

## Tech Stack

| Layer    | Technology                                       |
|----------|--------------------------------------------------|
| Build    | Vite 6                                           |
| UI       | React 19 + TypeScript                            |
| Styling  | Tailwind CSS v4 + custom institutional CSS       |
| Motion   | `motion` (Framer Motion successor)               |
| Icons    | `lucide-react`                                   |
| SEO      | `react-helmet-async`                             |
| Forms    | `@formspree/react` (`useForm` aliased as `useFormspree`) |

## SEO + Meta Tags

- App is wrapped in `<HelmetProvider>` in `src/main.tsx`.
- `src/components/SEO.tsx` is the reusable per-view component (title, description, canonical, Open Graph, Twitter card).
- `src/App.tsx` mounts `<SEO />` once with a `SEO_BY_VIEW` map keyed off the current view.
- Static fallbacks for non-JS crawlers live in `index.html` (default title, description, OG, Twitter card).

To change site-wide defaults (name, URL, description, default OG image), edit the constants at the top of `src/components/SEO.tsx` and the matching tags in `index.html`.

## Favicon

Favicon `<link>` tags are wired in `index.html`. Drop the asset files in `public/`:

- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180×180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

`public/site.webmanifest` is already in place. Generate the full asset set from a single source image at https://realfavicongenerator.net.

## Formspree Forms

Three forms are wired via `@formspree/react`:

| Form                | View                          | Form ID    |
|---------------------|-------------------------------|------------|
| UAB-Partnerships    | `PartnershipsView.tsx`        | `xkokeybq` |
| UAB-join-operator   | `JoinInquiryView.tsx` (`mode="operator"`) | `xdayjbzq` |
| UAB-join-training   | `JoinInquiryView.tsx` (`mode="training"`) | `mzdywove` |

IDs are centralized in `src/lib/formspree.ts` and can be overridden via env:

```
VITE_FORMSPREE_PARTNERSHIPS_ID=xkokeybq
VITE_FORMSPREE_OPERATOR_ID=xdayjbzq
VITE_FORMSPREE_TRAINING_ID=mzdywove
```

The Formspree hook is **always** imported aliased as `useFormspree` to avoid collisions with `react-hook-form`'s `useForm`:

```ts
import { useForm as useFormspree, ValidationError } from "@formspree/react";

const [state, handleSubmit] = useFormspree(FORMSPREE_IDS.partnerships);
```

Form submissions appear in the Formspree dashboard at https://formspree.io/forms.

## Scripts

| Script         | What it does                  |
|----------------|-------------------------------|
| `npm run dev`  | Vite dev server on port 3000  |
| `npm run build`| Production build              |
| `npm run preview` | Preview the production build |
| `npm run lint` | TypeScript typecheck (`tsc --noEmit`) |
| `npm run clean`| Remove `dist/`                |
