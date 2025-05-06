# 4. Component Details

This section provides detailed specifications for the key components in the Music Besties application.

## 4.1. Component Specifications

For implementation by the production team, here are the detailed specifications of key components:

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

## 4.2. Album Sidebar Panel

### 4.2.1. Panel Structure and Functionality

The Album Sidebar Panel is a sliding panel that provides detailed information about a selected album. It includes the following features:

- Album title and emoji
- List of songs
- Rating and review information
- Navigation to other albums

### 4.2.2. Album Example

The sidebar panel displays album information in a structured format, with clear sections for songs, ratings, and reviews.

**Figure 4.1.10: Album Sidebar Panel Layout**

```
+-----------------------------------------------------+
|  ← Red ❤️                                          |
+-----------------------------------------------------+
|                                                     |
| Songs:                                              |
|                                                     |
| Ranked:                                             |
| 1. All Too Well                                     |
| 2. State of Grace                                   |
| 3. 22                                               |
|                                                     |
| Unranked:                                           |
| • Red                                               |
| • I Knew You Were Trouble                           |
| • We Are Never Ever Getting Back Together           |
| • Begin Again                                       |
| • Holy Ground                                       |
| • The Last Time                                     |
| • I Almost Do                                       |
|                                                     |
| Your Review:                                        |
| ★★★★★                                              |
| "This album perfectly captures the emotions of      |
| heartbreak and moving on. All Too Well is an        |
| absolute masterpiece."                              |
|                                                     |
| Last updated: May 5, 2025                           |
|                                                     |
+-----------------------------------------------------+
```

*Detailed panel structure showing the song ranking interface with numbered positions and the scrollable unranked songs section. Demonstrates how the component handles varying amounts of content through scrolling while maintaining a consistent visual structure.*

## 4.3. Review Panel

The Review Panel allows users to add and edit reviews for albums. It includes:

- Star rating system (0-5 stars)
- Text input for comments
- Save and cancel buttons
- Timestamp information for when the review was last updated

**Figure 4.2.10: Review Panel Layout**

```
+-----------------------------------------------------+
|  Edit Review: Red ❤️                               |
+-----------------------------------------------------+
|                                                     |
| Rating:                                             |
|                                                     |
| ★★★★★                                              |
| ☆☆☆☆☆                                              |
|                                                     |
| Comments:                                           |
|                                                     |
| +---------------------------------------------------+
| | This album perfectly captures the emotions of     |
| | heartbreak and moving on. All Too Well is an      |
| | absolute masterpiece.                             |
| |                                                   |
| |                                                   |
| +---------------------------------------------------+
|                                                     |
| Last updated: May 5, 2025                           |
|                                                     |
| [Save]                [Cancel]                      |
|                                                     |
+-----------------------------------------------------+
```

*Comprehensive view of the star rating system and comment field with timestamp display for album reviews. Shows the expected input mechanisms and data display for the review creation and viewing process.*