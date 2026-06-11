import { TribeCard } from '@/components/tribes/TribeCard'

const tribes = [
  { name: 'Maasai', slug: 'maasai', location: 'Kenya & Tanzania', countryName: 'Kenya', countrySlug: 'kenya' },
  { name: 'Kikuyu', slug: 'kikuyu', location: 'Central Kenya', countryName: 'Kenya', countrySlug: 'kenya' },
  { name: 'Luo', slug: 'luo', location: 'Western Kenya', countryName: 'Kenya', countrySlug: 'kenya' },
  { name: 'Kalenjin', slug: 'kalenjin', location: 'Rift Valley, Kenya', countryName: 'Kenya', countrySlug: 'kenya' },
  { name: 'Kamba', slug: 'kamba', location: 'Eastern Kenya', countryName: 'Kenya', countrySlug: 'kenya' },
  { name: 'Yoruba', slug: 'yoruba', location: 'Southwestern Nigeria', countryName: 'Nigeria', countrySlug: 'nigeria' },
  { name: 'Hausa', slug: 'hausa', location: 'Northern Nigeria', countryName: 'Nigeria', countrySlug: 'nigeria' },
  { name: 'Igbo', slug: 'igbo', location: 'Southeastern Nigeria', countryName: 'Nigeria', countrySlug: 'nigeria' },
  { name: 'Ijaw', slug: 'ijaw', location: 'Niger Delta, Nigeria', countryName: 'Nigeria', countrySlug: 'nigeria' },
  { name: 'Tiv', slug: 'tiv', location: 'Central Nigeria', countryName: 'Nigeria', countrySlug: 'nigeria' },
  { name: 'Zulu', slug: 'zulu', location: 'KwaZulu-Natal, South Africa', countryName: 'South Africa', countrySlug: 'south-africa' },
  { name: 'Xhosa', slug: 'xhosa', location: 'Eastern Cape, South Africa', countryName: 'South Africa', countrySlug: 'south-africa' },
  { name: 'Sotho', slug: 'sotho', location: 'Lesotho & South Africa', countryName: 'South Africa', countrySlug: 'south-africa' },
  { name: 'Ndebele', slug: 'ndebele', location: 'Mpumalanga, South Africa', countryName: 'South Africa', countrySlug: 'south-africa' },
  { name: 'Venda', slug: 'venda', location: 'Limpopo, South Africa', countryName: 'South Africa', countrySlug: 'south-africa' },
  { name: 'Oromo', slug: 'oromo', location: 'Ethiopia', countryName: 'Ethiopia', countrySlug: 'ethiopia' },
  { name: 'Amhara', slug: 'amhara', location: 'Northern Ethiopia', countryName: 'Ethiopia', countrySlug: 'ethiopia' },
  { name: 'Tigray', slug: 'tigray', location: 'Tigray, Ethiopia', countryName: 'Ethiopia', countrySlug: 'ethiopia' },
  { name: 'Akan', slug: 'akan', location: 'Ghana & Ivory Coast', countryName: 'Ghana', countrySlug: 'ghana' },
  { name: 'Ewe', slug: 'ewe', location: 'Ghana, Togo & Benin', countryName: 'Ghana', countrySlug: 'ghana' },
]

export default function TribesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Ethnic Groups of Africa</h1>
        <p className="mt-2 text-stone-500">Discover the diverse tribes and communities that make Africa unique</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tribes.map((tribe) => (
          <TribeCard key={tribe.slug} {...tribe} />
        ))}
      </div>
    </div>
  )
}
