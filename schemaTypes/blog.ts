import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // 👇 Slug field added here
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // auto-generates from title
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
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

    defineField({name: 'author', title: 'Author', type: 'string'}),
    defineField({name: 'authorRole', title: 'Author Role', type: 'string'}),
    defineField({name: 'publishDate', title: 'Publish Date', type: 'date'}),
    defineField({name: 'readTime', title: 'Read Time', type: 'string'}),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Editorial', value: 'Editorial'},
          {title: 'Writing', value: 'Writing'},
          {title: 'Photography', value: 'Photography'},
          {title: 'Business', value: 'Business'},
          {title: 'Poetry', value: 'Poetry'},
          {title: 'Community', value: 'Community'},
          {title: 'Reviews', value: 'Reviews'},
          {title: 'Opinions', value: 'Opinions'},
          {title: 'Creative News', value: 'Creative News'},
          {title: 'Entertainment', value: 'Entertainment'},
          {title: 'Art', value: 'Art'},
          {title: 'Prose', value: 'Prose'},
        ],
        layout: 'dropdown',
      },
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({name: 'featured', title: 'Featured', type: 'boolean'}),

    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'views',
      title: 'Views',
      type: 'number',
      initialValue: 0,
      readOnly: true,
      description: 'Total number of views (auto-updated)',
    }),

    defineField({
      name: 'likes',
      title: 'Likes',
      type: 'number',
      initialValue: 0,
      readOnly: true,
      description: 'Total number of likes (auto-updated)',
    }),
  ],
})
