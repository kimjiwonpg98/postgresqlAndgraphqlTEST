const express = require("serverless-express/express");
const { postgraphile } = require("postgraphile");
const Pool = require("pg-pool");
const dotenv = require("dotenv");
const pgConfig = require("./config");
const simple = require("@graphile-contrib/pg-simplify-inflector");

const app = express();
dotenv.config();
console.log(pgConfig);
const pool = new Pool(pgConfig);
let postgraphileConfig = {
  // options
  appendPlugins: [simple],
  // retryOnInitFail: true,
  dynamicJson: true,
  graphqlRoute: "/",
  graphiql: true,
  enhanceGraphiql: true,
  extendedErrors: ["hint", "detail", "errcode"],
  // jwtSecret: process.env.JW_SECRET,
  // jwtPgTypeIdentifier: process.env.JW_PG_TYPE_IDENTIFIER,
  legacyRelations: "omit",
  pgDefaultRole: process.env.PG_DEFAULT_ROLE,
};

app.use(postgraphile(pool, process.env.SCHEMA, postgraphileConfig));

module.exports = app;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
