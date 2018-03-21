import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress , graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema }  from "graphql-tools";
import models from "./models";
import path from 'path';
import cors from 'cors';
import { fileLoader, mergeTypes ,mergeResolvers  } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const app = express();


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use(cors('*'));

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: schema,
    context:{
        models
    }
}));
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

models.sequelize.sync({}).then(()=>{
    app.listen(8003);
})