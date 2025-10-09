export default {
  name: "communityResource",
  title: "Community Resources",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "contributor", title: "Contributor", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "type", title: "Type", type: "string" }, 
    { name: "date", title: "Date", type: "date" },
  ],
}
