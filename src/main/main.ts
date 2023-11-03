import { createApp } from 'vue'
import App from './Main.vue'
import { setupApp } from '@/logic/common-setup'

const app = createApp(App)
setupApp(app)
