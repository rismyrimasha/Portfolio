import { useContext } from 'react'
import { LensContext } from './LensContext'

export function useLens() {
  const ctx = useContext(LensContext)
  if (!ctx) {
    throw new Error('useLens must be used within <LensProvider>')
  }
  return ctx
}
