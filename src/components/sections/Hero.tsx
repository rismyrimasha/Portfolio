import { ButtonLink, Container } from '@/components/ui'
import { LensSwitch, useLensContent } from '@/lens'
import { heroNow } from '@/content/hero'
import { profile } from '@/content/profile'

export function Hero() {
  const now = useLensContent(heroNow)

  return (
    <section id="top" className="scroll-mt-24">
      <Container className="flex flex-col gap-6 pb-20 pt-20 sm:pt-28">
        <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-accent">
          {profile.name}
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
        <p className="font-mono text-xs text-muted">{now}</p>

        <div className="mt-2 flex flex-wrap gap-3">
          <ButtonLink href="#approach" variant="primary">
            See how I work
          </ButtonLink>
          <ButtonLink href="#contact" variant="ghost">
            Get in touch
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
