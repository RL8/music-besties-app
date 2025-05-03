// Define Vue feature flags for better tree-shaking
import { createApp } from 'vue'

// This ensures Vue knows which features to include in the bundle
if (process.env.NODE_ENV === 'production') {
  // Production settings
  window.__VUE_OPTIONS_API__ = true
  window.__VUE_PROD_DEVTOOLS__ = false
  window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false
} else {
  // Development settings
  window.__VUE_OPTIONS_API__ = true
  window.__VUE_PROD_DEVTOOLS__ = true
  window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true
}
