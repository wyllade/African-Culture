import Link from 'next/link'
import { Globe } from 'lucide-react'

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
    <footer className="border-t border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">AfroSphere</span>
            </Link>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Discover Africa through its cultures, traditions, food, languages, history, art, music, and people.
            </p>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-500 hover:text-primary dark:text-stone-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} AfroSphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
