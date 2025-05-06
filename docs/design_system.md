# Music Besties - Design System

**1. Introduction**

* **Purpose:** This design system ensures visual consistency across the Music Besties app, improves collaboration between design and development, and documents the existing UI patterns.
* **Goals:** Maintain a cohesive user experience across all features, document the current design patterns, and establish a shared visual language.
* **Audience:** Designers and developers working on the Music Besties app.
* **Guiding Principles:** User-friendly, intuitive, accessible, and focused on music ranking functionality.

**2. Foundational Elements**

* **Design Tokens:**
    * **Colors:**
        | Token Name          | Value   | Usage                                     |
        | :------------------ | :------ | :---------------------------------------- |
        | `--color-bg-main`   | #f3f4f6 | Main background color                     |
        | `--color-bg-white`  | #ffffff | Card and content background               |
        | `--color-text-main` | #1f2937 | Primary text color                        |
        | `--color-text-secondary` | #6b7280 | Secondary text, counts, descriptions   |
        | `--color-text-light` | #9ca3af | Lighter text, disabled states            |
        | `--color-blue-primary` | #3b82f6 | Primary action buttons, focus states    |
        | `--color-blue-dark` | #2563eb | Active tabs, selected states              |
        | `--color-blue-light` | #eff6ff | Active tab background                     |
        | `--color-red`       | #dc2626 | Cancel buttons, destructive actions       |
        | `--color-green`     | #10b981 | Save/confirm buttons, success states      |
        | `--color-yellow`    | #fbbf24 | Star ratings                              |
        | `--color-gray-border` | #e5e7eb | Borders, dividers                       |
        | `--color-gray-light` | #f9fafb | Light backgrounds (sidebar)              |

    * **Typography:**
        | Token Name        | Value             | Usage                                |
        | :---------------- | :---------------- | :----------------------------------- |
        | `--font-family-base` | 'Inter', sans-serif | Default app font                     |
        | `--font-size-xs`  | 0.75rem           | Small text, counts, metadata          |
        | `--font-size-sm`  | 0.875rem          | Card titles, secondary text           |
        | `--font-size-base` | 1rem             | Body text                             |
        | `--font-size-lg`  | 1.125rem          | Sidebar titles                        |
        | `--font-size-xl`  | 1.25rem           | Section headings                      |
        | `--font-size-2xl` | 1.5rem            | Page titles                           |
        | `--font-weight-normal` | 400          | Regular text                          |
        | `--font-weight-medium` | 500          | Emphasized text                       |
        | `--font-weight-semibold` | 600        | Headings, buttons                     |
        | `--font-weight-bold` | 700            | Strong emphasis, main headings        |
        | `--line-height-tight` | 1.25          | Headings                              |
        | `--line-height-base` | 1.5            | Body text                             |

    * **Spacing:**
        | Token Name     | Value | Usage                                  |
        | :------------- | :---- | :------------------------------------- |
        | `--spacing-1`  | 0.25rem | Tiny spacing, icon padding           |
        | `--spacing-2`  | 0.5rem  | Small spacing, tight elements        |
        | `--spacing-3`  | 0.75rem | Card padding                         |
        | `--spacing-4`  | 1rem    | Standard spacing, component separation |
        | `--spacing-6`  | 1.5rem  | Section spacing, modal padding       |
        | `--spacing-8`  | 2rem    | Large spacing between major sections |

    * **Effects:**
        | Token Name      | Value                         | Usage                           |
        | :-------------- | :---------------------------- | :------------------------------ |
        | `--shadow-sm`   | 0 1px 2px 0 rgba(0,0,0,0.05)  | Card shadows                    |
        | `--shadow-md`   | 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06) | Elevated components |
        | `--shadow-lg`   | 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05) | Modals, popovers |
        | `--radius-sm`   | 0.25rem                       | Small border radius             |
        | `--radius-md`   | 0.375rem                      | Medium border radius            |
        | `--radius-lg`   | 0.5rem                        | Large border radius (cards, modals) |
        | `--radius-full` | 9999px                        | Pill shapes, rank indicators    |
        | `--transition-fast` | 0.15s ease-in-out         | All UI transitions              |

    * **Iconography:**
        * The app primarily uses emoji as icons (defined in data.js)
        * Each era has an associated emoji for visual identification
        * Text-based close button (×) for the sidebar

