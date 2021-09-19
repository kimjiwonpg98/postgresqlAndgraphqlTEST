const express = require("express");
const { postgraphile } = require("postgraphile");
const { Client } = require("pg");
const dotenv = require("dotenv");
const simple = require("@graphile-contrib/pg-simplify-inflector");
const app = express();
dotenv.config();
const connectionString = `postgres://${process.env.user}:${process.env.pass}@${process.env.host}:${process.env.port}/${process.env.db}`;
app.use(
  postgraphile(process.env.DATABASE_URL || connectionString, "app", {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    appendPlugins: [simple],
  })
);
// const pg = new Client({
//   user: vals.user,
//   host: vals.host,
//   database: vals.db,
//   password: vals.pass,
//   port: vals.port,
// });

// pg.connect((err) => {
//   if (err) throw err;
//   else result();
// });

// const result = () => {
//   const query = `SELECT NOW()`;
//   pg.query(query)
//     .then(() => {
//       console.log("Table created successfully!");
//       pg.end(console.log("Closed client connection"));
//     })
//     .catch((err) => console.log(err))
//     .then(() => {
//       console.log("Finished execution, exiting now");
//       process.exit();
//     });
// };

app.listen(process.env.PORT || 3300);
