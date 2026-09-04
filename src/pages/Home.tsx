import { Container } from '@/components/ui'
import { LensSwitch, useLensContent } from '@/lens'

export function Home() {
  const focus = useLensContent({
    engineering:
      'Right now: building Flutter + PHP/MySQL features as a full-stack intern.',
    qa: 'Right now: adding real test suites to services that shipped with none.',
    product: 'Right now: writing the PRD and picking the metric before the code.',
  })

  return (
    <Container className="flex flex-col gap-6 pb-24 pt-28 sm:pt-36">
      <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-accent">
        Rismy Rimasha
      </p>

      <h1 className="text-display font-bold leading-[1.05] tracking-[-0.02em]">
        <span className="block">Full-stack developer.</span>
        <span className="block">I spec it, build it, test it, and ship it.</span>
      </h1>

      <p className="max-w-md text-[1.0625rem] leading-[1.75] text-ink-soft">
        3rd-year software engineering student and
        <br />
        full-stack developer intern (Flutter, PHP).
      </p>

      <LensSwitch className="mt-1" />
      <p className="font-mono text-xs text-muted">{focus}</p>

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
        Phase 2 &mdash; design system &amp; the lens switcher. Project showcase and
        case studies next.
      </p>
    </Container>
  )
}
