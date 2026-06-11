import Link from 'next/link'
import { Globe, Heart } from 'lucide-react'

const sections = [
  {
    title: 'Explore',
    links: [
      { href: '/countries', label: 'Countries' },
      { href: '/foods', label: 'Foods' },
      { href: '/tribes', label: 'Tribes' },
      { href: '/languages', label: 'Languages' },
      { href: '/festivals', label: 'Festivals' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { href: '/proverbs', label: 'Proverbs' },
      { href: '/art-fashion', label: 'Art & Fashion' },
      { href: '/quiz', label: 'Quizzes' },
      { href: '/explorer', label: 'Culture Explorer' },
    ],
  },
  {
    title: 'About',
    links: [
      { href: '/about', label: 'About AfroSphere' },
      { href: '/about#mission', label: 'Our Mission' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-stone-950 text-stone-400 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-white font-serif">AfroSphere</span>
              </Link>
              <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
                Discover Africa through its cultures, traditions, food, languages, history, art, music, and people.
              </p>
              <div className="mt-6">
                <p className="text-xs text-stone-500 mb-2">Join our newsletter</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-stone-800 text-white text-sm px-4 py-2 rounded-full border border-stone-700 focus:outline-none focus:border-primary w-full max-w-xs"
                  />
                  <button className="bg-primary text-white text-sm px-4 py-2 rounded-full hover:bg-primary-light transition-colors shrink-0">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-stone-400 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="py-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} AfroSphere. All rights reserved.
          </p>
          <p className="text-xs text-stone-500 flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-primary" /> for African culture
          </p>
        </div>
      </div>
    </footer>
  )
}
