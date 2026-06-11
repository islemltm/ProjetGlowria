///<reference types="cypress" />
describe('se connecter', () => {
    it('parcours se connecter', () => {
        //acceder sur le lien
        cy.visit("https://glowria.com/")
        //clique sur l icone
        cy.get('.icon-account.bg__red').click()
        //saisir email
        cy.get("#email").type("usertesst@gmail.com")
        //saisir password
        cy.get("#password").type("Usertest22!")
        //clique sur se souvenir de moi
        cy.get('[name="_remember_me"]').check({force:true})
        //cliquer sur se connecter
        cy.get('[value="Se connecter"]').click()
        //cy.visit("https://glowria.com/")
        // reclique sur l icone
        cy.get('.icon-account-filled.bg__red').click()
        cy.get("#account-dashboard-page").should("contain","Bonjour usser")
        
    });
    
});