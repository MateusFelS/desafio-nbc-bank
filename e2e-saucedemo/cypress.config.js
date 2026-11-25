const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com/",
    video: true,
    screenshotsFolder: 'cypress/evidencias/screenshots',
    videosFolder: 'cypress/evidencias/videos',
    supportFile: false,
    testIsolation: false
  },
});
