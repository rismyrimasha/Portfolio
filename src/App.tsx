import { Route, Routes } from 'react-router-dom'
import { SkipLink } from '@/components/ui'
import { Nav } from '@/components/Nav'
import { SiteFooter } from '@/components/SiteFooter'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { Components } from '@/pages/Components'

export function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-ink">
      <SkipLink />
      <Nav />
      <main id="main" className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          {import.meta.env.DEV ? (
            <Route path="components" element={<Components />} />
          ) : null}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
