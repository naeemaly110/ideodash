import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress , graphiqlExpress } from "apollo-server-express";
import typeDefs from "./schema/index";
import resolvers from "./resolvers/index";
import { makeExecutableSchema }  from "graphql-tools";


const app = express();
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: schema
}));
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.listen(8081);