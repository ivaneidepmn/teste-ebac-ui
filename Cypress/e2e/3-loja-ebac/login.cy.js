/// <reference types="cypress"/>

describe('Funcionalidade:login', () => { //o teste que sera feito
    beforeEach(() =>{ //Os BeforeEach evitar repetição de código nos testes
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');//o cy visit visita a url sera testada
    });
        afterEach(()=>{
            cy.screenshot() // capturar screenshots em cada etapa do teste dir
        });

    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('ivapmn@test.art.br')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ivapmn (não é ivapmn? Sair)')
    });

    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('ivaneide@test.art.br')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()

        //cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')

    });

    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {// o it.only ignora os demais trechos e só texto ele pode ser tirado logo após o texte
        cy.get('#username').type('ivapmn@test.art.br')
        cy.get('#password').type('235468')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail ivapmn@test.art.br está incorreta. Perdeu a senha?')  
        cy.get('.woocommerce-error > li').should('exist')
        
    });

})
