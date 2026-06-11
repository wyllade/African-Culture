'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { RegionIcon } from '@/components/ui/illustrations/RegionIcon'

const regions = [
  { name: 'East Africa', slug: 'east', description: 'Kenya, Tanzania, Ethiopia, Uganda & more', direction: 'east', count: '9 countries' },
  { name: 'West Africa', slug: 'west', description: 'Nigeria, Ghana, Senegal, Ivory Coast & more', direction: 'west', count: '16 countries' },
  { name: 'North Africa', slug: 'north', description: 'Morocco, Egypt, Algeria, Tunisia & more', direction: 'north', count: '6 countries' },
  { name: 'Central Africa', slug: 'central', description: 'DRC, Cameroon, Angola, Chad & more', direction: 'central', count: '9 countries' },
  { name: 'Southern Africa', slug: 'south', description: 'South Africa, Zimbabwe, Zambia, Botswana & more', direction: 'south', count: '14 countries' },
]

export function RegionGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Regions</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 font-serif">Explore by Region</h2>
        <p className="mt-3 text-stone-500">Africa is vast — start your journey by region</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {regions.map((region, i) => (
          <motion.div
            key={region.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link href={`/foods/region/${region.slug}`}>
              <Card className="h-full text-center p-6 group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-700 flex items-center justify-center mx-auto mb-4 text-primary/60 transition-transform group-hover:scale-110 duration-300">
                  <RegionIcon className="h-10 w-10" direction={region.direction as any} />
                </div>
                <h3 className="font-semibold text-lg font-serif">{region.name}</h3>
                <p className="mt-2 text-sm text-stone-500">{region.description}</p>
                <p className="mt-1 text-xs text-primary font-medium">{region.count}</p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
