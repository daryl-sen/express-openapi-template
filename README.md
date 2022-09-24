# Express Server Template

An express server that uses OpenAPI/Swagger and TSOA to automatically generate documentation for API endpoints.

## Why OpenAPI?

OpenAPI automagically generates API documentation, so the project's documentation will always be up to date. Additionally, the Swagger UI allows basic endpoint testing.

## Setup

1. Run `yarn` to install dependencies
2. Run `yarn run dev` to run development version of this project for local development (note 1)
3. Open `localhost:3000` to check that the server is running

Note 1: The initial run will fail with this:

```
[nodemon] app crashed - waiting for file changes before starting...
```

This is because `swagger.json` and `routes.json` are not built. Close with `Control + C` and run it again. This time, it should say

```
Example app listening at http://localhost:3000
```
