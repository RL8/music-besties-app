<template>
  <div 
    class="dashboard-grid-card" 
    @click="$emit('open-sidebar', tabId)"
  >
    <div v-if="rank > 0" class="absolute top-1 left-1 chip-rank-indicator">
      {{ rank }}
    </div>
    <h3 class="font-semibold text-gray-800 mb-1">
      {{ title }}
      <span v-if="emoji" class="ml-1">{{ emoji }}</span>
    </h3>
    <div class="dashboard-stars" v-if="tabId !== 'eras'">
      <span v-if="rating > 0">
        {{ '★'.repeat(rating) }}{{ '☆'.repeat(5 - rating) }}
      </span>
      <span v-else class="text-gray-300">☆☆☆☆☆</span>
    </div>
    <p class="text-xs text-gray-500 mt-1">
      {{ selectedCount }}/{{ totalCount }} selected
    </p>
  </div>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    tabId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    totalCount: {
      type: Number,
      required: true
    },
    selectedCount: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 0
    },
    rank: {
      type: Number,
      default: -1
    },
    emoji: {
      type: String,
      default: ''
    }
  },
  emits: ['open-sidebar']
}
</script>
