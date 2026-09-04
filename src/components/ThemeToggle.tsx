import { Moon, Sun } from 'lucide-react'
import { IconButton } from '@/components/ui'
import { useTheme } from '@/lib/useTheme'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <IconButton
      label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={toggle}
      className={className}
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </IconButton>
  )
}
