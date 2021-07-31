export type CreateTeacherArgs = {
    name: string;
};

export type UpdateTeacherArgs = {
    id: string;
    name: string;
};

export type DeleteTeacherArgs = {
    id: string;
};

export type AssignSubjectToTeacherArgs = {
    teacherId: string;
    subjectId: string;
};
