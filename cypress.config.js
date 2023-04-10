const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      // on('file:preprocessor', webpackPreprocessor);
      allureWriter(on, config);
      return config;
    },

    env: {
      allureReuseAfterSpec: true,
      "MAILOSAUR_API_KEY": 'EUafD1OPlOHePJDkRxXZtbUduYGQai45',

      "reporter" : "junit",
      "reporterOptions" : {
        "mochaFile" : "/cypress/reports/html/index.html"
      }
  }

    

    
  },
});

