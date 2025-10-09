import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import CustomLogoIcon from './customize/Customlogo'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

export default defineConfig({
  name: 'default',
  title: 'Creatives GH',

  icon: CustomLogoIcon,
  projectId: 'v0hw1f8e',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    // 👇 apply a light theme
    theme: {
      color: {
        light: {
          default: {
            base: { fg: '#111111', bg: '#ffffff' }, // text & background
            primary: { base: '#111111' },           // main brand color
            critical: { base: '#d32f2f' },          // errors
            caution: { base: '#ed6c02' },           // warnings
            positive: { base: '#2e7d32' },          // success
            info: { base: '#0288d1' }               // info states
          },
        },
      },
    },
    components: {
      // you can still override navbar/logo here if you like
    },
  },
})
