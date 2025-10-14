import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'volunteers',
  title: 'Volunteers',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),

    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'string',
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
