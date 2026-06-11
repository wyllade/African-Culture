interface IconProps {
  className?: string
}

export function LanguageIcon({ className = 'h-12 w-12' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" className={className} aria-hidden="true" suppressHydrationWarning data-darkreader-mode="never">
      <rect x="8" y="10" width="32" height="22" rx="3" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
      <path d="M14 16h20M14 21h14M14 26h8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M36 14l4-2M36 18l4 2" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M8 36s4 3 16 3 16-3 16-3" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M24 32v5" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}
