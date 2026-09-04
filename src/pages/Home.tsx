const lenses = ['Engineer', 'QA / SDET', 'Product'] as const

export function Home() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col gap-6 px-6 pb-24 pt-28 sm:pt-36">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        Rismy Rimasha
      </p>

      <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
        Full-stack developer. I spec it, build it, test it, and ship it.
      </h1>

      <p className="max-w-xl text-lg text-muted">
        3rd-year software engineering student and full-stack intern (Flutter, PHP,
        NestJS). I like owning a feature end to end.
      </p>

      <ul className="flex flex-wrap gap-2" aria-label="Focus areas">
        {lenses.map((lens) => (
          <li
            key={lens}
            className="rounded-full border border-hairline bg-surface px-3 py-1 font-mono text-xs font-medium text-ink-soft"
          >
            {lens}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-4 pt-2 font-mono text-sm">
        <a
          className="text-accent underline-offset-4 hover:underline"
          href="https://github.com/rismyrimasha"
        >
          GitHub
        </a>
        <a
          className="text-accent underline-offset-4 hover:underline"
          href="mailto:rismyrimasha@gmail.com"
        >
          Email
        </a>
      </div>

      <p className="pt-8 font-mono text-xs text-muted">
        Foundation build &mdash; the lens switcher, project showcase, and case
        studies land in the next phases.
      </p>
    </section>
  )
}
