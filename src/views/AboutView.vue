<template>
  <div class="p-4 sm:p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">About</h1>
      <button @click="$router.push('/')" class="text-blue-500 font-medium">
        Back to Home
      </button>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Music Besties</h2>
      <p class="text-gray-600 mb-4">
        Music Besties is a web application that allows you to rank and organize your favorite music.
        Create personalized rankings of songs, albums, and musical eras to share your music taste with friends.
      </p>
      
      <div class="border-t border-gray-200 pt-4 mt-4">
        <h3 class="font-medium text-gray-700 mb-2">Features</h3>
        <ul class="list-disc pl-5 text-gray-600 space-y-1">
          <li>Rank songs across different musical eras</li>
          <li>Create personalized top lists of your favorite music</li>
          <li>Rate albums and leave reviews</li>
          <li>Track your music preferences over time</li>
          <li>Share your rankings with friends</li>
        </ul>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">How It Works</h2>
      <ol class="list-decimal pl-5 text-gray-600 space-y-2">
        <li>
          <strong>Browse Music:</strong> Explore songs organized by era, album, or artist
        </li>
        <li>
          <strong>Create Rankings:</strong> Drag and drop songs to create your personal rankings
        </li>
        <li>
          <strong>Rate & Review:</strong> Add ratings and comments to share your thoughts
        </li>
        <li>
          <strong>Save & Share:</strong> Your rankings are saved automatically and can be shared
        </li>
      </ol>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Version Information</h2>
      <div class="grid grid-cols-2 gap-2 text-sm">
        <div class="text-gray-500">App Version:</div>
        <div class="text-gray-700">{{ appVersion }}</div>
        
        <div class="text-gray-500">Last Updated:</div>
        <div class="text-gray-700">{{ lastUpdated }}</div>
        
        <div class="text-gray-500">Built with:</div>
        <div class="text-gray-700">Vue.js, Tailwind CSS</div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Development Team</h2>
      <p class="text-gray-600 mb-4">
        Music Besties was created by a team of music enthusiasts and web developers
        passionate about creating tools for music fans to express their preferences.
      </p>
      
      <div class="mt-4">
        <h3 class="font-medium text-gray-700 mb-2">Contact</h3>
        <p class="text-gray-600">
          For questions, feedback, or support, please email us at:
          <a href="mailto:support@musicbesties.example.com" class="text-blue-500">support@musicbesties.example.com</a>
        </p>
      </div>
    </div>

    <p class="text-xs text-gray-400 mt-8 text-center px-4 pb-4">
      This app is unofficial and not affiliated with any music artists or rights management companies.
    </p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'AboutView',
  setup() {
    // App version from package.json
    const appVersion = ref('1.0.0');
    
    // Last updated date (formatted)
    const lastUpdated = ref('May 2025');
    
    // Load version information
    const loadVersionInfo = async () => {
      try {
        // In a real app, you might fetch this from an API or config file
        // For now, we'll use the hardcoded values
      } catch (error) {
        console.error('Failed to load version info:', error);
      }
    };
    
    // Initialize component
    onMounted(() => {
      loadVersionInfo();
    });
    
    return {
      appVersion,
      lastUpdated
    };
  }
};
</script>
