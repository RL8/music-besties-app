# 2. Application Overview

## 2.1. High-Level Architecture

Music Besties follows a component-based architecture that promotes modularity, reusability, and maintainability. The application consists of two primary screens with supporting components that work together to create a cohesive user experience.

**Figure 2.1.10: Application Architecture**

```
+-----------------------------------------------------+
|                   Music Besties                     |
+-----------------------------------------------------+
|                                                     |
|  +-------------------+    +---------------------+   |
|  |                   |    |                     |   |
|  |    Dashboard      |<-->|    Edit Rankings    |   |
|  |     Screen        |    |       Screen        |   |
|  |                   |    |                     |   |
|  +-------------------+    +---------------------+   |
|           |                         |               |
|           v                         v               |
|  +-------------------+    +---------------------+   |
|  |                   |    |                     |   |
|  |  Album Sidebar    |    |  Confirmation       |   |
|  |     Panel         |    |     Modal           |   |
|  |                   |    |                     |   |
|  +-------------------+    +---------------------+   |
|                                                     |
+-----------------------------------------------------+
```

*Visual representation of the component relationships showing how the Dashboard and Edit Rankings screens interact with supporting panels. Provides developers with a clear understanding of the application's structural organization and navigation flow between major components.*

## 2.2. Component Hierarchy

The application is structured around these key components, which are implemented in Vue.js:

**Figure 2.2.10: Component Hierarchy**

```
App.vue
  |
  |--- DashboardCard.vue (Multiple instances in grid)
  |
  |--- EditRankingsTabs.vue
  |      |
  |      |--- DraggableItem.vue (Multiple instances)
  |
  |--- SidebarPanel.vue
  |
  |--- ModalDialog.vue
```

*Tree diagram showing the Vue.js component inheritance and composition structure from App.vue down to individual UI elements. Helps developers understand component dependencies and the proper location for implementing new features or modifications.*

- **App.vue**: The root component that manages routing and global state
- **DashboardCard.vue**: Reusable component for album display on the dashboard
- **EditRankingsTabs.vue**: Container for the ranking interface with tabs
- **DraggableItem.vue**: Interactive component for selection functionality
- **SidebarPanel.vue**: Sliding panel for detailed album information
- **ModalDialog.vue**: Reusable dialog component for confirmations

### 2.2.1. Component Specifications

For implementation by the production team, here are the detailed specifications of key components:

**Figure 2.2.20: DashboardCard Component Specification**

```
+----------------------------------+
| Component: DashboardCard         |
+----------------------------------+
| Props:                           |
| - tabId: string (required)       |
|   Album identifier               |
| - title: string (required)       |
|   Album title to display         |
| - emoji: string                  |
|   Emoji character for album      |
| - rating: number (0-5)           |
|   User's rating (whole numbers)  |
| - selectedCount: number          |
|   Number of selected songs       |
| - totalCount: number (required)  |
|   Total number of songs          |
+----------------------------------+
| Events:                          |
| - @open-sidebar: Emitted when    |
|   card is clicked                |
|   Payload: tabId                 |
+----------------------------------+
| CSS Classes:                     |
| - dashboard-grid-card            |
| - dashboard-stars                |
+----------------------------------+
```

*Technical blueprint detailing all required props, emitted events, and CSS classes for the album card component. Enables consistent implementation of album cards with proper data validation and event handling.*

**Figure 2.2.30: SidebarPanel Component Specification**

```
+----------------------------------+
| Component: SidebarPanel          |
+----------------------------------+
| Props:                           |
| - visible: boolean (required)    |
|   Controls panel visibility      |
| - tabId: string (required)       |
|   Current active album id        |
| - tabTitle: string (required)    |
|   Title to display in panel      |
| - sidebarTabs: Array (required)  |
|   Tab configuration objects      |
+----------------------------------+
| Events:                          |
| - @close: When panel closes      |
| - @switch-tab: When tab changes  |
|   Payload: tabId                 |
+----------------------------------+
| CSS Classes:                     |
| - fixed inset-0                  |
| - max-w-sm                       |
| - bg-white shadow-xl             |
+----------------------------------+
```

*Complete interface definition for the sliding panel including visibility controls and tab management. Ensures proper implementation of the panel's responsive behavior and event communication with parent components.*

**Figure 2.2.40: EditRankingsTabs Component Specification**

```
+----------------------------------+
| Component: EditRankingsTabs      |
+----------------------------------+
| Props:                           |
| - tabs: Array (required)         |
|   Tab configuration objects      |
| - activeTab: string (required)   |
|   Current active tab id          |
| - rankedItems: Array (required)  |
|   Items in ranked order          |
| - unrankedItems: Array (required)|
|   Items not yet ranked           |
+----------------------------------+
| Events:                          |
| - @switch-tab: When tab changes  |
|   Payload: tabId                 |
| - @toggle-rank: When item rank   |
|   changes                        |
|   Payload: {id, ranked}          |
+----------------------------------+
| CSS Classes:                     |
| - flex flex-col flex-grow        |
| - overflow-x-auto                |
| - sticky top-14 z-10             |
+----------------------------------+
```

*Technical requirements for the tab navigation system including data structures for ranked and unranked items. Facilitates correct implementation of the ranking interface with proper state management.*

## 2.3. Key Features Summary

The Music Besties application currently offers:

1. **Album organization**: Visual grid of albums with basic metadata
2. **Ranking system**: Interactive interface for ordering albums and songs
3. **Review capabilities**: Star ratings and text comments for albums
4. **Persistent storage**: Local saving of user preferences and rankings
5. **Responsive design**: Adaptation to various screen sizes and devices
6. **Filtering options**: Basic filtering through the tab interface

### 2.3.1. Visual Assets

The application uses emoji characters as visual identifiers for albums:

**Figure 2.3.10: Album Emoji Reference**

```
+----------------------------------+
| Album Emoji Reference            |
+----------------------------------+
| taylor-swift: 🤠                 |
| fearless: 💛                     |
| speak-now: 💜                    |
| red: ❤️                          |
| 1989: 🌊                         |
| reputation: 🐍                   |
| lover: 💖                        |
| folklore: 🌲                     |
| evermore: 🍂                     |
| midnights: ✨                    |
| ttpd: 🤍                         |
+----------------------------------+
```

*Comprehensive mapping between album identifiers and their corresponding emoji characters for visual representation. Maintains visual consistency across the application by standardizing the emoji usage for each album.*

These emoji characters are used consistently throughout the application to provide visual recognition of albums without requiring image assets.