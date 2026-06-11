'use client'

import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-foreground">{label}</label>
      )}
      <div className="relative">
        <input
          className={cn(
            'w-full bg-transparent border-b-2 border-stone-300 dark:border-stone-600 py-2.5 text-foreground placeholder:text-stone-400 focus:outline-none focus:border-primary transition-colors',
            error && 'border-red-500 focus:border-red-500',
            className
          )}
          {...props}
        />
        <div className="absolute bottom-0 left-0 h-0.5 bg-primary scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100" />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
