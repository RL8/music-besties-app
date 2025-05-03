// Import feature flags first
import './vue-feature-flags'

// Then import Vue and other dependencies
import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'

createApp(App).mount('#app')