**3. UI Components**

* **Buttons:**
    * **Overview:** Interactive elements that trigger actions
    * **Visual Style:** 
        * Primary buttons use blue/green backgrounds with white text
        * Secondary/cancel buttons use red text or gray backgrounds
        * All buttons have rounded corners (border-radius: 0.375rem)
        * Padding: 0.5rem 1rem (py-2 px-4) for primary, 0.25rem 0.75rem (py-1 px-3) for secondary
    * **Variations/States:**
        * Primary Action: Blue background (#3b82f6), white text
        * Confirm/Save: Green background (#10b981), white text
        * Cancel/Destructive: Red text (#dc2626), transparent background
        * Secondary: Gray background (#f3f4f6), dark text
        * Active: Darker shade of the button color
        * Focus: 2px blue outline with 2px offset
    * **Usage Guidelines:**
        * Primary buttons for main actions (Edit, Save)
        * Secondary buttons for alternative actions
        * Text-only buttons for cancel actions
    * **Accessibility:**
        * All buttons have focus states
        * Interactive elements use the no-hover-highlight class to remove tap highlights on mobile

* **Chips:**
    * **Overview:** Compact UI elements used to display items in a list, especially for rankings
    * **Visual Style:**
        * Inline-flex display with centered alignment
        * Padding: 0.25rem 0.75rem
        * May include rank indicators
    * **Variations/States:**
        * Standard: Light background with dark text
        * Disabled: Opacity 0.5, gray background, non-interactive
        * With Rank: Includes a circular rank indicator with emoji
    * **Usage Guidelines:**
        * Used primarily in the sidebar to display ranked items
        * Can include rank indicators to show position

* **Cards:**
    * **Overview:** Container elements used to display grouped information
    * **Visual Style:**
        * White background
        * Border radius: 0.5rem
        * Light shadow
        * Border: 1px solid #e5e7eb
        * Padding: 0.75rem
    * **Variations/States:**
        * Standard: White background, light shadow
        * Selected: Highlighted state for selected items
        * With Rank: Can include a rank indicator
        * With Stars: Can display star ratings
    * **Usage Guidelines:**
        * Used in the dashboard grid to display items
        * Can show title, count, rank, and star ratings

* **Tabs:**
    * **Overview:** Navigation elements used to switch between content views
    * **Visual Style:**
        * Horizontal arrangement with spacing between tabs
        * Border-bottom for active state
    * **Variations/States:**
        * Active: Blue border-bottom, blue text, light blue background
        * Inactive: Gray text, no border
    * **Usage Guidelines:**
        * Used for switching between different categories or views
        * Active tab should be clearly distinguished

* **Modal:**
    * **Overview:** Overlay dialogs for focused interactions
    * **Visual Style:**
        * White background
        * Border radius: 0.5rem
        * Box shadow for elevation
        * Padding: 1.5rem
        * Backdrop with blur effect
    * **Variations/States:**
        * Visible: Fully opaque overlay, modal at scale 1
        * Hidden: Transparent overlay, modal at scale 0.95
    * **Usage Guidelines:**
        * Used for confirmation dialogs (save confirmation)
        * Should include title, message, and action buttons

* **Sidebar:**
    * **Overview:** Side panel for detailed views and interactions
    * **Visual Style:**
        * Fixed position on the right side
        * Light gray background (#f9fafb)
        * Box shadow for elevation
        * Width: 85% (max 350px)
    * **Variations/States:**
        * Visible: Transformed to x:0
        * Hidden: Transformed to x:100%
    * **Usage Guidelines:**
        * Used for detailed views of selected items
        * Contains tabs for different views (Rankings, Review & Notes)

* **Star Rating:**
    * **Overview:** Interactive element for rating items
    * **Visual Style:**
        * Yellow stars (#fbbf24)
        * Interactive labels with radio inputs
    * **Variations/States:**
        * Selected: Filled star
        * Unselected: Empty star
        * Hover: Highlighted star
    * **Usage Guidelines:**
        * Used for rating items from 1-5 stars
        * Each star has an associated text description

**4. Layout Patterns**

* **Grid System:**
    * The app uses a responsive grid system based on Tailwind CSS
    * Dashboard grid uses 2 columns on mobile, 3 columns on larger screens
    * Gap spacing of 0.75rem (mobile) to 1rem (desktop)

* **Common Layout Structures:**
    * **App Container:** Max-width of 36rem (max-w-xl) centered with auto margins
    * **Screen Layout:** Full-height screens with padding (p-4 sm:p-6)
    * **Header Layout:** Flex with space-between for title and action buttons
    * **Tab Layout:** Horizontal scrolling tabs with panels below
    * **Sidebar Layout:** Fixed position panel with header and scrollable content

* **Spacing Application:**
    * Consistent spacing using the spacing scale
    * Margins between sections: 1.5rem (mb-6)
    * Padding for containers: 1rem (p-4) on mobile, 1.5rem (p-6) on desktop
    * Gap between grid items: 0.75rem (gap-3) on mobile, 1rem (gap-4) on desktop

**5. Naming Conventions**

* **CSS/Styling:**
    * The app uses a combination of Tailwind utility classes and custom CSS
    * Custom classes use descriptive, functional names (e.g., chip, modal, dashboard-grid-card)
    * State modifiers use suffixes like .active, .visible, .selected
    * BEM-like naming for related elements (e.g., card-title, card-count)

**6. Contribution Guidelines**

* **How to Contribute:**
    * Follow the existing patterns and component styles
    * Use the established color palette and spacing scale
    * Test changes across different screen sizes
    * Maintain accessibility features like focus states

* **Maintenance:**
    * The design system is maintained alongside the codebase
    * Updates should be documented in this file

**7. Accessibility Guidelines**

* **Standards Compliance:**
    * The app aims for WCAG 2.1 AA compliance
    * Focus states are implemented for all interactive elements

* **Color Contrast:**
    * Text colors maintain sufficient contrast with backgrounds
    * Interactive elements have distinct focus states

* **Keyboard Navigation:**
    * All interactive elements are keyboard accessible
    * Focus states are visible for keyboard navigation
    * Tabindex is used appropriately for custom interactive elements

* **Focus Management:**
    * Focus states use a 2px blue outline with 2px offset
    * Focus is managed appropriately in modals and sidebars

* **Semantic HTML:**
    * The app uses appropriate HTML elements (buttons, headings, etc.)
    * ARIA attributes are used where needed

**8. Responsive Design Principles**

* **Breakpoints:**
    | Breakpoint Name | Width (px) | Target Devices                    |
    | :-------------- | :--------- | :-------------------------------- |
    | Default         | 0-639      | Mobile phones                     |
    | sm              | 640+       | Larger phones, small tablets      |

* **Component Adaptations:**
    * Dashboard grid: 2 columns on mobile, 3 columns on sm+
    * Padding increases on larger screens (p-4 → p-6)
    * Sidebar width: 85% with max-width of 350px

* **Touch Targets:**
    * Buttons and interactive elements have adequate size for touch
    * The no-hover-highlight class removes default tap highlights

**9. Performance Considerations**

* **Asset Optimization:**
    * The app uses system fonts and emoji instead of custom icons
    * External resources are preconnected (Google Fonts)

* **CSS Optimization:**
    * Tailwind CSS is used for efficient styling
    * Transitions are limited to specific properties

**10. Dark Mode / Theming Support**

* **Current Implementation:**
    * The app currently uses a light theme only
    * Each music era has its own associated color (emoji)

**11. Component Composition Rules**

* **Component Hierarchy:**
    * App container → Screens → Sections → Components
    * Modal and sidebar are positioned absolutely relative to the app container

* **Composition Patterns:**
    * Cards contain titles, counts, and optional rank indicators
    * Tabs contain tab buttons and associated panels
    * Sidebar contains header, tabs, and content panels

* **Spacing in Compositions:**
    * Consistent spacing between composed elements
    * Gap utility for evenly spaced children
    * Margin utilities for spacing between sections
