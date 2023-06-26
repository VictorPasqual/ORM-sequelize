## MVC/CRUD com Sequelize para Pessoas, Turmas, Níveis e Matrícula

Este repositório contém um projeto de MVC/CRUD utilizando Sequelize para gerenciar informações relacionadas a pessoas, turmas, níveis e matrículas. O projeto foi desenvolvido independentemente, como uma demonstração do uso do padrão de arquitetura MVC (Model-View-Controller) e da biblioteca Sequelize como ORM (Object-Relational Mapping) para interação com o banco de dados.
Sobre o Projeto

O objetivo deste projeto é fornecer um exemplo prático de implementação de um sistema de gerenciamento de informações usando o padrão MVC e o Sequelize. O projeto aborda as seguintes entidades principais:

    Pessoas: informações sobre pessoas, como nome, idade, sexo, etc.
    Turmas: informações sobre as turmas disponíveis, como código, nome, etc.
    Níveis: informações sobre os níveis de ensino, como código, nome, etc.
    Matrícula: informações sobre as matrículas realizadas, relacionando pessoas, turmas e níveis.

O sistema permite realizar operações de criação, leitura, atualização e exclusão (CRUD) para cada uma das entidades mencionadas, garantindo a persistência dos dados no banco de dados.
Estrutura do Projeto

## O projeto está estruturado da seguinte forma:

    models/: contém os modelos das entidades, implementados utilizando o Sequelize.
    controllers/: contém os controladores responsáveis por receber as requisições do usuário, processá-las e interagir com os modelos.
    views/: contém as visualizações do sistema, implementadas em HTML, CSS e JavaScript.
    routes/: contém as rotas do sistema, que definem os endpoints e as ações a serem executadas em resposta às requisições.
    database/: contém as configurações de conexão com o banco de dados e a definição das tabelas.

## Utilização do Projeto

Para utilizar o projeto, siga as seguintes etapas:

    Clone o repositório para o seu ambiente de desenvolvimento.
    Certifique-se de ter o Node.js e o NPM (Node Package Manager) instalados em sua máquina.
    Instale as dependências do projeto executando o comando npm install no diretório raiz do projeto.
    Configure as informações de conexão com o banco de dados no arquivo database/config.js.
    Execute o comando npm start para iniciar o servidor local.
    Acesse o sistema em seu navegador utilizando o endereço http://localhost:3000.

## Contribuições

Contribuições para este repositório são bem-vindas! Se você deseja adicionar novas funcionalidades, corrigir problemas ou aprimorar o projeto, fique à vontade para fazer um fork do repositório e enviar um pull request com suas alterações.
