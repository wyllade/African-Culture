'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, Globe } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SearchBar } from './SearchBar'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/countries', label: 'Countries' },
  { href: '/foods', label: 'Foods' },
  { href: '/tribes', label: 'Tribes' },
  { href: '/languages', label: 'Languages' },
  { href: '/festivals', label: 'Festivals' },
  { href: '/proverbs', label: 'Proverbs' },
  { href: '/explorer', label: 'Explorer' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showSolid = !isHome || scrolled

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        showSolid
          ? 'bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl border-b border-stone-200/50 dark:border-stone-700/50 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Globe className="h-7 w-7 text-primary transition-transform group-hover:rotate-12 duration-300" />
            <span className={cn(
              'text-xl font-bold tracking-tight transition-colors',
              'font-serif',
              !showSolid && 'text-white drop-shadow-md'
            )}>
              AfroSphere
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-full transition-colors relative group',
                  showSolid
                    ? 'text-stone-600 dark:text-stone-400 hover:text-primary hover:bg-stone-100 dark:hover:bg-stone-800'
                    : 'text-white/80 hover:text-white'
                )}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-4" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={cn(
                'p-2 rounded-full transition-colors',
                showSolid
                  ? 'hover:bg-stone-100 dark:hover:bg-stone-800'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              )}
            >
              <Search className="h-5 w-5" />
            </button>
            <Button
              variant={showSolid ? 'outline' : 'ghost'}
              size="sm"
              className={cn('hidden sm:flex', !showSolid && 'text-white border-white/30 hover:bg-white/10')}
            >
              Explore Random
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                'lg:hidden p-2 rounded-full transition-colors',
                showSolid
                  ? 'hover:bg-stone-100 dark:hover:bg-stone-800'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              )}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className={cn('border-t', showSolid ? 'border-stone-200/50 dark:border-stone-700/50' : 'border-white/10')}>
          <div className="mx-auto max-w-3xl px-4 py-3">
            <SearchBar />
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-stone-900/95 backdrop-blur-xl">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-sm font-medium text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
