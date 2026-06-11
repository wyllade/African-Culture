import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FoodCard } from '@/components/foods/FoodCard'

const regionNames: Record<string, { name: string; description: string }> = {
  east: { name: 'East Africa', description: 'Kenya, Tanzania, Ethiopia, Uganda, Rwanda, and more' },
  west: { name: 'West Africa', description: 'Nigeria, Ghana, Senegal, Ivory Coast, and more' },
  north: { name: 'North Africa', description: 'Morocco, Egypt, Algeria, Tunisia, Sudan, and more' },
  central: { name: 'Central Africa', description: 'DRC, Cameroon, Angola, Chad, and more' },
  south: { name: 'Southern Africa', description: 'South Africa, Zimbabwe, Zambia, Botswana, and more' },
}

const foodsByRegion: Record<string, { name: string; slug: string; region: string; countryName: string; countrySlug: string }[]> = {
  east: [
    { name: 'Ugali', slug: 'ugali', region: 'east', countryName: 'Kenya', countrySlug: 'kenya' },
    { name: 'Nyama Choma', slug: 'nyama-choma', region: 'east', countryName: 'Kenya', countrySlug: 'kenya' },
    { name: 'Sukuma Wiki', slug: 'sukuma-wiki', region: 'east', countryName: 'Kenya', countrySlug: 'kenya' },
    { name: 'Githeri', slug: 'githeri', region: 'east', countryName: 'Kenya', countrySlug: 'kenya' },
    { name: 'Mandazi', slug: 'mandazi', region: 'east', countryName: 'Kenya', countrySlug: 'kenya' },
    { name: 'Injera', slug: 'injera', region: 'east', countryName: 'Ethiopia', countrySlug: 'ethiopia' },
    { name: 'Doro Wat', slug: 'doro-wat', region: 'east', countryName: 'Ethiopia', countrySlug: 'ethiopia' },
    { name: 'Kitfo', slug: 'kitfo', region: 'east', countryName: 'Ethiopia', countrySlug: 'ethiopia' },
    { name: 'Tibs', slug: 'tibs', region: 'east', countryName: 'Ethiopia', countrySlug: 'ethiopia' },
  ],
  west: [
    { name: 'Jollof Rice', slug: 'jollof-rice', region: 'west', countryName: 'Nigeria', countrySlug: 'nigeria' },
    { name: 'Fufu', slug: 'fufu', region: 'west', countryName: 'Ghana', countrySlug: 'ghana' },
    { name: 'Egusi Soup', slug: 'egusi-soup', region: 'west', countryName: 'Nigeria', countrySlug: 'nigeria' },
    { name: 'Suya', slug: 'suya', region: 'west', countryName: 'Nigeria', countrySlug: 'nigeria' },
    { name: 'Pounded Yam', slug: 'pounded-yam', region: 'west', countryName: 'Nigeria', countrySlug: 'nigeria' },
    { name: 'Banku', slug: 'banku', region: 'west', countryName: 'Ghana', countrySlug: 'ghana' },
    { name: 'Kenkey', slug: 'kenkey', region: 'west', countryName: 'Ghana', countrySlug: 'ghana' },
    { name: 'Moi Moi', slug: 'moi-moi', region: 'west', countryName: 'Nigeria', countrySlug: 'nigeria' },
  ],
  south: [
    { name: 'Bunny Chow', slug: 'bunny-chow', region: 'south', countryName: 'South Africa', countrySlug: 'south-africa' },
    { name: 'Bobotie', slug: 'bobotie', region: 'south', countryName: 'South Africa', countrySlug: 'south-africa' },
    { name: 'Biltong', slug: 'biltong', region: 'south', countryName: 'South Africa', countrySlug: 'south-africa' },
    { name: 'Braai', slug: 'braai', region: 'south', countryName: 'South Africa', countrySlug: 'south-africa' },
    { name: 'Malva Pudding', slug: 'malva-pudding', region: 'south', countryName: 'South Africa', countrySlug: 'south-africa' },
  ],
  north: [],
  central: [],
}

export default async function RegionFoodPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params
  const regionInfo = regionNames[region]
  if (!regionInfo) notFound()

  const foods = foodsByRegion[region] || []

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/foods" className="text-sm text-stone-500 hover:text-primary mb-4 inline-block">
        &larr; All Foods
      </Link>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{regionInfo.name}</h1>
        <p className="mt-2 text-stone-500">{regionInfo.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {foods.map((food) => (
          <FoodCard key={food.slug} {...food} />
        ))}
      </div>
    </div>
  )
}
