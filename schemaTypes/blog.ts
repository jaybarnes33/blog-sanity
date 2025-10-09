import { defineType } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "authorRole",
      title: "Author Role",
      type: "string",
    },
    {
      name: "publishDate",
      title: "Publish Date",
      type: "date",
    },
    {
      name: "readTime",
      title: "Read Time",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Editorial", value: "Editorial" },
          { title: "Writing", value: "Writing" },
          { title: "Photography", value: "Photography" },
          { title: "Business", value: "Business" },
          { title: "Poetry", value: "Poetry" },
          { title: "Community", value: "Community" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
    },
    {
      name: "image",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
      readOnly: true,
      description: "Total number of views (auto-updated)",
    },
    {
      name: "likes",
      title: "Likes",
      type: "number",
      initialValue: 0,
      readOnly: true,
      description: "Total number of likes (auto-updated)",
    }
  ],
});