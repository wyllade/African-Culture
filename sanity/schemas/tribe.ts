export default {
  name: 'tribe',
  title: 'Tribe / Ethnic Group',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'origins', title: 'Origins', type: 'blockContent' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'country', title: 'Country', type: 'reference', to: [{ type: 'country' }] },
    { name: 'language', title: 'Language', type: 'reference', to: [{ type: 'language' }] },
    {
      name: 'clothing',
      title: 'Clothing',
      type: 'object',
      fields: [
        { name: 'description', title: 'Description', type: 'blockContent' },
        { name: 'image', title: 'Image', type: 'image' },
      ],
    },
    { name: 'food', title: 'Food', type: 'array', of: [{ type: 'reference', to: [{ type: 'food' }] }] },
    { name: 'traditions', title: 'Traditions', type: 'blockContent' },
    { name: 'music', title: 'Music', type: 'blockContent' },
    { name: 'stories', title: 'Stories', type: 'blockContent' },
  ],
}
