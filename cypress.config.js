const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   
    defaultCommandTimeout: 30000,
    viewportHeight: 900,
    viewportWidth:1500,
    watchForFileChanges:true,
    chromeWebSecurity:false
    
    },

    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  

});
