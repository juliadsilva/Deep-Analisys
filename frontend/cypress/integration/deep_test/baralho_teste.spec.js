/// <reference types="cypress"/>

describe('Caso de Teste: Testar funcionalidades da pagina de baralhos', () => {

    before(() => {
        var userInfo = createUser();
        cy.wait(1000);
        cy.visit('http://localhost:4200/login');
        cy.get('input[name="username"]').type(userInfo[0]);
        cy.get('input[name ="senha"]').type(userInfo[1]);
        cy.get('button').click();
        cy.get('button').should('contain.text', 'userTest');
        cy.wait(1000);
    });

    it('Cenario: Acessar informaões sobre os formatos!', () => {
        cy.get('#info').click();
        cy.wait(1000);
        cy.get('h5').should('contain.text', 'Padrão');
        cy.get('h5').should('contain.text', 'Vintage');
        cy.get('h5').should('not.contain.text', 'Nao existe');
        cy.wait(1000);
        cy.get('#close').click();
    });

    it('Cenario: Criar baralho com sucesso!', () => {
        cy.get('#adicionar').click();
        cy.get('input[name="nome"]').type('baralhoTeste');
        cy.get('select[name="formato"]').select('Padrão').should('have.value', 'Padrão');;
        cy.wait(1000);
        cy.get('#add').click();
        cy.wait(1000);
        cy.get('h4').should('contain.text', 'baralhoTeste');
    });

    it('Cenario: Ediar baralho com sucesso!', () => {
        cy.get('#editar').click();
        cy.get('select[name="nomeselect"]').select('baralhoTeste').should('have.value', 'baralhoTeste');
        cy.get('input[name="nome"]').type('testeBaralho');
        cy.get('select[name="formato"]').select('Vintage').should('have.value', 'Vintage');;
        cy.wait(1000);
        cy.get('#edit').click();
        cy.wait(1000);
        cy.get('h4').should('contain.text', 'testeBaralho');
    });

    it('Cenario: Deletar baralho com sucesso!', () => {
        cy.get('#deletar').click();
        cy.get('select[name="nome"').select('testeBaralho').should('have.value', 'testeBaralho');
        cy.get('#delC').click();
        cy.wait(1000);
        cy.get('#del').click();
        cy.wait(1000);
        cy.get('h4').should('not.contain.text', 'baralhoEditado');
    });


    //Functionss
    function createUser() {
        let userTest = 'userTest2';
        let userPass = '12345678';
        let userEmail = 'usertest2@user.com';
        let userInfo = [userTest, userPass];

        cy.visit('http://localhost:4200/registro');
        cy.get('input[name="username"]').type(userTest);
        cy.get('input[name="estado"]').type(userTest);
        cy.get('input[name="cidade"]').type(userTest);
        cy.get('input[name ="email"]').type(userEmail);
        cy.get('input[name ="senha"]').type(userPass);
        cy.get('input[name ="resenha"]').type(userPass);
        cy.get('button').click();

        return userInfo;
    }
})