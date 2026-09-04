import type { ReactNode } from 'react'
import { Button, ButtonLink, Container, Section, Tag } from '@/components/ui'
import { LensSwitch, useLens } from '@/lens'

/** Dev-only kitchen sink (registered only when import.meta.env.DEV). */
export function Components() {
  const { lens } = useLens()

  return (
    <div className="py-16">
      <Container size="wide" className="flex flex-col gap-12">
        <header className="flex flex-col gap-2">
          <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-accent">
            Dev &middot; /components
          </p>
          <h1 className="text-display-sm font-bold tracking-[-0.02em]">
            Design system
          </h1>
          <p className="font-mono text-xs text-muted">
            Active lens: {lens} &middot; toggle theme top-right &middot; the accent
            hue follows the lens
          </p>
        </header>

        <Group label="Lens switch">
          <LensSwitch />
        </Group>

        <Group label="Buttons">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link" size="none">
              Link
            </Button>
            <Button size="sm">Small</Button>
            <Button disabled>Disabled</Button>
            <ButtonLink href="#components" variant="ghost">
              Anchor
            </ButtonLink>
          </div>
        </Group>

        <Group label="Tags">
          <div className="flex flex-wrap gap-2">
            <Tag>neutral</Tag>
            <Tag tone="eng">Engineering</Tag>
            <Tag tone="qa">QA</Tag>
            <Tag tone="pm">Product</Tag>
          </div>
        </Group>

        <Group label="Type scale">
          <p className="text-display font-bold tracking-[-0.02em]">Display</p>
          <p className="text-display-sm font-bold tracking-[-0.02em]">
            Display small
          </p>
          <p className="text-xl">Extra large</p>
          <p className="text-base">Base body text sits at 17px.</p>
          <p className="font-mono text-xs text-muted">Mono caption</p>
        </Group>

        <Section
          eyebrow="Section component"
          title="Eyebrow + title + rhythm"
          className="rounded-lg border border-hairline !py-10"
        >
          <p className="text-ink-soft">
            Section wraps content in a Container with one consistent vertical
            rhythm across the whole site.
          </p>
        </Section>
      </Container>
    </div>
  )
}

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
        {label}
      </h2>
      {children}
    </section>
  )
}
