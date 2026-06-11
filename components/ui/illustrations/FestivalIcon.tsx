interface IconProps {
  className?: string
}

export function FestivalIcon({ className = 'h-12 w-12' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" className={className} aria-hidden="true" suppressHydrationWarning data-darkreader-mode="never">
      <circle cx="24" cy="28" r="13" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M24 10v4M24 34v4" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M20 16l4-2 4 2v7l-4 2-4-2v-7z" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
      <path d="M17 26c0-3 3-5 7-5s7 2 7 5" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M17 30c0 2 3 4 7 4s7-2 7-4" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <circle cx="24" cy="26" r="2" strokeWidth="1.5" />
    </svg>
  )
}
