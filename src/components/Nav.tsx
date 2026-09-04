import { Container } from '@/components/ui'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LensSwitch } from '@/lens'
import { useScrollSpy } from '@/lib/useScrollSpy'
import { cn } from '@/lib/utils'
import { profile } from '@/content/profile'

const LINKS = [
  { id: 'approach', label: 'Approach' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

const SECTION_IDS = LINKS.map((link) => link.id)

export function Nav() {
  const active = useScrollSpy(SECTION_IDS)

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-bg/80 backdrop-blur">
      <Container
        size="wide"
        className="flex h-14 items-center justify-between gap-4"
      >
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-ink"
        >
          {profile.name}
        </a>

        <nav className="hidden gap-5 md:flex" aria-label="Sections">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'true' : undefined}
              className={cn(
                'font-mono text-xs transition-colors hover:text-ink',
                active === link.id ? 'text-accent' : 'text-muted',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LensSwitch variant="compact" className="hidden sm:inline-flex" />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  )
}
