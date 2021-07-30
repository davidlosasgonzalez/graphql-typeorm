import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';

import * as path from 'path';
import * as glob from 'glob';
import * as fs from 'fs';

export function buildSchema(): GraphQLSchema {
    const schemaRoot = path.join(__dirname, '../api');

    const schemaDefs = glob
        .sync(`${schemaRoot}/**/*.graphql`)
        .map((schemaFile) => fs.readFileSync(schemaFile, { encoding: 'utf8' }));

    const resolvers = glob
        .sync(`${schemaRoot}/**/resolvers.ts`)
        .map((resolverFile) => require(resolverFile));

    return makeExecutableSchema({
        typeDefs: mergeTypeDefs(schemaDefs),
        resolvers: [mergeResolvers(resolvers)],
    });
}
