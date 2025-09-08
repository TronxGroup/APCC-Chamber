# APCC — Sitio Institucional (Next.js App Router)

Stack: **Next.js 14 + TypeScript + Tailwind + next-seo**. Layout corporativo (blanco/negro/rojo oscuro) y rutas base.

## Estructura
- `app/` (App Router)
  - `layout.tsx`, `page.tsx` (Home)
  - Rutas: `/quienes-somos`, `/membresias`, `/servicios`, `/eventos`, `/noticias`, `/recursos`, `/directorio`, `/contacto`
- `styles/globals.css` (Tailwind + utilidades APCC)
- `lib/seo.ts` (`DefaultSeo`)
- `public/` (favicon)

## Uso
```bash
npm install
npm run dev
# http://localhost:3000
```

## Deploy en Vercel
- Root Directory: **/** (o la carpeta donde estén `package.json` y `app/`).
- Framework Preset: **Next.js**.
