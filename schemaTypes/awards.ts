import { defineType, defineField } from "sanity";

export const awards = defineType({
  name: "awards",
  title: "Awards",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().min(10),
    }),
    defineField({
      name: "recipient",
      title: "Recipient",
      type: "string",
    }),
    defineField({
      name: "work",
      title: "Work",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Current", value: "current" },
          { title: "Upcoming", value: "upcoming" },
          { title: "Past", value: "past" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "deadline",
      title: "Deadline",
      type: "date",
    }),
    defineField({
      name: "prize",
      title: "Prize",
      type: "string",
    }),
    defineField({
      name: "eligibility",
      title: "Eligibility",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "applicationProcess",
      title: "Application Process",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "judges",
      title: "Judges",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "shortlist",
      title: "Shortlist",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "winner",
      title: "Winner",
      type: "string",
    }),
    defineField({
      name: "applicationLink",
      title: "Application Link",
      type: "url",
    }),
    defineField({
      name: "guidelines",
      title: "Guidelines",
      type: "url",
    }),
  ],
});
