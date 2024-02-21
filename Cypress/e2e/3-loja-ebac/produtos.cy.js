/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block ').first().click()
        //cy.get('.product-block').first ou lest ou .eq(0)ou eq(1) ou eq(2)()ou contains(nome do produto).click()   
    
       cy.get('#tab-title-description > a').should('contain','Descrição')
       //validar a confirmação do teste

});
});