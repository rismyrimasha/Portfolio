import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// Co-located with the component by design; not a hot-reload boundary.
// eslint-disable-next-line react-refresh/only-export-components
export const tagVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[0.7rem] font-medium',
  {
    variants: {
      tone: {
        neutral: 'border-hairline bg-surface text-ink-soft',
        eng: 'border-eng/25 bg-eng/10 text-eng',
        qa: 'border-qa/25 bg-qa/10 text-qa',
        pm: 'border-pm/25 bg-pm/10 text-pm',
      },
    },
    defaultVariants: { tone: 'neutral' },
  },
)

type TagProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof tagVariants>

export function Tag({ className, tone, ...props }: TagProps) {
  return <span className={cn(tagVariants({ tone }), className)} {...props} />
}
