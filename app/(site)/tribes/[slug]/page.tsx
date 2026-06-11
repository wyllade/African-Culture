import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Tabs } from '@/components/ui/Tabs'
import { ArrowLeft } from '@/lib/icon'

const tribes: Record<string, {
  name: string
  origins: string
  location: string
  language: { name: string; slug: string }
  clothing: string
  food: { name: string; slug: string }[]
  traditions: string
  music: string
  stories: string
  country: { name: string; slug: string }
}> = {
  maasai: {
    name: 'Maasai',
    origins: 'The Maasai are a Nilotic ethnic group believed to have originated from the lower Nile valley, migrating southward around the 15th century into East Africa. They are semi-nomadic pastoralists known for their fierce warrior culture and deep connection to cattle.',
    location: 'Southern Kenya and Northern Tanzania',
    language: { name: 'Maa', slug: 'maa' },
    clothing: 'The Maasai are known for their distinctive shúkà — bright red or checkered blankets wrapped around the body. Women wear beaded jewelry (necklaces, earrings, bracelets) that indicate social status and age. Warriors (moran) wear their hair in braids and adorn themselves with ochre and beads.',
    food: [
      { name: 'Nyama Choma', slug: 'nyama-choma' },
      { name: 'Ugali', slug: 'ugali' },
    ],
    traditions: 'The Maasai have rich traditions including the Eunoto ceremony (warriors transitioning to elders), the Emuratta (coming of age for boys), and the Adumu (jumping dance). Cattle are central to their culture, serving as currency and measure of wealth.',
    music: 'Maasai music features group singing, chanting, and the iconic Adumu jumping dance. Warriors sing and bounce rhythmically, competing to jump the highest. The olaranyani (song leader) starts each verse with the group responding in call-and-response.',
    stories: 'Maasai oral tradition tells of Enkai (God) who gave all cattle to the Maasai, explaining their deep connection to cattle. Stories of brave warriors, wise elders, and the relationship between humans and nature form the core of their folklore.',
    country: { name: 'Kenya', slug: 'kenya' },
  },
  yoruba: {
    name: 'Yoruba',
    origins: 'The Yoruba people trace their origins to the ancient city of Ile-Ife, considered the cradle of Yoruba civilization. According to mythology, the god Oduduwa descended from heaven on a chain to create the earth at Ile-Ife.',
    location: 'Southwestern Nigeria, Benin, and Togo',
    language: { name: 'Yoruba', slug: 'yoruba' },
    clothing: 'Yoruba traditional attire includes the agbada (flowing wide-sleeved robe) for men, and iro and buba (wrapper and blouse) for women. Aso oke, a handwoven cloth, is worn for special occasions. The gele (headwrap) is an important fashion statement among women.',
    food: [
      { name: 'Jollof Rice', slug: 'jollof-rice' },
      { name: 'Egusi Soup', slug: 'egusi-soup' },
      { name: 'Pounded Yam', slug: 'pounded-yam' },
    ],
    traditions: 'Yoruba traditions include elaborate weddings (engagement ceremony called idana), naming ceremonies on the 8th day, and the Egungun festival honoring ancestors. The Yoruba have a rich spiritual system with Orishas (deities) like Ogun, Sango, and Yemoja.',
    music: 'Yoruba music includes talking drums (dundun), bata drums used in religious ceremonies, and vocal traditions like ijala (hunters\' chants). Contemporary Yoruba music heavily influences Nigerian Afrobeat and pop.',
    stories: 'Yoruba mythology includes the creation story of Oduduwa, the trickster god Eshu, tales of the Orishas, and animal fables featuring the tortoise (Ijapa) as a clever trickster figure.',
    country: { name: 'Nigeria', slug: 'nigeria' },
  },
  zulu: {
    name: 'Zulu',
    origins: 'The Zulu people originated from the Nguni migration southward through East Africa. Under King Shaka (1816-1828), the Zulu kingdom became a powerful empire through military conquest and innovative warfare tactics.',
    location: 'KwaZulu-Natal, South Africa',
    language: { name: 'Zulu', slug: 'zulu' },
    clothing: 'Traditional Zulu attire includes colorful beadwork that communicates marital status and social position. Women wear isicholo (woven hats) after marriage. Men wear amambatha (skin capes) and carry iwisa (knobkerrie). During ceremonies, elaborate feathered headdresses and cowhide garments are worn.',
    food: [
      { name: 'Bunny Chow', slug: 'bunny-chow' },
      { name: 'Bobotie', slug: 'bobotie' },
      { name: 'Braai', slug: 'braai' },
    ],
    traditions: 'Zulu traditions include the Umhlanga (Reed Dance) ceremony where young women present reeds to the king, coming-of-age rituals, and ancestor veneration (amadlozi). The Zulu monarchy remains an important cultural institution.',
    music: 'Zulu music features choral singing, isicathamiya (a cappella style popularized by Ladysmith Black Mambazo), and traditional dancing with shields and spears. The Zulu war dance (indlamu) is a powerful display of stomping and rhythmic movements.',
    stories: 'Zulu folklore includes tales of Shaka\'s rise to power, stories of mythical creatures like the Tokoloshe and Inkanyamba (giant serpent), and moral fables explaining natural phenomena.',
    country: { name: 'South Africa', slug: 'south-africa' },
  },
  akan: {
    name: 'Akan',
    origins: 'The Akan people trace their origins to the ancient Ghana Empire and later migrated to present-day Ghana and Ivory Coast. The Ashanti (Asante) Empire was the most powerful Akan state, known for its gold wealth and military power.',
    location: 'Ghana and Ivory Coast',
    language: { name: 'Twi', slug: 'twi' },
    clothing: 'The Akan are famous for kente cloth — a vibrant, handwoven silk and cotton textile with symbolic patterns. Each kente pattern has a name and meaning. Traditional attire includes the kente wrap for both men and women, with gold jewelry signifying status.',
    food: [
      { name: 'Fufu', slug: 'fufu' },
      { name: 'Banku', slug: 'banku' },
      { name: 'Kenkey', slug: 'kenkey' },
    ],
    traditions: 'Akan traditions include the elaborate chieftaincy system with golden stools as symbols of power, the Akwasidae festival honoring ancestors, and the Adae ceremonies. The concept of "Sankofa" (return for what you have forgotten) emphasizes learning from the past.',
    music: 'Akan music uses the djembe, talking drum, and fontomfrom (royal drums). Traditional dances include adowa (funeral/welcome dance) and kete (royal dance). Palm wine music and highlife originated among the Akan.',
    stories: 'Akan folklore is rich with Ananse (spider) stories — trickster tales of Kwaku Ananse that teach moral lessons. The Ananse stories traveled to the Caribbean through the slave trade and live on in Anansi tales across the diaspora.',
    country: { name: 'Ghana', slug: 'ghana' },
  },
}

