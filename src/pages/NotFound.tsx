import { Link } from 'react-router-dom'
import { Container } from '@/components/ui'

export function NotFound() {
  return (
    <Container className="flex flex-col gap-4 pb-24 pt-28 sm:pt-36">
      <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-accent">
        Error 404
      </p>
      <h1 className="text-display-sm font-bold leading-[1.12] tracking-[-0.02em]">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="text-ink-soft">
        The link may be broken, or the page may have moved.
      </p>
      <Link
        to="/"
        className="font-mono text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        &larr; Back home
      </Link>
    </Container>
  )
}
