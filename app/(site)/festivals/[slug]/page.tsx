import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Calendar } from 'lucide-react'

const festivals: Record<string, {
  name: string
  date: string
  country: string
  countrySlug: string
  history: string
  traditions: string
}> = {
  timkat: {
    name: 'Timkat',
    date: 'January 19 (January 20 on leap years)',
    country: 'Ethiopia',
    countrySlug: 'ethiopia',
    history: 'Timkat (also spelled Timqat or Timket) celebrates the baptism of Jesus Christ in the Jordan River. It is the most important festival in the Ethiopian Orthodox Tewahedo Church calendar. The festival dates back to the establishment of Christianity in Ethiopia in the 4th century AD.',
    traditions: 'On Timkat eve, churches bring out their tabots (replicas of the Ark of the Covenant) in elaborate processions led by priests in ceremonial robes. The tabots are taken to a body of water where the following morning, a blessing ceremony reenacts Christ\'s baptism. Thousands of pilgrims dressed in white gather for prayers, hymns, and dancing. The festival concludes with the tabots returned to churches amid celebrations.',
  },
  'durbar-festival': {
    name: 'Durbar Festival',
    date: 'Varies (Eid al-Fitr and Eid al-Adha)',
    country: 'Nigeria',
    countrySlug: 'nigeria',
    history: 'The Durbar Festival dates back to the 14th century in Northern Nigeria as a military parade and display of horsemanship by the emirs\' calvary. Originally a military exercise, it evolved into a cultural celebration marking the end of Ramadan (Eid al-Fitr) and the Feast of Sacrifice (Eid al-Adha).',
    traditions: 'The festival features grand horse parades with thousands of riders dressed in elaborate traditional regalia. Emirs ride horseback accompanied by musicians, drummers, and praise singers. The event includes acrobatic horseback riding displays, traditional music, and ceremonial gun salutes. Each emirate competes in a display of pageantry and cultural pride.',
  },
  meskel: {
    name: 'Meskel',
    date: 'September 27 (September 28 on leap years)',
    country: 'Ethiopia',
    countrySlug: 'ethiopia',
    history: 'Meskel (or Mesqel) commemorates the finding of the True Cross by Empress Helena, mother of Constantine the Great, in the 4th century. The festival is said to mark the exact spot where the cross was found, revealed by smoke that rose from a bonfire.',
    traditions: 'The centerpiece of Meskel is the Demera — a large bonfire with a cross at its center, built in public squares and churchyards. Priests lead processions carrying crosses and singing hymns. In the evening, the bonfire is lit, and the direction of the smoke is said to foretell the coming year. The celebration includes feasting, dancing, and the yellow Meskel daisy (adey abeba) is worn by celebrants.',
  },
}

export default async function FestivalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const festival = festivals[slug]

  if (!festival) notFound()

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/festivals" className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-primary mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Festivals
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Link href={`/countries/${festival.countrySlug}`} className="text-sm text-primary hover:underline">
            {festival.country}
          </Link>
        </div>
        <h1 className="text-3xl font-bold">{festival.name}</h1>
        <div className="flex items-center gap-2 mt-2 text-stone-500">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{festival.date}</span>
        </div>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">History</h2>
            <p className="leading-relaxed">{festival.history}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">Traditions & Celebrations</h2>
            <p className="leading-relaxed">{festival.traditions}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
