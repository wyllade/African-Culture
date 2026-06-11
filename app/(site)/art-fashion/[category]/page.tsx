import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { ArrowLeft } from '@/lib/icon'

const categories: Record<string, { name: string; description: string }> = {
  textiles: { name: 'Textiles', description: 'Traditional African fabrics and weaving techniques' },
  beadwork: { name: 'Beadwork', description: 'Intricate bead traditions across the continent' },
  sculpture: { name: 'Sculpture', description: 'Wood, bronze, and stone sculpture traditions' },
  masks: { name: 'Masks', description: 'Ceremonial masks and their cultural significance' },
  'modern-fashion': { name: 'Modern African Fashion', description: 'Contemporary designers inspired by African heritage' },
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const cat = categories[category]

  if (!cat) notFound()

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/art-fashion" className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-primary mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Art & Fashion
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">{cat.name}</h1>
        <p className="mt-2 text-stone-500">{cat.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i}>
            <div className="h-48 bg-gradient-to-br from-stone-200 to-stone-300 dark:from-stone-700 dark:to-stone-600" />
            <CardContent>
              <h3 className="font-semibold">Artisan Name</h3>
              <p className="text-sm text-stone-500 mt-1">Country &middot; Category</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
