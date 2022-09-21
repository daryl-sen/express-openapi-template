import express from "express";
import path from "path";
import swaggerUi from "swagger-ui-express";
const routes = require("./routes");

const swagger = require("swagger-express-router");
const YAML = require("yamljs");
const app = express();
const port = 3200;

const rootPath = path.join(__dirname);

const swaggerDocument = YAML.load(path.join(__dirname, "../src/api-doc.yml"));

app.use(express.static(rootPath));

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      validatorUrl: undefined,
    },
  })
);

swagger.setUpRoutes(routes, app, swaggerDocument, true);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
