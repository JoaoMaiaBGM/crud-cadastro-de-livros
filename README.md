# crud-cadastro-de-livros

Nessa atividade desenvolvo uma API com Express.
Essa API deve ser capaz de manipular um CRUD de usuário, com login e geração de token (JWT).

Além do CRUD de usuário com login, nossa aplicação deve ser responsável por cadastrar e gerenciar uma coleção de livros. Essa coleção deve ser armazenada em um array diferente do array de usuários, ou seja, devemos ter 2 bancos de dados.

O cadastro de usuários contem as seguintes informações:

- name
- email
- password
- id (deve ser gerado na criação)

O cadastro de livros deve receber os seguintes dados:

- title
- author
- year
- owner_id

**IMPORTANTE**: todas as rotas do CRUD de livros devem ser protegidas com o token JWT.
