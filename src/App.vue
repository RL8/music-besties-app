<template>
  <div class="max-w-xl mx-auto bg-white min-h-screen shadow-lg relative overflow-hidden">
    <!-- Dashboard View -->
    <div v-show="currentScreen === 'dashboard'" class="p-4 sm:p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">My Rankings</h1>
        <button @click="showScreen('edit')" class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow active:bg-blue-700 transition-colors text-sm no-hover-highlight">
          Edit
        </button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
        <dashboard-card 
          v-for="(era, index) in dashboardItems" 
          :key="era.id || index"
          :tab-id="era.id"
          :title="era.name"
          :total-count="era.totalCount"
          :selected-count="era.selectedCount"
          :rating="era.rating"
          :rank="era.rank"
          :emoji="era.emoji"
          @open-sidebar="openSidebar"
        />
      </div>
      <p class="text-xs text-gray-400 mt-8 text-center px-4 pb-4">
        This app is unofficial and not affiliated with Taylor Swift or TAS Rights Management, LLC.
      </p>
    </div>

    <!-- Edit Rankings View -->
    <div v-show="currentScreen === 'edit'" class="flex flex-col min-h-screen">
      <div class="flex justify-between items-center p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <button @click="showScreen('dashboard')" class="text-red-600 font-medium px-3 py-1 rounded active:bg-red-100 transition-colors no-hover-highlight">Cancel</button>
        <h2 class="text-lg font-semibold text-gray-700">Edit Rankings</h2>
        <button @click="showSaveConfirmModal" class="bg-green-500 text-white font-semibold px-4 py-1 rounded-md shadow active:bg-green-700 transition-colors no-hover-highlight">Save</button>
      </div>
      <edit-rankings-tabs 
        :active-tab-id="activeTabId"
        :current-selection-orders="currentSelectionOrders"
        :saved-data="savedData"
        @switch-tab="switchTab"
      />
    </div>

    <!-- Save Confirmation Modal -->
    <modal-dialog 
      :visible="isSaveModalVisible"
      title="Confirm Save"
      message="Are you sure you want to save these rankings?"
      @cancel="hideSaveConfirmModal"
      @confirm="saveAndExit"
    />

    <!-- Sidebar -->
    <sidebar-panel
      :visible="isSidebarVisible"
      :current-tab-id="currentSidebarTabId"
      :current-view="currentSidebarView"
      :saved-data="savedData"
      @close="closeSidebar"
      @switch-tab="switchSidebarTab"
      @save-review="saveReview"
    />
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue';
import DashboardCard from './components/DashboardCard.vue';
import EditRankingsTabs from './components/EditRankingsTabs.vue';
import ModalDialog from './components/ModalDialog.vue';
import SidebarPanel from './components/SidebarPanel.vue';
import { MAX_SELECTION, LOCAL_STORAGE_KEY, erasWithSongs, eraNamesInOrder, originalSongLists, eraEmojis } from './data';

