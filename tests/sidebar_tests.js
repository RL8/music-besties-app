const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');
const path = require('path');

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

// Helper function to take screenshots
async function takeScreenshot(driver, name) {
  try {
    const screenshot = await driver.takeScreenshot();
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const fileName = `${name}_${timestamp}.png`;
    fs.writeFileSync(path.join(screenshotsDir, fileName), screenshot, 'base64');
    console.log(`Screenshot saved: ${fileName}`);
  } catch (error) {
    console.error(`Failed to take screenshot ${name}: ${error.message}`);
  }
}

// Helper function to log test results
function logResult(testName, passed, error = null) {
  const result = passed ? '✅ PASSED' : '❌ FAILED';
  console.log(`${result}: ${testName}`);
  if (error) {
    console.error(`  Error: ${error.message}`);
  }
}

async function runTests() {
  let driver;
  
  try {
    // Setup Chrome options
    const options = new chrome.Options();
    // Comment out the headless option to see the browser while testing
    // options.addArguments('--headless');
    options.addArguments('--window-size=390,844'); // Mobile size
    
    // Initialize the WebDriver
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
    
    console.log('Starting sidebar functionality tests...');
    
    // Navigate to the application
    const appUrl = 'http://localhost:1234'; // Updated port to match the running app
    await driver.get(appUrl);
    console.log('Navigating to:', appUrl);
    
    try {
      await driver.wait(until.titleContains('Music'), 5000);
      console.log('Application loaded successfully');
    } catch (error) {
      console.error('Failed to load application:', error.message);
      await takeScreenshot(driver, 'load_failure');
      throw new Error('Application failed to load properly');
    }
    
    // Take initial screenshot
    await takeScreenshot(driver, 'initial_state');
    
    // ===== Test Left Sidebar Navigation =====
    console.log('\n===== Testing Left Sidebar Navigation =====');
    
    // Test 1: Open left sidebar
    try {
      // Find and click the hamburger menu button
      console.log('Looking for hamburger menu button...');
      const hamburgerButton = await driver.findElement(By.css('button[aria-label="Open menu"]'));
      console.log('Found hamburger menu, clicking...');
      await hamburgerButton.click();
      await driver.sleep(1000); // Wait for animation
      
      // Verify sidebar is open
      const leftSidebar = await driver.findElement(By.css('.fixed.inset-0'));
      const isDisplayed = await leftSidebar.isDisplayed();
      
      await takeScreenshot(driver, 'left_sidebar_open');
      logResult('Open left sidebar', isDisplayed);
      
      // Test 2: Click on Profile link
      try {
        // Find all navigation links
        const navLinks = await driver.findElements(By.css('.fixed.inset-0 a'));
        console.log(`Found ${navLinks.length} navigation links`);
        
        if (navLinks.length > 0) {
          // Find the Profile link (second link)
          const profileLink = navLinks.length > 1 ? navLinks[1] : navLinks[0]; // 0-indexed, so 1 is the second link
          
          // Get text to verify it's the Profile link
          const linkText = await profileLink.getText();
          console.log(`  Found link: ${linkText}`);
          
          // Click the Profile link
          await profileLink.click();
          await driver.sleep(1000); // Wait for navigation
          
          // Verify navigation occurred
          const currentUrl = await driver.getCurrentUrl();
          console.log(`Current URL after click: ${currentUrl}`);
          const navigationSucceeded = currentUrl.includes('/profile');
          
          await takeScreenshot(driver, 'after_profile_click');
          logResult('Navigate to Profile page', navigationSucceeded);
          
          // Check if sidebar closed after navigation
          try {
            const sidebarAfterNav = await driver.findElement(By.css('.fixed.inset-0'));
            const isStillDisplayed = await sidebarAfterNav.isDisplayed();
            logResult('Sidebar closes after navigation', !isStillDisplayed);
          } catch (e) {
            // If element not found, sidebar is closed as expected
            logResult('Sidebar closes after navigation', true);
          }
        } else {
          logResult('Click on Profile link', false, new Error('No navigation links found'));
        }
        
      } catch (error) {
        logResult('Click on Profile link', false, error);
        await takeScreenshot(driver, 'profile_click_error');
      }
      
    } catch (error) {
      logResult('Open left sidebar', false, error);
      await takeScreenshot(driver, 'left_sidebar_error');
      console.log('DOM structure at time of error:');
      const bodyHtml = await driver.findElement(By.css('body')).getAttribute('innerHTML');
      console.log(bodyHtml.substring(0, 500) + '...'); // Log first 500 chars of body HTML
    }
    
    // ===== Test Right Sidebar Tabs =====
    console.log('\n===== Testing Right Sidebar Tabs =====');
    
    // Navigate back to home
    await driver.get(appUrl);
    await driver.sleep(1000);
    
    // Test 3: Open right sidebar by clicking a dashboard card
    try {
      // Find and click the first dashboard card
      console.log('Looking for dashboard cards...');
      const dashboardCards = await driver.findElements(By.css('.dashboard-card, .card'));
      console.log(`Found ${dashboardCards.length} dashboard cards`);
      
      if (dashboardCards.length > 0) {
        await dashboardCards[0].click();
        await driver.sleep(1000); // Wait for sidebar to open
        
        // Verify right sidebar is open
        const rightSidebar = await driver.findElement(By.css('.fixed.inset-0 .absolute.right-4, .fixed.inset-0 .absolute.right-0'));
        const isDisplayed = await rightSidebar.isDisplayed();
        
        await takeScreenshot(driver, 'right_sidebar_open');
        logResult('Open right sidebar', isDisplayed);
        
        // Test 4: Click on Review tab
        try {
          // Find the tabs in the right sidebar
          const tabButtons = await driver.findElements(By.css('.flex.border-b.border-gray-200 button'));
          console.log(`Found ${tabButtons.length} tab buttons`);
          
          // Verify we found at least 2 tabs
          if (tabButtons.length >= 2) {
            // Get the text of the second tab (should be Review)
            const reviewTabText = await tabButtons[1].getText();
            console.log(`  Found tab: ${reviewTabText}`);
            
            // Click the Review tab
            await tabButtons[1].click();
            await driver.sleep(1000); // Wait for tab content to change
            
            // Verify tab content changed to Review
            const reviewContent = await driver.findElements(By.xpath("//*[contains(text(), 'Review') or contains(text(), 'Rating')]"));
            const tabSwitchSucceeded = reviewContent.length > 0;
            
            await takeScreenshot(driver, 'after_review_tab_click');
            logResult('Switch to Review tab', tabSwitchSucceeded);
            
            // Test 5: Interact with rating stars
            if (tabSwitchSucceeded) {
              try {
                // Find rating stars
                const ratingStars = await driver.findElements(By.css('.text-2xl button, .rating-stars button'));
                console.log(`Found ${ratingStars.length} rating stars`);
                
                if (ratingStars.length > 0) {
                  // Click the third star
                  await ratingStars[2].click();
                  await driver.sleep(500);
                  
                  // Verify star selection (check if class changed)
                  const selectedStars = await driver.findElements(By.css('.text-amber-400, .text-yellow-400'));
                  const ratingInteractionSucceeded = selectedStars.length > 0;
                  
                  await takeScreenshot(driver, 'after_star_rating');
                  logResult('Interact with rating stars', ratingInteractionSucceeded);
                } else {
                  logResult('Interact with rating stars', false, new Error('Rating stars not found'));
                }
              } catch (error) {
                logResult('Interact with rating stars', false, error);
                await takeScreenshot(driver, 'rating_stars_error');
              }
            }
            
          } else {
            logResult('Switch to Review tab', false, new Error('Review tab not found or fewer than 2 tabs'));
            // Log the DOM structure to help debug
            const sidebarHtml = await driver.findElement(By.css('.fixed.inset-0')).getAttribute('innerHTML');
            console.log('Sidebar HTML structure:');
            console.log(sidebarHtml.substring(0, 500) + '...'); // Log first 500 chars
          }
        } catch (error) {
          logResult('Switch to Review tab', false, error);
          await takeScreenshot(driver, 'review_tab_error');
        }
        
      } else {
        logResult('Open right sidebar', false, new Error('No dashboard cards found'));
        await takeScreenshot(driver, 'no_dashboard_cards');
      }
    } catch (error) {
      logResult('Open right sidebar', false, error);
      await takeScreenshot(driver, 'right_sidebar_error');
    }
    
    console.log('\nTests completed. Check screenshots directory for visual evidence.');
    
  } catch (error) {
    console.error('Test suite error:', error);
  } finally {
    // Close the browser
    if (driver) {
      await driver.quit();
    }
  }
}

// Run the tests
runTests();
