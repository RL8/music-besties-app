<template>
  <div class="p-4 sm:p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">My Profile</h1>
      <button @click="$router.push('/')" class="text-blue-500 font-medium">
        Back to Home
      </button>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
        <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
          <img v-if="profile.avatar" :src="profile.avatar" alt="Profile picture" class="w-full h-full object-cover" />
          <span v-else class="text-4xl text-gray-400">👤</span>
        </div>
        <div class="flex-1">
          <h2 class="text-xl font-semibold text-gray-800 mb-1">{{ profile.name || 'Your Name' }}</h2>
          <p class="text-gray-500 mb-3">{{ profile.bio || 'Add a short bio to tell people about yourself' }}</p>
          <button @click="isEditing = true" class="text-sm bg-blue-500 text-white px-3 py-1 rounded-md">
            Edit Profile
          </button>
        </div>
      </div>

      <div class="border-t border-gray-200 pt-4">
        <h3 class="font-medium text-gray-700 mb-3">Stats</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div class="bg-gray-50 p-3 rounded-md">
            <div class="text-2xl font-bold text-blue-500">{{ totalRankings }}</div>
            <div class="text-sm text-gray-500">Rankings</div>
          </div>
          <div class="bg-gray-50 p-3 rounded-md">
            <div class="text-2xl font-bold text-green-500">{{ totalReviews }}</div>
            <div class="text-sm text-gray-500">Reviews</div>
          </div>
          <div class="bg-gray-50 p-3 rounded-md">
            <div class="text-2xl font-bold text-purple-500">{{ joinDate }}</div>
            <div class="text-sm text-gray-500">Joined</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Profile Modal -->
    <div v-if="isEditing" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div class="p-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold">Edit Profile</h3>
        </div>
        <div class="p-4">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              v-model="editForm.name" 
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Your name"
            >
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea 
              v-model="editForm.bio" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows="3"
              placeholder="Tell us about yourself"
            ></textarea>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Avatar URL</label>
            <input 
              v-model="editForm.avatar" 
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="https://example.com/avatar.jpg"
            >
          </div>
        </div>
        <div class="p-4 border-t border-gray-200 flex justify-end space-x-3">
          <button 
            @click="isEditing = false" 
            class="px-4 py-2 text-gray-700 border border-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button 
            @click="saveProfile" 
            class="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>

    <p class="text-xs text-gray-400 mt-8 text-center px-4 pb-4">
      This app is unofficial and not affiliated with any music artists or rights management companies.
    </p>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue';

export default {
  name: 'ProfileView',
  setup() {
    const PROFILE_STORAGE_KEY = 'music-besties-profile';
    const isEditing = ref(false);
    
    // Profile data
    const profile = reactive({
      name: '',
      bio: '',
      avatar: '',
      joinDate: new Date().toISOString()
    });
    
    // Edit form data
    const editForm = reactive({
      name: '',
      bio: '',
      avatar: ''
    });
    
    // Load profile data from localStorage
    const loadProfile = () => {
      try {
        const savedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
        if (savedProfile) {
          const parsedProfile = JSON.parse(savedProfile);
          Object.assign(profile, parsedProfile);
        }
      } catch (error) {
        console.error('Failed to load profile:', error);
      }
    };
    
    // Save profile data to localStorage
    const saveProfile = () => {
      try {
        profile.name = editForm.name;
        profile.bio = editForm.bio;
        profile.avatar = editForm.avatar;
        
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
        isEditing.value = false;
      } catch (error) {
        console.error('Failed to save profile:', error);
        alert('Error saving profile data!');
      }
    };
    
    // Initialize edit form with current profile data
    const initEditForm = () => {
      editForm.name = profile.name;
      editForm.bio = profile.bio;
      editForm.avatar = profile.avatar;
    };
    
    // Format join date for display
    const joinDate = computed(() => {
      try {
        const date = new Date(profile.joinDate);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      } catch (error) {
        return 'Unknown';
      }
    });
    
    // Mock data for stats
    const totalRankings = ref(0);
    const totalReviews = ref(0);
    
    // Load rankings data to calculate stats
    const loadStats = () => {
      try {
        const rankingsData = localStorage.getItem('music-besties-rankings');
        if (rankingsData) {
          const parsedData = JSON.parse(rankingsData);
          
          // Count rankings
          if (parsedData.eras) {
            totalRankings.value += parsedData.eras.length;
          }
          
          // Count reviews
          let reviewCount = 0;
          Object.keys(parsedData).forEach(key => {
            if (key !== 'eras' && parsedData[key] && parsedData[key].rating > 0) {
              reviewCount++;
            }
          });
          totalReviews.value = reviewCount;
        }
      } catch (error) {
        console.error('Failed to load stats:', error);
      }
    };
    
    // Initialize component
    onMounted(() => {
      loadProfile();
      loadStats();
      initEditForm();
    });
    
    return {
      profile,
      isEditing,
      editForm,
      saveProfile,
      joinDate,
      totalRankings,
      totalReviews
    };
  }
};
</script>
