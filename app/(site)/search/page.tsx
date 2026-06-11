import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Search } from 'lucide-react'

const searchIndex = [
  { title: 'Jollof Rice', slug: 'jollof-rice', type: 'food' as const, content: 'Popular West African rice dish', country: 'Nigeria', region: 'west' },
  { title: 'Nigeria', slug: 'nigeria', type: 'country' as const, content: 'Most populous country in Africa', region: 'west' },
  { title: 'Kenya', slug: 'kenya', type: 'country' as const, content: 'East African country known for safaris', region: 'east' },
  { title: 'Maasai', slug: 'maasai', type: 'tribe' as const, content: 'Semi-nomadic ethnic group in Kenya and Tanzania', country: 'Kenya', region: 'east' },
  { title: 'Yoruba', slug: 'yoruba', type: 'tribe' as const, content: 'Ethnic group in Southwestern Nigeria', country: 'Nigeria', region: 'west' },
  { title: 'Swahili', slug: 'swahili', type: 'language' as const, content: 'Bantu language spoken across East Africa', region: 'east' },
  { title: 'Ugali', slug: 'ugali', type: 'food' as const, content: 'East African maize flour staple', country: 'Kenya', region: 'east' },
  { title: 'Zulu', slug: 'zulu', type: 'tribe' as const, content: 'Largest ethnic group in South Africa', country: 'South Africa', region: 'south' },
  { title: 'Timkat', slug: 'timkat', type: 'festival' as const, content: 'Ethiopian Orthodox Epiphany celebration', country: 'Ethiopia', region: 'east' },
  { title: 'Injera', slug: 'injera', type: 'food' as const, content: 'Ethiopian teff flatbread', country: 'Ethiopia', region: 'east' },
  { title: 'Ethiopia', slug: 'ethiopia', type: 'country' as const, content: 'Oldest independent country in Africa', region: 'east' },
  { title: 'Ghana', slug: 'ghana', type: 'country' as const, content: 'First sub-Saharan African country to gain independence', region: 'west' },
  { title: 'South Africa', slug: 'south-africa', type: 'country' as const, content: 'Southernmost country in Africa', region: 'south' },
  { title: 'Akan', slug: 'akan', type: 'tribe' as const, content: 'Ethnic group in Ghana and Ivory Coast', country: 'Ghana', region: 'west' },
  { title: 'Amharic', slug: 'amharic', type: 'language' as const, content: 'Official language of Ethiopia', region: 'east' },
  { title: 'Hausa', slug: 'hausa', type: 'language' as const, content: 'Chadic language spoken in West Africa', region: 'west' },
  { title: 'Durbar Festival', slug: 'durbar-festival', type: 'festival' as const, content: 'Nigerian horse parade festival', country: 'Nigeria', region: 'west' },
  { title: 'Meskel', slug: 'meskel', type: 'festival' as const, content: 'Ethiopian festival of the True Cross', country: 'Ethiopia', region: 'east' },
  { title: 'Nyama Choma', slug: 'nyama-choma', type: 'food' as const, content: 'East African roasted meat dish', country: 'Kenya', region: 'east' },
  { title: 'Bunny Chow', slug: 'bunny-chow', type: 'food' as const, content: 'South African curry in hollowed bread', country: 'South Africa', region: 'south' },
]

const typeColors: Record<string, string> = {
  country: 'bg-blue-500',
  food: 'bg-orange-500',
  tribe: 'bg-green-500',
  language: 'bg-purple-500',
  festival: 'bg-pink-500',
}

const typeLinks: Record<string, string> = {
  country: '/countries',
  food: '/foods',
  tribe: '/tribes',
  language: '/languages',
  festival: '/festivals',
}

export default async function SearchPage(props: { searchParams?: Promise<{ q?: string }> }) {
  const searchParams = await props.searchParams
  const query = searchParams?.q || ''

  if (!query.trim()) {
    notFound()
  }

  const results = searchIndex.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Search Results</h1>
        <p className="mt-2 text-stone-500">
          {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
        </p>
      </div>

      {results.length === 0 ? (
        <div className="text-center py-12">
          <Search className="h-12 w-12 mx-auto text-stone-300" />
          <p className="mt-4 text-stone-500">No results found. Try a different search term.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {results.map((result) => (
            <Link key={`${result.type}-${result.slug}`} href={`${typeLinks[result.type]}/${result.slug}`}>
              <Card hover>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${typeColors[result.type]}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{result.title}</h3>
                      <Badge>{result.type}</Badge>
                    </div>
                    <p className="text-sm text-stone-500 truncate">{result.content}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
