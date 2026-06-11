'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { StepSelector } from '@/components/explorer/StepSelector'
import { ExplorerDashboard } from '@/components/explorer/ExplorerDashboard'


const data = {
  kenya: {
    name: 'Kenya',
    slug: 'kenya',
    flag: '🇰🇪',
    tribes: [
      { name: 'Maasai', slug: 'maasai' },
      { name: 'Kikuyu', slug: 'kikuyu' },
      { name: 'Luo', slug: 'luo' },
      { name: 'Kalenjin', slug: 'kalenjin' },
      { name: 'Kamba', slug: 'kamba' },
    ],
    foods: [
      { name: 'Ugali', slug: 'ugali' },
      { name: 'Nyama Choma', slug: 'nyama-choma' },
      { name: 'Sukuma Wiki', slug: 'sukuma-wiki' },
      { name: 'Githeri', slug: 'githeri' },
      { name: 'Mandazi', slug: 'mandazi' },
    ],
    languages: [
      { name: 'Swahili', slug: 'swahili' },
      { name: 'Maa', slug: 'maa' },
    ],
    festivals: [
      { name: 'Maasai Mara Festival', slug: 'maasai-mara-festival' },
      { name: 'Lake Turkana Festival', slug: 'lake-turkana-festival' },
    ],
  },
  nigeria: {
    name: 'Nigeria',
    slug: 'nigeria',
    flag: '🇳🇬',
    tribes: [
      { name: 'Yoruba', slug: 'yoruba' },
      { name: 'Hausa', slug: 'hausa' },
      { name: 'Igbo', slug: 'igbo' },
      { name: 'Ijaw', slug: 'ijaw' },
    ],
    foods: [
      { name: 'Jollof Rice', slug: 'jollof-rice' },
      { name: 'Egusi Soup', slug: 'egusi-soup' },
      { name: 'Pounded Yam', slug: 'pounded-yam' },
      { name: 'Suya', slug: 'suya' },
      { name: 'Moi Moi', slug: 'moi-moi' },
    ],
    languages: [
      { name: 'Yoruba', slug: 'yoruba' },
      { name: 'Hausa', slug: 'hausa' },
      { name: 'Igbo', slug: 'igbo' },
    ],
    festivals: [
      { name: 'Durbar Festival', slug: 'durbar-festival' },
      { name: 'Eyo Festival', slug: 'eyo-festival' },
    ],
  },
  'south-africa': {
    name: 'South Africa',
    slug: 'south-africa',
    flag: '🇿🇦',
    tribes: [
      { name: 'Zulu', slug: 'zulu' },
      { name: 'Xhosa', slug: 'xhosa' },
      { name: 'Sotho', slug: 'sotho' },
      { name: 'Ndebele', slug: 'ndebele' },
    ],
    foods: [
      { name: 'Bunny Chow', slug: 'bunny-chow' },
      { name: 'Bobotie', slug: 'bobotie' },
      { name: 'Biltong', slug: 'biltong' },
      { name: 'Braai', slug: 'braai' },
      { name: 'Malva Pudding', slug: 'malva-pudding' },
    ],
    languages: [
      { name: 'Zulu', slug: 'zulu' },
      { name: 'Xhosa', slug: 'xhosa' },
      { name: 'Afrikaans', slug: 'afrikaans' },
    ],
    festivals: [
      { name: 'National Arts Festival', slug: 'national-arts-festival' },
      { name: 'Cape Town Jazz Festival', slug: 'cape-town-jazz-festival' },
    ],
  },
  ethiopia: {
    name: 'Ethiopia',
    slug: 'ethiopia',
    flag: '🇪🇹',
    tribes: [
      { name: 'Oromo', slug: 'oromo' },
      { name: 'Amhara', slug: 'amhara' },
      { name: 'Tigray', slug: 'tigray' },
    ],
    foods: [
      { name: 'Injera', slug: 'injera' },
      { name: 'Doro Wat', slug: 'doro-wat' },
      { name: 'Kitfo', slug: 'kitfo' },
      { name: 'Tibs', slug: 'tibs' },
    ],
    languages: [
      { name: 'Amharic', slug: 'amharic' },
      { name: 'Oromo', slug: 'oromo' },
    ],
    festivals: [
      { name: 'Timkat', slug: 'timkat' },
      { name: 'Meskel', slug: 'meskel' },
    ],
  },
  ghana: {
    name: 'Ghana',
    slug: 'ghana',
    flag: '🇬🇭',
    tribes: [
      { name: 'Akan', slug: 'akan' },
      { name: 'Ewe', slug: 'ewe' },
      { name: 'Ga', slug: 'ga' },
    ],
    foods: [
      { name: 'Jollof Rice', slug: 'jollof-rice' },
      { name: 'Fufu', slug: 'fufu' },
      { name: 'Banku', slug: 'banku' },
      { name: 'Kenkey', slug: 'kenkey' },
    ],
    languages: [
      { name: 'Twi', slug: 'twi' },
      { name: 'Ewe', slug: 'ewe-language' },
    ],
    festivals: [
      { name: 'Homowo', slug: 'homowo' },
      { name: 'Aboakyer', slug: 'aboakyer' },
    ],
  },
}

