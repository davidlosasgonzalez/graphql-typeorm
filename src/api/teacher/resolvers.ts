import { IResolvers } from '@graphql-tools/utils';
import * as connector from './connector';

const resolvers: IResolvers = {
    Query: {
        getTeachers: () => connector.getTeachers(),
    },
    Mutation: {
        createTeacher: (_, args) => connector.createTeacher(args.input),
        assignSubject: (_, args) => connector.assignSubject(args.input),
    },
};

export = { ...resolvers };
