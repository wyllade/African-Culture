interface IconProps {
  className?: string
}

export function TribeIcon({ className = 'h-12 w-12' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" className={className} aria-hidden="true" suppressHydrationWarning data-darkreader-mode="never">
      <circle cx="16" cy="14" r="5" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <circle cx="32" cy="14" r="5" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <circle cx="24" cy="18" r="4" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M8 40c0-6 4-10 8-10M40 40c0-6-4-10-8-10" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M14 38c2-4 6-6 10-6s8 2 10 6" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M10 30c2-2 6-3 10-3M38 30c-2-2-6-3-10-3" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  )
}
