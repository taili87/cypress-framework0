Cypress.Commands.add('DynamicText', ()=>{
    cy.get("[name='username']").type('Admin').then(()=>
    cy.log('User entered username '));

    cy.get("[name='password']").type('admin123').then(()=>{
        cy.log('User entered password');
    })

    cy.get("button[type='submit']").click().then(()=>{
        cy.log('User click on Login Button');
    })

    cy.get('.oxd-userdropdown-name').then(($usernameElements)=>{
        const userNameText = $usernameElements.text();
        cy.log(userNameText);
        const USERNAME = '/.+/';
        expect(userNameText).not.eq(USERNAME);
    })
})

Cypress.Commands.add('HandleDynamicText', ()=>{
     cy.get("[name='username']").type('Admin').then(()=>cy.log('User entered username '));
        cy.get("[name='password']").type('admin123').then(()=>{cy.log('User entered password');})
        cy.get("button[type='submit']").click().then(()=>{cy.log('User click on Login Button');})

        cy.get('.oxd-userdropdown-name').then(($usernameElements)=>{
            const userName = $usernameElements.text();
            cy.log(userName);

            expect(userName).to.match(/.*/); 
            /*
            dot mean insert any character 
            and * character can come zero to N times - 
            and Plus(+) that mean 1 are more time
            
            */  
        })
    })
