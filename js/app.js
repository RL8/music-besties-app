// --- State ---
let savedData = {};
let currentSelectionOrders = {};
let activeTabId = 'eras';
let currentScreen = 'dashboard';
let currentSidebarTabId = null;
let currentSidebarView = 'rankings'; // 'rankings' or 'review'

// --- DOM Elements ---
document.addEventListener('DOMContentLoaded', () => {
    initializeDOMElements();
    loadRankings();
    setupEventListeners();
    showScreen('dashboard'); // Start on the dashboard
});

function initializeDOMElements() {
    // Main screens
    window.screenDashboard = document.getElementById('screen-dashboard');
    window.screenEdit = document.getElementById('screen-edit');
    
    // Tab containers
    window.tabButtonsContainer = document.getElementById('tab-buttons');
    window.tabPanelsContainer = document.getElementById('tab-panels');
    
    // Dashboard elements
    window.dashboardGridContainer = document.getElementById('dashboard-grid');
    
    // Modal elements
    window.saveConfirmModal = document.getElementById('save-confirm-modal');
    
    // Sidebar elements
    window.viewSidebar = document.getElementById('view-sidebar');
    window.sidebarTitleContainer = document.getElementById('sidebar-title-container');
    window.sidebarChipContainer = document.getElementById('sidebar-chip-container');
    window.sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    
    // Sidebar tabs/panels
    window.sidebarTabNav = document.getElementById('sidebar-tab-nav');
    window.sidebarTabButtonReview = document.getElementById('sidebar-tab-button-review');
    window.sidebarPanelRankings = document.getElementById('sidebar-panel-rankings');
    window.sidebarPanelReview = document.getElementById('sidebar-panel-review');
    
    // Review view elements
    window.reviewDisplayArea = document.getElementById('review-display-area');
    window.reviewDisplayStars = document.getElementById('review-display-stars');
    window.reviewDisplayComment = document.getElementById('review-display-comment');
    window.editReviewBtn = document.getElementById('edit-review-btn');
    
    // Review edit elements
    window.reviewEditorForm = document.getElementById('review-editor-form');
    window.reviewEditorEraName = document.getElementById('review-editor-era-name');
    window.reviewEditorCommentInput = document.getElementById('review-editor-comment-input');
    window.reviewEditorCommentCharCount = document.getElementById('review-editor-comment-char-count');
    window.reviewEditorRatingInputs = document.querySelectorAll('#review-editor-form .star-rating input[name="review-editor-rating"]');
    window.reviewEditorRatingDescription = document.getElementById('review-editor-rating-description');
    window.cancelEditReviewBtn = document.getElementById('cancel-edit-review-btn');
    window.saveReviewBtn = document.getElementById('save-review-btn');
}

// --- Utility Functions ---
function deepCopy(obj) { 
    return JSON.parse(JSON.stringify(obj)); 
}

function showModal(modalElement) { 
    modalElement.classList.add('visible'); 
}

function hideModal(modalElement) { 
    modalElement.classList.remove('visible'); 
}

function showScreen(screenId) {
    closeViewSidebar();
    if (screenId === 'dashboard') {
        screenDashboard.classList.remove('hidden');
        screenEdit.classList.add('hidden');
        currentScreen = 'dashboard';
        populateDashboard();
    } else if (screenId === 'edit') {
        currentSelectionOrders = {};
        Object.keys(savedData).forEach(key => {
            if (Array.isArray(savedData[key])) {
                currentSelectionOrders[key] = deepCopy(savedData[key]);
            } else if (typeof savedData[key] === 'object' && savedData[key]?.selection) {
                currentSelectionOrders[key] = deepCopy(savedData[key].selection);
            }
        });
        initializeTabs();
        Object.keys(currentSelectionOrders).forEach(tabId => {
            reorderChipsInContainer(tabId);
            updateTabButtonCount(tabId);
        });
        switchTab('eras', true);
        screenDashboard.classList.add('hidden');
        screenEdit.classList.remove('hidden');
        screenEdit.classList.add('flex');
        currentScreen = 'edit';
    }
}

