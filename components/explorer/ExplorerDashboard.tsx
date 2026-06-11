'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { MapPin, Users, UtensilsCrossed, Languages, Music, ArrowRight } from 'lucide-react'

interface ExplorerSelection {
  country?: { name: string; slug: string }
  tribes: { name: string; slug: string }[]
  foods: { name: string; slug: string }[]
  languages: { name: string; slug: string }[]
  festivals: { name: string; slug: string }[]
}

interface ExplorerDashboardProps {
  selection: ExplorerSelection
}

export function ExplorerDashboard({ selection }: ExplorerDashboardProps) {
  const { country, tribes, foods, languages, festivals } = selection
  const hasContent = country || tribes.length > 0 || foods.length > 0 || languages.length > 0 || festivals.length > 0

  if (!hasContent) {
    return null
  }

  const connections: string[] = []

  if (country && tribes.length > 0) {
    connections.push(`${country.name} is home to ${tribes.map((t) => t.name).join(', ')}`)
  }
  if (country && foods.length > 0) {
    connections.push(`Traditional ${country.name} dishes include ${foods.map((f) => f.name).join(', ')}`)
  }
  if (tribes.length > 0 && languages.length > 0) {
    connections.push(`${tribes[0].name} people speak ${languages.map((l) => l.name).join(', ')}`)
  }
  if (country && festivals.length > 0) {
    connections.push(`Experience ${festivals.map((f) => f.name).join(', ')} in ${country.name}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold">Your Cultural Profile</h2>

      {connections.length > 0 && (
        <Card className="bg-secondary text-white dark:bg-secondary">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3">Cultural Connections</h3>
            <div className="space-y-2">
              {connections.map((conn, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-white/80">
                  <ArrowRight className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{conn}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {country && (
          <ExplorerCard
            icon={<MapPin className="h-5 w-5 text-primary" />}
            title={country.name}
            subtitle="Country"
            href={`/countries/${country.slug}`}
          />
        )}
        {tribes.map((tribe) => (
          <ExplorerCard
            key={tribe.slug}
            icon={<Users className="h-5 w-5 text-blue-500" />}
            title={tribe.name}
            subtitle="Ethnic Group"
            href={`/tribes/${tribe.slug}`}
          />
        ))}
        {foods.map((food) => (
          <ExplorerCard
            key={food.slug}
            icon={<UtensilsCrossed className="h-5 w-5 text-orange-500" />}
            title={food.name}
            subtitle="Food"
            href={`/foods/${food.slug}`}
          />
        ))}
        {languages.map((lang) => (
          <ExplorerCard
            key={lang.slug}
            icon={<Languages className="h-5 w-5 text-green-500" />}
            title={lang.name}
            subtitle="Language"
            href={`/languages/${lang.slug}`}
          />
        ))}
        {festivals.map((fest) => (
          <ExplorerCard
            key={fest.slug}
            icon={<Music className="h-5 w-5 text-purple-500" />}
            title={fest.name}
            subtitle="Festival"
            href={`/festivals/${fest.slug}`}
          />
        ))}
      </div>
    </motion.div>
  )
}

function ExplorerCard({
  icon,
  title,
  subtitle,
  href,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  href: string
}) {
  return (
    <a href={href}>
      <Card>
        <CardContent className="p-4 flex items-center gap-3">
          {icon}
          <div>
            <p className="font-medium">{title}</p>
            <p className="text-xs text-stone-500">{subtitle}</p>
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
