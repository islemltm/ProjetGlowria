///<reference types="cypress" />
describe('se connecter', () => {

    beforeEach(() => {
        cy.visit("https://glowria.com/")
        cy.get('.icon-account.bg__red').click()
        cy.get("#email").type("usertesst@gmail.com")
        cy.get("#password").type("Usertest22!")
        cy.get('[name="_remember_me"]').check({force:true})
        cy.get('[value="Se connecter"]').click()
    });

    it('Ajouter produit jusqu au paiment', () => {
        //clicker sur sidebar
        cy.get("#menu-button-open").click()
        //cliquer sur le button acheter
        cy.get("#mm-1").contains("L'acheter").click()
        //cy.contains("a","L'acheter").click()
        //ciquer sur je craque 
        cy.get(".btn.btn-pink-dark-two.btn-size-small.text__semi-bold.color__white.btn-monthly.add-to-cart").click()
        //saisir et selectionner l'adresse 
        cy.get("#user_input_autocomplete_address").type("1 Avenue du Général Mangin, Versailles, France")
        //sasir info complementaire
        cy.get("#subscription_deliveryContact_addressSecondLine").type("batiment B")
        //saisir le numero de telephone 
        //cy.get("#subscription_deliveryContact_phoneNumber").type("0780827983")
        //choisir mode livraison 
        cy.get("#subscription_fr_colissimo_code_code_0").click()
        //cliquer btn valider 
        cy.get("#submit-creation-form").click()
        //verifier rdirection
        cy.url().should("contain","order/personal/validation/glplan12/1004360/4")
        //cocher btn condition
        cy.get("#terms").check({force:true})
        //clicker btn payer 
        cy.get("#submit-validation-form").click()
        //verifier redirection
        cy.url().should("contain","https://secure.payzen.eu/vads-payment/#paymentChoice")
    });
    
});