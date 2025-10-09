import { defineType, defineField } from "sanity";

export default defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "comment",
      title: "Comment",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "post",
      title: "Post",
      type: "reference",
      to: [{ type: "blog" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "approved",
      title: "Approved",
      type: "boolean",
      description: "Set to true once the comment is moderated",
      initialValue: false,
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
