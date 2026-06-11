import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'

const categories = [
  { name: 'Textiles', slug: 'textiles', description: 'Kente, mudcloth, kikoy, shweshwe, and more', count: '12 artisans', color: 'bg-red-500' },
  { name: 'Beadwork', slug: 'beadwork', description: 'Maasai, Zulu, Ndebele, and Yoruba bead traditions', count: '8 artisans', color: 'bg-blue-500' },
  { name: 'Sculpture', slug: 'sculpture', description: 'Wood carving, bronze casting, stone sculpture', count: '10 artisans', color: 'bg-amber-500' },
  { name: 'Masks', slug: 'masks', description: 'Ceremonial masks from across the continent', count: '6 artisans', color: 'bg-green-500' },
  { name: 'Modern Fashion', slug: 'modern-fashion', description: 'Contemporary African fashion designers', count: '9 artisans', color: 'bg-purple-500' },
]

export default function ArtFashionPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">African Art & Fashion</h1>
        <p className="mt-2 text-stone-500">Discover the creativity of African artisans and designers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/art-fashion/${cat.slug}`}>
            <Card className="h-full">
              <div className={`h-40 ${cat.color} flex items-center justify-center`}>
                <span className="text-5xl font-bold text-white/20">{cat.name[0]}</span>
              </div>
              <CardContent>
                <h3 className="font-semibold text-lg">{cat.name}</h3>
                <p className="text-sm text-stone-500 mt-1">{cat.description}</p>
                <p className="text-xs text-primary mt-2">{cat.count} featured</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
