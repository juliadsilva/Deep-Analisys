/// <reference types="cypress"/>

const { Toast } = require("bootstrap");
const { ToastContainerDirective } = require("ngx-toastr");

describe('Caso de Teste: Verificar que as páginas do site estão funcionando e apresentam o contéudo correto.', () => {

    it('Cenário: Entrar no site', () => {

        cy.visit('http://localhost:4200/');
        cy.get('h1').should('contain.text', 'Bem vindo ao Deep Analysis');
    });

    it('Cenário: Navegar ate Equipe - Verificar que a pagina contem nomes dos integrantes', () => {

        cy.visit('http://localhost:4200/');
        cy.get('#time').click();
        cy.get('#nome1').should('contain.text', 'Julia Daniele Moreira da Silva');
        cy.get('#nome2').should('contain.text', 'Mateus Rocha de Carvalho Alves');
    });

    it('Cenário: Navegar ate Cadastre-se - Verificar o conteudo', () => {

        cy.visit('http://localhost:4200/');
        cy.get('#registro').click();
        cy.get('h4').should('contain.text', 'Cadraste-se');
        cy.get('h5').should('not.contain.text', 'Cadraste-se');

    });

    it('Cenário: Navegar ate Login - Verificar o conteudo', () => {

        cy.visit('http://localhost:4200/');
        cy.get('#login').click();
        cy.get('h5').should('contain.text', 'Login');
        cy.get('a').should('contain.text', 'Não tem conta? Cadastre-se');

    });
})

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
    });

    it('Cenario de Teste: Login na plataforma com sucesso!', () => {
        var userInfo = createUser();
        cy.wait(3000);
        cy.visit('http://localhost:4200/login');
        cy.get('input[name="username"]').type(userInfo[0]);
        cy.get('input[name ="senha"]').type(userInfo[1]);
        cy.get('button').click();
        cy.get('button').should('contain.text', 'userTest');
    });

    it('Cenario de Teste: Falha ao realizar login!', () => {
        cy.visit('http://localhost:4200/login');
        cy.get('input[name="username"]').type('userDeep');
        cy.get('input[name ="senha"]').type('12345678');
        // Testar toast
    })

    //Functions
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