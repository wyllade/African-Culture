'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatPopulation } from '@/lib/utils'

interface CountryCardProps {
  name: string
  slug: string
  flagUrl?: string
  capital: string
  population: number
  region: string
  languages: string[]
}

export function CountryCard({ name, slug, flagUrl, capital, population, region, languages }: CountryCardProps) {
  return (
    <Link href={`/countries/${slug}`}>
      <Card>
        {flagUrl && (
          <div className="h-40 overflow-hidden">
            <img src={flagUrl} alt={`Flag of ${name}`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        )}
        <CardContent>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg">{name}</h3>
            <Badge variant="primary">{region}</Badge>
          </div>
          <div className="mt-3 space-y-1 text-sm text-stone-500">
            <p>Capital: {capital}</p>
            <p>Population: {formatPopulation(population)}</p>
            <p className="truncate">{languages.slice(0, 2).join(', ')}{languages.length > 2 ? '...' : ''}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
