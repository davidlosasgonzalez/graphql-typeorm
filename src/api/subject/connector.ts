import { Subject } from './model';
import { SubjectArgs } from './types';

export async function getSubjects() {
    return await Subject.find();
}

export async function createSubject(args: SubjectArgs) {
    const { name } = args;

    const newSubject = await Subject.create();

    newSubject.name = name;

    await newSubject.save();

    return true;
}
