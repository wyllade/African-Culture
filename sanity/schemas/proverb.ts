export default {
  name: 'proverb',
  title: 'Proverb',
  type: 'document',
  fields: [
    { name: 'text', title: 'Proverb', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'meaning', title: 'Meaning', type: 'text' },
    { name: 'category', title: 'Categories', type: 'array', of: [{ type: 'string' }] },
    { name: 'country', title: 'Country', type: 'reference', to: [{ type: 'country' }] },
    { name: 'tribe', title: 'Tribe', type: 'reference', to: [{ type: 'tribe' }] },
  ],
}
