import Link from 'next/link'
import { FoodCard } from '@/components/foods/FoodCard'

const foods = [
  { name: 'Jollof Rice', slug: 'jollof-rice', region: 'west', countryName: 'Nigeria', countrySlug: 'nigeria' },
  { name: 'Fufu', slug: 'fufu', region: 'west', countryName: 'Ghana', countrySlug: 'ghana' },
  { name: 'Egusi Soup', slug: 'egusi-soup', region: 'west', countryName: 'Nigeria', countrySlug: 'nigeria' },
  { name: 'Suya', slug: 'suya', region: 'west', countryName: 'Nigeria', countrySlug: 'nigeria' },
  { name: 'Pounded Yam', slug: 'pounded-yam', region: 'west', countryName: 'Nigeria', countrySlug: 'nigeria' },
  { name: 'Banku', slug: 'banku', region: 'west', countryName: 'Ghana', countrySlug: 'ghana' },
  { name: 'Kenkey', slug: 'kenkey', region: 'west', countryName: 'Ghana', countrySlug: 'ghana' },
  { name: 'Moi Moi', slug: 'moi-moi', region: 'west', countryName: 'Nigeria', countrySlug: 'nigeria' },
  { name: 'Ugali', slug: 'ugali', region: 'east', countryName: 'Kenya', countrySlug: 'kenya' },
  { name: 'Nyama Choma', slug: 'nyama-choma', region: 'east', countryName: 'Kenya', countrySlug: 'kenya' },
  { name: 'Sukuma Wiki', slug: 'sukuma-wiki', region: 'east', countryName: 'Kenya', countrySlug: 'kenya' },
  { name: 'Githeri', slug: 'githeri', region: 'east', countryName: 'Kenya', countrySlug: 'kenya' },
  { name: 'Mandazi', slug: 'mandazi', region: 'east', countryName: 'Kenya', countrySlug: 'kenya' },
  { name: 'Injera', slug: 'injera', region: 'east', countryName: 'Ethiopia', countrySlug: 'ethiopia' },
  { name: 'Doro Wat', slug: 'doro-wat', region: 'east', countryName: 'Ethiopia', countrySlug: 'ethiopia' },
  { name: 'Kitfo', slug: 'kitfo', region: 'east', countryName: 'Ethiopia', countrySlug: 'ethiopia' },
  { name: 'Tibs', slug: 'tibs', region: 'east', countryName: 'Ethiopia', countrySlug: 'ethiopia' },
  { name: 'Bunny Chow', slug: 'bunny-chow', region: 'south', countryName: 'South Africa', countrySlug: 'south-africa' },
  { name: 'Bobotie', slug: 'bobotie', region: 'south', countryName: 'South Africa', countrySlug: 'south-africa' },
  { name: 'Biltong', slug: 'biltong', region: 'south', countryName: 'South Africa', countrySlug: 'south-africa' },
  { name: 'Braai', slug: 'braai', region: 'south', countryName: 'South Africa', countrySlug: 'south-africa' },
  { name: 'Malva Pudding', slug: 'malva-pudding', region: 'south', countryName: 'South Africa', countrySlug: 'south-africa' },
]

const regions = [
  { id: 'all', label: 'All', color: 'bg-stone-500' },
  { id: 'east', label: 'East Africa', color: 'bg-amber-500' },
  { id: 'west', label: 'West Africa', color: 'bg-emerald-500' },
  { id: 'north', label: 'North Africa', color: 'bg-orange-500' },
  { id: 'central', label: 'Central Africa', color: 'bg-purple-500' },
  { id: 'south', label: 'Southern Africa', color: 'bg-blue-500' },
]

export default async function FoodsPage(props: { searchParams?: Promise<{ region?: string }> }) {
  const searchParams = await props.searchParams
  const activeRegion = searchParams?.region || 'all'

  const filtered = activeRegion === 'all' ? foods : foods.filter((f) => f.region === activeRegion)

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">African Foods</h1>
        <p className="mt-2 text-stone-500">Explore traditional dishes from across the continent</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {regions.map((region) => {
          const isActive = activeRegion === region.id
          const href = region.id === 'all' ? '/foods' : `/foods?region=${region.id}`
          return (
            <Link
              key={region.id}
              href={href}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${region.color}`} />
              {region.label}
            </Link>
          )
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((food) => (
          <FoodCard key={food.slug} {...food} />
        ))}
      </div>
    </div>
  )
}
