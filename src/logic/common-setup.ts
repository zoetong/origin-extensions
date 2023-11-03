import type { App } from 'vue'

import { setupStore } from '@/store'
import { setupAssets } from '@/plugins'
import { setupI18n } from '@/locales'

export function setupApp(app: App) {
  // import assets: js、css
  setupAssets()
  // store plugin: pinia
  setupStore(app)

  setupI18n(app)

  app.mount('#app')
}
