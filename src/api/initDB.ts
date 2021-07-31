import { connectDB } from '../config/typeorm';

import { Subject } from './subject/model';
import { createSubject } from './subject/connector';

import { Teacher, TeacherSubject } from './teacher/model';
import { createTeacher } from './teacher/connector';

async function dbData() {
    let connection;

    try {
        connection = await connectDB();

        TeacherSubject.delete({});
        Subject.delete({});
        Teacher.delete({});

        console.log('Database cleared!');

        /**
         * ##############
         * ## Subjects ##
         * ##############
         */

        const subjects = [
            'HTML',
            'CSS',
            'JavaScript',
            'SQL',
            'Node.js',
            'React.js',
        ];

        for (const subject of subjects) {
            await createSubject({
                name: subject,
            });
        }

        console.log('Subjects added!');

        /**
         * ##############
         * ## Teachers ##
         * ##############
         */

        const teachers = ['Iván Ramos', 'Rebeca Santos', 'Helena González'];

        for (const teacher of teachers) {
            await createTeacher({
                name: teacher,
            });
        }

        console.log('Teachers added!');

        /**
         * #####################
         * ## TeacherSubjects ##
         * #####################
         */

        const addedTeachers = await Teacher.find();
        const addedSubjects = await Subject.find();

        for (const teacher of addedTeachers) {
            const currentTeacher = await Teacher.findOne(teacher.id);

            for (let i = 0; i < 2; i++) {
                const currentSubject = await Subject.findOne(
                    addedSubjects[i].id
                );

                if (!currentTeacher || !currentSubject)
                    throw new Error('Teacher or subject not found');

                const newTeacherSubject = await TeacherSubject.create();

                newTeacherSubject.teacher = currentTeacher;
                newTeacherSubject.subject = currentSubject;

                await newTeacherSubject.save();
            }
            addedSubjects.splice(0, 2);
        }

        console.log('Subject added to teachers!');
    } catch (error) {
        console.error(error.message);
    } finally {
        if (connection) connection.close();
    }
}

dbData();
