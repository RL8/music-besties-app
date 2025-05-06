// Import feature flags first
import './vue-feature-flags'

// Then import Vue and other dependencies
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