// --- Persistence Functions ---
function loadRankings() {
    try {
        const dataStr = localStorage.getItem(LOCAL_STORAGE_KEY);
        savedData = dataStr ? JSON.parse(dataStr) : {};
        if (!savedData['eras']) savedData['eras'] = [];
        erasWithSongs.forEach(era => {
            if (!savedData[era.id]) {
                savedData[era.id] = { selection: [], rating: 0, comment: '' };
            } else if (savedData[era.id].selection === undefined) {
                 savedData[era.id] = { selection: [], rating: savedData[era.id].rating || 0, comment: savedData[era.id].comment || '' };
            }
        });
        console.log("Data loaded:", savedData);
    } catch (e) {
        console.error("Failed to load data:", e);
        savedData = { eras: [] };
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
         console.log(`Review saved for ${tabId}:`, savedData[tabId]);
         return true;
     } catch (e) {
         console.error(`Failed to save review for ${tabId}:`, e);
         alert("Error saving review!");
         return false;
     }
}

// --- Dashboard Functions ---
function populateDashboard() {
    dashboardGridContainer.innerHTML = '';
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

    const eraData = savedData[tabId];
    const selectedCount = (tabId === 'eras' ? eraData?.length : eraData?.selection?.length) || 0;
    const rating = (tabId !== 'eras' ? eraData?.rating : 0) || 0;
    const emoji = eraEmojis[tabId] || eraEmojis[title] || '';
    let rank = -1;
    let rankIndicatorHTML = '';
    let starsHTML = '<span class="dashboard-stars">&nbsp;</span>';

    if (tabId !== 'eras') {
        const eraRankIndex = (savedData['eras'] || []).indexOf(title);
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
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleDashboardCardClick(e); }
    });
    dashboardGridContainer.appendChild(card);
}

function handleDashboardCardClick(event) {
    const card = event.currentTarget;
    const tabId = card.dataset.tabId;
    const rank = card.dataset.rank;
    if (tabId) {
        openViewSidebar(tabId, rank);
    }
}

// --- Sidebar Functions ---
function openViewSidebar(tabId, rank = '') {
    currentSidebarTabId = tabId;
    const eraData = erasWithSongs.find(e => e.id === tabId || e.name === tabId);
    const baseTitle = (tabId === 'eras') ? 'Eras' : (eraData?.name || 'Rankings');
    const emoji = eraEmojis[tabId] || eraEmojis[baseTitle] || '';

    // Build title container content
    let titleContainerHTML = `<span class="emoji">${emoji}</span>`;
    titleContainerHTML += `<span class="sidebar-title title-text">${baseTitle}</span>`;
    if (tabId !== 'eras' && rank) {
        titleContainerHTML += createRankIndicatorHTML(parseInt(rank, 10));
    }
    sidebarTitleContainer.innerHTML = titleContainerHTML;

    // Populate Chips (Rankings Panel)
    sidebarChipContainer.innerHTML = '';
    const allTags = (tabId === 'eras') ? eraNamesInOrder : (originalSongLists[tabId] || []);
    const savedSelection = (tabId === 'eras' ? savedData['eras'] : savedData[tabId]?.selection) || [];
    const displayOrder = [];
    const unselectedTags = [];
    allTags.forEach(tag => { if (!savedSelection.includes(tag)) unselectedTags.push(tag); });
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
        sidebarChipContainer.appendChild(chipDiv);
    });

    // Populate Review Display (Review Panel)
    if (tabId !== 'eras' && savedData[tabId]) {
        const rating = savedData[tabId].rating || 0;
        const comment = savedData[tabId].comment || '';
        reviewDisplayStars.innerHTML = rating > 0 ? '★'.repeat(rating) + '☆'.repeat(5 - rating) : '';
        reviewDisplayStars.classList.toggle('unrated', rating === 0);
        reviewDisplayComment.textContent = comment;
        if (rating === 0 && !comment) {
            reviewDisplayArea.innerHTML = '<p class="no-review">No review yet.</p>';
        } else {
             if (!reviewDisplayArea.contains(reviewDisplayStars)) reviewDisplayArea.prepend(reviewDisplayStars);
             if (!reviewDisplayArea.contains(reviewDisplayComment)) reviewDisplayArea.appendChild(reviewDisplayComment);
        }
        sidebarTabButtonReview.classList.remove('hidden');
        hideReviewEditor();
    } else {
        sidebarTabButtonReview.classList.add('hidden');
    }

    // Set initial sidebar tab state (Rankings active)
    switchSidebarTab('rankings');

    viewSidebar.classList.add('visible');
}

