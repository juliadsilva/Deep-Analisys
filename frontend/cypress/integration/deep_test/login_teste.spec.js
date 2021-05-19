/// <reference types="cypress"/>

describe('Caso de Teste: Testar funcionalidades de Login', () => {

    it('Cenario: Registrar um usuario com dados corretos!', () => {
        cy.visit('http://localhost:4200/registro');
        cy.get('input[name="username"]').type('userDeep');
        cy.get('input[name="estado"]').type('userDeep');
        cy.get('input[name="cidade"]').type('userDeep');
        cy.get('input[name ="email"]').type('userdeep@user.com');
        cy.get('input[name ="senha"]').type('12345678');
        cy.get('input[name ="resenha"]').type('12345678');
        cy.get('button').click();
        cy.wait(3000);
    });

    it('Cenario: Falha ao tentar registrar um usuario com dados errados!', () => {
        cy.visit('http://localhost:4200/registro');
        cy.get('input[name="username"]').type('userDeep');
        cy.get('input[name="estado"]').type('userDeep');
        cy.get('input[name="cidade"]').type('userDeep');
        cy.get('input[name ="email"]').type('userdeep');
        cy.get('input[name ="senha"]').type('12345678');
        cy.get('input[name ="resenha"]').type('1234567');
        cy.get('button').should('be.disabled');
        cy.wait(3000);
    });

    it('Cenario: Login na plataforma com sucesso!', () => {
        var userInfo = createUser();
        cy.wait(3000);
        cy.visit('http://localhost:4200/login');
        cy.get('input[name="username"]').type(userInfo[0]);
        cy.get('input[name ="senha"]').type(userInfo[1]);
        cy.get('button').click();
        cy.get('button').should('contain.text', 'userTest');
        cy.wait(3000);
    });

    /*it('Cenario: Falha ao realizar login!', () => {
        cy.visit('http://localhost:4200/login');
        cy.get('input[name="username"]').type('userDeepNot');
        cy.get('input[name ="senha"]').type('12345678');
        cy.get('button').click();
        cy.wait(3000);
        // Testar toast
    });
    */

    //Functionss
    function createUser() {
        let userTest = 'userTest';
        let userPass = '12345678';
        let userEmail = 'usertest@user.com';
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