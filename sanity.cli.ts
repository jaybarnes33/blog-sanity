import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'v0hw1f8e',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
     appId: 'ri8dd1chx9pvq3fncuftooav',
    autoUpdates: true,
  }
})
