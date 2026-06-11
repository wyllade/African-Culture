import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FestivalIcon } from '@/components/ui/illustrations/FestivalIcon'

const festivals = [
  { name: 'Timkat', slug: 'timkat', country: 'Ethiopia', countrySlug: 'ethiopia', date: 'January 19', description: 'Ethiopian Orthodox Epiphany celebration featuring processions, baptisms, and vibrant ceremonies.', image: 'bg-blue-500' },
  { name: 'Durbar Festival', slug: 'durbar-festival', country: 'Nigeria', countrySlug: 'nigeria', date: 'Various (Eid celebrations)', description: 'Grand horse parades with traditional regalia, music, and pageantry in Northern Nigeria.', image: 'bg-emerald-500' },
  { name: 'Meskel', slug: 'meskel', country: 'Ethiopia', countrySlug: 'ethiopia', date: 'September 27', description: 'Celebration of the finding of the True Cross with bonfires and dancing.', image: 'bg-orange-500' },
  { name: 'Lake of Stars Festival', slug: 'lake-of-stars', country: 'Malawi', countrySlug: 'malawi', date: 'September/October', description: 'Music and arts festival on the shores of Lake Malawi celebrating African creativity.', image: 'bg-purple-500' },
  { name: 'Eyo Festival', slug: 'eyo-festival', country: 'Nigeria', countrySlug: 'nigeria', date: 'Variable', description: 'Lagos masquerade festival honoring the dead and celebrating Yoruba heritage.', image: 'bg-red-500' },
  { name: 'Homowo', slug: 'homowo', country: 'Ghana', countrySlug: 'ghana', date: 'May/August', description: 'Ga harvest festival meaning "to hoot at hunger" with dance, music, and traditional meals.', image: 'bg-amber-500' },
  { name: 'Reed Dance', slug: 'reed-dance', country: 'Eswatini', countrySlug: 'eswatini', date: 'August/September', description: 'Umhlanga ceremony where young women present reeds to the king in a colorful display.', image: 'bg-pink-500' },
  { name: 'National Arts Festival', slug: 'national-arts-festival', country: 'South Africa', countrySlug: 'south-africa', date: 'June/July', description: 'Africa\'s largest arts festival held in Makhanda, featuring theatre, music, dance, and visual arts.', image: 'bg-teal-500' },
  { name: 'Gerewol Festival', slug: 'gerewol', country: 'Niger', countrySlug: 'niger', date: 'September/October', description: 'Wodaabe male beauty contest and courtship ceremony with elaborate makeup and dance.', image: 'bg-sky-500' },
  { name: 'Fes Festival', slug: 'fes-festival', country: 'Morocco', countrySlug: 'morocco', date: 'June', description: 'World Sacred Music Festival bringing together musicians from across the globe in Fes.', image: 'bg-yellow-600' },
  { name: 'Cape Town Jazz Festival', slug: 'cape-town-jazz-festival', country: 'South Africa', countrySlug: 'south-africa', date: 'March/April', description: 'Africa\'s largest jazz festival featuring international and local artists.', image: 'bg-indigo-500' },
  { name: 'Aboakyer', slug: 'aboakyer', country: 'Ghana', countrySlug: 'ghana', date: 'May', description: 'Winneba deer hunting festival where two teams compete to catch a live antelope.', image: 'bg-lime-500' },
]

export default function FestivalsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">African Festivals</h1>
        <p className="mt-2 text-stone-500">Experience the vibrant celebrations, ceremonies, and festivals across Africa</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {festivals.map((festival) => (
          <Link key={festival.slug} href={`/festivals/${festival.slug}`}>
            <Card className="h-full">
              <div className={`h-32 ${festival.image} flex items-center justify-center text-white/50`}>
                <FestivalIcon className="h-12 w-12" />
              </div>
              <CardContent>
                <Badge variant="primary">{festival.country}</Badge>
                <h3 className="font-semibold text-lg mt-2">{festival.name}</h3>
                <p className="text-sm text-stone-500 mt-1">{festival.date}</p>
                <p className="text-sm text-stone-500 mt-2 line-clamp-2">{festival.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
