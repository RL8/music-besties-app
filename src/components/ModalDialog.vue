<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-lg shadow-xl max-w-sm w-full overflow-hidden">
      <div class="p-4 border-b border-gray-200">
        <h3 class="text-lg font-semibold text-gray-800">{{ title }}</h3>
      </div>
      <div class="p-4">
        <p class="text-gray-600">{{ message }}</p>
      </div>
      <div class="flex border-t border-gray-200 p-3">
        <button 
          @click="$emit('cancel')" 
          class="flex-1 py-2 text-gray-600 font-medium hover:bg-gray-50 active:bg-gray-100 rounded transition-colors"
        >
          Cancel
        </button>
        <button 
          @click="$emit('confirm')" 
          class="flex-1 py-2 text-blue-600 font-medium hover:bg-blue-50 active:bg-blue-100 rounded transition-colors"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Confirm'
    },
    message: {
      type: String,
      default: 'Are you sure?'
    }
  },
  emits: ['cancel', 'confirm']
}
</script>
