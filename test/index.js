import { createApp } from 'vue'
import App from './App.vue'

import photoSwipe from 'kuan-vue-photoswipe'

const app = createApp(App)
app.use(photoSwipe)
app.mount('#app')
