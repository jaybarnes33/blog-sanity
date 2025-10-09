export default {
  name: "fundingOpportunity",
  title: "Funding Opportunities",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: { required: () => any; }) => Rule.required() },
    { name: "description", title: "Description", type: "text" },
    { name: "amount", title: "Funding Amount", type: "string" },
    { name: "deadline", title: "Deadline", type: "string" }, // can use type: "date" if you want
    { name: "category", title: "Category", type: "string" },
    { name: "eligibility", title: "Eligibility", type: "string" },
    { name: "link", title: "Application Link", type: "url" },
  ],
}
