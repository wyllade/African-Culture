interface IconProps {
  className?: string
}

export function FoodIcon({ className = 'h-12 w-12' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" className={className} aria-hidden="true" suppressHydrationWarning data-darkreader-mode="never">
      <circle cx="24" cy="28" r="14" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M16 28c0-4 2-8 8-8s8 4 8 8" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 20l-1-6M28 20l1-6" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M22 32l2 2 2-2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <path d="M19 9c0 3 2 5 5 5s5-2 5-5" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}
