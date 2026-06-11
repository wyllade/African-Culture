'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-warm to-sand dark:from-stone-950 dark:via-stone-900 dark:to-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Explore the Living Cultures of{' '}
            <span className="text-primary">Africa</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-stone-600 dark:text-stone-400 max-w-2xl">
            Discover traditions, languages, cuisines, music, history, and stories from all 54 African countries.
            Your journey into the heart of Africa&apos;s cultural heritage starts here.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/countries">
              <Button size="lg">Explore Countries</Button>
            </Link>
            <Link href="/explorer">
              <Button variant="outline" size="lg">
                Random Culture
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-6 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
