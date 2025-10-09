export default {
  name: "tool",
  title: "Tools",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (Rule: { required: () => any; }) => Rule.required() },
    { name: "description", title: "Description", type: "text" },
    { name: "category", title: "Category", type: "string" },
    { name: "type", title: "Type", type: "string" }, 
    { name: "icon", title: "Icon", type: "image" },  
    { name: "link", title: "Link", type: "url" },
  ],
}
