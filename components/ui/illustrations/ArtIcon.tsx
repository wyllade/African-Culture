interface IconProps {
  className?: string
}

export function ArtIcon({ className = 'h-12 w-12' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" className={className} aria-hidden="true" suppressHydrationWarning data-darkreader-mode="never">
      <ellipse cx="24" cy="30" rx="12" ry="10" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <ellipse cx="24" cy="20" rx="4" ry="3" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12" />
      <path d="M20 20l-4 12M28 20l4 12" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M14 24h-3M37 24h-3" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M12 30s4 3 12 3 12-3 12-3" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <circle cx="24" cy="20" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  )
}
