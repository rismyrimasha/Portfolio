import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col gap-4 px-6 pb-24 pt-28 sm:pt-36">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        Error 404
      </p>
      <h1 className="text-4xl font-bold tracking-tight">This page doesn&rsquo;t exist.</h1>
      <p className="text-muted">
        The link may be broken, or the page may have moved.
      </p>
      <Link
        to="/"
        className="font-mono text-sm text-accent underline-offset-4 hover:underline"
      >
        &larr; Back home
      </Link>
    </section>
  )
}
