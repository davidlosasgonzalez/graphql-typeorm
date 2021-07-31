import { Subject } from '../subject/model';
import { Teacher, TeacherSubject } from './model';
import {
    CreateTeacherArgs,
    UpdateTeacherArgs,
    DeleteTeacherArgs,
    AssignSubjectToTeacherArgs,
} from './types';

export async function getTeachers() {
    return await Teacher.find({
        relations: ['teacherSubjects'],
    });
}

export async function createTeacher(args: CreateTeacherArgs) {
    const { name } = args;

    const newTeacher = await Teacher.create();

    newTeacher.name = name;

    await newTeacher.save();

    return true;
}

export async function updateTeacher(args: UpdateTeacherArgs) {
    const { id, name } = args;

    const teacher = await Teacher.findOne(id);

    if (!teacher) throw new Error('Teacher does not exists');

    teacher.name = name;

    await teacher.save();

    return true;
}

export async function deleteTeacher(args: DeleteTeacherArgs) {
    const { id } = args;

    const teacher = await Teacher.findOne(id);

    if (!teacher) throw new Error('Teacher does not exists');

    await Teacher.delete(id);

    return true;
}

export async function assignSubjectToTeacher(args: AssignSubjectToTeacherArgs) {
    const { teacherId, subjectId } = args;

    const teacher = await Teacher.findOne(teacherId);

    if (!teacher) throw new Error('Teacher does not exists!');

    const subject = await Subject.findOne(subjectId);

    if (!subject) throw new Error('Subject does not exists!');

    const newTeacherSubject = await TeacherSubject.create();

    newTeacherSubject.teacher = teacher;
    newTeacherSubject.subject = subject;

    await newTeacherSubject.save();

    return true;
}