function closeViewSidebar() {
    viewSidebar.classList.remove('visible');
    currentSidebarTabId = null;
}

// --- Sidebar Tab Switching ---
function switchSidebarTab(targetPanelId) {
    const buttons = sidebarTabNav.querySelectorAll('.sidebar-tab-button');
    const panels = document.querySelectorAll('#sidebar-tab-panels .sidebar-tab-panel');

    buttons.forEach(button => {
        const isActive = button.dataset.target === `#${targetPanelId}`;
        button.classList.toggle('active', isActive);
    });

    panels.forEach(panel => {
        panel.classList.toggle('hidden', panel.id !== targetPanelId);
    });
    currentSidebarView = targetPanelId.replace('sidebar-panel-', '');
}

// --- Review Editor Functions ---
function showReviewEditor() {
     if (!currentSidebarTabId || currentSidebarTabId === 'eras') return;
     const eraData = savedData[currentSidebarTabId];
     const eraInfo = erasWithSongs.find(e => e.id === currentSidebarTabId);
     if (!eraData || !eraInfo) return;

     reviewDisplayArea.classList.add('hidden');
     editReviewBtn.classList.add('hidden');
     reviewEditorForm.classList.remove('hidden');

     reviewEditorEraName.textContent = eraInfo.name;

     const currentRating = eraData.rating || 0;
     reviewEditorRatingInputs.forEach(input => {
         input.checked = parseInt(input.value, 10) === currentRating;
     });
     updateReviewEditorRatingDescription(currentRating);
     reviewEditorCommentInput.value = eraData.comment || '';
     updateReviewEditorCharCount();
}

function hideReviewEditor() {
    reviewDisplayArea.classList.remove('hidden');
    editReviewBtn.classList.remove('hidden');
    reviewEditorForm.classList.add('hidden');
}

function updateReviewEditorRatingDescription(ratingValue) {
     reviewEditorRatingDescription.textContent = RATING_DESCRIPTIONS[ratingValue] || '\u00A0';
}

function updateReviewEditorCharCount() {
    const currentLength = reviewEditorCommentInput.value.length;
    reviewEditorCommentCharCount.textContent = `${currentLength} / ${COMMENT_MAX_LENGTH}`;
}

// --- Chip/Tab Functions ---
function logCurrentSelection() {
    const currentSelection = currentSelectionOrders[activeTabId] || [];
    console.log(`Selection order for ${activeTabId}:`, currentSelection);
}

function updateTabButtonCount(tabId) {
    const button = document.getElementById(`tab-button-${tabId}`);
    if (!button) return;
    const countSpan = button.querySelector('.tab-count');
    const totalTags = parseInt(button.dataset.totalTags || '0', 10);
    const selectedCount = (currentSelectionOrders[tabId] || []).length;
    if (countSpan) {
        countSpan.textContent = `${selectedCount} of ${totalTags}`;
    }
}

