import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Weave Learning Center',

  projectId: process.env.SANITY_STUDIO_PROJECTID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
