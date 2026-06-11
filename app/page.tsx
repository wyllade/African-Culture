import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedContent } from '@/components/home/FeaturedContent'
import { RegionGrid } from '@/components/home/RegionGrid'
import { ProverbWidget } from '@/components/home/ProverbWidget'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedContent />
      <ProverbWidget />
      <RegionGrid />
    </>
  )
}
