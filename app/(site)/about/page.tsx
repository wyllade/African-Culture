import { Card, CardContent } from '@/components/ui/Card'
import { BookOpen, Users, Sparkles } from '@/lib/icon'
import { Logo } from '@/components/ui/Logo'

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">About AfroSphere</h1>
        <p className="mt-2 text-stone-500">Discover Africa through its cultures, traditions, and people</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Logo className="h-8 w-8 mt-1 text-primary" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                <p className="leading-relaxed text-stone-600 dark:text-stone-400">
                  AfroSphere is a cultural discovery platform dedicated to showcasing the rich and diverse
                  heritage of Africa. We believe Africa&apos;s story is best told through its cultures,
                  traditions, food, languages, art, and people — not through politics or stereotypes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <BookOpen className="h-6 w-6 text-secondary mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">What We Cover</h2>
                <ul className="space-y-2 text-stone-600 dark:text-stone-400">
                  <li>&bull; All 54 African countries with detailed cultural profiles</li>
                  <li>&bull; 500+ traditional foods with recipes and cultural significance</li>
                  <li>&bull; 500+ ethnic groups and tribes with their unique traditions</li>
                  <li>&bull; 300+ African languages with common phrases and pronunciation</li>
                  <li>&bull; 300+ festivals and ceremonies across the continent</li>
                  <li>&bull; 1000+ proverbs with meanings and cultural context</li>
                  <li>&bull; African art, fashion, music, and dance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Users className="h-6 w-6 text-accent-dark mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">For Whom</h2>
                <p className="leading-relaxed text-stone-600 dark:text-stone-400">
                  AfroSphere is for travelers planning their next adventure, students researching
                  African cultures, food enthusiasts exploring new cuisines, and anyone curious
                  about the richness of Africa&apos;s heritage.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Sparkles className="h-6 w-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">The Culture Explorer</h2>
                <p className="leading-relaxed text-stone-600 dark:text-stone-400">
                  Our signature feature lets you connect countries, tribes, foods, languages, and
                  festivals to build a complete cultural profile. It is the most immersive way to
                  discover the interconnected beauty of African cultures.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
