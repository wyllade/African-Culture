'use client'

import { forwardRef } from 'react'
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  X as XIcon,
  ArrowRight as ArrowRightIcon,
  Compass as CompassIcon,
  BookOpen as BookOpenIcon,
  Users as UsersIcon,
  Sparkles as SparklesIcon,
  Heart as HeartIcon,
  Quote as QuoteIcon,
  Shuffle as ShuffleIcon,
  UtensilsCrossed as UtensilsCrossedIcon,
  Languages as LanguagesIcon,
  Music as MusicIcon,
  MapPin as MapPinIcon,
  ArrowLeft as ArrowLeftIcon,
  Share2 as Share2Icon,
  Calendar as CalendarIcon,
  Glasses as GlassesIcon,
  History as HistoryIcon,
  type LucideProps,
} from 'lucide-react'

function wrap<P extends LucideProps>(Icon: React.ForwardRefExoticComponent<P>) {
  return forwardRef<SVGSVGElement, P>((props, ref) => (
    <Icon ref={ref} {...(props as any)} suppressHydrationWarning data-darkreader-mode="never" />
  ))
}

export const Search = wrap(SearchIcon)
export const Menu = wrap(MenuIcon)
export const X = wrap(XIcon)
export const ArrowRight = wrap(ArrowRightIcon)
export const Compass = wrap(CompassIcon)
export const BookOpen = wrap(BookOpenIcon)
export const Users = wrap(UsersIcon)
export const Sparkles = wrap(SparklesIcon)
export const Heart = wrap(HeartIcon)
export const Quote = wrap(QuoteIcon)
export const Shuffle = wrap(ShuffleIcon)
export const UtensilsCrossed = wrap(UtensilsCrossedIcon)
export const Languages = wrap(LanguagesIcon)
export const Music = wrap(MusicIcon)
export const MapPin = wrap(MapPinIcon)
export const ArrowLeft = wrap(ArrowLeftIcon)
export const Share2 = wrap(Share2Icon)
export const Calendar = wrap(CalendarIcon)
export const Glasses = wrap(GlassesIcon)
export const History = wrap(HistoryIcon)
