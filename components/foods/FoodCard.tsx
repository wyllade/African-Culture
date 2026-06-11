'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

interface FoodCardProps {
  name: string
  slug: string
  region: string
  countryName: string
  countrySlug: string
}

export function FoodCard({ name, slug, region, countryName, countrySlug }: FoodCardProps) {
  return (
    <Link href={`/foods/${slug}`}>
      <Card>
        <div className="h-40 bg-gradient-to-br from-amber-100 to-orange-200 dark:from-amber-900 dark:to-orange-800 flex items-center justify-center">
          <span className="text-4xl">🍽</span>
        </div>
        <CardContent>
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="mt-2 flex items-center gap-2">
            <Badge variant="primary">{region}</Badge>
            <Link href={`/countries/${countrySlug}`} className="text-xs text-stone-500 hover:text-primary">
              {countryName}
            </Link>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
