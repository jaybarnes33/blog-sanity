import {defineType, defineField} from 'sanity'

export const awards = defineType({
  name: 'awards',
  title: 'Awards',
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
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(10),
    }),
    defineField({
      name: 'submissionURL',
      title: 'Submission URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Current', value: 'current'},
          {title: 'Upcoming', value: 'upcoming'},
          {title: 'Past', value: 'past'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'deadline',
      title: 'Deadline',
      type: 'date',
    }),

    defineField({
      name: 'general_info',
      title: 'General Information',
      type: 'reference',
      to: [{type: 'blog'}],
      validation: (Rule) => Rule.required(),
      description: 'Reference to the post with general information about the award',
    }),
    defineField({
      name: 'winnersAnnouncement',
      title: 'Winners Announcement',
      type: 'reference',
      to: [{type: 'blog'}],
      validation: (Rule) => Rule.required(),
      description: 'Reference to the post with winners announcement about the award',
    }),
    defineField({
      name: 'shortlistAnnouncement',
      title: 'Shortlist Announcement',
      type: 'reference',
      to: [{type: 'blog'}],
      description: 'Reference to the post with the shortlisted works',
    }),
    defineField({
      name: 'shortlistBios',
      title: 'Shortlist Bios',
      type: 'reference',
      to: [{type: 'blog'}],
      description: 'Reference to the post with the bios of the authors of shortlisted works',
    }),
    defineField({
      name: 'longListAnnouncement',
      title: 'Longlist Announcement',
      type: 'reference',
      to: [{type: 'blog'}],
      description: 'Reference to the post with the long listed works',
    }),
  ],
})
