import { Section, Tag } from '@/components/ui'
import { experience, type ExperienceKind } from '@/content/experience'

const KIND_LABEL: Record<ExperienceKind, string> = {
  work: 'Work',
  project: 'Project',
  education: 'Education',
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've been">
      <ol className="flex flex-col gap-8">
        {experience.map((entry) => (
          <li
            key={entry.role}
            className="grid gap-2 border-l border-hairline pl-5 sm:grid-cols-[8.5rem_1fr] sm:gap-x-6 sm:border-l-0 sm:pl-0"
          >
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-muted">{entry.period}</span>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent">
                {KIND_LABEL[entry.kind]}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <h3 className="text-base font-semibold text-ink">{entry.role}</h3>
                <p className="text-sm text-muted">{entry.org}</p>
              </div>

              <ul className="flex flex-col gap-1.5 text-sm leading-[1.6] text-ink-soft">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {entry.stack ? (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {entry.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
