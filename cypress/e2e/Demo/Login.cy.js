///<reference types="Cypress"/>

describe('Login', ()=>{
   
    it('Login in HRM and enter username and Password', ()=>{
        cy.fixture('elements').then((data)=>{cy.Login(data);})
        
    })
})