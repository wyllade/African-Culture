'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/Input'

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
      <Input
        type="search"
        placeholder="Search countries, tribes, foods, traditions..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-10"
      />
    </form>
  )
}
