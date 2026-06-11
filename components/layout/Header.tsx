'use client'

import { useState } from 'react'
import Link from 'next/link'
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

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 dark:border-stone-700 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Globe className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold tracking-tight">AfroSphere</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-stone-600 hover:text-primary dark:text-stone-400 dark:hover:text-primary rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              Explore Random
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-stone-200 dark:border-stone-700">
          <div className="mx-auto max-w-3xl px-4 py-3">
            <SearchBar />
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="lg:hidden border-t border-stone-200 dark:border-stone-700">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-stone-600 hover:text-primary dark:text-stone-400 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
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
