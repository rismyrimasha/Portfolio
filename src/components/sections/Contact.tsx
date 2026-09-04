import { ButtonLink, Section } from '@/components/ui'
import { profile } from '@/content/profile'

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk">
      <p className="mb-6 max-w-md text-ink-soft">
        Open to internship and graduate roles across engineering, QA, and
        product. The fastest way to reach me is email.
      </p>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href={`mailto:${profile.email}`} variant="primary">
          Email
        </ButtonLink>
        <ButtonLink
          href={profile.github}
          variant="ghost"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </ButtonLink>
        <ButtonLink
          href={profile.linkedin}
          variant="ghost"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </ButtonLink>
      </div>
    </Section>
  )
}
