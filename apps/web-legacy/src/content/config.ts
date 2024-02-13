import { z, defineCollection } from 'astro:content'
import { docsSchema } from '@astrojs/starlight/schema'

// Define a `type` and `schema` for each collection
const coursesCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      intro: z.string(),
      partnerName: z.string(),
      partnerUrl: z.string().url(),
      duration: z.string(), // TODO: number
    })
})

// Export a single `collections` object to register your collection(s)
export const collections = {
  courses: coursesCollection,
}
