import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'journalIssue',
  title: 'Journal Issue',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Issue Title',
      type: 'string',
      placeholder: 'e.g. Urban Voices',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [{title: 'URL', name: 'href', type: 'url'}],
              },
            ],
          },
        },
        {type: 'image', options: {hotspot: true}},
      ],
    }),

    defineField({
      name: 'issueNumber',
      title: 'Issue Number',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'month',
      title: 'Month',
      type: 'string',
      options: {
        list: [
          {title: 'January', value: 'January'},
          {title: 'February', value: 'February'},
          {title: 'March', value: 'March'},
          {title: 'April', value: 'April'},
          {title: 'May', value: 'May'},
          {title: 'June', value: 'June'},
          {title: 'July', value: 'July'},
          {title: 'August', value: 'August'},
          {title: 'September', value: 'September'},
          {title: 'October', value: 'October'},
          {title: 'November', value: 'November'},
          {title: 'December', value: 'December'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2020).max(2030),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `issue-${doc.issueNumber}-${doc.title || doc.month + '-' + doc.year}`,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Issue Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),

    defineField({
      name: 'featured',
      title: 'Featured Issue',
      type: 'boolean',
      description: 'Mark this issue as featured',
    }),

    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      description: 'Set to published when ready to show publicly',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      issueNumber: 'issueNumber',
      month: 'month',
      year: 'year',
      media: 'coverImage',
      published: 'published',
    },
    prepare(selection) {
      const {title, issueNumber, month, year, media, published} = selection
      return {
        title: `Issue ${issueNumber} - ${title}`,
        subtitle: `${month} ${year} ${published ? '' : '(Draft)'}`,
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Issue Number (newest first)',
      name: 'issueNumberDesc',
      by: [{field: 'issueNumber', direction: 'desc'}],
    },
    {
      title: 'Issue Number (oldest first)',
      name: 'issueNumberAsc',
      by: [{field: 'issueNumber', direction: 'asc'}],
    },
    {
      title: 'Publish Date (newest first)',
      name: 'publishDateDesc',
      by: [{field: 'publishDate', direction: 'desc'}],
    },
  ],
})
