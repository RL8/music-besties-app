import { createRouter, createWebHashHistory } from 'vue-router';

// Define routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../App.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    meta: {
      title: 'User Profile'
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/SettingsView.vue'),
    meta: {
      title: 'Application Settings'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About Music Besties'
    }
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/TermsPrivacyView.vue'),
    meta: {
      title: 'Terms & Privacy'
    }
  }
];

// Create router instance
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// Update document title based on route meta
router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | Music Besties` : 'Music Besties';
});

export default router;
