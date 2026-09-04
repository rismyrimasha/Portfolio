import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/useTheme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="fixed right-4 top-4 z-50 rounded-full border border-hairline bg-surface p-2 text-muted transition-colors hover:text-ink"
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  )
}
