interface IconProps {
  className?: string
}

export function FoodIcon({ className = 'h-12 w-12' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="28" r="14" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M16 28c0-4 2-8 8-8s8 4 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 20l-1-6M28 20l1-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M22 32l2 2 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <path d="M19 9c0 3 2 5 5 5s5-2 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}
