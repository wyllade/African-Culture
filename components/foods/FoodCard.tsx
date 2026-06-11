'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FoodIcon } from '@/components/ui/illustrations/FoodIcon'
import { useRouter } from 'next/navigation'

interface FoodCardProps {
  name: string
  slug: string
  region: string
  countryName: string
  countrySlug: string
}

export function FoodCard({ name, slug, region, countryName, countrySlug }: FoodCardProps) {
  const router = useRouter()

  return (
    <Link href={`/foods/${slug}`}>
      <Card>
        <div className="h-40 bg-gradient-to-br from-amber-100 to-orange-200 dark:from-amber-900 dark:to-orange-800 flex items-center justify-center text-amber-500 dark:text-amber-400">
          <FoodIcon className="h-16 w-16" />
        </div>
        <CardContent>
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="mt-2 flex items-center gap-2">
            <Badge variant="primary">{region}</Badge>
            <button
              onClick={(e) => { e.preventDefault(); router.push(`/countries/${countrySlug}`) }}
              className="text-xs text-stone-500 hover:text-primary transition-colors"
            >
              {countryName}
            </button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
