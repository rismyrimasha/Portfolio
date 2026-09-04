import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'

type SectionProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: string
  title?: ReactNode
  size?: 'prose' | 'wide'
}

/** A page section with consistent vertical rhythm and an optional heading block. */
export function Section({
  eyebrow,
  title,
  size,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn('scroll-mt-20 py-16 sm:py-24', className)} {...props}>
      <Container size={size}>
        {eyebrow ? (
          <p className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="mb-6 text-display-sm font-bold leading-[1.12] tracking-[-0.02em]">
            {title}
          </h2>
        ) : null}
        {children}
      </Container>
    </section>
  )
}
