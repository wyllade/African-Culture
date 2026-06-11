import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'accent'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300',
    primary: 'bg-primary/10 text-primary dark:bg-primary/20 font-medium',
    secondary: 'bg-secondary/10 text-secondary dark:bg-secondary/20 font-medium',
    accent: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 font-medium',
  }

  return (
    <span className={cn('inline-flex items-center rounded-full px-3 py-1 text-xs font-medium', variants[variant], className)}>
      {children}
    </span>
  )
}
