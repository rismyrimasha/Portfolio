import { Container } from '@/components/ui'
import { profile } from '@/content/profile'

const UPDATED = 'September 2026'

const FOOTER_LINKS = [
  { id: 'top', label: 'Top' },
  { id: 'approach', label: 'Approach' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline py-10">
      <Container className="flex flex-col gap-3 font-mono text-xs text-muted">
        <nav className="flex flex-wrap gap-x-4 gap-y-1" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <p>
          Built with React, Vite &amp; Tailwind &middot; deployed on Vercel
          &middot; source on{' '}
          <a
            href={profile.github}
            className="underline underline-offset-2 hover:text-ink"
          >
            GitHub
          </a>
          .
        </p>

        <p>
          &copy; {new Date().getFullYear()} {profile.name} &middot; last updated{' '}
          {UPDATED}
        </p>
      </Container>
    </footer>
  )
}
