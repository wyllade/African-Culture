'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
}

export function Tabs({ tabs, defaultTab, className }: TabsProps) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id)

  return (
    <div className={className}>
      <div className="flex gap-1 border-b border-stone-200 dark:border-stone-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              'px-4 py-3 text-sm font-medium transition-all relative',
              active === tab.id
                ? 'text-primary'
                : 'text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
            )}
          >
            {tab.label}
            {active === tab.id && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.find((t) => t.id === active)?.content}
      </div>
    </div>
  )
}
