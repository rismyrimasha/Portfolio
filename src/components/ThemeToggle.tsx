import { Moon, Sun } from 'lucide-react'
import { IconButton } from '@/components/ui'
import { useTheme } from '@/lib/useTheme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <IconButton
      label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={toggle}
      className="fixed right-4 top-4 z-50"
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </IconButton>
  )
}
