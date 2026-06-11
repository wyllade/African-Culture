interface RegionIconProps {
  className?: string
  direction?: 'east' | 'west' | 'north' | 'south' | 'central'
}

const arrows: Record<string, string> = {
  east: 'M28 24l4 4-4 4',
  west: 'M20 24l-4 4 4 4',
  north: 'M24 20l-4-4 4-4',
  south: 'M24 28l4-4-4-4',
  central: 'M20 20l4 4 4-4M20 28l4-4 4 4',
}

export function RegionIcon({ className = 'h-12 w-12', direction = 'central' }: RegionIconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <path d={arrows[direction] || arrows.central} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
