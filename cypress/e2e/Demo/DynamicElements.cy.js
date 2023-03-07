///<reference types="Cypress"/>

describe('Handliong Dynamic elements',()=>{
    
    it.only('Handling dynamic Text', ()=>{
       cy.DynamicText();
    })

    it('Handling dynamic Text by passing a variables username', ()=>{
       cy.HandleDynamicText();
    })
})