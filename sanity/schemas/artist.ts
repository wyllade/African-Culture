export default {
  name: 'artist',
  title: 'Artist / Artisan',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'bio', title: 'Biography', type: 'blockContent' },
    { name: 'portfolio', title: 'Portfolio Images', type: 'array', of: [{ type: 'image' }] },
    { name: 'category', title: 'Category', type: 'reference', to: [{ type: 'artCategory' }] },
    { name: 'country', title: 'Country', type: 'reference', to: [{ type: 'country' }] },
    { name: 'tribe', title: 'Tribe', type: 'reference', to: [{ type: 'tribe' }] },
  ],
}
