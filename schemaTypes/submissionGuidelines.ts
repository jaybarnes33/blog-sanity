import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'submissionGuidelines',
  title: 'Submission Guidelines',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Submission Guidelines',
    }),
    defineField({
      name: 'introText',
      title: 'Introduction Text',
      type: 'text',
      rows: 2,
      description: 'Brief introduction before guidelines',
      initialValue: 'Please review these guidelines before submitting your work',
    }),
    defineField({
      name: 'submissionFormLink',
      title: 'Submission Form Link',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
        }),
      description: 'Link to the submission form (e.g., Google Forms, Typeform)',
    }),
    defineField({
      name: 'contentTypes',
      title: 'Content Types',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'requirements',
              title: 'Requirements',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'type',
              subtitle: 'requirements',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'currentTheme',
      title: 'Current Theme',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Theme Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Theme Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'deadline',
          title: 'Submission Deadline',
          type: 'date',
          validation: (Rule) => Rule.required(),
          options: {
            dateFormat: 'MMMM DD, YYYY',
          },
        },
      ],
    }),
    defineField({
      name: 'generalRequirements',
      title: 'General Requirements',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
      description: 'List of general submission requirements',
    }),
    defineField({
      name: 'additionalNotes',
      title: 'Additional Notes',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H3', value: 'h3'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
        },
      ],
      description: 'Optional additional information or notes',
    }),
    defineField({
      name: 'isActive',
      title: 'Submissions Open',
      type: 'boolean',
      description: 'Toggle to open/close submissions',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      theme: 'currentTheme.title',
    },
    prepare({title, theme}) {
      return {
        title: title || 'Submission Guidelines',
        subtitle: theme ? `Theme: ${theme}` : 'No theme set',
      }
    },
  },
})
