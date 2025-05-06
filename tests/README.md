# Sidebar Functionality Tests

This directory contains automated tests for the Music Besties application, focusing on sidebar functionality.

## Test Coverage

The current test suite (`sidebar_tests.js`) tests:

1. **Left Sidebar Navigation**
   - Opening the left sidebar
   - Clicking navigation links
   - Verifying navigation occurs
   - Checking if sidebar closes after navigation

2. **Right Sidebar Tabs**
   - Opening the right sidebar
   - Switching to the Review tab
   - Interacting with rating stars
   - Verifying tab content changes

## Running the Tests

### Prerequisites

- Node.js installed
- Application running locally (default: http://localhost:53541)
- Chrome browser installed

### Commands

Run the tests using npm:

```bash
# Make sure the app is running in another terminal first
npm run dev

# In a separate terminal, run the tests
npm run test:sidebar
```

### Test Results

The test results will be displayed in the console, showing which tests passed or failed.
Screenshots are saved in the `tests/screenshots` directory for visual verification.

## Troubleshooting

If tests fail, check:

1. Is the application running at the expected URL?
2. Has the UI structure changed? (selectors may need updating)
3. Are there timing issues? (may need to adjust sleep durations)

## Modifying Tests

To run tests in visible browser mode (not headless), uncomment this line in `sidebar_tests.js`:
```javascript
// options.addArguments('--headless');
```
