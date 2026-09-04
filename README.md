# Portfolio — Rismy Rimasha

> Full-stack developer. I spec it, build it, test it, and ship it.

Personal portfolio site. One page, three lenses — a visitor reads me as an
**engineer**, a **QA / SDET**, or a **product manager**, and the same projects
back all three.

**Live:** deployed on Vercel · planned domain `rismyrimasha.dev`
**Status:** Phase 3 — core sections (hero, approach, experience, skills, contact)

## Stack

| Area      | Choice                                                     |
| --------- | -------------------------------------------------------- |
| Framework | React 19 + Vite 7                                       |
| Language  | TypeScript (strict)                                     |
| Styling   | Tailwind CSS v4 (`@theme inline` tokens)                |
| Routing   | React Router v7                                         |
| UI        | hand-rolled primitives + `class-variance-authority`, Radix (RadioGroup) |
| Icons     | lucide-react                                            |
| Test      | Vitest + Testing Library (jsdom)                        |
| CI        | GitHub Actions — typecheck, lint, test, build, Lighthouse budget |
| Hosting   | Vercel                                                  |

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script              | Does                                     |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start the dev server                    |
| `npm run build`     | Production build to `dist/`             |
| `npm run preview`   | Serve the production build locally      |
| `npm run typecheck` | `tsc --noEmit` for app + node configs   |
| `npm run lint`      | ESLint (flat config, typescript-eslint) |
| `npm test`          | Vitest run                              |
| `npm run ci`        | typecheck + lint + test + build         |
| `npm run lhci`      | Lighthouse CI against `dist/`           |

`/components` is a dev-only kitchen-sink route (registered only when `import.meta.env.DEV`).

## Design tokens

Defined in `src/index.css` as CSS variables, exposed to Tailwind via `@theme inline`.

- **Color** — `bg`, `surface`, `surface-2`, `ink`, `ink-soft`, `muted`, `hairline`,
  `accent` / `accent-fg`, the lens hues `eng` / `qa` / `pm`, and semantic
  `success` / `warning` / `danger`. Light values on `:root`, dark on `.dark`.
- **Lens accent** — `:root[data-lens="qa"]` etc. repoint `--c-accent` to the lens
  hue, so the accent follows the active lens in both themes.
- **Type** — display sizes `text-display` / `text-display-sm` (fluid `clamp`);
  body and UI use Tailwind's default scale. Fonts: Bricolage Grotesque (display),
  system sans (body), JetBrains Mono (labels).

## Structure

```
src/
  main.tsx              # entry — <BrowserRouter> > <LensProvider> > <App>
  App.tsx               # layout shell + routes (+ dev-only /components)
  index.css             # Tailwind v4 import + theme/lens tokens
  content/             # profile, hero, approach, experience, skills (copy + data)
  pages/
    Home.tsx            # composes the section components
    NotFound.tsx        # 404
    Components.tsx      # dev-only design-system kitchen sink
  components/
    Nav.tsx             # sticky nav + scroll-spy + lens switch + theme toggle
    ThemeToggle.tsx     # light/dark switch
    SiteFooter.tsx      # footer + colophon
    sections/           # Hero, Approach, Experience, Skills, Contact
    ui/                 # Container, Section, Button, Tag, IconButton, SkipLink
  lens/
    LensContext.ts      # context object
    LensProvider.tsx    # derives lens from ?lens= -> localStorage -> default
    useLens.ts          # { lens, setLens }
    useLensContent.ts   # pick({ engineering, qa, product })
    LensSwitch.tsx      # boxed segmented control (Radix RadioGroup)
    lens.test.tsx
  lib/
    useTheme.ts         # .dark class + localStorage, no-flash via index.html
    useScrollSpy.ts     # IntersectionObserver — active nav section
    utils.ts            # cn() class merge helper
```

## Roadmap

- [x] **Phase 1** — foundation: repo, TypeScript, clean shell, tokens, CI, deploy config
- [x] **Phase 2** — design system + the lens-switcher primitive
- [x] **Phase 3** — core sections (hero, approach, experience, skills, contact)
- [ ] **Phase 4** — project showcase + case studies (MDX), live demos
- [ ] **Phase 5** — content: case studies, a public PRD, a test plan, writing
- [ ] **Phase 6** — polish: motion, a11y, SEO/OG, performance budget
- [ ] **Phase 7** — launch: domain, Search Console, profiles
```
