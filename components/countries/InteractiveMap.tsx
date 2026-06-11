'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import L from 'leaflet'
import { Loader } from '@/components/ui/Loader'

function createIcon() {
  return L.divIcon({
    className: '',
    html: `<div style="width:20px;height:20px;background:#b94a32;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
  })
}

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
          <Marker key={country.slug} position={[country.lat, country.lng]} icon={createIcon()}>
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
