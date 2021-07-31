import { IResolvers } from '@graphql-tools/utils';
import * as connector from './connector';

const resolvers: IResolvers = {
    Query: {
        getTeachers: () => connector.getTeachers(),
    },
    Mutation: {
        createTeacher: (_, args) => connector.createTeacher(args.input),
        updateTeacher: (_, args) => connector.updateTeacher(args.input),
        deleteTeacher: (_, args) => connector.deleteTeacher(args.input),
        assignSubjectToTeacher: (_, args) =>
            connector.assignSubjectToTeacher(args.input),
    },
};

export = { ...resolvers };
