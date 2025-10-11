import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'journalWork',
  title: 'Journal Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),

    defineField({
      name: 'issue',
      title: 'Issue',
      type: 'reference',
      to: [{type: 'journalIssue'}],
      validation: (Rule) => Rule.required(),
      description: 'Reference to the journal issue this work appears in',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Fiction', value: 'Fiction'},
          {title: 'Creative Non-Fiction', value: 'Creative Non-Fiction'},
          {title: 'Photography', value: 'Photography'},
          {title: 'Poetry', value: 'Poetry'},
          {title: 'Art', value: 'Art'},
        ],
        layout: 'dropdown',
      },
    }),

    defineField({
      name: 'content',
      title: 'content',
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
      name: 'theme',
      title: 'Theme',
      type: 'string',
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', title: 'Alt Text', type: 'string'}],
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {name: 'caption', title: 'Caption', type: 'string'},
            {name: 'alt', title: 'Alt Text', type: 'string'},
          ],
        },
      ],
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'author',
      media: 'coverImage',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {title: title || 'Untitled', subtitle: subtitle || '', media}
    },
  },
})
