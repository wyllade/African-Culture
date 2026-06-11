'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'

const regions = [
  { name: 'East Africa', slug: 'east', description: 'Kenya, Tanzania, Ethiopia, Uganda & more', color: 'bg-amber-500' },
  { name: 'West Africa', slug: 'west', description: 'Nigeria, Ghana, Senegal, Ivory Coast & more', color: 'bg-emerald-500' },
  { name: 'North Africa', slug: 'north', description: 'Morocco, Egypt, Algeria, Tunisia & more', color: 'bg-orange-500' },
  { name: 'Central Africa', slug: 'central', description: 'DRC, Cameroon, Angola, Chad & more', color: 'bg-purple-500' },
  { name: 'Southern Africa', slug: 'south', description: 'South Africa, Zimbabwe, Zambia, Botswana & more', color: 'bg-blue-500' },
]

export function RegionGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center">Explore by Region</h2>
        <p className="mt-2 text-stone-500 text-center">Africa is vast — start your journey by region</p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {regions.map((region, i) => (
          <motion.div
            key={region.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link href={`/foods/region/${region.slug}`}>
              <Card className="h-full text-center p-6">
                <div className={`w-12 h-12 ${region.color} rounded-full mx-auto mb-4`} />
                <h3 className="font-semibold text-lg">{region.name}</h3>
                <p className="mt-2 text-sm text-stone-500">{region.description}</p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
