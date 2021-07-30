require('dotenv').config();
import 'reflect-metadata';
import express from 'express';
import expressPlayGround from 'graphql-playground-middleware-express';
import { ApolloServer } from 'apollo-server-express';
import { connectDB } from './config/typeorm';
import { buildSchema } from './config/buildSchema';

const { PORT } = process.env;

const app = express();

app.get(
    '/',
    expressPlayGround({
        endpoint: '/graphql',
    })
);

async function startServer() {
    connectDB();

    const apolloServer = new ApolloServer({
        schema: buildSchema(),
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app, path: '/graphql' });

    app.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}`);
    });
}

startServer();
