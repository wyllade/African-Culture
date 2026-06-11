import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const languages: Record<string, {
  name: string
  speakers: string
  script: string
  family: string
  countries: string[]
  facts: string
  phrases: { phrase: string; translation: string }[]
}> = {
  swahili: {
    name: 'Swahili (Kiswahili)',
    speakers: '200 million+',
    script: 'Latin',
    family: 'Bantu',
    countries: ['Kenya', 'Tanzania', 'Uganda', 'DRC', 'Rwanda', 'Burundi', 'Mozambique'],
    facts: 'Swahili is a Bantu language with significant Arabic influence due to centuries of trade along the East African coast. It is the most widely spoken African language in terms of total speakers, and serves as a lingua franca across East Africa. Swahili is an official language of the African Union.',
    phrases: [
      { phrase: 'Jambo', translation: 'Hello' },
      { phrase: 'Habari gani?', translation: 'How are you?' },
      { phrase: 'Nzuri, asante', translation: 'Fine, thank you' },
      { phrase: 'Asante', translation: 'Thank you' },
      { phrase: 'Karibu', translation: 'Welcome' },
      { phrase: 'Kwa heri', translation: 'Goodbye' },
      { phrase: 'Tafadhali', translation: 'Please' },
      { phrase: 'Ndiyo', translation: 'Yes' },
      { phrase: 'Hapana', translation: 'No' },
      { phrase: 'Rafiki', translation: 'Friend' },
    ],
  },
  yoruba: {
    name: 'Yoruba',
    speakers: '50 million+',
    script: 'Latin',
    family: 'Niger-Congo',
    countries: ['Nigeria', 'Benin', 'Togo'],
    facts: 'Yoruba is a tonal language with three tones: high, mid, and low. It belongs to the Niger-Congo language family and is spoken primarily in Southwestern Nigeria. Yoruba has a rich literary tradition and is widely used in Afro-Caribbean religions like Candomblé and Santeria.',
    phrases: [
      { phrase: 'Bawo ni?', translation: 'Hello / How are you?' },
      { phrase: 'Mo wa dada', translation: 'I am fine' },
      { phrase: 'E seun', translation: 'Thank you' },
      { phrase: 'O daaro', translation: 'Goodbye' },
      { phrase: 'A ku asiiko', translation: 'Good morning' },
      { phrase: 'Beeni', translation: 'Yes' },
      { phrase: 'Beeko', translation: 'No' },
    ],
  },
  amharic: {
    name: 'Amharic (Amarinya)',
    speakers: '60 million+',
    script: 'Ge\'ez (Fidel)',
    family: 'Semitic',
    countries: ['Ethiopia'],
    facts: 'Amharic is the official language of Ethiopia and the second most spoken Semitic language after Arabic. It uses the Ge\'ez script (Fidel), which has 33 basic characters, each with 7 vowel variations. Amharic has its own unique number system and calendar.',
    phrases: [
      { phrase: 'Selam', translation: 'Hello / Peace' },
      { phrase: 'Dehna nedish?', translation: 'How are you?' },
      { phrase: 'Ameseginalehu', translation: 'Thank you' },
      { phrase: 'Dehna hunu', translation: 'Goodbye' },
      { phrase: 'Endet?', translation: 'How is it?' },
    ],
  },
  zulu: {
    name: 'Zulu (isiZulu)',
    speakers: '27 million+',
    script: 'Latin',
    family: 'Bantu',
    countries: ['South Africa'],
    facts: 'Zulu is one of South Africa\'s 11 official languages and the most widely spoken home language in the country. It is known for its click consonants, represented by the letters c, q, and x. Zulu is closely related to Xhosa and Swati.',
    phrases: [
      { phrase: 'Sawubona', translation: 'Hello (to one person)' },
      { phrase: 'Sanibonani', translation: 'Hello (to many)' },
      { phrase: 'Unjani?', translation: 'How are you?' },
      { phrase: 'Ngiyaphila', translation: 'I am fine' },
      { phrase: 'Ngiyabonga', translation: 'Thank you' },
      { phrase: 'Hamba kahle', translation: 'Goodbye (go well)' },
      { phrase: 'Yebo', translation: 'Yes' },
      { phrase: 'Cha', translation: 'No' },
    ],
  },
  hausa: {
    name: 'Hausa',
    speakers: '80 million+',
    script: 'Latin (Boko), Arabic (Ajami)',
    family: 'Chadic',
    countries: ['Nigeria', 'Niger', 'Ghana', 'Cameroon'],
    facts: 'Hausa is the most widely spoken Chadic language and a major lingua franca across West Africa. It has been written in both Latin (Boko) and Arabic (Ajami) scripts. Hausa has a vibrant media presence with newspapers, radio, and television broadcasts.',
    phrases: [
      { phrase: 'Sannu', translation: 'Hello' },
      { phrase: 'Yaya kake?', translation: 'How are you?' },
      { phrase: 'Nagode', translation: 'Thank you' },
      { phrase: 'Sai anjima', translation: 'See you later' },
      { phrase: 'Barka da safe', translation: 'Good morning' },
      { phrase: 'Eh', translation: 'Yes' },
    ],
  },
}

export default async function LanguagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lang = languages[slug]

  if (!lang) notFound()

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/languages" className="text-sm text-stone-500 hover:text-primary mb-4 inline-block">&larr; All Languages</Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">{lang.name}</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="primary">{lang.family}</Badge>
          <Badge variant="secondary">{lang.script}</Badge>
        </div>
      </div>

      <div className="space-y-8">
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-stone-500">Speakers</p>
                <p className="font-semibold">{lang.speakers}</p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Writing System</p>
                <p className="font-semibold">{lang.script}</p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Language Family</p>
                <p className="font-semibold">{lang.family}</p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Primary Countries</p>
                <p className="font-semibold text-sm">{lang.countries.join(', ')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="leading-relaxed">{lang.facts}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Common Phrases</h2>
            <div className="space-y-2">
              {lang.phrases.map((p) => (
                <div key={p.phrase} className="flex items-center justify-between p-3 rounded-lg bg-stone-50 dark:bg-stone-800">
                  <span className="font-medium">{p.phrase}</span>
                  <span className="text-stone-500 text-sm">{p.translation}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
