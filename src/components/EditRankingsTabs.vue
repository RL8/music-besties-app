<template>
  <div class="flex flex-col flex-grow">
    <!-- Tabs -->
    <div class="flex overflow-x-auto py-2 px-4 border-b border-gray-200 bg-white sticky top-14 z-10">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        @click="$emit('switch-tab', tab.id)"
        class="px-3 py-1 mr-2 rounded-full text-sm font-medium whitespace-nowrap"
        :class="tab.id === activeTabId ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'"
      >
        {{ tab.name }}
        <span v-if="tab.emoji" class="ml-1">{{ tab.emoji }}</span>
      </button>
    </div>
    
    <!-- Tab Content -->
    <div class="flex-grow overflow-y-auto p-4 bg-gray-50">
      <div v-if="activeTabId === 'eras'" class="mb-4">
        <p class="text-sm text-gray-500 mb-2">
          Tap to rank. Top items are your favorites.
        </p>
        <div class="mb-4">
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="item in sortedItems" 
              :key="item"
              @click="toggleItemRank(item)"
              class="chip py-1 px-3 rounded-full text-sm"
              :class="getItemClass(item)"
            >
              <span v-if="isItemRanked(item)" class="chip-rank-indicator mr-1">
                {{ getRankNumber(item) }}
              </span>
              {{ item }}
            </button>
          </div>
        </div>
      </div>
      <div v-else class="mb-4">
        <p class="text-sm text-gray-500 mb-2">
          Tap to rank. Top items are your favorites.
        </p>
        <div class="mb-4">
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="item in sortedItems" 
              :key="item"
              @click="toggleItemRank(item)"
              class="chip py-1 px-3 rounded-full text-sm"
              :class="getItemClass(item)"
            >
              <span v-if="isItemRanked(item)" class="chip-rank-indicator mr-1">
                {{ getRankNumber(item) }}
              </span>
              {{ item }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { MAX_SELECTION, erasWithSongs, eraNamesInOrder, originalSongLists, eraEmojis } from '../data';

export default {
  name: 'EditRankingsTabs',
  props: {
    activeTabId: {
      type: String,
      required: true
    },
    currentSelectionOrders: {
      type: Object,
      required: true
    },
    savedData: {
      type: Object,
      required: true
    }
  },
  emits: ['switch-tab'],
  setup(props) {
    const tabs = computed(() => {
      const result = [
        { id: 'eras', name: 'Eras', emoji: eraEmojis['eras'] }
      ];
      
      erasWithSongs.forEach(era => {
        result.push({
          id: era.id,
          name: era.name,
          emoji: era.emoji
        });
      });
      
      return result;
    });
    
    const currentItems = computed({
      get: () => {
        if (!props.currentSelectionOrders[props.activeTabId]) {
          props.currentSelectionOrders[props.activeTabId] = [];
        }
        return props.currentSelectionOrders[props.activeTabId];
      },
      set: (value) => {
        props.currentSelectionOrders[props.activeTabId] = value;
      }
    });
    
    const allItems = computed(() => {
      if (props.activeTabId === 'eras') {
        return [...eraNamesInOrder];
      } else {
        const era = erasWithSongs.find(e => e.id === props.activeTabId);
        if (era) {
          return [...era.songs];
        }
      }
      return [];
    });
    
    const sortedItems = computed(() => {
      // Get all items for the current tab
      const items = [...allItems.value];
      
      // Sort items so that ranked items come first, in order of rank
      items.sort((a, b) => {
        const aRanked = currentItems.value.includes(a);
        const bRanked = currentItems.value.includes(b);
        
        if (aRanked && bRanked) {
          // Both items are ranked, sort by rank number
          return currentItems.value.indexOf(a) - currentItems.value.indexOf(b);
        } else if (aRanked) {
          // Only a is ranked, it should come first
          return -1;
        } else if (bRanked) {
          // Only b is ranked, it should come first
          return 1;
        } else {
          // Neither is ranked, maintain original order
          return 0;
        }
      });
      
      return items;
    });
    
    function isItemRanked(item) {
      return currentItems.value.includes(item);
    }
    
    function getRankNumber(item) {
      return currentItems.value.indexOf(item) + 1;
    }
    
    function getItemClass(item) {
      if (isItemRanked(item)) {
        return 'bg-blue-100 text-blue-800 border border-blue-200';
      } else {
        return 'bg-white border border-gray-200 text-gray-700';
      }
    }
    
    function toggleItemRank(item) {
      const index = currentItems.value.indexOf(item);
      
      if (index !== -1) {
        // Item is already ranked, remove it
        currentItems.value.splice(index, 1);
      } else if (currentItems.value.length < MAX_SELECTION) {
        // Item is not ranked and we haven't reached the max selection
        currentItems.value.push(item);
      }
    }
    
    return {
      tabs,
      currentItems,
      allItems,
      sortedItems,
      maxSelection: MAX_SELECTION,
      isItemRanked,
      getRankNumber,
      getItemClass,
      toggleItemRank
    };
  }
}
</script>
