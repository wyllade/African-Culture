'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
    <section className="bg-secondary text-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <Quote className="h-8 w-8 mx-auto mb-4 opacity-50" />
        <motion.div
          key={proverb.text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <blockquote className="text-2xl sm:text-3xl font-medium italic leading-relaxed">
            &ldquo;{proverb.text}&rdquo;
          </blockquote>
          <cite className="mt-4 block text-sm opacity-70 not-italic">&mdash; {proverb.origin}</cite>
        </motion.div>
        <button
          onClick={shuffleProverb}
          className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
        >
          <Shuffle className="h-4 w-4" />
          Show another proverb
        </button>
      </div>
    </section>
  )
}
