'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { UtensilsCrossed, Users, Languages, Music } from '@/lib/icon'

const features = [
  {
    title: 'African Foods',
    description: 'Explore 500+ traditional dishes with recipes, history, and cultural significance.',
    href: '/foods',
    icon: UtensilsCrossed,
    color: 'text-primary',
    bg: 'bg-primary/10',
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
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
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
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Explore</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 font-serif">Discover African Culture</h2>
          <p className="mt-3 text-stone-500 max-w-lg mx-auto">Pick a path and start exploring the richness of Africa&apos;s heritage</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <Card className="h-full group">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300`}>
                        <Icon className={`h-7 w-7 ${feature.color}`} />
                      </div>
                      <h3 className="font-semibold text-lg font-serif">{feature.title}</h3>
                      <p className="mt-2 text-sm text-stone-500 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>

      <hr className="mx-auto max-w-4xl border-stone-200 dark:border-stone-800" />
    </section>
  )
}
