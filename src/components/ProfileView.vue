<template>
  <div class="p-4 sm:p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Profile</h1>
      <button @click="goBack" class="text-blue-500 font-medium">
        Back to Home
      </button>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <div class="flex items-center mb-6">
        <div class="bg-blue-100 rounded-full p-4 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-gray-800">Music Lover</h2>
          <p class="text-gray-500">Member since May 2025</p>
        </div>
      </div>
      
      <div class="border-t border-gray-200 pt-4">
        <h3 class="font-medium text-gray-700 mb-3">Account Information</h3>
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div class="text-gray-500">Username:</div>
          <div class="text-gray-700">music_lover_123</div>
          
          <div class="text-gray-500">Email:</div>
          <div class="text-gray-700">user@example.com</div>
          
          <div class="text-gray-500">Subscription:</div>
          <div class="text-gray-700">Free Tier</div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Statistics</h2>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="bg-blue-50 p-3 rounded-lg">
          <div class="text-sm text-gray-500">Rankings Created</div>
          <div class="text-2xl font-bold text-blue-600">12</div>
        </div>
        <div class="bg-purple-50 p-3 rounded-lg">
          <div class="text-sm text-gray-500">Reviews Written</div>
          <div class="text-2xl font-bold text-purple-600">8</div>
        </div>
        <div class="bg-green-50 p-3 rounded-lg">
          <div class="text-sm text-gray-500">Songs Ranked</div>
          <div class="text-2xl font-bold text-green-600">47</div>
        </div>
        <div class="bg-amber-50 p-3 rounded-lg">
          <div class="text-sm text-gray-500">Favorite Era</div>
          <div class="text-2xl font-bold text-amber-600">Midnights</div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-4">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Preferences</h2>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-700">Dark Mode</div>
            <div class="text-sm text-gray-500">Use dark theme throughout the app</div>
          </div>
          <div class="relative inline-block w-12 h-6 rounded-full bg-gray-200">
            <div class="absolute left-1 top-1 w-4 h-4 rounded-full bg-white"></div>
          </div>
        </div>
        
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-700">Email Notifications</div>
            <div class="text-sm text-gray-500">Receive updates about new features</div>
          </div>
          <div class="relative inline-block w-12 h-6 rounded-full bg-blue-500">
            <div class="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  props: {
    params: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    function goBack() {
      emit('go-back');
    }
    
    return {
      goBack
    };
  }
};
</script>
