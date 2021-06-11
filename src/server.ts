import "reflect-metadata";
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema, Resolver, Query } = require('type-graphql');

import * as path from "path";

import {Gun} from "./domain/items/gun.ts";

// Construct a schema, using GraphQL schema language
//
// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  guns: () => {
    return guns;
  },
};

@Resolver()
class GunResolver {
  private gunCollection: Gun[] = [
    new Gun("Pea Shooter", "Pea Shooter is a Gun. It shoots low-damage peas.", "D", 10.6),
    new Gun("Smiley's Revolver", "Smiley's Revolver is a gun that decreases shop prices by 15%. Its fire rate also increases dramatically for a short period of time after rolling. ", "B", 43.2)
  ];

  @Query(returns => [Gun])
  async guns() {
    // fake async in this example
    return await this.gunCollection;
  }
}

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [GunResolver],
    emitSchemaFile: true,
  });
  var app = express();
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));
  app.listen(4000);
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
}

bootstrap();