export default async function TribePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tribe = tribes[slug]

  if (!tribe) {
    notFound()
  }

  const tabs = [
    {
      id: 'origins',
      label: 'Origins',
      content: (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Origins & History</h3>
          <p className="leading-relaxed">{tribe.origins}</p>
          <div className="p-4 rounded-lg bg-stone-50 dark:bg-stone-800">
            <p className="text-sm text-stone-500">Location</p>
            <p className="font-medium">{tribe.location}</p>
          </div>
          <Link href={`/languages/${tribe.language.slug}`} className="text-primary hover:underline text-sm">
            Language: {tribe.language.name} &rarr;
          </Link>
        </div>
      ),
    },
    {
      id: 'clothing',
      label: 'Clothing',
      content: (
        <div>
          <h3 className="font-semibold text-lg mb-3">Traditional Clothing</h3>
          <p className="leading-relaxed">{tribe.clothing}</p>
        </div>
      ),
    },
    {
      id: 'food',
      label: 'Food',
      content: (
        <div>
          <h3 className="font-semibold text-lg mb-3">Traditional Foods</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {tribe.food.map((f) => (
              <Link
                key={f.slug}
                href={`/foods/${f.slug}`}
                className="p-3 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-primary transition-colors text-center"
              >
                {f.name}
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'traditions',
      label: 'Traditions',
      content: (
        <div>
          <h3 className="font-semibold text-lg mb-3">Traditions & Customs</h3>
          <p className="leading-relaxed">{tribe.traditions}</p>
        </div>
      ),
    },
    {
      id: 'music',
      label: 'Music',
      content: (
        <div>
          <h3 className="font-semibold text-lg mb-3">Music & Dance</h3>
          <p className="leading-relaxed">{tribe.music}</p>
        </div>
      ),
    },
    {
      id: 'stories',
      label: 'Stories',
      content: (
        <div>
          <h3 className="font-semibold text-lg mb-3">Folklore & Stories</h3>
          <p className="leading-relaxed">{tribe.stories}</p>
        </div>
      ),
    },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/tribes" className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-primary mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Tribes
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Link href={`/countries/${tribe.country.slug}`} className="text-sm text-primary hover:underline">
            {tribe.country.name}
          </Link>
          <Badge variant="secondary">{tribe.language.name}</Badge>
        </div>
        <h1 className="text-3xl font-bold">{tribe.name}</h1>
      </div>

      <Card>
        <CardContent className="p-6">
          <Tabs tabs={tabs} />
        </CardContent>
      </Card>
    </div>
  )
}
