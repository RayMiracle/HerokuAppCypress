// Import the defineConfig helper from Cypress for configuration
const { defineConfig } = require("cypress");

// Export the Cypress configuration object
module.exports = defineConfig({
  e2e: {
    // Disable watching for file changes to prevent auto-reloading during test runs
    watchForFileChanges: false,

    // Setup Node event listeners for custom tasks or plugins (if needed)
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // Configure the test reporter to use Mochawesome for HTML/JSON reports
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory where reports will be saved
      overwrite: false,             // Do not overwrite existing reports
      html: false,                  // Do not generate HTML reports directly (will be generated after merging)
      json: true                    // Generate JSON reports for merging
    }
  }
})