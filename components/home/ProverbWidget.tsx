'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Shuffle } from 'lucide-react'

const fallbackProverbs = [
  { text: 'If you want to go fast, go alone. If you want to go far, go together.', origin: 'African Proverb' },
  { text: 'The child who is not embraced by the village will burn it down to feel its warmth.', origin: 'African Proverb' },
  { text: 'Smooth seas do not make skillful sailors.', origin: 'African Proverb' },
  { text: 'A tree cannot stand without its roots.', origin: 'African Proverb' },
  { text: 'However long the night, the dawn will break.', origin: 'African Proverb' },
]

export function ProverbWidget() {
  const [proverb, setProverb] = useState(fallbackProverbs[0])

  const shuffleProverb = () => {
    const next = fallbackProverbs[Math.floor(Math.random() * fallbackProverbs.length)]
    setProverb(next)
  }

  useEffect(() => {
    shuffleProverb()
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900/30 text-white py-20">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f59e0b' fill-opacity='0.3'%3E%3Cpath d='M20 0L40 20 20 40 0 20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center relative z-10">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
          <Quote className="h-7 w-7 text-amber-400" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={proverb.text}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <blockquote className="text-2xl sm:text-3xl font-medium italic leading-relaxed font-serif">
              &ldquo;{proverb.text}&rdquo;
            </blockquote>
            <div className="mt-6 w-12 h-0.5 bg-amber-500/50 mx-auto" />
            <cite className="mt-4 block text-sm text-amber-300/70 not-italic">&mdash; {proverb.origin}</cite>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={shuffleProverb}
          className="mt-8 inline-flex items-center gap-2 text-sm text-amber-400/70 hover:text-amber-400 transition-colors bg-white/5 px-5 py-2 rounded-full border border-white/10 hover:bg-white/10"
        >
          <Shuffle className="h-4 w-4" />
          Show another proverb
        </button>
      </div>
    </section>
  )
}
