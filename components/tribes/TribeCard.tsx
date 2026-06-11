'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'

interface TribeCardProps {
  name: string
  slug: string
  location: string
  countryName: string
  countrySlug: string
}

export function TribeCard({ name, slug, location, countryName, countrySlug }: TribeCardProps) {
  return (
    <Link href={`/tribes/${slug}`}>
      <Card>
        <div className="h-32 bg-gradient-to-br from-stone-200 to-amber-200 dark:from-stone-700 dark:to-amber-900 flex items-center justify-center">
          <span className="text-3xl font-bold text-stone-400 dark:text-stone-500">{name[0]}</span>
        </div>
        <CardContent>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-stone-500 mt-1">{location}</p>
          <Link href={`/countries/${countrySlug}`} className="text-xs text-primary hover:underline mt-1 inline-block">
            {countryName}
          </Link>
        </CardContent>
      </Card>
    </Link>
  )
}
