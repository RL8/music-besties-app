<template>
  <div class="max-w-xl mx-auto bg-white min-h-screen shadow-lg relative overflow-hidden">
    <!-- Router View for new pages -->
    <router-view v-if="isRouterView">
      <!-- Header for router views -->
      <template #default>
        <div class="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div class="flex items-center p-4">
            <button 
              @click="toggleLeftSidebar" 
              class="mr-3 text-gray-700 p-1 rounded-md active:bg-gray-100 transition-colors no-hover-highlight"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 class="text-xl font-semibold text-gray-800">Music Besties</h1>
          </div>
        </div>
      </template>
    </router-view>

    <!-- Dashboard View -->
    <div v-show="currentScreen === 'dashboard' && !isRouterView && !isStateView" class="p-4 sm:p-6">
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center">
          <button 
            @click="toggleLeftSidebar" 
            class="mr-3 text-gray-700 p-1 rounded-md active:bg-gray-100 transition-colors no-hover-highlight"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 class="text-2xl font-bold text-gray-800">My Rankings</h1>
        </div>
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
    <div v-show="currentScreen === 'edit' && !isRouterView && !isStateView" class="flex flex-col min-h-screen">
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

    <!-- State-based Views -->
    <template v-if="isStateView">
      <!-- About View -->
      <about-view 
        v-if="appViews.current === 'about'" 
        :params="appViews.params"
        @go-back="goBackView"
      />
      <!-- Profile View -->
      <profile-view 
        v-if="appViews.current === 'profile'" 
        :params="appViews.params"
        @go-back="goBackView"
      />
      <!-- Settings View -->
      <settings-view 
        v-if="appViews.current === 'settings'" 
        :params="appViews.params"
        @go-back="goBackView"
      />
      <!-- Terms View -->
      <terms-view 
        v-if="appViews.current === 'terms'" 
        :params="appViews.params"
        @go-back="goBackView"
      />
    </template>

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

    <!-- Left Sidebar Navigation -->
    <left-sidebar
      :visible="isLeftSidebarVisible"
      @close="closeLeftSidebar"
      @navigate="navigateToView"
    />
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import DashboardCard from './components/DashboardCard.vue';
import EditRankingsTabs from './components/EditRankingsTabs.vue';
import ModalDialog from './components/ModalDialog.vue';
import SidebarPanel from './components/SidebarPanel.vue';
import LeftSidebar from './components/LeftSidebar.vue';
import AboutView from './components/AboutView.vue'; // Import AboutView component
import ProfileView from './components/ProfileView.vue'; // Import ProfileView component
import SettingsView from './components/SettingsView.vue'; // Import SettingsView component
import TermsView from './components/TermsView.vue'; // Import TermsView component
import { MAX_SELECTION, LOCAL_STORAGE_KEY, erasWithSongs, eraNamesInOrder, originalSongLists, eraEmojis } from './data';