type CountrySlug = keyof typeof data

export default function ExplorerPage() {
  const [selectedCountry, setSelectedCountry] = useState<CountrySlug | null>(null)
  const [selectedTribes, setSelectedTribes] = useState<string[]>([])
  const [selectedFoods, setSelectedFoods] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [selectedFestivals, setSelectedFestivals] = useState<string[]>([])

  const country = selectedCountry ? data[selectedCountry] : null

  const selectCountry = (slug: CountrySlug) => {
    setSelectedCountry(slug)
    setSelectedTribes([])
    setSelectedFoods([])
    setSelectedLanguages([])
    setSelectedFestivals([])
  }

  const toggleArray = (arr: string[], setter: (v: string[]) => void, slug: string) => {
    setter(arr.includes(slug) ? arr.filter((s) => s !== slug) : [...arr, slug])
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Culture Explorer</h1>
        <p className="mt-2 text-stone-500">
          Select a country and dive deep into its culture — discover tribes, foods, languages, and festivals
        </p>
      </div>

      {!selectedCountry ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {(Object.keys(data) as CountrySlug[]).map((slug) => {
            const c = data[slug]
            return (
              <motion.button
                key={slug}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => selectCountry(slug)}
                className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 hover:border-primary transition-colors text-center"
              >
                <span className="text-4xl">{c.flag}</span>
                <h3 className="mt-3 font-semibold text-lg">{c.name}</h3>
                <p className="text-sm text-stone-500">
                  {c.tribes.length} tribes &middot; {c.foods.length} dishes &middot; {c.languages.length} languages
                </p>
              </motion.button>
            )
          })}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedCountry(null)}
            className="text-sm text-stone-500 hover:text-primary mb-6 inline-block"
          >
            &larr; Choose a different country
          </button>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{country?.flag}</span>
              <h2 className="text-2xl font-bold">{country?.name}</h2>
            </div>

            <div className="space-y-6">
              <StepSelector
                title="Tribes & Ethnic Groups"
                options={country?.tribes || []}
                selected={selectedTribes}
                onToggle={(slug) => toggleArray(selectedTribes, setSelectedTribes, slug)}
                color="bg-blue-500"
              />
              <StepSelector
                title="Traditional Foods"
                options={country?.foods || []}
                selected={selectedFoods}
                onToggle={(slug) => toggleArray(selectedFoods, setSelectedFoods, slug)}
                color="bg-orange-500"
              />
              <StepSelector
                title="Languages"
                options={country?.languages || []}
                selected={selectedLanguages}
                onToggle={(slug) => toggleArray(selectedLanguages, setSelectedLanguages, slug)}
                color="bg-green-500"
              />
              <StepSelector
                title="Festivals"
                options={country?.festivals || []}
                selected={selectedFestivals}
                onToggle={(slug) => toggleArray(selectedFestivals, setSelectedFestivals, slug)}
                color="bg-purple-500"
              />
            </div>
          </div>

          <ExplorerDashboard
            selection={{
              country: country ? { name: country.name, slug: country.slug } : undefined,
              tribes: selectedTribes.map((s) => ({ name: country?.tribes.find((t) => t.slug === s)?.name || s, slug: s })),
              foods: selectedFoods.map((s) => ({ name: country?.foods.find((f) => f.slug === s)?.name || s, slug: s })),
              languages: selectedLanguages.map((s) => ({ name: country?.languages.find((l) => l.slug === s)?.name || s, slug: s })),
              festivals: selectedFestivals.map((s) => ({ name: country?.festivals.find((f) => f.slug === s)?.name || s, slug: s })),
            }}
          />
        </div>
      )}
    </div>
  )
}
