## PROPOSTA

### Requisitos funcionais

-   Desenvolver um serviço com API GraphQL que consuma um banco de dados de
    alunos contendo: nome, CPF e e-mail. ✅
    ○ A API deve listar os alunos filtrando por quaisquer dos campos, retornando
    todos, caso nenhum seja informado. ✅

-   Desenvolver uma UI em React que nos permita realizar consultas a esse serviço,
    consumindo e exibindo os dados retornados por ele. ✅

### Requisitos não funcionais

-   Ser escrito em JavaScript ou TypeScript ✅
-   Tanto o serviço no backend quanto a UI serem servidos em containers Docker ✅/❎
-   O banco de dados deve ser implementado num SGBD, como MySQL, Postgres ou similares.✅ (MYSQL)
-   Haver documentação (instruções sobre como devemos rodar seu projeto, por exemplo, são indispensáveis) ✅

### Extras

-   Adicionar, editar ou excluir alunos via React app
-   Realizar commits específicos e detalhados 
-   Escrever testes automatizados ✅
-   Acrescentar algum tipo de cache para a consulta dos dados (no frontend, no backend, ou nos dois :) ✅
-   Acrescentar um proxy reverso redirecionando as requisições que chegam para o serviço
-   Disponibilizar uma solução completa para o deploy da aplicação (helm chart, docker-compose)✅

### Implementação

### Front End

-   Considerei importante mostrar meu conhecimento de CSS e HTML e criar toda estilização conforme a identidade visual da Descomplica.

-   Os componentes foram divido entre views (apresentação), Shared (genéricos) e específicos.

### Back End

-   Sobre GraphQL esse foi meu primeiro contato espero que tenha estruturado segundo as boas práticas.
-   Mantive os arquivos do banco da pasta db/data para que que já tenha dados quando subir aplicação
    (Entendo que não é o recomendado, mas para fins de agilizar o start up da aplicação).

### Requirements

-   npm
-   docker
-   docker-compose
-   node v14.16+

## Como executar

Navegue até a pasta raiz e execute `docker-compose up`.

Depois de subir todos os serviços a aplicação estará disponível.

### Running tests

No frontend foi adicionado alguns alguns teste para validar os componentes da página, realiazei testes
simples ressaltando foi meu primeiro contato em automatização de testes.

#### Client

-   cd entrar `app` pasta e executar `start test`
