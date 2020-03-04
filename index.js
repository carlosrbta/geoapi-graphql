const express = require("express");
const express_graphql = require("express-graphql");
const schema = require("./schema.js");
const resolvers = require("./resolvers.js");

// Create an express server and a GraphQL endpoint
const app = express();
const port = process.env.PORT || 4000;

app.use(
  "/",
  express_graphql({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
);

app.listen(port, () =>
  console.log(
    `Express GraphQL Server Now Running On http://localhost:${port}/graphql`
  )
);
