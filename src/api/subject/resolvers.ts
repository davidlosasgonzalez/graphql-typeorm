import { IResolvers } from '@graphql-tools/utils';
import * as connector from './connector';

const resolvers: IResolvers = {
    Query: {
        getSubjects: () => connector.getSubjects(),
    },
    Mutation: {
        createSubject: (_, args) => connector.createSubject(args.input),
    },
};

export = { ...resolvers };
