import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress , graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema }  from "graphql-tools";
import models from "./models";
import path from 'path';
import cors from 'cors';
import jwt from "jsonwebtoken";
import { fileLoader, mergeTypes ,mergeResolvers  } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const app = express();


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const SECRET = 'helloworld123456'

const adduser = async (req) => {
    const token = req.headers.authorization;
    try {
        const { user } = await jwt.verify(token,SECRET);
        req.user = user;
    } catch (error) {
        console.log(error);        
    }
    req.next();
}


app.use(cors('*'));
app.use(adduser);
app.use('/graphql', bodyParser.json(), graphqlExpress((req)=>{
    return (
        {
            schema: schema,
            context:{
                models,
                SECRET,
                user : req.user
            }
        }
    );

}));
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

models.sequelize.sync({}).then(()=>{
    app.listen(8003);
})