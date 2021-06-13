<p align="center">

  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/juliadsilva/Deep-Analisys/Node.js%20CI?style=social">
	
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/juliadsilva/Deep-Analisys?style=social">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/juliadsilva/Deep-Analisys?style=social">
  
  <a href="https://github.com/juliadsilva/Deep-Analisys/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/juliadsilva/Deep-Analisys?style=social">
  </a>
	
   <img alt="Stars" src="https://img.shields.io/github/stars/juliadsilva/Deep-Analisys?style=social">

</p>
<p align="center">
	<img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>
	<img alt="Angular" src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"/>
	<img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
	<img alt="Jasmine" src="https://img.shields.io/badge/-Jasmine-%238A4182?style=for-the-badge&logo=Jasmine&logoColor=white"/>
	<img alt="Cypress" src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" alt="cypress">
	<img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red" />
	<img alt="GitHub Actions" src="https://img.shields.io/badge/githubactions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white"/>
</p>


<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="./frontend/src/assets/img/logo.png" />
</h1>

<p align="center">O coletor e organizador de dados para Magic: the Gathering Online</p>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#funcionalidades">Funcionalidades</a> •
 <a href="#layout">Layout</a>  • 	
 <a href="#como-executar-o-projeto">Como executar o projeto</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#autor">Autor</a>
</p>

### Sobre

<p>O Deep Analisys é um projeto que consiste de uma API rest, um banco de dados não relacional e uma aplicação web . O projeto tem por objetivo ajudar jogadores de Magic a manter um histórico de vitórias e derrotas para o seus decks, podendo assim, analisar se o baralho esta com um bom desempenho.</p>

---

###  Funcionalidades

 - Usuário:
	  - [x] Cadastrar  
	  - [x] Realizar login	  
  - Baralhos:
	  - [x] Cadastrar 
	  - [x] Listar
	  - [x] Pesquisar
	  - [x] Deletar 
 - Partidas:
	  - [x] Cadastrar 
	  - [x] Listar
	  - [x] Deletar 
---

## Layout

![Tela Inicial](images/inicio.PNG)
![Baralhos](images/baralhos.PNG)
![Dados](images/dados.PNG)
---

## Como executar o projeto

Este projeto é divido em três partes:
1. Banco de Dados
2. Backend  
3. Frontend 

Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/),  [Angular](https://angular.io/docs/) e [MongoDB](https://www.mongodb.com/)

#### Clone o projeto
No terminal digite:

```
$ git clone https://github.com/juliadsilva/Deep-Analisys.git
```

#### Rodando o Banco de Dados

No terminal digite o comando para iniciar o MongoDB:

```bash
$ mongod --dbpath <CAMINHO DO MONGO DATA>
```

#### Rodando o Backend

No Terminal, digite o seguinte comando para subir o servidor Node

```bash
$ cd <PASTA DO BACKEND>
$ nodemon index.js
```

#### Rodando o Frontend

```bash
$ cd <PASTA DO FRONTEND>
$ ng serve --open
```

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Frontend**  ([Angular](https://angular.io/docs/))

#### **Backend** ([NodeJS](https://nodejs.org/en/))

#### **Banco de Dados** ([MongoDB](https://www.mongodb.com/))


##  Autor
<a href="https://github.com/juliadsilva">Julia Daniele Moreira da Silva </a>
 
    