function reorderChipsInContainer(tabId) {
    const panel = document.getElementById(`panel-${tabId}`);
    if (!panel) return;
    const chipContainer = panel.querySelector('.chip-container');
    if (!chipContainer) return;

    const currentSelection = currentSelectionOrders[tabId] || [];
    const allChips = Array.from(chipContainer.querySelectorAll('.chip'));
    const selectedChips = [];
    const unselectedChips = [];
    allChips.forEach(chip => {
        if (currentSelection.includes(chip.dataset.tag)) selectedChips.push(chip);
        else unselectedChips.push(chip);
    });

    selectedChips.sort((a, b) => currentSelection.indexOf(a.dataset.tag) - currentSelection.indexOf(b.dataset.tag));
    const originalList = (tabId === 'eras') ? eraNamesInOrder : (originalSongLists[tabId] || []);
    unselectedChips.sort((a, b) => originalList.indexOf(a.dataset.tag) - originalList.indexOf(b.dataset.tag));

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
    const currentSelection = currentSelectionOrders[tabId] || [];
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

    if (!currentSelectionOrders[tabId]) {
        currentSelectionOrders[tabId] = [];
    }
    let currentSelection = currentSelectionOrders[tabId];
    const isSelected = currentSelection.includes(tag);

    if (!isSelected) {
        if (currentSelection.length >= MAX_SELECTION) {
            alert(`You can only select up to ${MAX_SELECTION} items for this tab.`);
            return;
        }
        currentSelection.push(tag);
    } else {
        currentSelectionOrders[tabId] = currentSelection.filter(selectedTag => selectedTag !== tag);
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
    if (!force && activeTabId === targetTabId) return;

    const currentTabButton = document.getElementById(`tab-button-${activeTabId}`);
    const currentPanel = document.getElementById(`panel-${activeTabId}`);
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

    activeTabId = targetTabId;
    logCurrentSelection();
}

function initializeTabs() {
    tabButtonsContainer.innerHTML = '';
    tabPanelsContainer.innerHTML = '';
    const erasTags = erasWithSongs.map(era => era.name);
    createTab('eras', 'Eras', erasTags, true);
    erasWithSongs.forEach(era => {
        createTab(era.id, era.name, era.songs);
    });
     Object.keys(currentSelectionOrders).forEach(tabId => {
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
    const initialSelectedCount = (currentSelectionOrders[tabId] || []).length;
    countSpan.textContent = `${initialSelectedCount} of ${tags.length}`;
    button.appendChild(countSpan);
    button.addEventListener('click', () => switchTab(tabId));
    tabButtonsContainer.appendChild(button);

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
    tabPanelsContainer.appendChild(panel);
    populateChips(tabId, tags);
}

// --- Event Listeners ---
function setupEventListeners() {
    // Screen Navigation
    document.getElementById('edit-rankings-btn')?.addEventListener('click', () => showScreen('edit'));
    document.getElementById('cancel-edit-btn')?.addEventListener('click', () => showScreen('dashboard'));

    // Save Confirmation Modal
    document.getElementById('save-edit-btn')?.addEventListener('click', () => showModal(saveConfirmModal));
    document.getElementById('cancel-save-modal-btn')?.addEventListener('click', () => hideModal(saveConfirmModal));
    document.getElementById('confirm-save-modal-btn')?.addEventListener('click', () => {
        if (saveRankings()) {
             hideModal(saveConfirmModal);
             showScreen('dashboard');
        }
    });

    // Sidebar
    sidebarCloseBtn?.addEventListener('click', closeViewSidebar);
    sidebarTabNav?.querySelectorAll('.sidebar-tab-button').forEach(button => {
        button.addEventListener('click', () => {
            switchSidebarTab(button.dataset.target.substring(1));
        });
    });

    // Review Section
    editReviewBtn?.addEventListener('click', showReviewEditor);
    cancelEditReviewBtn?.addEventListener('click', hideReviewEditor);
    reviewEditorCommentInput?.addEventListener('input', updateReviewEditorCharCount);
    reviewEditorRatingInputs?.forEach(input => {
         input.addEventListener('change', (e) => {
             updateReviewEditorRatingDescription(parseInt(e.target.value, 10));
         });
    });
    saveReviewBtn?.addEventListener('click', () => {
         if (currentSidebarTabId && currentSidebarTabId !== 'eras') {
             const selectedRatingInput = document.querySelector('#review-editor-form .star-rating input[name="review-editor-rating"]:checked');
             const rating = selectedRatingInput ? parseInt(selectedRatingInput.value, 10) : 0;
             const comment = reviewEditorCommentInput.value.trim();

             if (saveReview(currentSidebarTabId, rating, comment)) {
                 reviewDisplayStars.innerHTML = rating > 0 ? '★'.repeat(rating) + '☆'.repeat(5 - rating) : '';
                 reviewDisplayStars.classList.toggle('unrated', rating === 0);
                 reviewDisplayComment.textContent = comment;
                  if (rating === 0 && !comment) {
                     reviewDisplayArea.innerHTML = '<p class="no-review">No review yet.</p>';
                  } else {
                      if (!reviewDisplayArea.contains(reviewDisplayStars)) reviewDisplayArea.prepend(reviewDisplayStars);
                      if (!reviewDisplayArea.contains(reviewDisplayComment)) reviewDisplayArea.appendChild(reviewDisplayComment);
                  }

                 hideReviewEditor();
                 populateDashboard();
             }
         }
    });
}
