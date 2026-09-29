# ACWeb — Anesthesia Connect marketing site

Standalone marketing site for [www.anesthesiaconnect.net](https://www.anesthesiaconnect.net/): homepage, legal pages, and public jobs board.

This folder is designed to be copied out as its own GitHub repository (`ACWeb`) for external design work, then copied back into the main app repo as-is.

## Routes

| Path | Page |
|------|------|
| `/` | Homepage |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |
| `/cookies` | Cookie Policy |
| `/eula` | EULA |
| `/jobs` | Public jobs board |

## Local development (designer)

```bash
cp .env.example .env
# Set VITE_SUPABASE_ANON_KEY (public anon key — ask the product owner)
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

## Environment

| Variable | Purpose |
|----------|---------|
| `VITE_SUPABASE_URL` | API base (default `https://api.anesthesiaconnect.net`) |
| `VITE_SUPABASE_ANON_KEY` | Public anon key for demo request form, jobs list, and media URLs |

Do **not** commit `.env`. Never add service-role or other secrets.

## Import alias

All source imports use `@acweb/...` (mapped to `./src`). Keep that alias so this tree can live alone or inside the main monorepo without rewriting imports.

## What you can change

- Homepage sections under `src/components/`
- Legal page wrappers under `src/pages/`
- Public jobs UI under `src/pages/PublicJobs.tsx`
- Styles in `src/index.css` and `tailwind.config.ts`
- Public assets in `public/`

## Important: Header / Footer

`Header` and `Footer` are also used by some login/invite screens in the main app after sync. Visual changes here will appear on those screens too.

## Sync workflow (product owner)

1. Designer pushes to the `ACWeb` GitHub repo.
2. Owner pulls latest `ACWeb`.
3. Replace `credential-connect-ready/ACWeb/` entirely with that tree (do not copy `.git` or `.env`).
4. From the main repo root: `npm run build` and smoke-test `/`, `/terms`, `/privacy`, `/cookies`, `/eula`, `/jobs`.
5. Commit the updated `ACWeb/` folder in the main app repo.

Integration wiring (`src/App.tsx` routes, root Vite `@acweb` alias, auth pages importing Header/Footer) lives **outside** this folder and must not be overwritten by a folder copy.
