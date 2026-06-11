interface LogoProps {
  className?: string
  variant?: 'default' | 'white'
}

export function Logo({ className = 'h-7 w-7', variant = 'default' }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <path
        d="M5 20c2-3 5-5 9-5s7 2 9 5M7 12c2-1 5-2 8-2s5 1 7 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M16 2v2M16 28v2M2 16h2M28 16h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 16c0-2 1.5-5 4-5s4 3 4 5-1.5 5-4 5-4-3-4-5z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path d="M11 16h10M16 11v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}
