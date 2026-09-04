export const LENSES = ['engineering', 'qa', 'product'] as const

export type Lens = (typeof LENSES)[number]

export function isLens(value: unknown): value is Lens {
  return (
    typeof value === 'string' && (LENSES as readonly string[]).includes(value)
  )
}

/** Display labels for the switch. Internal ids stay short (`engineering` etc.). */
export const LENS_LABELS: Record<Lens, string> = {
  engineering: 'Full-stack Development',
  qa: 'QA',
  product: 'Product Management',
}

export const DEFAULT_LENS: Lens = 'engineering'

export const LENS_STORAGE_KEY = 'lens'
