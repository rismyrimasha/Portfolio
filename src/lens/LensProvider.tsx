import { useCallback, useEffect, useMemo, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { LensContext } from './LensContext'
import { DEFAULT_LENS, isLens, LENS_STORAGE_KEY, type Lens } from './types'

function readStoredLens(): Lens | null {
  try {
    const stored = localStorage.getItem(LENS_STORAGE_KEY)
    return isLens(stored) ? stored : null
  } catch {
    return null
  }
}

/**
 * Provides the active lens. The value is *derived*, not stored:
 *   `?lens=` query param  ->  localStorage  ->  DEFAULT_LENS
 * `setLens` writes the URL query (shareable) and an effect mirrors the result
 * to localStorage and `<html data-lens>` (which drives the accent hue).
 * Reading storage during render is deliberate here — SPA only, and it keeps the
 * value flash-free on reload without a state-sync effect.
 */
export function LensProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const paramLens = searchParams.get(LENS_STORAGE_KEY)
  const lens: Lens = isLens(paramLens)
    ? paramLens
    : (readStoredLens() ?? DEFAULT_LENS)

  useEffect(() => {
    document.documentElement.dataset.lens = lens
    try {
      localStorage.setItem(LENS_STORAGE_KEY, lens)
    } catch {
      /* storage unavailable — the derived value still applies */
    }
  }, [lens])

  const setLens = useCallback(
    (next: Lens) => {
      setSearchParams(
        (prev) => {
          const params = new URLSearchParams(prev)
          params.set(LENS_STORAGE_KEY, next)
          return params
        },
        { replace: true },
      )
    },
    [setSearchParams],
  )

  const value = useMemo(() => ({ lens, setLens }), [lens, setLens])

  return <LensContext.Provider value={value}>{children}</LensContext.Provider>
}
