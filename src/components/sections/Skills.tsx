import { Section } from '@/components/ui'
import { useLens } from '@/lens'
import { cn } from '@/lib/utils'
import { skillGroups } from '@/content/skills'

export function Skills() {
  const { lens } = useLens()

  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <p className="mb-6 font-mono text-xs text-muted">
        Highlighted for the {lens} lens &mdash; the rest still applies.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => {
          const relevant = group.lenses.includes(lens)
          return (
            <div
              key={group.title}
              className={cn(
                'rounded-lg border bg-surface p-4 transition-opacity',
                relevant
                  ? 'border-accent/30'
                  : 'border-hairline opacity-55',
              )}
            >
              <h3 className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-ink-soft">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
