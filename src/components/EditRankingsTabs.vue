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
          Drag to reorder. Top = favorite.
        </p>
        <div class="mb-4">
          <div class="flex flex-col space-y-2">
            <draggable-item 
              v-for="(item, index) in currentItems" 
              :key="item"
              :item="item"
              :index="index"
              :list="currentItems"
              :max-selection="maxSelection"
            />
          </div>
        </div>
        <div class="mt-6">
          <h3 class="text-sm font-medium text-gray-700 mb-2">Available Items</h3>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="item in availableItems" 
              :key="item"
              @click="addItem(item)"
              class="chip bg-white border border-gray-200 rounded-full text-sm"
              :class="{ 'disabled': currentItems.length >= maxSelection }"
            >
              {{ item }}
            </button>
          </div>
        </div>
      </div>
      <div v-else class="mb-4">
        <p class="text-sm text-gray-500 mb-2">
          Drag to reorder. Top = favorite.
        </p>
        <div class="mb-4">
          <div class="flex flex-col space-y-2">
            <draggable-item 
              v-for="(item, index) in currentItems" 
              :key="item"
              :item="item"
              :index="index"
              :list="currentItems"
              :max-selection="maxSelection"
            />
          </div>
        </div>
        <div class="mt-6">
          <h3 class="text-sm font-medium text-gray-700 mb-2">Available Songs</h3>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="item in availableItems" 
              :key="item"
              @click="addItem(item)"
              class="chip bg-white border border-gray-200 rounded-full text-sm"
              :class="{ 'disabled': currentItems.length >= maxSelection }"
            >
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
import DraggableItem from './DraggableItem.vue';
import { MAX_SELECTION, erasWithSongs, eraNamesInOrder, originalSongLists, eraEmojis } from '../data';

export default {
  name: 'EditRankingsTabs',
  components: {
    DraggableItem
  },
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
    
    const availableItems = computed(() => {
      let allItems = [];
      
      if (props.activeTabId === 'eras') {
        allItems = [...eraNamesInOrder];
      } else {
        const era = erasWithSongs.find(e => e.id === props.activeTabId);
        if (era) {
          allItems = [...era.songs];
        }
      }
      
      // Filter out items that are already selected
      return allItems.filter(item => !currentItems.value.includes(item));
    });
    
    function addItem(item) {
      if (currentItems.value.length < MAX_SELECTION) {
        currentItems.value.push(item);
      }
    }
    
    return {
      tabs,
      currentItems,
      availableItems,
      maxSelection: MAX_SELECTION,
      addItem
    };
  }
}
</script>
