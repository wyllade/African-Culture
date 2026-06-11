export default {
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'writingSystem', title: 'Writing System', type: 'string' },
    {
      name: 'commonPhrases',
      title: 'Common Phrases',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'phrase', title: 'Phrase', type: 'string' },
            { name: 'translation', title: 'Translation', type: 'string' },
            { name: 'audio', title: 'Audio', type: 'file', options: { accept: 'audio/*' } },
          ],
        },
      ],
    },
    { name: 'audioPronunciation', title: 'Audio Pronunciation Guide', type: 'file', options: { accept: 'audio/*' } },
    { name: 'countries', title: 'Countries', type: 'array', of: [{ type: 'reference', to: [{ type: 'country' }] }] },
    { name: 'facts', title: 'Facts', type: 'blockContent' },
  ],
}
