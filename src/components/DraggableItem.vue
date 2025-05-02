<template>
  <div class="flex items-center bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
    <div class="chip-rank-indicator mr-2">{{ index + 1 }}</div>
    <div class="flex-grow font-medium text-gray-700">{{ item }}</div>
    <button 
      @click="removeItem"
      class="text-red-500 p-1 rounded-full hover:bg-red-50 active:bg-red-100 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'DraggableItem',
  props: {
    item: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    maxSelection: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    function removeItem() {
      const index = props.list.indexOf(props.item);
      if (index !== -1) {
        props.list.splice(index, 1);
      }
    }
    
    return {
      removeItem
    };
  }
}
</script>
