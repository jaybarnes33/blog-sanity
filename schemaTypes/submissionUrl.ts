import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'submissions',
  title: 'Submission Status',
  type: 'document',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
    }),

    defineField({
      name: 'callPost',
      title: 'Call for Submissions post',
      type: 'reference',
      to: [{type: 'blog'}],
      validation: (Rule) => Rule.required(),
      description: 'Reference to the post with explanation of the theme',
    }),
    defineField({
      name: 'isClosed',
      title: 'Are submissions closed?',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
