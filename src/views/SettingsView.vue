<template>
  <div class="p-4 sm:p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Settings</h1>
      <button @click="$router.push('/')" class="text-blue-500 font-medium">
        Back to Home
      </button>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Appearance</h2>
      
      <div class="mb-6">
        <label class="flex items-center justify-between cursor-pointer">
          <span class="text-gray-700">Dark Mode</span>
          <div 
            class="relative w-12 h-6 transition-colors duration-200 ease-in-out rounded-full"
            :class="settings.darkMode ? 'bg-blue-500' : 'bg-gray-300'"
            @click="toggleSetting('darkMode')"
          >
            <div 
              class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out shadow-md"
              :class="settings.darkMode ? 'translate-x-6' : 'translate-x-0'"
            ></div>
          </div>
        </label>
        <p class="text-xs text-gray-500 mt-1">Switch between light and dark theme</p>
      </div>
      
      <div class="mb-6">
        <label class="block text-gray-700 mb-2">Text Size</label>
        <div class="flex items-center space-x-2">
          <span class="text-sm">A</span>
          <input 
            type="range" 
            min="1" 
            max="3" 
            v-model="settings.textSize" 
            class="w-full"
            @change="saveSettings"
          >
          <span class="text-lg">A</span>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Notifications</h2>
      
      <div class="mb-4">
        <label class="flex items-center justify-between cursor-pointer">
          <span class="text-gray-700">Email Notifications</span>
          <div 
            class="relative w-12 h-6 transition-colors duration-200 ease-in-out rounded-full"
            :class="settings.emailNotifications ? 'bg-blue-500' : 'bg-gray-300'"
            @click="toggleSetting('emailNotifications')"
          >
            <div 
              class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out shadow-md"
              :class="settings.emailNotifications ? 'translate-x-6' : 'translate-x-0'"
            ></div>
          </div>
        </label>
      </div>
      
      <div class="mb-4">
        <label class="flex items-center justify-between cursor-pointer">
          <span class="text-gray-700">Push Notifications</span>
          <div 
            class="relative w-12 h-6 transition-colors duration-200 ease-in-out rounded-full"
            :class="settings.pushNotifications ? 'bg-blue-500' : 'bg-gray-300'"
            @click="toggleSetting('pushNotifications')"
          >
            <div 
              class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out shadow-md"
              :class="settings.pushNotifications ? 'translate-x-6' : 'translate-x-0'"
            ></div>
          </div>
        </label>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Privacy</h2>
      
      <div class="mb-4">
        <label class="flex items-center justify-between cursor-pointer">
          <span class="text-gray-700">Share My Rankings</span>
          <div 
            class="relative w-12 h-6 transition-colors duration-200 ease-in-out rounded-full"
            :class="settings.shareRankings ? 'bg-blue-500' : 'bg-gray-300'"
            @click="toggleSetting('shareRankings')"
          >
            <div 
              class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out shadow-md"
              :class="settings.shareRankings ? 'translate-x-6' : 'translate-x-0'"
            ></div>
          </div>
        </label>
        <p class="text-xs text-gray-500 mt-1">Allow others to see your rankings</p>
      </div>
      
      <div class="mb-4">
        <label class="flex items-center justify-between cursor-pointer">
          <span class="text-gray-700">Analytics Cookies</span>
          <div 
            class="relative w-12 h-6 transition-colors duration-200 ease-in-out rounded-full"
            :class="settings.analyticsCookies ? 'bg-blue-500' : 'bg-gray-300'"
            @click="toggleSetting('analyticsCookies')"
          >
            <div 
              class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out shadow-md"
              :class="settings.analyticsCookies ? 'translate-x-6' : 'translate-x-0'"
            ></div>
          </div>
        </label>
        <p class="text-xs text-gray-500 mt-1">Allow us to collect anonymous usage data</p>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Data Management</h2>
      
      <div class="mb-4">
        <button 
          @click="exportData" 
          class="w-full bg-blue-500 text-white py-2 rounded-md mb-2"
        >
          Export My Data
        </button>
        <p class="text-xs text-gray-500">Download all your rankings and settings</p>
      </div>
      
      <div class="mb-4">
        <button 
          @click="confirmReset = true" 
          class="w-full bg-red-500 text-white py-2 rounded-md mb-2"
        >
          Reset All Data
        </button>
        <p class="text-xs text-gray-500">Delete all your rankings and start fresh</p>
      </div>
    </div>

    <!-- Reset Confirmation Modal -->
    <div v-if="confirmReset" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div class="p-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-red-600">Confirm Reset</h3>
        </div>
        <div class="p-4">
          <p class="text-gray-700 mb-4">Are you sure you want to reset all your data? This action cannot be undone.</p>
          <div class="flex justify-end space-x-3">
            <button 
              @click="confirmReset = false" 
              class="px-4 py-2 text-gray-700 border border-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button 
              @click="resetAllData" 
              class="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Reset All Data
            </button>
          </div>
        </div>
      </div>
    </div>

    <p class="text-xs text-gray-400 mt-8 text-center px-4 pb-4">
      This app is unofficial and not affiliated with any music artists or rights management companies.
    </p>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';

export default {
  name: 'SettingsView',
  setup() {
    const SETTINGS_STORAGE_KEY = 'music-besties-settings';
    const confirmReset = ref(false);
    
    // Default settings
    const defaultSettings = {
      darkMode: false,
      textSize: 2,
      emailNotifications: true,
      pushNotifications: true,
      shareRankings: false,
      analyticsCookies: true
    };
    
    // Settings data
    const settings = reactive({...defaultSettings});
    
    // Load settings from localStorage
    const loadSettings = () => {
      try {
        const savedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);
        if (savedSettings) {
          const parsedSettings = JSON.parse(savedSettings);
          Object.assign(settings, parsedSettings);
        }
      } catch (error) {
        console.error('Failed to load settings:', error);
      }
    };
    
    // Save settings to localStorage
    const saveSettings = () => {
      try {
        localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
      } catch (error) {
        console.error('Failed to save settings:', error);
        alert('Error saving settings!');
      }
    };
    
    // Toggle a boolean setting
    const toggleSetting = (key) => {
      if (key in settings && typeof settings[key] === 'boolean') {
        settings[key] = !settings[key];
        saveSettings();
      }
    };
    
    // Export user data
    const exportData = () => {
      try {
        // Collect all data from localStorage
        const userData = {
          profile: JSON.parse(localStorage.getItem('music-besties-profile') || '{}'),
          rankings: JSON.parse(localStorage.getItem('music-besties-rankings') || '{}'),
          settings: JSON.parse(localStorage.getItem(SETTINGS_STORAGE_KEY) || '{}')
        };
        
        // Create a download link
        const dataStr = JSON.stringify(userData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `music-besties-data-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        
        // Clean up
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 100);
      } catch (error) {
        console.error('Failed to export data:', error);
        alert('Error exporting data!');
      }
    };
    
    // Reset all data
    const resetAllData = () => {
      try {
        localStorage.removeItem('music-besties-rankings');
        localStorage.removeItem('music-besties-profile');
        localStorage.removeItem(SETTINGS_STORAGE_KEY);
        
        // Reset settings to defaults
        Object.assign(settings, defaultSettings);
        
        confirmReset.value = false;
        alert('All data has been reset successfully.');
      } catch (error) {
        console.error('Failed to reset data:', error);
        alert('Error resetting data!');
      }
    };
    
    // Initialize component
    onMounted(() => {
      loadSettings();
    });
    
    return {
      settings,
      confirmReset,
      toggleSetting,
      saveSettings,
      exportData,
      resetAllData
    };
  }
};
</script>