export default {
  name: 'App',
  components: {
    DashboardCard,
    EditRankingsTabs,
    ModalDialog,
    SidebarPanel,
    LeftSidebar,
    AboutView, // Register AboutView component
    ProfileView, // Register ProfileView component
    SettingsView, // Register SettingsView component
    TermsView // Register TermsView component
  },
  setup() {
    // Router
    const route = useRoute();
    
    // State
    const savedData = reactive({});
    const currentSelectionOrders = reactive({});
    const activeTabId = ref('eras');
    const currentScreen = ref('dashboard');
    const isSaveModalVisible = ref(false);
    const isSidebarVisible = ref(false);
    const currentSidebarTabId = ref(null);
    const currentSidebarView = ref('rankings');
    const isLeftSidebarVisible = ref(false);
    
    // State-based navigation
    const appViews = reactive({
      current: '',
      params: {},
      history: []
    });

    // Determine if we should show router view or app screens
    const isRouterView = computed(() => {
      return route.path !== '/';
    });

    // Determine if we should show state-based view
    const isStateView = computed(() => {
      return appViews.current !== '' && !isRouterView.value;
    });

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
        console.log(`Review saved for ${tabId}:`, { rating, comment });
        return true;
      } catch (e) {
        console.error("Failed to save review:", e);
        alert("Error saving review!");
        return false;
      }
    }

    function showScreen(screen) {
      currentScreen.value = screen;
      
      if (screen === 'edit') {
        // Initialize selection orders for editing
        currentSelectionOrders['eras'] = deepCopy(savedData['eras'] || []);
        
        erasWithSongs.forEach(era => {
          if (savedData[era.id]) {
            currentSelectionOrders[era.id] = deepCopy(savedData[era.id].selection || []);
          }
        });
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

    function switchTab(tabId) {
      activeTabId.value = tabId;
    }

    function openSidebar(tabId) {
      // Close left sidebar if open
      isLeftSidebarVisible.value = false;
      
      currentSidebarTabId.value = tabId;
      currentSidebarView.value = 'rankings';
      isSidebarVisible.value = true;
      console.log(`Right sidebar opened with tab: ${tabId}`);
    }

    function closeSidebar() {
      isSidebarVisible.value = false;
      console.log('Right sidebar closed');
    }

    function switchSidebarTab(tabId) {
      // Extract the view from the tab ID (e.g., 'sidebar-panel-rankings' -> 'rankings')
      if (tabId.startsWith('sidebar-panel-')) {
        currentSidebarView.value = tabId.replace('sidebar-panel-', '');
        console.log('Switching sidebar tab to:', currentSidebarView.value);
      } else {
        console.warn('Invalid tab ID format:', tabId);
      }
    }

    function toggleLeftSidebar() {
      // Close right sidebar if open
      if (isSidebarVisible.value) {
        isSidebarVisible.value = false;
      }
      
      isLeftSidebarVisible.value = !isLeftSidebarVisible.value;
      console.log(`Left sidebar ${isLeftSidebarVisible.value ? 'opened' : 'closed'}`);
    }

    function closeLeftSidebar() {
      isLeftSidebarVisible.value = false;
      console.log('Left sidebar closed');
    }

    // State-based navigation functions
    function navigateToView(view, params = {}) {
      console.log(`State navigation: ${view}`, params);
      
      // Special handling for home navigation
      if (view === 'home') {
        // Clear state view to show dashboard
        appViews.current = '';
        appViews.params = {};
        
        // Close sidebars
        isLeftSidebarVisible.value = false;
        isSidebarVisible.value = false;
        
        console.log('Navigated to home dashboard');
        return;
      }
      
      // Save current view to history if we're already in a view
      if (appViews.current !== '') {
        appViews.history.push({
          view: appViews.current,
          params: {...appViews.params}
        });
      }
      
      // Update to new view
      appViews.current = view;
      appViews.params = params;
      
      // Close sidebars
      isLeftSidebarVisible.value = false;
      isSidebarVisible.value = false;
      
      console.log(`Navigated to view: ${view}`, params);
    }
    
    function goBackView() {
      if (appViews.history.length > 0) {
        const previous = appViews.history.pop();
        appViews.current = previous.view;
        appViews.params = previous.params;
        
        console.log(`Navigated back to: ${previous.view}`, previous.params);
        return true;
      } else {
        // If no history, go to dashboard
        appViews.current = '';
        appViews.params = {};
        return false;
      }
    }

    // Initialize
    onMounted(() => {
      // Load saved rankings
      loadRankings();
    });

    return {
      savedData,
      currentSelectionOrders,
      activeTabId,
      currentScreen,
      isSaveModalVisible,
      isSidebarVisible,
      currentSidebarTabId,
      currentSidebarView,
      dashboardItems,
      isRouterView,
      isStateView,
      isLeftSidebarVisible,
      appViews,
      showScreen,
      showSaveConfirmModal,
      hideSaveConfirmModal,
      saveAndExit,
      switchTab,
      openSidebar,
      closeSidebar,
      switchSidebarTab,
      saveReview,
      toggleLeftSidebar,
      closeLeftSidebar,
      navigateToView,
      goBackView
    };
  }
};
</script>
