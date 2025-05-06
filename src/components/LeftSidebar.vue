<template>
  <div 
    v-if="visible" 
    class="fixed inset-0 bg-black bg-opacity-50 z-40"
    @click="$emit('close')"
  >
    <div 
      class="absolute left-0 top-0 bottom-0 w-4/5 max-w-xs bg-white shadow-xl flex flex-col h-full transform transition-transform duration-300"
      :class="visible ? 'translate-x-0' : '-translate-x-full'"
      @click.stop
    >
      <div class="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-800">Navigation</h2>
        <button 
          @click="$emit('close')" 
          class="text-gray-500 p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      
      <!-- Navigation Links -->
      <div class="flex-grow overflow-y-auto">
        <nav class="py-2">
          <router-link 
            to="/" 
            v-slot="{ navigate, isActive }"
          >
            <a 
              @click.prevent="navigate(); $emit('close')" 
              class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
              :class="{ 'bg-blue-50 text-blue-700': isActive }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span class="font-medium">Home</span>
            </a>
          </router-link>
          
          <router-link 
            to="/profile" 
            v-slot="{ navigate, isActive }"
          >
            <a 
              @click.prevent="navigate(); $emit('close')" 
              class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
              :class="{ 'bg-blue-50 text-blue-700': isActive }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="font-medium">Profile</span>
            </a>
          </router-link>
          
          <router-link 
            to="/settings" 
            v-slot="{ navigate, isActive }"
          >
            <a 
              @click.prevent="navigate(); $emit('close')" 
              class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
              :class="{ 'bg-blue-50 text-blue-700': isActive }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="font-medium">Settings</span>
            </a>
          </router-link>
          
          <router-link 
            to="/about" 
            v-slot="{ navigate, isActive }"
          >
            <a 
              @click.prevent="navigate(); $emit('close')" 
              class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
              :class="{ 'bg-blue-50 text-blue-700': isActive }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="font-medium">About</span>
            </a>
          </router-link>
          
          <router-link 
            to="/terms" 
            v-slot="{ navigate, isActive }"
          >
            <a 
              @click.prevent="navigate(); $emit('close')" 
              class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
              :class="{ 'bg-blue-50 text-blue-700': isActive }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span class="font-medium">Terms & Privacy</span>
            </a>
          </router-link>
        </nav>
      </div>
      
      <!-- Footer -->
      <div class="p-4 border-t border-gray-200">
        <p class="text-xs text-gray-500 text-center">
          Music Besties v1.0.0
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftSidebar',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close']
}
</script>
