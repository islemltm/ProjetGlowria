///<reference types="cypress" />
describe('Inscription To GLowria', () => {
    it('ParcoursInscription', () => {
        //accéder vers le site
        cy.visit("https://glowria.com/")
        //cliquer sur l'icone User
        cy.get('.icon-account.bg__red').click()
        //Saisir l'email
        cy.get('#newEmail').type("usertesst@gmail.com")
        //cliquer sur inscription
        // cy.get('.btn.btn-black.margin__large.btn-size-lar').click()
        cy.get('[value="Inscription"]').click()
        // saisir prenom
        cy.get('#customer_firstName').type('usser')
        // saisir name
        cy.get('#customer_lastName').type('tessteur')
        // saisir le champ "confirmation email"
        cy.get('#customer_emailConfirm').type('usertesst@gmail.com')
        // saisir Password
        cy.get('#customer_password').type('Usertest22!')
        // saisir date de naissance
        cy.get('#customer_birthday').type('01041995')
        // cocher la case conditions
        cy.get('#legalmentions').click()
        // cliquer sur inscription*
        cy.get('#submitBtn').click()
        // vérifier qu'on est bien redirigé 
        cy.url().should("contain","https://glowria.com/")

    });
});