# MORVIX Website

A bilingual (English / Arabic) React + Vite website for MORVIX, built around the supplied MORVIX brand assets and engineering positioning.

## Stack

- React + TypeScript
- Vite
- React Router
- Lucide React icons
- CSS Modules + global design tokens
- Custom localization context with RTL support

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Localization

Public routes use language prefixes:

- `/en`
- `/ar`
- `/en/about`, `/ar/about`, etc.

All visible copy lives in `src/i18n/translations.ts` or data files that reference translation keys.

## Contact form

The project inquiry form uses client-side validation and a transparent `mailto:` fallback. It does not claim to submit to a backend.

When an API is available, replace the mailto logic in `src/components/ui/ContactForm/ContactForm.tsx` at the marked integration point.

## Content updates

- Capabilities: `src/data/capabilities.ts`
- Solutions: `src/data/solutions.ts`
- Process: `src/data/process.ts`
- Site configuration: `src/data/site.ts`
- Localized copy: `src/i18n/translations.ts`

## Brand assets

Optimized WebP versions of the provided logo references live in `src/assets/logos/`.
