# Testes Automatizados com Jest

Projeto de estudo sobre testes automatizados utilizando Jest em uma aplicação Node.js com TypeScript. O projeto contém testes unitários para uma função de soma e um teste de integração para um endpoint HTTP de produtos.

## Instalação

Clone o projeto e instale as dependências:

```bash
npm install
```

As dependências de execução incluem `tsx` e `ts-node`. Para os testes, o projeto utiliza `jest`, `ts-jest` e `supertest`, além dos pacotes de tipos para TypeScript, Node.js, Jest e Supertest.

## Executando o projeto

Para iniciar o servidor em modo de desenvolvimento, execute:

```bash
npm run dev
```

O servidor será iniciado na porta `3333` e o modo `watch` reiniciará a aplicação quando houver alterações nos arquivos.

Para executar todos os testes:

```bash
npm test
```

Para executar os testes em modo de observação, acompanhando alterações nos arquivos:

```bash
npm run test-w
```

## Endpoint disponível

A aplicação possui o endpoint:

```text
GET /products
```

Quando acessado, ele retorna o status `200` e uma lista JSON com cinco produtos.

## Configuração do Jest

A configuração está no arquivo `jest.config.ts`:

- `preset: "ts-jest"`: permite executar testes escritos em TypeScript.
- `testEnvironment: "node"`: define o ambiente Node.js para os testes.
- `bail: true`: interrompe a execução assim que o primeiro teste falhar.

## Arquivos principais

### `src/server.ts`

É o ponto de entrada da aplicação. Ele importa o servidor definido em `app.ts`, inicia o serviço na porta `3333` e exibe mensagens no console quando o servidor é iniciado.

### `src/app.ts`

Cria o servidor HTTP e define os dados dos produtos. Também disponibiliza a rota `GET /products`, que responde com os produtos no formato JSON.

O objeto `app` é exportado para que possa ser utilizado diretamente pelos testes, sem precisar iniciar um servidor separado.

### `src/sum.test.ts`

Contém os testes unitários da função `sum`, importada de `src/sum.ts`. O arquivo demonstra o uso de `describe`, `it`, `test`, `expect`, `beforeAll` e `afterAll`.

Os testes verificam a soma de dois números e utilizam os hooks `beforeAll` e `afterAll` para preparar e limpar um valor usado durante a execução.

### `src/products.test.ts`

Testa a rota de produtos usando o Supertest e o objeto `app` exportado por `src/app.ts`.

O teste verifica:

- se a resposta possui status `200`;
- se existe uma lista de produtos;
- se a lista contém cinco itens;
- se os produtos retornados correspondem aos dados esperados.

## Fluxo de estudo

1. Instale as dependências com `npm install`.
2. Execute os testes com `npm test`.
3. Inicie o servidor com `npm run dev` para acessar a rota `/products`.
4. Altere os testes ou a implementação e use `npm run test-w` para acompanhar os resultados automaticamente.