export default {
  name: 'App',
  components: {
    DashboardCard,
    EditRankingsTabs,
    ModalDialog,
    SidebarPanel
  },
  setup() {
    // State
    const savedData = reactive({});
    const currentSelectionOrders = reactive({});
    const activeTabId = ref('eras');
    const currentScreen = ref('dashboard');
    const isSaveModalVisible = ref(false);
    const isSidebarVisible = ref(false);
    const currentSidebarTabId = ref(null);
    const currentSidebarView = ref('rankings');

    // Computed properties
    const dashboardItems = computed(() => {
      const items = [];
      
      // Add Eras item
      items.push({
        id: 'eras',
        name: 'Eras',
        totalCount: eraNamesInOrder.length,
        selectedCount: (savedData['eras']?.length || 0),
        emoji: eraEmojis['eras'],
        rating: 0,
        rank: -1
      });
      
      // Add individual era items
      erasWithSongs.forEach(era => {
        const eraData = savedData[era.id];
        const selectedCount = eraData?.selection?.length || 0;
        const rating = eraData?.rating || 0;
        
        let rank = -1;
        if (savedData['eras']) {
          const eraRankIndex = savedData['eras'].indexOf(era.name);
          if (eraRankIndex !== -1) {
            rank = eraRankIndex + 1;
          }
        }
        
        items.push({
          id: era.id,
          name: era.name,
          totalCount: era.songs.length,
          selectedCount: selectedCount,
          emoji: era.emoji,
          rating: rating,
          rank: rank
        });
      });
      
      return items;
    });

    // Methods
    function deepCopy(obj) {
      return JSON.parse(JSON.stringify(obj));
    }

    function loadRankings() {
      try {
        const dataStr = localStorage.getItem(LOCAL_STORAGE_KEY);
        Object.assign(savedData, dataStr ? JSON.parse(dataStr) : {});
        
        if (!savedData['eras']) savedData['eras'] = [];
        
        erasWithSongs.forEach(era => {
          if (!savedData[era.id]) {
            savedData[era.id] = { selection: [], rating: 0, comment: '' };
          } else if (savedData[era.id].selection === undefined) {
            savedData[era.id] = { 
              selection: [], 
              rating: savedData[era.id].rating || 0, 
              comment: savedData[era.id].comment || '' 
            };
          }
        });
        
        console.log("Data loaded:", savedData);
      } catch (e) {
        console.error("Failed to load data:", e);
        Object.assign(savedData, { eras: [] });
        
        erasWithSongs.forEach(era => {
          savedData[era.id] = { selection: [], rating: 0, comment: '' };
        });
      }
    }

    function saveRankings() {
      try {
        Object.keys(currentSelectionOrders).forEach(tabId => {
          if (tabId === 'eras') {
            savedData['eras'] = deepCopy(currentSelectionOrders['eras']);
          } else if (savedData[tabId]) {
            savedData[tabId].selection = deepCopy(currentSelectionOrders[tabId] || []);
          }
        });
        
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedData));
        console.log("Rankings saved:", savedData);
        return true;
      } catch (e) {
        console.error("Failed to save rankings:", e);
        alert("Error saving rankings!");
        return false;
      }
    }

    function saveReview(tabId, rating, comment) {
      if (tabId === 'eras' || !savedData[tabId]) return false;
      
      try {
        savedData[tabId].rating = rating;
        savedData[tabId].comment = comment;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedData));
        return true;
      } catch (e) {
        console.error(`Failed to save review for ${tabId}:`, e);
        alert("Error saving review!");
        return false;
      }
    }

    function showScreen(screenId) {
      closeSidebar();
      currentScreen.value = screenId;
      
      if (screenId === 'edit') {
        // Initialize edit screen
        Object.keys(currentSelectionOrders).forEach(key => {
          delete currentSelectionOrders[key];
        });
        
        Object.keys(savedData).forEach(key => {
          if (Array.isArray(savedData[key])) {
            currentSelectionOrders[key] = deepCopy(savedData[key]);
          } else if (typeof savedData[key] === 'object' && savedData[key]?.selection) {
            currentSelectionOrders[key] = deepCopy(savedData[key].selection);
          }
        });
        
        // Default to eras tab
        activeTabId.value = 'eras';
      }
    }

    function showSaveConfirmModal() {
      isSaveModalVisible.value = true;
    }

    function hideSaveConfirmModal() {
      isSaveModalVisible.value = false;
    }

    function saveAndExit() {
      if (saveRankings()) {
        hideSaveConfirmModal();
        showScreen('dashboard');
      }
    }

    function openSidebar(tabId, rank = '') {
      currentSidebarTabId.value = tabId;
      isSidebarVisible.value = true;
      currentSidebarView.value = 'rankings';
    }

    function closeSidebar() {
      isSidebarVisible.value = false;
      currentSidebarTabId.value = null;
    }

    function switchSidebarTab(tabId) {
      currentSidebarView.value = tabId.replace('sidebar-panel-', '');
    }

    function switchTab(tabId) {
      activeTabId.value = tabId;
    }

    // Lifecycle hooks
    onMounted(() => {
      loadRankings();
    });

    return {
      // State
      savedData,
      currentSelectionOrders,
      activeTabId,
      currentScreen,
      isSaveModalVisible,
      isSidebarVisible,
      currentSidebarTabId,
      currentSidebarView,
      
      // Computed
      dashboardItems,
      
      // Methods
      showScreen,
      showSaveConfirmModal,
      hideSaveConfirmModal,
      saveAndExit,
      openSidebar,
      closeSidebar,
      switchSidebarTab,
      switchTab,
      saveReview
    };
  }
};
</script>
