import { notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Tabs } from '@/components/ui/Tabs'
import { formatPopulation } from '@/lib/utils'
import { MapPin, Users, Languages, UtensilsCrossed, Music, History, Glasses } from '@/lib/icon'

const countries = {
  kenya: {
    name: 'Kenya',
    slug: 'kenya',
    capital: 'Nairobi',
    population: 54027000,
    region: 'East Africa',
    languages: ['Swahili', 'English'],
    flagUrl: '/images/placeholder-flag.svg',
    overview:
      'Kenya, located in East Africa, is renowned for its breathtaking landscapes, wildlife, and rich cultural heritage. Home to over 40 ethnic groups, Kenya offers a vibrant tapestry of traditions, languages, and customs that reflect its diverse population.',
    traditionalClothing:
      'Traditional Kenyan clothing varies by ethnic group. The Maasai are known for their vibrant shúkà (red-checked blankets), while the Kikuyu wear traditional leather garments. The Swahili coastal people favor kikoy and kanzu.',
    marriageCustoms:
      'Marriage customs in Kenya are diverse. Dowry (bride price) is common across many communities. The Maasai practice polygamy, while the Kikuyu have elaborate negotiation ceremonies.',
    ceremonies:
      'Kenyan ceremonies include birth rituals, initiation rites (circumcision for boys and girls), and funeral ceremonies that vary by tribe. The Maasai Eunoto ceremony marks warriors transitioning to elders.',
    musicDance:
      'Kenyan music spans traditional folk songs, benga (popular music from the Luo), gospel, and modern genres like gengetone and kapuka. Traditional dances include the Maasai jumping dance (adumu) and Giriama dances.',
    history: `Kenya's history spans from early human origins in the Rift Valley to Arab trade settlements on the coast (8th century), British colonization (1895-1963), independence under Jomo Kenyatta in 1963, and modern democratic development.`,
    foods: [
      { name: 'Nyama Choma', slug: 'nyama-choma' },
      { name: 'Ugali', slug: 'ugali' },
      { name: 'Sukuma Wiki', slug: 'sukuma-wiki' },
      { name: 'Githeri', slug: 'githeri' },
      { name: 'Mandazi', slug: 'mandazi' },
    ],
    tribes: [
      { name: 'Maasai', slug: 'maasai' },
      { name: 'Kikuyu', slug: 'kikuyu' },
      { name: 'Luo', slug: 'luo' },
      { name: 'Kalenjin', slug: 'kalenjin' },
      { name: 'Kamba', slug: 'kamba' },
    ],
    festivals: [
      { name: 'Maasai Mara Festival', slug: 'maasai-mara-festival' },
      { name: 'Lake Turkana Festival', slug: 'lake-turkana-festival' },
    ],
    gallery: [],
  },
  nigeria: {
    name: 'Nigeria',
    slug: 'nigeria',
    capital: 'Abuja',
    population: 223800000,
    region: 'West Africa',
    languages: ['English', 'Hausa', 'Yoruba', 'Igbo'],
    flagUrl: '/images/placeholder-flag.svg',
    overview:
      'Nigeria, the most populous country in Africa, is a cultural powerhouse with over 250 ethnic groups. From Nollywood to Afrobeat, Nigerian culture has a global influence that continues to grow.',
    traditionalClothing:
      'Nigerian traditional clothing includes the flowing agbada (Yoruba), babban riga (Hausa), and isi agu (Igbo). Women wear iro and buba (Yoruba), wrapper and blouse (Igbo), and abaya (Hausa). Aso oke is a prestigious handwoven cloth.',
    marriageCustoms:
      'Nigerian weddings are elaborate affairs. Yoruba weddings include the engagement (idan) ceremony. Igbo weddings feature bride price negotiation. Hausa weddings follow Islamic traditions with a walima feast.',
    ceremonies:
      'Nigerian ceremonies include naming ceremonies (7 days after birth for Yoruba), traditional festivals like Eyo and Argungu, and chieftaincy installation ceremonies.',
    musicDance:
      'Nigeria is the birthplace of Afrobeat (Fela Kuti). Nigerian music includes highlife, juju, fuji, apala, and modern Afrobeat (Burna Boy, Wizkid). Traditional dances vary by region.',
    history: `Nigeria's history includes ancient civilizations (Nok, Benin, Ife), the trans-Saharan trade, British colonization (1914 amalgamation), independence in 1960, civil war (1967-1970), and democratic development since 1999.`,
    foods: [
      { name: 'Jollof Rice', slug: 'jollof-rice' },
      { name: 'Egusi Soup', slug: 'egusi-soup' },
      { name: 'Pounded Yam', slug: 'pounded-yam' },
      { name: 'Suya', slug: 'suya' },
      { name: 'Moi Moi', slug: 'moi-moi' },
    ],
    tribes: [
      { name: 'Yoruba', slug: 'yoruba' },
      { name: 'Hausa', slug: 'hausa' },
      { name: 'Igbo', slug: 'igbo' },
      { name: 'Ijaw', slug: 'ijaw' },
      { name: 'Tiv', slug: 'tiv' },
    ],
    festivals: [
      { name: 'Durbar Festival', slug: 'durbar-festival' },
      { name: 'Eyo Festival', slug: 'eyo-festival' },
    ],
    gallery: [],
  },
  'south-africa': {
    name: 'South Africa',
    slug: 'south-africa',
    capital: 'Pretoria',
    population: 60414000,
    region: 'Southern Africa',
    languages: ['Zulu', 'Xhosa', 'Afrikaans', 'English', 'Sotho'],
    flagUrl: '/images/placeholder-flag.svg',
    overview:
      'South Africa, known as the Rainbow Nation, is celebrated for its incredible diversity with 11 official languages and a rich cultural heritage blending African, European, and Asian influences.',
    traditionalClothing:
      'Traditional South African clothing varies widely. Zulu women wear colorful beadwork and isicholo (hats). Xhosa wear embroidered blankets and headwraps. Ndebele are known for geometric patterned attire and beadwork.',
    marriageCustoms:
      'South African marriage customs include lobola (bride price) across many groups. Zulu weddings (umabo) involve gift-giving and dancing. Xhosa weddings include ritual ceremonies and feasting.',
    ceremonies:
      'Important ceremonies include initiation schools (ulwaluko for Xhosa boys), Zulu reed dance (Umkhosi Womhlanga), and coming-of-age rituals across all communities.',
    musicDance:
      'South African music includes mbaqanga, kwaito, gqom, and amapiano (global phenomenon). Traditional dances include Zulu war dances, Xhosa dances, and the gumboot dance originated in mines.',
    history: `South Africa's history spans San and Khoikhoi peoples, Bantu migrations, Dutch and British colonization, the Zulu kingdom under Shaka, the Apartheid era (1948-1994), and the democratic transition led by Nelson Mandela.`,
    foods: [
      { name: 'Bunny Chow', slug: 'bunny-chow' },
      { name: 'Bobotie', slug: 'bobotie' },
      { name: 'Biltong', slug: 'biltong' },
      { name: 'Braai', slug: 'braai' },
      { name: 'Malva Pudding', slug: 'malva-pudding' },
    ],
    tribes: [
      { name: 'Zulu', slug: 'zulu' },
      { name: 'Xhosa', slug: 'xhosa' },
      { name: 'Sotho', slug: 'sotho' },
      { name: 'Ndebele', slug: 'ndebele' },
      { name: 'Venda', slug: 'venda' },
    ],
    festivals: [
      { name: 'National Arts Festival', slug: 'national-arts-festival' },
      { name: 'Cape Town Jazz Festival', slug: 'cape-town-jazz-festival' },
    ],
    gallery: [],
  },
  ethiopia: {
    name: 'Ethiopia',
    slug: 'ethiopia',
    capital: 'Addis Ababa',
    population: 126527000,
    region: 'East Africa',
    languages: ['Amharic', 'Oromo', 'Tigrinya', 'Somali'],
    flagUrl: '/images/placeholder-flag.svg',
    overview:
      'Ethiopia is Africa\'s oldest independent country with a history stretching back millennia. It is the birthplace of coffee, home to the Ethiopian Orthodox Church, and a land of unique traditions and scripts.',
    traditionalClothing:
      'Traditional Ethiopian clothing includes the habesha kemis (white cotton dress with colorful borders for women) and the netela (shawl). Men wear a similar white cotton garment with a shawl.',
    marriageCustoms:
      'Traditional Ethiopian marriages often involve arranged matches, with the groom\'s family paying a bride price. The wedding ceremony is celebrated with feasting, coffee ceremonies, and traditional music.',
    ceremonies:
      'Key ceremonies include Timkat (Epiphany), Meskel (Finding of the True Cross), and the coffee ceremony — a daily ritual of hospitality with roasting, grinding, and brewing coffee.',
    musicDance:
      'Ethiopian music is distinctive with its unique scale system (qenet). Traditional instruments include the krar (lyre), masenqo (one-string fiddle), and kebero (drum). Eskista is a famous shoulder-dancing style.',
    history: `Ethiopia's history includes the ancient Kingdom of Aksum (1st-7th century), the Solomonic dynasty, resistance against Italian colonization (victory at Adwa 1896), and modern development under the Ethiopian People's Revolutionary Democratic Front.`,
    foods: [
      { name: 'Injera', slug: 'injera' },
      { name: 'Doro Wat', slug: 'doro-wat' },
      { name: 'Kitfo', slug: 'kitfo' },
      { name: 'Tibs', slug: 'tibs' },
    ],
    tribes: [
      { name: 'Oromo', slug: 'oromo' },
      { name: 'Amhara', slug: 'amhara' },
      { name: 'Tigray', slug: 'tigray' },
      { name: 'Somalia', slug: 'somalia-ethiopia' },
    ],
    festivals: [
      { name: 'Timkat', slug: 'timkat' },
      { name: 'Meskel', slug: 'meskel' },
    ],
    gallery: [],
  },
  ghana: {
    name: 'Ghana',
    slug: 'ghana',
    capital: 'Accra',
    population: 34121000,
    region: 'West Africa',
    languages: ['English', 'Twi', 'Fante', 'Ewe'],
    flagUrl: '/images/placeholder-flag.svg',
    overview:
      'Ghana, the first sub-Saharan African country to gain independence, is known for its rich cultural heritage, vibrant festivals, colorful kente cloth, and warm hospitality.',
    traditionalClothing:
      'Ghana is famous for kente cloth — a handwoven fabric with intricate patterns and symbolic meanings. Traditional attire includes the smock (northern Ghana), kente wraps, and batakari (traditional warrior shirt).',
    marriageCustoms:
      'Ghanaian traditional marriages involve the knocking ceremony (family introduction), bride price negotiation, and the traditional wedding ceremony with pouring of libation and exchange of gifts.',
    ceremonies:
      'Ghanaian ceremonies include outdooring (naming ceremony on the 8th day), puberty rites (dipo for Krobo girls), and elaborate funeral ceremonies celebrating the life of the deceased.',
    musicDance:
      'Ghana is known for highlife music, gospel, and modern genres like hiplife and afro-pop. Traditional dances include adowa (Akan), agbadza (Ewe), and kpanlogo (Ga). The djembe and talking drum are iconic instruments.',
    history: `Ghana's history includes the ancient Ghana Empire (not modern Ghana), powerful Akan kingdoms (Ashanti Empire), European gold/slave trade forts, British colonization, and independence in 1957 under Kwame Nkrumah.`,
    foods: [
      { name: 'Jollof Rice', slug: 'jollof-rice' },
      { name: 'Fufu', slug: 'fufu' },
      { name: 'Banku', slug: 'banku' },
      { name: 'Kenkey', slug: 'kenkey' },
    ],
    tribes: [
      { name: 'Akan', slug: 'akan' },
      { name: 'Ewe', slug: 'ewe' },
      { name: 'Ga', slug: 'ga' },
      { name: 'Dagomba', slug: 'dagomba' },
    ],
    festivals: [
      { name: 'Homowo', slug: 'homowo' },
      { name: 'Aboakyer', slug: 'aboakyer' },
    ],
    gallery: [],
  },
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const country = countries[slug as keyof typeof countries]

  if (!country) {
    notFound()
  }

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">{country.overview}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-stone-50 dark:bg-stone-800">
              <Users className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm text-stone-500">Population</p>
              <p className="font-semibold">{formatPopulation(country.population)}</p>
            </div>
            <div className="p-4 rounded-lg bg-stone-50 dark:bg-stone-800">
              <MapPin className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm text-stone-500">Capital</p>
              <p className="font-semibold">{country.capital}</p>
            </div>
            <div className="p-4 rounded-lg bg-stone-50 dark:bg-stone-800">
              <Languages className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm text-stone-500">Languages</p>
              <p className="font-semibold">{country.languages.join(', ')}</p>
            </div>
          </div>
          <Badge variant="primary">{country.region}</Badge>
        </div>
      ),
    },
    {
      id: 'culture',
      label: 'Culture',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Glasses className="h-5 w-5 text-primary" /> Traditional Clothing
            </h3>
            <p>{country.traditionalClothing}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Marriage Customs</h3>
            <p>{country.marriageCustoms}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Ceremonies</h3>
            <p>{country.ceremonies}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'food',
      label: 'Food',
      content: (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <UtensilsCrossed className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">Popular Dishes</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {country.foods.map((food) => (
              <a
                key={food.slug}
                href={`/foods/${food.slug}`}
                className="p-3 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-primary transition-colors text-center"
              >
                {food.name}
              </a>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'music',
      label: 'Music & Dance',
      content: (
        <div className="flex items-start gap-4">
          <Music className="h-5 w-5 text-primary mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Music & Dance</h3>
            <p className="leading-relaxed">{country.musicDance}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'tribes',
      label: 'Ethnic Groups',
      content: (
        <div>
          <h3 className="font-semibold text-lg mb-4">Major Tribes & Communities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {country.tribes.map((tribe) => (
              <a
                key={tribe.slug}
                href={`/tribes/${tribe.slug}`}
                className="p-3 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-secondary transition-colors text-center"
              >
                {tribe.name}
              </a>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'history',
      label: 'History',
      content: (
        <div className="flex items-start gap-4">
          <History className="h-5 w-5 text-primary mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Historical Timeline</h3>
            <p className="leading-relaxed">{country.history}</p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-12 rounded overflow-hidden border border-stone-200">
            <div className="w-full h-full bg-gradient-to-br from-green-500 via-yellow-500 to-red-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{country.name}</h1>
            <p className="text-stone-500">{country.capital} &middot; {country.region}</p>
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <Tabs tabs={tabs} />
        </CardContent>
      </Card>
    </div>
  )
}
