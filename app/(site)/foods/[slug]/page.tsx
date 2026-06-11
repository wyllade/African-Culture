import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { ArrowLeft } from '@/lib/icon'

const foods: Record<string, {
  name: string
  region: string
  country: string
  countrySlug: string
  ingredients: string[]
  history: string
  recipe: string
  culturalSignificance: string
}> = {
  'jollof-rice': {
    name: 'Jollof Rice',
    region: 'West Africa',
    country: 'Nigeria',
    countrySlug: 'nigeria',
    ingredients: ['Rice', 'Tomatoes', 'Onions', 'Bell Peppers', 'Scotch Bonnet', 'Tomato Paste', 'Vegetable Oil', 'Seasoning', 'Thyme', 'Curry Powder', 'Bay Leaves'],
    history: 'Jollof Rice is believed to have originated from the Senegambia region among the Wolof people, dating back to the 14th century. It spread across West Africa through trade routes and colonial influences, with each country developing its own variation.',
    recipe: 'Blend tomatoes, onions, and bell peppers into a smooth paste. Fry in hot oil with tomato paste and seasonings. Add parboiled rice, stir well, and cook in stock until tender. Serve with fried plantains, chicken, or fish.',
    culturalSignificance: 'Jollof Rice is more than a dish — it is a symbol of West African unity and rivalry. The "Jollof Wars" between Nigeria and Ghana over who makes the best Jollof Rice are a beloved cultural phenomenon.',
  },
  'ugali': {
    name: 'Ugali',
    region: 'East Africa',
    country: 'Kenya',
    countrySlug: 'kenya',
    ingredients: ['Maize Flour', 'Water', 'Salt (optional)'],
    history: 'Ugali is a staple food across East Africa, introduced with maize during the Portuguese colonial period. It quickly became the foundation of meals in Kenya, Tanzania, Uganda, and surrounding countries.',
    recipe: 'Bring water to a boil in a heavy pot. Gradually add maize flour while stirring continuously with a wooden spoon. Reduce heat and continue stirring until the mixture thickens and pulls away from the pot. Shape into a round dome and serve hot.',
    culturalSignificance: 'Ugali is the cornerstone of East African meals. It is eaten with hands, rolled into small balls, and used to scoop stews, vegetables, or meat. It represents community and shared meals.',
  },
  'nyama-choma': {
    name: 'Nyama Choma',
    region: 'East Africa',
    country: 'Kenya',
    countrySlug: 'kenya',
    ingredients: ['Goat Meat or Beef', 'Salt', 'Lemon Juice', 'Rosemary', 'Garlic', 'Ginger'],
    history: 'Nyama Choma (literally "roasted meat" in Swahili) is believed to have originated with the Maasai and other pastoral communities who relied on livestock. It became a national dish across East Africa, particularly in Kenya.',
    recipe: 'Marinate meat with salt, lemon juice, and spices for at least 2 hours. Grill over open charcoal fire, turning frequently, until cooked through and slightly charred. Serve with kachumbari (onion-tomato salsa) and ugali.',
    culturalSignificance: 'Nyama Choma is more than food — it is a social institution. Families and friends gather at "nyama choma dens" for weekend celebrations, conversations, and community bonding.',
  },
  'injera': {
    name: 'Injera',
    region: 'East Africa',
    country: 'Ethiopia',
    countrySlug: 'ethiopia',
    ingredients: ['Teff Flour', 'Water', 'Salt', 'Eritrea (starter culture)'],
    history: 'Injera has been a staple in the Ethiopian highlands for thousands of years. It is made from teff, an ancient grain native to Ethiopia that is rich in iron and calcium.',
    recipe: 'Mix teff flour with water and starter culture. Leave to ferment for 2-3 days. Thin the batter with water and salt. Pour in a circular motion onto a hot clay or metal griddle. Cook until holes form on surface. Do not flip.',
    culturalSignificance: 'Injera is both a plate and food. Ethiopian meals are served on a large injera, with various wat (stews) placed on top. Eating with hands from a shared injera plate symbolizes community and trust.',
  },
  'bunny-chow': {
    name: 'Bunny Chow',
    region: 'Southern Africa',
    country: 'South Africa',
    countrySlug: 'south-africa',
    ingredients: ['White Bread Loaf', 'Curry (Lamb/Chicken/Beans)', 'Potatoes', 'Carrots', 'Curry Powder', 'Ginger', 'Garlic'],
    history: 'Bunny Chow originated in Durban, South Africa, among the Indian community in the 1940s. It was created as a "takeaway" lunch for workers who needed a portable meal.',
    recipe: 'Hollow out a loaf of white bread. Fill with spicy curry made from meat or beans cooked with potatoes, curry powder, ginger, and garlic. Serve with the bread "lid" on top.',
    culturalSignificance: 'Bunny Chow represents South Africa\'s multicultural heritage, blending Indian, African, and colonial influences. It remains a beloved street food in Durban and beyond.',
  },
  'doro-wat': {
    name: 'Doro Wat',
    region: 'East Africa',
    country: 'Ethiopia',
    countrySlug: 'ethiopia',
    ingredients: ['Chicken', 'Onions', 'Berbere Spice', 'Niter Kibbeh (spiced butter)', 'Hard-boiled Eggs', 'Garlic', 'Ginger'],
    history: 'Doro Wat is considered Ethiopia\'s national dish. It is traditionally reserved for special occasions due to the cost of chicken and spices.',
    recipe: 'Sauté onions in niter kibbeh until deep brown. Add berbere spice, garlic, and ginger. Add chicken pieces and simmer until tender. Add hard-boiled eggs and cook until infused with sauce.',
    culturalSignificance: 'Doro Wat is typically served during holidays like Ethiopian Christmas (Genna) and Easter (Fasika). It is eaten with injera and is a dish of celebration and hospitality.',
  },
}

export default async function FoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const food = foods[slug]

  if (!food) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/foods" className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-primary mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Foods
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="primary">{food.region}</Badge>
          <Link href={`/countries/${food.countrySlug}`} className="text-sm text-primary hover:underline">
            {food.country}
          </Link>
        </div>
        <h1 className="text-3xl font-bold">{food.name}</h1>
      </div>

      <div className="space-y-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {food.ingredients.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">History</h2>
            <p className="leading-relaxed text-stone-600 dark:text-stone-400">{food.history}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">Recipe</h2>
            <p className="leading-relaxed text-stone-600 dark:text-stone-400">{food.recipe}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">Cultural Significance</h2>
            <p className="leading-relaxed text-stone-600 dark:text-stone-400">{food.culturalSignificance}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
