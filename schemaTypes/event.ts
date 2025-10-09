import { defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "time",
      title: "Time",
      type: "string",
      placeholder: "e.g. 7:00 PM - 10:00 PM",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Poetry", value: "Poetry" },
          { title: "Workshop", value: "Workshop" },
          { title: "Writing", value: "Writing" },
          { title: "Photography", value: "Photography" },
          { title: "Art Exhibition", value: "Art Exhibition" },
          { title: "Music", value: "Music" },
          { title: "Community Gathering", value: "Community Gathering" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "spots",
      title: "Spots Available",
      type: "string",
      placeholder: "e.g. 25 spots available",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
      placeholder: "e.g. Free, GHS 50, $20",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featured",
      title: "Featured Event",
      type: "boolean",
      description: "Mark this event as featured to highlight it",
    },
    {
      name: "attendees",
      title: "Number of Attendees",
      type: "number",
      description: "For past events - how many people attended",
    },
    {
      name: "images",
      title: "Event Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      description: "Upload photos from the event (mainly for past events)",
    },
    {
      name: "registrationLink",
      title: "Registration Link",
      type: "url",
      description: "Link where people can register for the event",
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      location: "location",
      media: "images.0",
    },
    prepare(selection) {
      const { title, date, location, media } = selection;
      const formattedDate = new Date(date).toLocaleDateString();
      return {
        title,
        subtitle: `${formattedDate} at ${location}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Date (newest first)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Date (oldest first)",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
});