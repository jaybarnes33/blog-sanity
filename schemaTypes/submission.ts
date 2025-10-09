import { defineType } from "sanity";

export default defineType({
  name: "submission",
  title: "Submission",
  type: "document",
  fields: [
    { 
      name: "firstName", 
      title: "First Name", 
      type: "string", 
      validation: (Rule) => Rule.required() 
    },
    { 
      name: "lastName", 
      title: "Last Name", 
      type: "string", 
      validation: (Rule) => Rule.required() 
    },
    { 
      name: "email", 
      title: "Email", 
      type: "string", 
      validation: (Rule) => Rule.required().email() 
    },
    { 
      name: "phone", 
      title: "Phone Number", 
      type: "string",
      validation: (Rule) => Rule.regex(/^[+]?[\d\s()-]+$/).error('Invalid phone number format')
    },
    { 
      name: "location", 
      title: "Location", 
      type: "string" 
    },

    { 
      name: "category", 
      title: "Content Type", 
      type: "string", 
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Poetry", value: "poetry" },
          { title: "Prose/Fiction", value: "prose" },
          { title: "Non-Fiction", value: "non-fiction" },
          { title: "Photography", value: "photography" },
          { title: "Visual Art", value: "visual-art" }
        ]
      }
    },
    { 
      name: "language", 
      title: "Language", 
      type: "string",
      options: {
        list: [
          { title: "English", value: "english" },
          { title: "Twi", value: "twi" },
          { title: "Ga", value: "ga" },
          { title: "Ewe", value: "ewe" },
          { title: "Dagbani", value: "dagbani" },
          { title: "Other", value: "other" }
        ]
      }
    },
    { 
      name: "title", 
      title: "Title of Work", 
      type: "string", 
      validation: (Rule) => Rule.required().min(3).max(200) 
    },
    { 
      name: "content", 
      title: "Content", 
      type: "text", 
      validation: (Rule) => Rule.required().min(10).max(15000)
    },
    { 
      name: "statement", 
      title: "Artist Statement", 
      type: "text", 
      validation: (Rule) => Rule.required().min(100).max(1000).warning('Statement should be 100-200 words')
    },
    
    // Image uploads field
    { 
      name: "images", 
      title: "Images", 
      type: "array", 
      of: [
        { 
          type: "image",
          options: {
            hotspot: true, // Enables image cropping
          },
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
              description: "Optional caption for the image"
            },
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Alternative text for accessibility",
              validation: (Rule) => Rule.required()
            }
          ]
        }
      ],
      validation: (Rule) => Rule.max(5).warning('Maximum 5 images allowed'),
      description: "Upload up to 5 images. Recommended minimum resolution: 1920x1080"
    },
    
    // Document/file uploads field
    { 
      name: "files", 
      title: "Document Files", 
      type: "array", 
      of: [
        { 
          type: "file",
          options: {
            accept: '.pdf,.doc,.docx,.txt'
          }
        }
      ],
      validation: (Rule) => Rule.max(3).warning('Maximum 3 files allowed'),
      description: "Upload supporting documents (PDF, DOC, DOCX, TXT)"
    },

    { 
      name: "original", 
      title: "Original Work", 
      type: "boolean",
      validation: (Rule) => Rule.required().custom((value) => {
        return value === true || "You must confirm this is original work";
      })
    },
    { 
      name: "terms", 
      title: "Agreement to Terms", 
      type: "boolean",
      validation: (Rule) => Rule.required().custom((value) => {
        return value === true || "You must agree to the terms";
      })
    },
    { 
      name: "updates", 
      title: "Subscribe to Updates", 
      type: "boolean" 
    },

    { 
      name: "status",
      title: "Submission Status",
      type: "string",
      options: {
        list: [
          { title: "Pending Review", value: "pending" },
          { title: "Under Review", value: "reviewing" },
          { title: "Accepted", value: "accepted" },
          { title: "Rejected", value: "rejected" }
        ]
      },
      initialValue: "pending",
      readOnly: true
    },

    { 
      name: "submittedAt", 
      title: "Submitted At", 
      type: "datetime", 
      readOnly: true,
      initialValue: (new Date()).toISOString()
    },
  ],
  preview: {
    select: { 
      title: "title", 
      subtitle: "firstName",
      media: "images.0", 
      category: "category"
    },
    prepare({ title, subtitle, media, category }) {
      return {
        title: title || "Untitled",
        subtitle: `${subtitle} - ${category || "Unknown"}`,
        media: media
      };
    }
  },
});