import { InteractiveMap } from '@/components/countries/InteractiveMap'
import { CountryCard } from '@/components/countries/CountryCard'

const countries = [
  {
    name: 'Nigeria',
    slug: 'nigeria',
    capital: 'Abuja',
    population: 223800000,
    region: 'West Africa',
    languages: ['English', 'Hausa', 'Yoruba', 'Igbo'],
    lat: 9.082,
    lng: 8.675,
  },
  {
    name: 'Kenya',
    slug: 'kenya',
    capital: 'Nairobi',
    population: 54027000,
    region: 'East Africa',
    languages: ['Swahili', 'English'],
    lat: -0.0236,
    lng: 37.9062,
  },
  {
    name: 'South Africa',
    slug: 'south-africa',
    capital: 'Pretoria',
    population: 60414000,
    region: 'Southern Africa',
    languages: ['Zulu', 'Xhosa', 'Afrikaans', 'English', 'Sotho'],
    lat: -30.5595,
    lng: 22.9375,
  },
  {
    name: 'Ethiopia',
    slug: 'ethiopia',
    capital: 'Addis Ababa',
    population: 126527000,
    region: 'East Africa',
    languages: ['Amharic', 'Oromo', 'Tigrinya', 'Somali'],
    lat: 9.145,
    lng: 40.4897,
  },
  {
    name: 'Ghana',
    slug: 'ghana',
    capital: 'Accra',
    population: 34121000,
    region: 'West Africa',
    languages: ['English', 'Twi', 'Fante', 'Ewe'],
    lat: 7.9465,
    lng: -1.0232,
  },
]

export default function CountriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">African Countries</h1>
        <p className="mt-2 text-stone-500">Click a country on the map or browse the grid below</p>
      </div>

      <InteractiveMap
        countries={countries.map((c) => ({ name: c.name, slug: c.slug, lat: c.lat, lng: c.lng }))}
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country) => (
          <CountryCard
            key={country.slug}
            name={country.name}
            slug={country.slug}
            capital={country.capital}
            population={country.population}
            region={country.region}
            languages={country.languages}
          />
        ))}
      </div>
    </div>
  )
}
