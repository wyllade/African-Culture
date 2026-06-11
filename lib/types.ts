export interface Region {
  _id: string
  name: string
  slug: string
  description?: string
}

export interface Country {
  _id: string
  name: string
  slug: string
  flag: { asset: { url: string } }
  population: number
  capital: string
  languages: string[]
  coordinates: { lat: number; lng: number }
  region: Region
  overview?: string
  traditionalClothing?: string
  marriageCustoms?: string
  ceremonies?: string
  musicDance?: string
  history?: string
  gallery?: { asset: { url: string } }[]
  tribes?: Tribe[]
  foods?: Food[]
  festivals?: Festival[]
}

export interface Food {
  _id: string
  name: string
  slug: string
  image: { asset: { url: string } }
  ingredients: string[]
  history: string
  recipe: string
  culturalSignificance: string
  country: Country
  region: 'east' | 'west' | 'north' | 'south' | 'central'
  tags: string[]
}

export interface Tribe {
  _id: string
  name: string
  slug: string
  origins: string
  location: string
  language: Language
  clothing: { description: string; image?: { asset: { url: string } } }
  food: Food[]
  traditions: string
  music: string
  stories: string
  country: Country
}

export interface Language {
  _id: string
  name: string
  slug: string
  writingSystem: string
  commonPhrases: { phrase: string; translation: string; audio?: { asset: { url: string } } }[]
  audioPronunciation?: { asset: { url: string } }
  countries: Country[]
  tribes?: Tribe[]
  facts: string
}

export interface Festival {
  _id: string
  name: string
  slug: string
  date?: string
  history: string
  traditions: string
  images: { asset: { url: string } }[]
  videos: string[]
  country: Country
  tribes?: Tribe[]
}

export interface Proverb {
  _id: string
  text: string
  meaning: string
  category: string[]
  country?: Country
  tribe?: Tribe
}

export interface SearchResult {
  id: string
  type: 'country' | 'food' | 'tribe' | 'language' | 'festival' | 'proverb'
  title: string
  slug: string
  image?: string
  content: string
  region?: string
}
