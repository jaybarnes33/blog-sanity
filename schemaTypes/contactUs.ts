import { defineType } from "sanity";

// Contact Form Schema
export const contactSubmission = defineType({
  name: "contactSubmission",
  title: "Contact Submissions",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "subject",
      title: "Subject",
      type: "string",
      options: {
        list: [
          { title: "General Inquiry", value: "general" },
          { title: "Partnership Opportunity", value: "partnership" },
          { title: "Event Collaboration", value: "event" },
          { title: "Submission Question", value: "submission" },
          { title: "Volunteer Interest", value: "volunteer" },
          { title: "Media Inquiry", value: "media" },
          { title: "Other", value: "other" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "In Progress", value: "in_progress" },
          { title: "Resolved", value: "resolved" },
          { title: "Archived", value: "archived" },
        ],
        layout: "radio",
      },
      initialValue: "new",
    },
    {
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "notes",
      title: "Internal Notes",
      type: "text",
      description: "Internal notes for team members",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "subject",
      status: "status",
    },
    prepare({ title, subtitle, status }) {
      return {
        title: title,
        subtitle: `${subtitle} - ${status}`,
      };
    },
  },
});

// Partnership Form Schema
export const partnershipProposal = defineType({
  name: "partnershipProposal",
  title: "Partnership Proposals",
  type: "document",
  fields: [
    {
      name: "organizationName",
      title: "Organization Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "contactPerson",
      title: "Contact Person",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "partnershipType",
      title: "Partnership Type",
      type: "string",
      options: {
        list: [
          { title: "Event Collaboration", value: "event" },
          { title: "Funding/Sponsorship", value: "funding" },
          { title: "Venue Partnership", value: "venue" },
          { title: "Educational Program", value: "educational" },
          { title: "Media Partnership", value: "media" },
          { title: "Cultural Exchange", value: "cultural" },
          { title: "Other", value: "other" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "proposal",
      title: "Partnership Proposal",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "timeline",
      title: "Proposed Timeline",
      type: "string",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Under Review", value: "under_review" },
          { title: "Approved", value: "approved" },
          { title: "In Progress", value: "in_progress" },
          { title: "Completed", value: "completed" },
          { title: "Declined", value: "declined" },
        ],
        layout: "radio",
      },
      initialValue: "new",
    },
    {
      name: "priority",
      title: "Priority",
      type: "string",
      options: {
        list: [
          { title: "Low", value: "low" },
          { title: "Medium", value: "medium" },
          { title: "High", value: "high" },
        ],
        layout: "radio",
      },
      initialValue: "medium",
    },
    {
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "reviewedAt",
      title: "Reviewed At",
      type: "datetime",
    },
    {
      name: "notes",
      title: "Internal Notes",
      type: "text",
      description: "Internal notes and follow-up actions",
    },
    {
      name: "attachments",
      title: "Attachments",
      type: "array",
      of: [
        {
          type: "file",
          title: "Document",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "organizationName",
      subtitle: "partnershipType",
      status: "status",
    },
    prepare({ title, subtitle, status }) {
      return {
        title: title,
        subtitle: `${subtitle} - ${status}`,
      };
    },
  },
});