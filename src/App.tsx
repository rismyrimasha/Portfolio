import { Route, Routes } from 'react-router-dom'
import { ThemeToggle } from '@/components/ThemeToggle'
import { SiteFooter } from '@/components/SiteFooter'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'

export function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-ink">
      <ThemeToggle />
      <main className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
