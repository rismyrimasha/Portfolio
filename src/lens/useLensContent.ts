import type { Lens } from './types'
import { useLens } from './useLens'

/** Pick the entry for the active lens: `useLensContent({ engineering, qa, product })`. */
export function useLensContent<T>(map: Record<Lens, T>): T {
  const { lens } = useLens()
  return map[lens]
}
