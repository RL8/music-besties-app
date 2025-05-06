<template>
  <div class="p-4 sm:p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Settings</h1>
      <button @click="goBack" class="text-blue-500 font-medium">
        Back to Home
      </button>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Account Settings</h2>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input type="text" value="music_lover_123" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" value="user@example.com" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" value="••••••••" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        
        <button class="mt-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Save Changes
        </button>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Appearance</h2>
      
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
            <div class="font-medium text-gray-700">High Contrast</div>
            <div class="text-sm text-gray-500">Increase contrast for better readability</div>
          </div>
          <div class="relative inline-block w-12 h-6 rounded-full bg-gray-200">
            <div class="absolute left-1 top-1 w-4 h-4 rounded-full bg-white"></div>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Text Size</label>
          <select class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option>Small</option>
            <option selected>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
          </select>
        </div>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Notifications</h2>
      
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-700">Email Notifications</div>
            <div class="text-sm text-gray-500">Receive updates about new features</div>
          </div>
          <div class="relative inline-block w-12 h-6 rounded-full bg-blue-500">
            <div class="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></div>
          </div>
        </div>
        
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-700">New Rankings</div>
            <div class="text-sm text-gray-500">Get notified about new ranking templates</div>
          </div>
          <div class="relative inline-block w-12 h-6 rounded-full bg-blue-500">
            <div class="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow p-4">
      <h2 class="text-lg font-semibold text-red-600 mb-4">Danger Zone</h2>
      
      <div class="space-y-4">
        <div>
          <div class="font-medium text-gray-700 mb-1">Clear All Data</div>
          <div class="text-sm text-gray-500 mb-2">This will remove all your rankings and preferences</div>
          <button class="px-4 py-2 bg-red-100 text-red-600 font-medium rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Clear Data
          </button>
        </div>
        
        <div class="pt-2 border-t border-gray-200">
          <div class="font-medium text-gray-700 mb-1">Delete Account</div>
          <div class="text-sm text-gray-500 mb-2">Once deleted, your account cannot be recovered</div>
          <button class="px-4 py-2 bg-red-500 text-white font-medium rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsView',
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
