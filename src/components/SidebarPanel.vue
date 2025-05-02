<template>
  <div 
    v-if="visible" 
    class="fixed inset-0 bg-black bg-opacity-50 z-40"
    @click="$emit('close')"
  >
    <div 
      class="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl flex flex-col h-full"
      @click.stop
    >
      <div class="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-800">{{ tabTitle }}</h2>
        <button 
          @click="$emit('close')" 
          class="text-gray-500 p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      
      <!-- Sidebar Tabs -->
      <div class="flex border-b border-gray-200 bg-gray-50">
        <button 
          v-for="tab in sidebarTabs" 
          :key="tab.id"
          @click="$emit('switch-tab', tab.id)"
          class="flex-1 py-3 text-sm font-medium"
          :class="tab.id === 'sidebar-panel-' + currentView ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'"
        >
          {{ tab.name }}
        </button>
      </div>
      
      <!-- Sidebar Content -->
      <div class="flex-grow overflow-y-auto p-4">
        <!-- Rankings View -->
        <div v-if="currentView === 'rankings'">
          <div v-if="currentTabId === 'eras'">
            <h3 class="font-medium text-gray-700 mb-3">Era Rankings</h3>
            <div v-if="eraRankings.length > 0" class="space-y-2">
              <div 
                v-for="(era, index) in eraRankings" 
                :key="era"
                class="sidebar-chip"
              >
                <div class="chip-rank-indicator mr-2">{{ index + 1 }}</div>
                {{ era }}
              </div>
            </div>
            <p v-else class="text-sm text-gray-400 italic">No rankings yet</p>
          </div>
          <div v-else-if="currentTabId && songRankings">
            <h3 class="font-medium text-gray-700 mb-3">Song Rankings</h3>
            <div v-if="songRankings.length > 0" class="space-y-2">
              <div 
                v-for="(song, index) in songRankings" 
                :key="song"
                class="sidebar-chip"
              >
                <div class="chip-rank-indicator mr-2">{{ index + 1 }}</div>
                {{ song }}
              </div>
            </div>
            <p v-else class="text-sm text-gray-400 italic">No rankings yet</p>
          </div>
        </div>
        
        <!-- Review View -->
        <div v-else-if="currentView === 'review'">
          <div v-if="currentTabId && currentTabId !== 'eras'">
            <h3 class="font-medium text-gray-700 mb-3">Your Review</h3>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Rating</label>
              <div class="flex text-2xl text-gray-300">
                <button 
                  v-for="i in 5" 
                  :key="i"
                  @click="rating = i"
                  class="focus:outline-none"
                  :class="i <= rating ? 'text-amber-400' : ''"
                >
                  ★
                </button>
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Comments</label>
              <textarea 
                v-model="comment"
                class="w-full border border-gray-300 rounded-lg p-2 text-sm"
                rows="4"
                placeholder="Write your thoughts..."
              ></textarea>
            </div>
            <button 
              @click="submitReview"
              class="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow active:bg-blue-700 transition-colors"
            >
              Save Review
            </button>
            
            <div v-if="showSavedMessage" class="mt-3 p-2 bg-green-100 text-green-800 text-sm rounded">
              Review saved!
            </div>
          </div>
          <div v-else class="text-sm text-gray-400 italic">
            Reviews are only available for individual eras
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { erasWithSongs } from '../data';

export default {
  name: 'SidebarPanel',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    currentTabId: {
      type: String,
      default: null
    },
    currentView: {
      type: String,
      default: 'rankings'
    },
    savedData: {
      type: Object,
      required: true
    }
  },
  emits: ['close', 'switch-tab', 'save-review'],
  setup(props, { emit }) {
    const rating = ref(0);
    const comment = ref('');
    const showSavedMessage = ref(false);
    
    const sidebarTabs = [
      { id: 'sidebar-panel-rankings', name: 'Rankings' },
      { id: 'sidebar-panel-review', name: 'Review' }
    ];
    
    const tabTitle = computed(() => {
      if (props.currentTabId === 'eras') {
        return 'Eras';
      } else if (props.currentTabId) {
        const era = erasWithSongs.find(e => e.id === props.currentTabId);
        return era ? era.name : 'Unknown';
      }
      return '';
    });
    
    const eraRankings = computed(() => {
      return props.savedData['eras'] || [];
    });
    
    const songRankings = computed(() => {
      if (props.currentTabId && props.currentTabId !== 'eras') {
        return props.savedData[props.currentTabId]?.selection || [];
      }
      return [];
    });
    
    // Watch for changes in currentTabId to update rating and comment
    watch(() => props.currentTabId, (newTabId) => {
      if (newTabId && newTabId !== 'eras' && props.savedData[newTabId]) {
        rating.value = props.savedData[newTabId].rating || 0;
        comment.value = props.savedData[newTabId].comment || '';
      } else {
        rating.value = 0;
        comment.value = '';
      }
      showSavedMessage.value = false;
    });
    
    // Watch for changes in visibility to reset saved message
    watch(() => props.visible, (newVisible) => {
      if (newVisible) {
        showSavedMessage.value = false;
      }
    });
    
    function submitReview() {
      if (props.currentTabId && props.currentTabId !== 'eras') {
        const success = emit('save-review', props.currentTabId, rating.value, comment.value);
        if (success) {
          showSavedMessage.value = true;
          setTimeout(() => {
            showSavedMessage.value = false;
          }, 3000);
        }
      }
    }
    
    return {
      rating,
      comment,
      showSavedMessage,
      sidebarTabs,
      tabTitle,
      eraRankings,
      songRankings,
      submitReview
    };
  }
}
</script>
