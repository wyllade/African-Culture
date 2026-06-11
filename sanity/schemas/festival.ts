export default {
  name: 'festival',
  title: 'Festival',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'date', title: 'Date / Time', type: 'string' },
    { name: 'history', title: 'History', type: 'blockContent' },
    { name: 'traditions', title: 'Traditions', type: 'blockContent' },
    { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] },
    { name: 'videos', title: 'Videos', type: 'array', of: [{ type: 'url' }] },
    { name: 'country', title: 'Country', type: 'reference', to: [{ type: 'country' }] },
    { name: 'tribes', title: 'Associated Tribes', type: 'array', of: [{ type: 'reference', to: [{ type: 'tribe' }] }] },
  ],
}
