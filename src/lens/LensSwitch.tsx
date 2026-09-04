import * as RadioGroup from '@radix-ui/react-radio-group'
import { cn } from '@/lib/utils'
import { LENSES, LENS_LABELS, isLens } from './types'
import { useLens } from './useLens'

/** Boxed segmented control — pick how to read the portfolio. */
export function LensSwitch({ className }: { className?: string }) {
  const { lens, setLens } = useLens()

  return (
    <RadioGroup.Root
      value={lens}
      onValueChange={(value) => {
        if (isLens(value)) setLens(value)
      }}
      aria-label="Choose how to read this portfolio"
      className={cn(
        'inline-flex flex-wrap gap-1 rounded-lg border border-hairline bg-surface-2 p-1',
        className,
      )}
    >
      {LENSES.map((value) => (
        <RadioGroup.Item
          key={value}
          value={value}
          className={cn(
            'cursor-pointer rounded-md px-3 py-1.5 font-mono text-xs font-medium text-muted transition-colors',
            'hover:text-ink',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
            'data-[state=checked]:bg-surface data-[state=checked]:text-accent data-[state=checked]:shadow-sm',
          )}
        >
          {LENS_LABELS[value]}
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}
