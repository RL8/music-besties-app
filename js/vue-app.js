// Vue 3 Application for Music Besties
const { createApp, reactive, toRefs } = Vue;

// Create the Vue application
const app = createApp({
    setup() {
        // Reactive state
        const state = reactive({
            // Core app state
            savedData: {},
            currentSelectionOrders: {},
            activeTabId: 'eras',
            currentScreen: 'dashboard',
            
            // UI state
            isSaveModalVisible: false,
            isSidebarVisible: false,
            currentSidebarTabId: null,
            currentSidebarView: 'rankings',
            isReviewEditorVisible: false,
            
            // DOM references will be set in mounted()
            dashboardGridContainer: null,
            tabButtonsContainer: null,
            tabPanelsContainer: null,
            sidebarTitleContainer: null,
            sidebarChipContainer: null,
            sidebarTabButtonReview: null,
            reviewDisplayArea: null,
            reviewDisplayStars: null,
            reviewDisplayComment: null,
            reviewEditorEraName: null,
            reviewEditorCommentInput: null,
            reviewEditorCommentCharCount: null,
            reviewEditorRatingInputs: null,
            reviewEditorRatingDescription: null
        });

        // --- Utility Functions ---
        function deepCopy(obj) {
            return JSON.parse(JSON.stringify(obj));
        }

        // --- Screen Management ---
        function showScreen(screenId) {
            closeSidebar();
            state.currentScreen = screenId;
            
            if (screenId === 'dashboard') {
                populateDashboard();
            } else if (screenId === 'edit') {
                state.currentSelectionOrders = {};
                Object.keys(state.savedData).forEach(key => {
                    if (Array.isArray(state.savedData[key])) {
                        state.currentSelectionOrders[key] = deepCopy(state.savedData[key]);
                    } else if (typeof state.savedData[key] === 'object' && state.savedData[key]?.selection) {
                        state.currentSelectionOrders[key] = deepCopy(state.savedData[key].selection);
                    }
                });
                
                // Initialize after Vue has updated the DOM
                setTimeout(() => {
                    initializeTabs();
                    Object.keys(state.currentSelectionOrders).forEach(tabId => {
                        reorderChipsInContainer(tabId);
                        updateTabButtonCount(tabId);
                    });
                    switchTab('eras', true);
                }, 0);
            }
        }

        // --- Persistence Functions ---
        function loadRankings() {
            try {
                const dataStr = localStorage.getItem(LOCAL_STORAGE_KEY);
                state.savedData = dataStr ? JSON.parse(dataStr) : {};
                if (!state.savedData['eras']) state.savedData['eras'] = [];
                erasWithSongs.forEach(era => {
                    if (!state.savedData[era.id]) {
                        state.savedData[era.id] = { selection: [], rating: 0, comment: '' };
                    } else if (state.savedData[era.id].selection === undefined) {
                        state.savedData[era.id] = { 
                            selection: [], 
                            rating: state.savedData[era.id].rating || 0, 
                            comment: state.savedData[era.id].comment || '' 
                        };
                    }
                });
                console.log("Data loaded:", state.savedData);
            } catch (e) {
                console.error("Failed to load data:", e);
                state.savedData = { eras: [] };
                erasWithSongs.forEach(era => {
                    state.savedData[era.id] = { selection: [], rating: 0, comment: '' };
                });
            }
        }

        function saveRankings() {
            try {
                Object.keys(state.currentSelectionOrders).forEach(tabId => {
                    if (tabId === 'eras') {
                        state.savedData['eras'] = deepCopy(state.currentSelectionOrders['eras']);
                    } else if (state.savedData[tabId]) {
                        state.savedData[tabId].selection = deepCopy(state.currentSelectionOrders[tabId] || []);
                    }
                });
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.savedData));
                console.log("Rankings saved:", state.savedData);
                return true;
            } catch (e) {
                console.error("Failed to save rankings:", e);
                alert("Error saving rankings!");
                return false;
            }
        }

        function saveReview() {
            if (!state.currentSidebarTabId || state.currentSidebarTabId === 'eras') return;
            
            const selectedRatingInput = document.querySelector('#review-editor-form .star-rating input[name="review-editor-rating"]:checked');
            const rating = selectedRatingInput ? parseInt(selectedRatingInput.value, 10) : 0;
            const comment = state.reviewEditorCommentInput.value.trim();

            try {
                state.savedData[state.currentSidebarTabId].rating = rating;
                state.savedData[state.currentSidebarTabId].comment = comment;
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.savedData));
                
                // Update the view-only display
                state.reviewDisplayStars.innerHTML = rating > 0 ? '★'.repeat(rating) + '☆'.repeat(5 - rating) : '';
                state.reviewDisplayStars.classList.toggle('unrated', rating === 0);
                state.reviewDisplayComment.textContent = comment;
                
                if (rating === 0 && !comment) {
                    state.reviewDisplayArea.innerHTML = '<p class="no-review">No review yet.</p>';
                } else {
                    if (!state.reviewDisplayArea.contains(state.reviewDisplayStars)) {
                        state.reviewDisplayArea.prepend(state.reviewDisplayStars);
                    }
                    if (!state.reviewDisplayArea.contains(state.reviewDisplayComment)) {
                        state.reviewDisplayArea.appendChild(state.reviewDisplayComment);
                    }
                }

                hideReviewEditor();
                populateDashboard();
                return true;
            } catch (e) {
                console.error(`Failed to save review for ${state.currentSidebarTabId}:`, e);
                alert("Error saving review!");
                return false;
            }
        }

        // --- Dashboard Functions ---
        function populateDashboard() {
            if (!state.dashboardGridContainer) return;
            
            state.dashboardGridContainer.innerHTML = '';
            createDashboardGridItem('eras', 'Eras', eraNamesInOrder.length);
            erasWithSongs.forEach(era => {
                createDashboardGridItem(era.id, era.name, era.songs.length);
            });
        }

        function createRankIndicatorHTML(rank) {
            let emojiHTML = '';
            if (rank === 1) emojiHTML = '<span class="emoji">👑</span>';
            else if (rank === 2) emojiHTML = '<span class="emoji">🥈</span>';
            else if (rank === 3) emojiHTML = '<span class="emoji">🥉</span>';
            return `<span class="chip-rank-indicator">${emojiHTML}${rank}</span>`;
        }

        function createDashboardGridItem(tabId, title, totalCount) {
            const card = document.createElement('div');
            card.className = 'dashboard-grid-card no-hover-highlight';
            card.dataset.tabId = tabId;
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');

            const eraData = state.savedData[tabId];
            const selectedCount = (tabId === 'eras' ? eraData?.length : eraData?.selection?.length) || 0;
            const rating = (tabId !== 'eras' ? eraData?.rating : 0) || 0;
            const emoji = eraEmojis[tabId] || eraEmojis[title] || '';
            let rank = -1;
            let rankIndicatorHTML = '';
            let starsHTML = '<span class="dashboard-stars">&nbsp;</span>';

            if (tabId !== 'eras') {
                const eraRankIndex = (state.savedData['eras'] || []).indexOf(title);
                if (eraRankIndex !== -1) {
                    rank = eraRankIndex + 1;
                    rankIndicatorHTML = `<div class="dashboard-rank-indicator-wrapper">${createRankIndicatorHTML(rank)}</div>`;
                }
                if (rating > 0) {
                    starsHTML = `<span class="dashboard-stars">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</span>`;
                }
            }
            card.dataset.rank = rank > 0 ? rank : '';

            if (selectedCount > 0) card.classList.add('selected');
            if (selectedCount === MAX_SELECTION) card.classList.add('all-selected');

            card.innerHTML = `
                ${rankIndicatorHTML}
                <span class="card-title"><span class="emoji">${emoji}</span>${title}</span>
                <span class="card-count">${selectedCount} of ${totalCount}</span>
                ${starsHTML}
            `;

            card.addEventListener('click', handleDashboardCardClick);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { 
                    e.preventDefault(); 
                    handleDashboardCardClick(e); 
                }
            });
            
            state.dashboardGridContainer.appendChild(card);
        }

        function handleDashboardCardClick(event) {
            const card = event.currentTarget;
            const tabId = card.dataset.tabId;
            const rank = card.dataset.rank;
            if (tabId) {
                openSidebar(tabId, rank);
            }
        }

        // --- Modal Functions ---
        function showSaveConfirmModal() {
            state.isSaveModalVisible = true;
        }

        function hideSaveConfirmModal() {
            state.isSaveModalVisible = false;
        }

        function saveAndExit() {
            if (saveRankings()) {
                hideSaveConfirmModal();
                showScreen('dashboard');
            }
        }

        // --- Sidebar Functions ---
        function openSidebar(tabId, rank = '') {
            state.currentSidebarTabId = tabId;
            state.isSidebarVisible = true;
            
            const eraData = erasWithSongs.find(e => e.id === tabId || e.name === tabId);
            const baseTitle = (tabId === 'eras') ? 'Eras' : (eraData?.name || 'Rankings');
            const emoji = eraEmojis[tabId] || eraEmojis[baseTitle] || '';

            // Build title container content
            let titleContainerHTML = `<span class="emoji">${emoji}</span>`;
            titleContainerHTML += `<span class="sidebar-title title-text">${baseTitle}</span>`;
            if (tabId !== 'eras' && rank) {
                titleContainerHTML += createRankIndicatorHTML(parseInt(rank, 10));
            }
            state.sidebarTitleContainer.innerHTML = titleContainerHTML;

            // Populate Chips (Rankings Panel)
            state.sidebarChipContainer.innerHTML = '';
            const allTags = (tabId === 'eras') ? eraNamesInOrder : (originalSongLists[tabId] || []);
            const savedSelection = (tabId === 'eras' ? state.savedData['eras'] : state.savedData[tabId]?.selection) || [];
            const displayOrder = [];
            const unselectedTags = [];
            
            allTags.forEach(tag => { 
                if (!savedSelection.includes(tag)) unselectedTags.push(tag); 
            });
            
            savedSelection.forEach(tag => displayOrder.push(tag));
            unselectedTags.forEach(tag => displayOrder.push(tag));

            displayOrder.forEach(tag => {
                const chipDiv = document.createElement('div');
                chipDiv.className = 'sidebar-chip';
                const indexInSelection = savedSelection.indexOf(tag);
                if (indexInSelection !== -1) {
                    chipDiv.classList.add('selected');
                    const rankNum = indexInSelection + 1;
                    chipDiv.innerHTML = createRankIndicatorHTML(rankNum);
                }
                chipDiv.appendChild(document.createTextNode(tag));
                state.sidebarChipContainer.appendChild(chipDiv);
            });

            // Populate Review Display (Review Panel)
            if (tabId !== 'eras' && state.savedData[tabId]) {
                const rating = state.savedData[tabId].rating || 0;
                const comment = state.savedData[tabId].comment || '';
                
                state.reviewDisplayStars.innerHTML = rating > 0 ? '★'.repeat(rating) + '☆'.repeat(5 - rating) : '';
                state.reviewDisplayStars.classList.toggle('unrated', rating === 0);
                state.reviewDisplayComment.textContent = comment;
                
                if (rating === 0 && !comment) {
                    state.reviewDisplayArea.innerHTML = '<p class="no-review">No review yet.</p>';
                } else {
                    if (!state.reviewDisplayArea.contains(state.reviewDisplayStars)) {
                        state.reviewDisplayArea.prepend(state.reviewDisplayStars);
                    }
                    if (!state.reviewDisplayArea.contains(state.reviewDisplayComment)) {
                        state.reviewDisplayArea.appendChild(state.reviewDisplayComment);
                    }
                }
                
                state.sidebarTabButtonReview.classList.remove('hidden');
                hideReviewEditor();
            } else {
                state.sidebarTabButtonReview.classList.add('hidden');
            }

            // Set initial sidebar tab state (Rankings active)
            switchSidebarTab('sidebar-panel-rankings');
        }

        function closeSidebar() {
            state.isSidebarVisible = false;
            state.currentSidebarTabId = null;
        }

        // --- Sidebar Tab Switching ---
        function switchSidebarTab(targetPanelId) {
            state.currentSidebarView = targetPanelId.replace('sidebar-panel-', '');
        }

        // --- Review Editor Functions ---
        function showReviewEditor() {
            if (!state.currentSidebarTabId || state.currentSidebarTabId === 'eras') return;
            
            const eraData = state.savedData[state.currentSidebarTabId];
            const eraInfo = erasWithSongs.find(e => e.id === state.currentSidebarTabId);
            if (!eraData || !eraInfo) return;

            // Update UI
            state.reviewDisplayArea.classList.add('hidden');
            document.getElementById('edit-review-btn').classList.add('hidden');
            document.getElementById('review-editor-form').classList.remove('hidden');
            state.isReviewEditorVisible = true;

            state.reviewEditorEraName.textContent = eraInfo.name;

            // Set initial values in editor
            const currentRating = eraData.rating || 0;
            state.reviewEditorRatingInputs.forEach(input => {
                input.checked = parseInt(input.value, 10) === currentRating;
            });
            
            updateReviewEditorRatingDescription(currentRating);
            state.reviewEditorCommentInput.value = eraData.comment || '';
            updateReviewEditorCharCount();
        }

        function hideReviewEditor() {
            state.reviewDisplayArea.classList.remove('hidden');
            document.getElementById('edit-review-btn').classList.remove('hidden');
            document.getElementById('review-editor-form').classList.add('hidden');
            state.isReviewEditorVisible = false;
        }

        function updateReviewEditorRatingDescription(ratingValue) {
            state.reviewEditorRatingDescription.textContent = RATING_DESCRIPTIONS[ratingValue] || '\u00A0';
        }

        function updateReviewEditorCharCount() {
            const currentLength = state.reviewEditorCommentInput.value.length;
            state.reviewEditorCommentCharCount.textContent = `${currentLength} / ${COMMENT_MAX_LENGTH}`;
        }

        // --- Chip/Tab Functions ---
        function logCurrentSelection() {
            const currentSelection = state.currentSelectionOrders[state.activeTabId] || [];
            console.log(`Selection order for ${state.activeTabId}:`, currentSelection);
        }

        function updateTabButtonCount(tabId) {
            const button = document.getElementById(`tab-button-${tabId}`);
            if (!button) return;
            
            const countSpan = button.querySelector('.tab-count');
            const totalTags = parseInt(button.dataset.totalTags || '0', 10);
            const selectedCount = (state.currentSelectionOrders[tabId] || []).length;
            
            if (countSpan) {
                countSpan.textContent = `${selectedCount} of ${totalTags}`;
            }
        }

        function reorderChipsInContainer(tabId) {
            const panel = document.getElementById(`panel-${tabId}`);
            if (!panel) return;
            
            const chipContainer = panel.querySelector('.chip-container');
            if (!chipContainer) return;

            const currentSelection = state.currentSelectionOrders[tabId] || [];
            const allChips = Array.from(chipContainer.querySelectorAll('.chip'));
            const selectedChips = [];
            const unselectedChips = [];
            
            allChips.forEach(chip => {
                if (currentSelection.includes(chip.dataset.tag)) selectedChips.push(chip);
                else unselectedChips.push(chip);
            });

            selectedChips.sort((a, b) => 
                currentSelection.indexOf(a.dataset.tag) - currentSelection.indexOf(b.dataset.tag)
            );
            
            const originalList = (tabId === 'eras') ? eraNamesInOrder : (originalSongLists[tabId] || []);
            unselectedChips.sort((a, b) => 
                originalList.indexOf(a.dataset.tag) - originalList.indexOf(b.dataset.tag)
            );

            chipContainer.innerHTML = '';
            selectedChips.forEach(chip => chipContainer.appendChild(chip));
            unselectedChips.forEach(chip => chipContainer.appendChild(chip));

            updateChipRanksAndStyles(tabId);
        }

        function updateChipRanksAndStyles(tabId) {
            const panel = document.getElementById(`panel-${tabId}`);
            if (!panel) return;
            
            const chipContainer = panel.querySelector('.chip-container');
            if (!chipContainer) return;

            const chips = chipContainer.querySelectorAll('.chip');
            const currentSelection = state.currentSelectionOrders[tabId] || [];
            const isMaxSelected = currentSelection.length >= MAX_SELECTION;

            chips.forEach(chip => {
                const tag = chip.dataset.tag;
                const indexInSelection = currentSelection.indexOf(tag);
                chip.innerHTML = '';
                chip.classList.remove('disabled', 'opacity-50', 'cursor-not-allowed', 'pointer-events-none');

                if (indexInSelection !== -1) {
                    const rank = indexInSelection + 1;
                    chip.innerHTML = createRankIndicatorHTML(rank);
                    chip.appendChild(document.createTextNode(tag));
                    chip.setAttribute('aria-checked', 'true');
                    chip.dataset.rank = rank;
                    chip.classList.add('bg-blue-500', 'text-white', 'border-blue-500');
                    chip.classList.remove('border-gray-300', 'bg-gray-100', 'text-gray-700');
                } else {
                    chip.appendChild(document.createTextNode(tag));
                    chip.setAttribute('aria-checked', 'false');
                    delete chip.dataset.rank;
                    chip.classList.add('border-gray-300', 'bg-gray-100', 'text-gray-700');
                    chip.classList.remove('bg-blue-500', 'text-white', 'border-blue-500');
                    
                    if (isMaxSelected) {
                        chip.classList.add('disabled', 'opacity-50', 'cursor-not-allowed', 'pointer-events-none');
                        chip.classList.remove('bg-gray-100', 'border-gray-300', 'text-gray-700');
                        chip.classList.add('bg-gray-100', 'border-gray-200', 'text-gray-400');
                    } else {
                        chip.classList.remove('bg-gray-100', 'border-gray-200', 'text-gray-400');
                        chip.classList.add('bg-gray-100', 'border-gray-300', 'text-gray-700');
                    }
                }
            });
        }

        function handleChipClick(event) {
            event.preventDefault();
            const chip = event.currentTarget;
            const tag = chip.dataset.tag;
            const chipContainer = chip.closest('.chip-container');
            const tabId = chipContainer?.dataset.tabId;
            
            if (!tabId || chip.classList.contains('disabled')) return;

            if (!state.currentSelectionOrders[tabId]) {
                state.currentSelectionOrders[tabId] = [];
            }
            
            let currentSelection = state.currentSelectionOrders[tabId];
            const isSelected = currentSelection.includes(tag);

            if (!isSelected) {
                if (currentSelection.length >= MAX_SELECTION) {
                    alert(`You can only select up to ${MAX_SELECTION} items for this tab.`);
                    return;
                }
                currentSelection.push(tag);
            } else {
                state.currentSelectionOrders[tabId] = currentSelection.filter(selectedTag => selectedTag !== tag);
            }

            reorderChipsInContainer(tabId);
            updateTabButtonCount(tabId);
            logCurrentSelection();
        }

        function handleChipKeyDown(event) {
            const chip = event.currentTarget;
            if (chip.classList.contains('disabled')) {
                event.preventDefault();
                return;
            }
            
            if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault();
                handleChipClick(event);
            }
        }

        function populateChips(tabId, tags) {
            const panel = document.getElementById(`panel-${tabId}`);
            if (!panel) return;
            
            const chipContainer = panel.querySelector('.chip-container');
            if (!chipContainer) return;
            
            chipContainer.innerHTML = '';
            const tagsToPopulate = (tabId === 'eras') ? eraNamesInOrder : (originalSongLists[tabId] || []);
            
            tagsToPopulate.forEach((tag) => {
                const chip = document.createElement('div');
                chip.className = 'chip no-hover-highlight border border-gray-300 bg-gray-100 text-gray-700 text-sm font-medium rounded-full cursor-pointer transition-colors';
                chip.dataset.tag = tag;
                chip.setAttribute('role', 'checkbox');
                chip.setAttribute('aria-checked', 'false');
                chip.setAttribute('tabindex', '0');
                chip.addEventListener('touchstart', handleChipClick, { passive: false });
                chip.addEventListener('click', handleChipClick);
                chip.addEventListener('keydown', handleChipKeyDown);
                chipContainer.appendChild(chip);
            });
            
            updateChipRanksAndStyles(tabId);
        }

        function switchTab(targetTabId, force = false) {
            if (!force && state.activeTabId === targetTabId) return;

            const currentTabButton = document.getElementById(`tab-button-${state.activeTabId}`);
            const currentPanel = document.getElementById(`panel-${state.activeTabId}`);
            
            if (currentTabButton) {
                currentTabButton.classList.remove('active', 'border-blue-500', 'bg-blue-50', 'text-blue-600', 'font-semibold');
                currentTabButton.classList.add('border-transparent', 'text-gray-500');
                currentTabButton.setAttribute('aria-selected', 'false');
            }
            
            if (currentPanel) {
                currentPanel.classList.add('hidden');
            }

            const newTabButton = document.getElementById(`tab-button-${targetTabId}`);
            const newPanel = document.getElementById(`panel-${targetTabId}`);
            
            if (newTabButton) {
                newTabButton.classList.add('active', 'border-blue-500', 'bg-blue-50', 'text-blue-600', 'font-semibold');
                newTabButton.classList.remove('border-transparent', 'text-gray-500');
                newTabButton.setAttribute('aria-selected', 'true');
                newTabButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
            
            if (newPanel) {
                newPanel.classList.remove('hidden');
            }

            state.activeTabId = targetTabId;
            logCurrentSelection();
        }

        function initializeTabs() {
            state.tabButtonsContainer.innerHTML = '';
            state.tabPanelsContainer.innerHTML = '';
            
            const erasTags = erasWithSongs.map(era => era.name);
            createTab('eras', 'Eras', erasTags, true);
            
            erasWithSongs.forEach(era => {
                createTab(era.id, era.name, era.songs);
            });
            
            Object.keys(state.currentSelectionOrders).forEach(tabId => {
                updateTabButtonCount(tabId);
            });
        }

        function createTab(tabId, tabName, tags, isActive = false) {
            const button = document.createElement('button');
            const baseButtonClasses = 'tab-button no-hover-highlight flex flex-col items-center whitespace-nowrap py-2 px-2 border-b-2 font-medium text-sm';
            const activeClasses = 'active border-blue-500 bg-blue-50 text-blue-600 font-semibold';
            const inactiveClasses = 'border-transparent text-gray-500';
            
            button.className = `${baseButtonClasses} ${isActive ? activeClasses : inactiveClasses}`;
            button.dataset.tabTarget = `#panel-${tabId}`;
            button.dataset.totalTags = tags.length;
            button.setAttribute('role', 'tab');
            button.setAttribute('aria-controls', `panel-${tabId}`);
            button.setAttribute('aria-selected', isActive ? 'true' : 'false');
            button.id = `tab-button-${tabId}`;
            
            const nameSpan = document.createElement('span');
            nameSpan.textContent = tabName;
            button.appendChild(nameSpan);
            
            const countSpan = document.createElement('span');
            countSpan.className = 'tab-count text-xs text-gray-400 mt-1';
            const initialSelectedCount = (state.currentSelectionOrders[tabId] || []).length;
            countSpan.textContent = `${initialSelectedCount} of ${tags.length}`;
            button.appendChild(countSpan);
            
            button.addEventListener('click', () => switchTab(tabId));
            state.tabButtonsContainer.appendChild(button);

            const panel = document.createElement('div');
            panel.id = `panel-${tabId}`;
            panel.className = `tab-panel ${isActive ? '' : 'hidden'}`;
            panel.setAttribute('role', 'tabpanel');
            panel.setAttribute('aria-labelledby', `tab-button-${tabId}`);
            
            const titleText = tabId === 'eras' ? 'Select up to 3 Eras:' : `Select up to 3 Songs from ${tabName}:`;
            panel.innerHTML = `
                <h2 class="text-lg font-semibold text-gray-700 mb-4">${titleText}</h2>
                <div class="chip-container flex flex-wrap gap-3 mb-6" data-tab-id="${tabId}"></div>
            `;
            
            state.tabPanelsContainer.appendChild(panel);
            populateChips(tabId, tags);
        }

        // Initialize when the component is mounted
        function initializeDOMElements() {
            // Main elements
            state.dashboardGridContainer = document.getElementById('dashboard-grid');
            state.tabButtonsContainer = document.getElementById('tab-buttons');
            state.tabPanelsContainer = document.getElementById('tab-panels');
            
            // Sidebar elements
            state.sidebarTitleContainer = document.getElementById('sidebar-title-container');
            state.sidebarChipContainer = document.getElementById('sidebar-chip-container');
            state.sidebarTabButtonReview = document.getElementById('sidebar-tab-button-review');
            
            // Review elements
            state.reviewDisplayArea = document.getElementById('review-display-area');
            state.reviewDisplayStars = document.getElementById('review-display-stars');
            state.reviewDisplayComment = document.getElementById('review-display-comment');
            state.reviewEditorEraName = document.getElementById('review-editor-era-name');
            state.reviewEditorCommentInput = document.getElementById('review-editor-comment-input');
            state.reviewEditorCommentCharCount = document.getElementById('review-editor-comment-char-count');
            state.reviewEditorRatingInputs = document.querySelectorAll('#review-editor-form .star-rating input[name="review-editor-rating"]');
            state.reviewEditorRatingDescription = document.getElementById('review-editor-rating-description');
            
            // Set up review editor events
            state.reviewEditorCommentInput?.addEventListener('input', updateReviewEditorCharCount);
            state.reviewEditorRatingInputs?.forEach(input => {
                input.addEventListener('change', (e) => {
                    updateReviewEditorRatingDescription(parseInt(e.target.value, 10));
                });
            });
        }

        // Return all methods and state for the template
        return {
            ...toRefs(state),
            showScreen,
            showSaveConfirmModal,
            hideSaveConfirmModal,
            saveAndExit,
            closeSidebar,
            switchSidebarTab,
            showReviewEditor,
            hideReviewEditor,
            saveReview,
            
            // Lifecycle hooks
            onMounted() {
                initializeDOMElements();
                loadRankings();
                showScreen('dashboard');
            }
        };
    }
});

// Mount the app when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app.mount('#app');
});
