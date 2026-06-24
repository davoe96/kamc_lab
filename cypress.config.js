const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jdyocj',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
