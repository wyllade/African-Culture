'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Compass } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 text-sm text-amber-400 font-medium mb-6 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              <Compass className="h-4 w-4" />
              Discover Africa&apos;s Living Heritage
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white font-serif leading-tight">
              Explore the Living Cultures of{' '}
              <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">Africa</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-300 max-w-xl leading-relaxed">
              Discover traditions, languages, cuisines, music, history, and stories from all 54 African countries.
              Your journey into the heart of Africa&apos;s cultural heritage starts here.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/countries">
                <Button size="lg" className="group">
                  Explore Countries
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/explorer">
                <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 hover:text-white">
                  <Compass className="mr-2 h-4 w-4" />
                  Random Culture
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-amber-500/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/30 to-amber-500/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center shadow-2xl shadow-primary/30">
                <span className="text-7xl">🌍</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
