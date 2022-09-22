# Express Server Template
 
An express server that uses OpenAPI/Swagger for routing and documentation, and Sequelize ORM to manage an RDBMS

## Why OpenAPI?

OpenAPI automagically generates API documentation and `swagger-express-router` uses the openAPI configuration YAML for routing. This saves time documenting and updating the API, and makes sure that the documentation is always up to date.

Additionally, the Swagger UI allows basic endpoint testing.

## Why Sequelize?

This allows the project to be agnostic of the type of RDBMS used, and allows the database system to be easily changed without significant code changes. Sequelize was chosen over TypeORM, because TypeORM has not been updated in a long time, while Sequelize continues to see regular updates at the time of writing

## Setup

1. Run `npm i` to install dependencies
2. Follow [this guide](https://github.com/daryl-sen/sequelize-tutorial) to setup Sequelize
3. Open `localhost:3200` to check that the server is running
