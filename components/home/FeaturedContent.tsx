'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { UtensilsCrossed, Users, Languages, Music } from 'lucide-react'

const features = [
  {
    title: 'African Foods',
    description: 'Explore 500+ traditional dishes with recipes, history, and cultural significance.',
    href: '/foods',
    icon: UtensilsCrossed,
    color: 'text-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
  },
  {
    title: 'Ethnic Groups',
    description: 'Deep dives into tribes and communities across the continent.',
    href: '/tribes',
    icon: Users,
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    title: 'Languages',
    description: 'Discover African languages with common phrases and pronunciation.',
    href: '/languages',
    icon: Languages,
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-950/30',
  },
  {
    title: 'Festivals & Celebrations',
    description: 'From Timkat to Durbar — experience Africa&apos;s vibrant festivals.',
    href: '/festivals',
    icon: Music,
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
  },
]

export function FeaturedContent() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center">Discover African Culture</h2>
        <p className="mt-2 text-stone-500 text-center">Pick a path and start exploring</p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link href={feature.href}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="mt-2 text-sm text-stone-500">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
