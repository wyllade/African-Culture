'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from '@/lib/icon'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (query.trim()) {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      }
    },
    [query, router]
  )

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
      <input
        type="search"
        placeholder="Search countries, tribes, foods, traditions..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-transparent border-b-2 border-stone-300 dark:border-stone-600 pl-10 py-2.5 text-foreground placeholder:text-stone-400 focus:outline-none focus:border-primary transition-colors"
      />
    </form>
  )
}
