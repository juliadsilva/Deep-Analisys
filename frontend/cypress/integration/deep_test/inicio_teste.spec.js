/// <reference types="cypress"/>

describe('Caso de Teste: Verificar que as páginas do site estão funcionando e apresentam o contéudo correto.', () => {

    it('Cenário: Entrar no site', () => {

        cy.visit('http://localhost:4200/');
        cy.get('h1').should('contain.text', 'Bem vindo ao Deep Analysis');
        cy.wait(2000);
    });

    it('Cenário: Navegar ate Equipe - Verificar que a pagina contem nomes dos integrantes', () => {

        cy.visit('http://localhost:4200/');
        cy.get('#time').click();
        cy.get('#nome1').should('contain.text', 'Julia Daniele Moreira da Silva');
        cy.get('#nome2').should('contain.text', 'Mateus Rocha de Carvalho Alves');
        cy.wait(2000);
    });

    it('Cenário: Navegar ate Cadastre-se - Verificar o conteudo', () => {

        cy.visit('http://localhost:4200/');
        cy.get('#registro').click();
        cy.get('h4').should('contain.text', 'Cadraste-se');
        cy.get('h5').should('not.contain.text', 'Cadraste-se');
        cy.wait(2000);

    });

    it('Cenário: Navegar ate Login - Verificar o conteudo', () => {

        cy.visit('http://localhost:4200/');
        cy.get('#login').click();
        cy.get('h5').should('contain.text', 'Login');
        cy.get('a').should('contain.text', 'Não tem conta? Cadastre-se');
        cy.wait(2000);
    });
})