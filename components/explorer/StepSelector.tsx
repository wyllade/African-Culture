'use client'

import { motion } from 'framer-motion'

interface Option {
  slug: string
  name: string
}

interface StepSelectorProps {
  title: string
  options: Option[]
  selected: string[]
  onToggle: (slug: string) => void
  color: string
}

export function StepSelector({ title, options, selected, onToggle, color }: StepSelectorProps) {
  if (options.length === 0) return null

  return (
    <div>
      <h4 className="text-sm font-semibold text-stone-500 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isActive = selected.includes(opt.slug)
          return (
            <motion.button
              key={opt.slug}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onToggle(opt.slug)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                isActive
                  ? `${color} text-white border-transparent`
                  : 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-stone-300'
              }`}
            >
              {opt.name}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
