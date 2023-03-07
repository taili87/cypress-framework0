// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './dymanicFolder/dynamic.command'
import './loginFolder/login.command'

// Alternatively you can use CommonJS syntax:
// require('./commands')
// Add cypress i -D cypress-fill-command to extend the commands folder
beforeEach(()=>{
  // const  baseUrl = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

