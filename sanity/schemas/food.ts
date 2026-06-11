export default {
  name: 'food',
  title: 'Food',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'ingredients', title: 'Ingredients', type: 'array', of: [{ type: 'string' }] },
    { name: 'history', title: 'History', type: 'text' },
    { name: 'recipe', title: 'Recipe', type: 'blockContent' },
    { name: 'culturalSignificance', title: 'Cultural Significance', type: 'text' },
    { name: 'country', title: 'Country', type: 'reference', to: [{ type: 'country' }] },
    {
      name: 'region',
      title: 'Region',
      type: 'string',
      options: {
        list: [
          { title: 'East Africa', value: 'east' },
          { title: 'West Africa', value: 'west' },
          { title: 'North Africa', value: 'north' },
          { title: 'Central Africa', value: 'central' },
          { title: 'Southern Africa', value: 'south' },
        ],
      },
    },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
  ],
}
