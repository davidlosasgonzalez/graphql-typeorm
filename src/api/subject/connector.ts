import { Subject } from './model';
import { CreateSubjectArgs, DeleteSubjectArgs } from './types';

export async function getSubjects() {
    return await Subject.find();
}

export async function createSubject(args: CreateSubjectArgs) {
    const { name } = args;

    const newSubject = await Subject.create();

    newSubject.name = name;

    await newSubject.save();

    return true;
}

export async function deleteSubject(args: DeleteSubjectArgs) {
    const { id } = args;

    const subject = await Subject.findOne(id);

    if (!subject) throw new Error('Subject does not exists');

    await Subject.delete(id);

    return true;
}
