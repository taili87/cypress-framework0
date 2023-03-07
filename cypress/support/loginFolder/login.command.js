Cypress.Commands.add('Login', ()=>{
    cy.fixture('elements').then((data)=>{
        cy.get(data.usernameLocator).type(data.username);
        cy.get(data.passwordLocator).type(data.password);
        cy.get(data.loginButton).click();
        cy.get(data.identificationUsername).click();
        cy.get(data.logoutButton).click();
        
    })
})