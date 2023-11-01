import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from '@/locales/lang'
import { localStg } from '@/utils'

import { setupStore } from '@/store'
import '../styles'

const i18n = createI18n({
  locale: localStg.get('lang') || 'zh-CN',
  fallbackLocale: 'en',
  messages,
  legacy: false,
})

export function setupApp(app: App) {
  setupStore(app)
  // Inject a globally available `$app` object in template
  app.config.globalProperties.$app = {
    name: 'origin-extensions',
    context: '123',
  }

  // Provide access to `app` in script setup with `const app = inject('app')`
  app.provide('app', app.config.globalProperties.$app)

  // Here you can install additional plugins for all contexts: popup, options page and content-script.
  app.use(i18n)
  // example excluding content-script context: if (context !== 'content-script') app.use(i18n)
}
