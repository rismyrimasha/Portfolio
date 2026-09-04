const lenses = ['Full-stack Development', 'QA', 'Product Management'] as const

export function Home() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col gap-6 px-6 pb-24 pt-28 sm:pt-36">
      <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-accent">
        Rismy Rimasha
      </p>

      <h1 className="font-display text-[2.15rem] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[3rem] sm:leading-[1.04]">
        <span className="block">Full-stack developer.</span>
        <span className="block">I spec it, build it, test it, and ship it.</span>
      </h1>

      <p className="max-w-md font-sans text-[1.0625rem] leading-[1.75] text-ink-soft">
        3rd-year software engineering student and
        <br />
        full-stack developer intern (Flutter, PHP).
      </p>

      <ul className="flex flex-wrap gap-2" aria-label="Focus areas">
        {lenses.map((lens) => (
          <li
            key={lens}
            className="rounded-full border border-hairline bg-surface px-3.5 py-1.5 font-mono text-xs font-medium tracking-[0.01em] text-ink-soft transition-colors hover:border-accent/40 hover:text-ink"
          >
            {lens}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-4 pt-2 font-mono text-sm font-medium">
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
