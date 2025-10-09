export default {
  name: "learningResource",
  title: "Learning Resources",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "provider", title: "Provider", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "type", title: "Type", type: "string" }, 
    { name: "duration", title: "Duration", type: "string" },
    { name: "cost", title: "Cost", type: "string" },
  ],
}
