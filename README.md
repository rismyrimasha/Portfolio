# Portfolio — Rismy Rimasha

> Full-stack developer. I spec it, build it, test it, and ship it.

Personal portfolio site. One page, three lenses — a visitor reads me as an
**engineer**, a **QA / SDET**, or a **product manager**, and the same projects
back all three.

**Live:** _not deployed yet_ · planned domain `rismyrimasha.dev`
**Status:** Phase 1 — foundation (scaffold, TypeScript, CI, deploy pipeline)

## Stack

| Area       | Choice                                   |
| ---------- | ---------------------------------------- |
| Framework  | React 19 + Vite 7                        |
| Language   | TypeScript (strict)                      |
| Styling    | Tailwind CSS v4 (`@theme inline` tokens) |
| Routing    | React Router v7                          |
| Icons      | lucide-react                             |
| CI         | GitHub Actions — typecheck, lint, build, Lighthouse budget |
| Hosting    | Vercel (planned)                         |

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script              | Does                                        |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Start the dev server                        |
| `npm run build`     | Production build to `dist/`                 |
| `npm run preview`   | Serve the production build locally          |
| `npm run typecheck` | `tsc --noEmit` for app + node configs       |
| `npm run lint`      | ESLint (flat config, typescript-eslint)     |
| `npm run ci`        | typecheck + lint + build (what CI runs)     |
| `npm run lhci`      | Lighthouse CI against `dist/`               |

## Structure

```
src/
  main.tsx            # entry — mounts <App> inside <BrowserRouter>
  App.tsx             # layout shell + routes
  index.css           # Tailwind v4 import + theme tokens (light/dark)
  pages/
    Home.tsx          # hero (foundation placeholder)
    NotFound.tsx      # 404
  components/
    ThemeToggle.tsx   # light/dark switch
    SiteFooter.tsx
  lib/
    useTheme.ts       # .dark class + localStorage, no-flash via index.html script
    utils.ts          # cn() class merge helper
```

## Roadmap

- [x] **Phase 1** — foundation: repo, TypeScript, clean shell, tokens, CI, deploy config
- [ ] **Phase 2** — design system + the lens-switcher primitive
- [ ] **Phase 3** — core sections (hero, approach, experience, skills, contact)
- [ ] **Phase 4** — project showcase + case studies (MDX), live demos
- [ ] **Phase 5** — content: case studies, a public PRD, a test plan, writing
- [ ] **Phase 6** — polish: motion, a11y, SEO/OG, performance budget
- [ ] **Phase 7** — launch: domain, Search Console, profiles
