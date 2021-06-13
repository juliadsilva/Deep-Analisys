/// <reference types="cypress"/>

describe('Caso de Teste: Testar funcionalidades da pagina de partidas', () => {

    before(() => {
        var userInfo = createUser();
        cy.wait(1000);
        cy.visit('http://localhost:4200/login');
        cy.get('input[name="username"]').type(userInfo[0]);
        cy.get('input[name ="senha"]').type(userInfo[1]);
        cy.get('button').click();
        cy.wait(1000);
        cy.get('#adicionar').click();
        cy.get('input[name="nome"]').type('partidaTeste');
        cy.get('select[name="formato"]').select('Padrão').should('have.value', 'Padrão');;
        cy.wait(1000);
        cy.get('#add').click();
        cy.wait(1000);
        cy.get('#dados').click();
        cy.get('h4').should('contain.text', 'partidaTeste');
    });

    it('Cenario: Criar partida com sucesso!', () => {
        cy.get('#adicionar').click();
        cy.get('input[name="win"]').type('2');
        cy.get('input[name="loss"]').type('0');
        cy.wait(1000);
        cy.get('#add').click();
        cy.wait(1000);
        cy.get('table').contains('td', '1');
        cy.get('table').contains('td', '100 %');
        cy.get('table').contains('td', '2-0');
    });

    it('Cenario: Deletar partida com sucesso!', () => {
        cy.get('#deletar').click();
        cy.get('select[name="id"').select('1').should('have.value', '1');
        cy.get('#delC').click();
        cy.wait(1000);
        cy.get('#del').click();
        cy.wait(1000);
        // Falta a assertiva aqui
    });

    //Functionss
    function createUser() {
        let userTest = 'userTest3';
        let userPass = '12345678';
        let userEmail = 'usertest3@user.com';
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
});