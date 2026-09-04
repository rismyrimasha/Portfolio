import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view, for nav highlighting.
 * Pass a stable `ids` array (module constant), not a fresh literal each render.
 */
export function useScrollSpy(ids: readonly string[], offsetPx = 80): string | null {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )
        if (inView[0]) setActive(inView[0].target.id)
      },
      { rootMargin: `-${offsetPx}px 0px -60% 0px`, threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, offsetPx])

  return active
}
