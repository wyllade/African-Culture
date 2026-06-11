'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Quote, Shuffle, Share2 } from 'lucide-react'

const allProverbs = [
  { text: 'If you want to go fast, go alone. If you want to go far, go together.', meaning: 'Teamwork and community achieve more than individual effort.', country: 'African Proverb', categories: ['Community', 'Wisdom'] },
  { text: 'The child who is not embraced by the village will burn it down to feel its warmth.', meaning: 'Neglected children may seek attention through destructive behavior.', country: 'African Proverb', categories: ['Community', 'Parenting'] },
  { text: 'Smooth seas do not make skillful sailors.', meaning: 'Adversity builds strength and competence.', country: 'African Proverb', categories: ['Resilience', 'Wisdom'] },
  { text: 'A tree cannot stand without its roots.', meaning: 'One cannot succeed without their heritage and foundation.', country: 'African Proverb', categories: ['Heritage', 'Identity'] },
  { text: 'However long the night, the dawn will break.', meaning: 'No matter how difficult the situation, better times will come.', country: 'African Proverb', categories: ['Hope', 'Resilience'] },
  { text: 'The best time to plant a tree was 20 years ago. The second best time is now.', meaning: 'It is never too late to start something worthwhile.', country: 'African Proverb', categories: ['Wisdom', 'Action'] },
  { text: 'A single bracelet does not jingle.', meaning: 'Unity creates strength and harmony.', country: 'African Proverb', categories: ['Community', 'Unity'] },
  { text: 'The wise man listens to the words of the fool.', meaning: 'Wisdom can come from unexpected sources.', country: 'Kenyan Proverb', categories: ['Wisdom', 'Humility'] },
  { text: 'When the music changes, so does the dance.', meaning: 'Adapt to changing circumstances.', country: 'African Proverb', categories: ['Change', 'Adaptation'] },
  { text: 'A man who uses force is afraid of reasoning.', meaning: 'True strength lies in dialogue, not violence.', country: 'Kenyan Proverb', categories: ['Wisdom', 'Peace'] },
  { text: 'The elephant does not tire of carrying its tusks.', meaning: 'One does not complain about their responsibilities.', country: 'African Proverb', categories: ['Responsibility', 'Strength'] },
  { text: 'A roaring lion kills no game.', meaning: 'Action speaks louder than words.', country: 'African Proverb', categories: ['Action', 'Wisdom'] },
  { text: 'Knowledge is like a garden; if it is not cultivated, it cannot be harvested.', meaning: 'Knowledge must be actively pursued and maintained.', country: 'African Proverb', categories: ['Knowledge', 'Education'] },
  { text: 'The axe forgets but the tree remembers.', meaning: 'The one who caused harm may forget, but the victim remembers.', country: 'African Proverb', categories: ['Justice', 'Pain'] },
  { text: 'By crawling a child learns to stand.', meaning: 'Mastery comes through gradual progress.', country: 'African Proverb', categories: ['Growth', 'Patience'] },
  { text: 'A bird that flies off the earth and lands on an anthill is still on the ground.', meaning: 'Small improvements do not equal real progress.', country: 'African Proverb', categories: ['Progress', 'Wisdom'] },
  { text: 'Rain does not fall on one roof alone.', meaning: 'Trouble comes to everyone.', country: 'African Proverb', categories: ['Community', 'Resilience'] },
  { text: 'The sun does not forget a village just because it is small.', meaning: 'All people matter, regardless of their status.', country: 'African Proverb', categories: ['Dignity', 'Equality'] },
  { text: 'Ears that do not listen to advice usually accompany the head that is cut off.', meaning: 'Refusing wise counsel leads to disaster.', country: 'African Proverb', categories: ['Wisdom', 'Consequence'] },
  { text: 'One who plants dates does not eat them.', meaning: 'Work for future generations, not just yourself.', country: 'African Proverb', categories: ['Legacy', 'Generosity'] },
]

const categories = ['All', 'Community', 'Wisdom', 'Resilience', 'Heritage', 'Hope', 'Unity', 'Education', 'Action', 'Justice']

export default function ProverbsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [randomProverb, setRandomProverb] = useState(allProverbs[Math.floor(Math.random() * allProverbs.length)])

  const filtered = activeCategory === 'All'
    ? allProverbs
    : allProverbs.filter((p) => p.categories.includes(activeCategory))

  const getRandom = () => {
    const next = allProverbs[Math.floor(Math.random() * allProverbs.length)]
    setRandomProverb(next)
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">African Proverbs</h1>
        <p className="mt-2 text-stone-500">Timeless wisdom passed down through generations</p>
      </div>

      <Card className="mb-12 bg-secondary text-white dark:bg-secondary">
        <CardContent className="p-8 text-center">
          <Quote className="h-8 w-8 mx-auto mb-4 opacity-50" />
          <AnimatePresence mode="wait">
            <motion.div
              key={randomProverb.text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <blockquote className="text-xl sm:text-2xl font-medium italic leading-relaxed">
                &ldquo;{randomProverb.text}&rdquo;
              </blockquote>
              <p className="mt-4 text-sm opacity-70">&mdash; {randomProverb.country}</p>
              <p className="mt-2 text-sm opacity-60">{randomProverb.meaning}</p>
            </motion.div>
          </AnimatePresence>
          <Button onClick={getRandom} variant="ghost" className="mt-6 text-white/70 hover:text-white">
            <Shuffle className="h-4 w-4 mr-2" /> Show Random Proverb
          </Button>
        </CardContent>
      </Card>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Browse Proverbs</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((proverb) => (
          <motion.div
            key={proverb.text}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex flex-wrap gap-1">
                    {proverb.categories.map((cat) => (
                      <Badge key={cat}>{cat}</Badge>
                    ))}
                  </div>
                  <button
                    onClick={() => navigator.clipboard.writeText(`"${proverb.text}" — ${proverb.country}`)}
                    className="text-stone-400 hover:text-primary transition-colors"
                    title="Copy proverb"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
                <blockquote className="text-base font-medium italic">&ldquo;{proverb.text}&rdquo;</blockquote>
                <p className="mt-2 text-sm text-stone-500">{proverb.meaning}</p>
                <p className="mt-1 text-xs text-stone-400">&mdash; {proverb.country}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
