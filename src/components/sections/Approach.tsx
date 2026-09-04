import { Section } from '@/components/ui'
import { useLensContent } from '@/lens'
import { approachCopy } from '@/content/approach'

export function Approach() {
  const { heading, points } = useLensContent(approachCopy)

  return (
    <Section id="approach" eyebrow="How I work" title={heading}>
      <ul className="flex flex-col gap-4">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-ink-soft">
            <span
              aria-hidden="true"
              className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-accent"
            />
            <span className="leading-[1.7]">{point}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
