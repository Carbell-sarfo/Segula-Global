import { defineCollection, z } from "astro:content";

const showcase = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: image(),
      url: z.string().url(),
      featured: z.number().min(1).optional(),
    }),
});


// Collection for Careers
const careersCollection = defineCollection({
  type: "content",
  schema: ({image}) => z.object ({
    title: z.string(),
    workTime: z.string(),
    jobCategory: z.string(),
    location: z.string(),
    author: z.string(),
    pubDate: z.date()
  })
})

export const collections = {
  showcase,
  careers: careersCollection
};
