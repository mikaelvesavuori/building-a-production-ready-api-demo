# Building a Production Ready API (demonstration)

Just a simple demonstration to see some production-readiness patterns applied to a serverless application.

The code sets up a modern AWS-deployed serverless [TypeScript](https://www.typescriptlang.org) application with some quality-of-life tooling such as [ESLint](https://eslint.org) and [Prettier](https://prettier.io). Packages and deploys using [Serverless Framework](https://www.serverless.com) and bundles it using [esbuild](https://github.com/evanw/esbuild).

## Configurations

Configurations for ESLint and Prettier are reasonable starting points. The TypeScript config is very strict to get the most out of TS features. Serverless Framework is optimized ([ARM architecture](https://aws.amazon.com/blogs/aws/aws-lambda-functions-powered-by-aws-graviton2-processor-run-your-functions-on-arm-and-get-up-to-34-better-price-performance/); short log retention; no versioning), [CORS-activated](https://www.serverless.com/blog/cors-api-gateway-survival-guide/), and set to safer-than-default settings.

## Structure

The application starting point is at `start/index.ts`, the more elaborate version is under the `src/` folder.

Tests for the business/application logic are in the `tests/` folder and use [AVA](https://github.com/avajs/ava).

## Prerequisites

- Recent [Node.js](https://nodejs.org/en/) (ideally 18+) installed.
- Amazon Web Services (AWS) account with sufficient permissions so that you can deploy infrastructure. A naive but simple policy would be full rights for CloudWatch, Lambda, API Gateway, and S3.
- Ideally some experience with [Serverless Framework](https://www.serverless.com) as that's what we will use to deploy the service and infrastructure.

## Installation

Clone, fork, or download the repo as you normally would. Run `npm install`.

## Commands

- `npm start:intro`: Run starting state application locally
- `npm start`: Run application locally
- `npm test`: Test the business/application logic with AVA
- `npm run build`: Package application with Serverless Framework
- `npm run deploy`: Deploy application to AWS with Serverless Framework
- `npm run teardown`: Remove stack from AWS

## Running locally

Using `npm start` you can start using the local endpoint `http://localhost:3000/dev/greet` to call the service.

```bash
curl http://localhost:3000/dev/greet -X POST -d '{ "name": "Zelda, Princess of Hyrule" }'
```

Which should respond back with:

```bash
"Hi Zelda, Princess of Hyrule!"
```

## Things to do

1. Start with `start/index.ts`. What problems and behaviors can you generalize from this simple file?
2. Move `.eslintrc.json` and `.prettierrc.json` to a temporary folder and reload your IDE. See how the development experience changes when ESLint and Prettier are no longer running.
3. Compare configs `tsconfig.start.json` and `tsconfig.json`. Running `npx tsc` will break when you use contents of `tsconfig.json`.
4. Compare configs `serverless.start.yml` and `serverless.yml`.
5. Compare configs `package.start.json` and `package.json`.
6. Check out the GitHub Actions workflows in `.github/workflows/`.
7. Open `src/adapters/Greet.ts`. Notice how it neatly decomposes adapter functionality from the actual business logic. See also how in practice "branching by abstraction" works using a client header as input. Also, for input the use of the `getDTO()` function handles _both_ validation and object structuring.
8. Open `src/usecases/greet.ts` and `src/usecases/greetBeta.ts`. Notice how dedicated interfaces for input (`InputDTO`) and response (`Response`) make both of them intercompatible.
9. Look at some of the tests under `tests/`. Notice how the usecase tests cover the majority of the functionality.
10. Open `scan.sh`. While the script requires local presence of the used tooling, notice how this script would run several tools to handle misconfiguration checking, security scans, and SBOM generation.
