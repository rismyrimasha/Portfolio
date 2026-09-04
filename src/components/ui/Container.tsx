import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  /** `prose` ≈ 42rem reading width, `wide` ≈ 64rem for grids. */
  size?: 'prose' | 'wide'
}

export function Container({
  size = 'prose',
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6',
        size === 'wide' ? 'max-w-5xl' : 'max-w-2xl',
        className,
      )}
      {...props}
    />
  )
}
