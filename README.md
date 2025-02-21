# Nest Integration Test Demo

Demostration project to showcase how to do integration tests in a NestJS project as recommended by the official documentation.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm start

# watch mode
$ pnpm start:dev

# production mode
$ pnpm start:prod
```

## Run tests

```bash
# unit tests
$ pnpm test

# e2e tests
$ pnpm test:e2e

# test coverage
$ pnpm test:cov
```

## Project structure

```
...
|
 - src
  |
  | - /app
  | - /products
  | - main.ts

 - test
 |
  - jest-e2e.json
  - products.e2e-spec.ts
```

- The `src` folder contians the main source code of the app that has two main endpoints `/` that is represented by the `/app` folder and `/products` that is represented by the `/products` folder.
- Each endpoint is usually made by multiple parts, like `Controller`, `Service` and `Module` (And more could be added).
  - The `Controller` is in charge of defining the routes and HTTP methods that are supported, but has no business logic.
  - The `Service` is in charge of handling the data received from the controller and process it based on business logic.
  - The `Module` orquestrates what each of the other pieces do together by applying dependency injection techniques and other optimizations.
- The `test` folder contains a configuration `.json` file for detecting other files that use the `.e2e-spec` naming convention as well as the actual integration files to be picked up by the Test Runner when calling `pnpm test:e2e`.

## Reference

- [Testing Fundamentals](https://docs.nestjs.com/fundamentals/testing#testing)