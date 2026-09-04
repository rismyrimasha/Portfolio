import { createContext } from 'react'
import type { Lens } from './types'

export type LensContextValue = {
  lens: Lens
  setLens: (next: Lens) => void
}

export const LensContext = createContext<LensContextValue | null>(null)
