'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import L from 'leaflet'
import { Loader } from '@/components/ui/Loader'

// Fix default marker icons not bundling in Next.js/webpack
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
})

const MapContainer = dynamic(() => import('react-leaflet').then((m) => m.MapContainer), { ssr: false, loading: () => <Loader /> })
const TileLayer = dynamic(() => import('react-leaflet').then((m) => m.TileLayer), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then((m) => m.Marker), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then((m) => m.Popup), { ssr: false })

interface CountryMarker {
  name: string
  slug: string
  lat: number
  lng: number
}

interface InteractiveMapProps {
  countries: CountryMarker[]
}

export function InteractiveMap({ countries }: InteractiveMapProps) {
  const isDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

  return (
    <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700">
      <MapContainer
        center={[5, 20]}
        zoom={3}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url={
            isDark
              ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
              : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
          }
        />
        {countries.map((country) => (
          <Marker key={country.slug} position={[country.lat, country.lng]}>
            <Popup>
              <a
                href={`/countries/${country.slug}`}
                className="text-primary font-medium hover:underline"
              >
                {country.name}
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
