import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'

const languages = [
  { name: 'Swahili', slug: 'swahili', speakers: '200M+', countries: ['Kenya', 'Tanzania', 'Uganda', 'DRC', 'Rwanda'], script: 'Latin', family: 'Bantu' },
  { name: 'Amharic', slug: 'amharic', speakers: '60M+', countries: ['Ethiopia'], script: 'Ge\'ez (Fidel)', family: 'Semitic' },
  { name: 'Yoruba', slug: 'yoruba', speakers: '50M+', countries: ['Nigeria', 'Benin', 'Togo'], script: 'Latin', family: 'Niger-Congo' },
  { name: 'Zulu', slug: 'zulu', speakers: '27M+', countries: ['South Africa'], script: 'Latin', family: 'Bantu' },
  { name: 'Hausa', slug: 'hausa', speakers: '80M+', countries: ['Nigeria', 'Niger', 'Ghana', 'Cameroon'], script: 'Latin, Arabic (Ajami)', family: 'Chadic' },
  { name: 'Igbo', slug: 'igbo', speakers: '45M+', countries: ['Nigeria'], script: 'Latin', family: 'Niger-Congo' },
  { name: 'Oromo', slug: 'oromo', speakers: '40M+', countries: ['Ethiopia', 'Kenya'], script: 'Latin (Qubee)', family: 'Cushitic' },
  { name: 'Fula', slug: 'fula', speakers: '40M+', countries: ['Senegal', 'Guinea', 'Nigeria', 'Cameroon', 'Mali'], script: 'Latin, Arabic', family: 'Niger-Congo' },
  { name: 'Afrikaans', slug: 'afrikaans', speakers: '17M+', countries: ['South Africa', 'Namibia'], script: 'Latin', family: 'Germanic' },
  { name: 'Somali', slug: 'somali', speakers: '25M+', countries: ['Somalia', 'Kenya', 'Ethiopia'], script: 'Latin, Arabic, Osmanya', family: 'Cushitic' },
  { name: 'Xhosa', slug: 'xhosa', speakers: '19M+', countries: ['South Africa'], script: 'Latin', family: 'Bantu' },
  { name: 'Twi', slug: 'twi', speakers: '9M+', countries: ['Ghana'], script: 'Latin', family: 'Niger-Congo' },
  { name: 'Maa', slug: 'maa', speakers: '1.5M+', countries: ['Kenya', 'Tanzania'], script: 'Latin', family: 'Nilotic' },
  { name: 'Lingala', slug: 'lingala', speakers: '15M+', countries: ['DRC', 'Congo'], script: 'Latin', family: 'Bantu' },
  { name: 'Wolof', slug: 'wolof', speakers: '12M+', countries: ['Senegal', 'Gambia'], script: 'Latin, Arabic', family: 'Niger-Congo' },
]

export default function LanguagesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">African Languages</h1>
        <p className="mt-2 text-stone-500">Africa is home to over 2,000 languages. Discover the most widely spoken ones.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {languages.map((lang) => (
          <Link key={lang.slug} href={`/languages/${lang.slug}`}>
            <Card className="h-full">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{lang.name}</h3>
                  <span className="text-xs text-stone-400">{lang.family}</span>
                </div>
                <div className="space-y-1 text-sm text-stone-500">
                  <p>{lang.speakers} speakers</p>
                  <p>Script: {lang.script}</p>
                  <p className="truncate">{lang.countries.join(', ')}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
