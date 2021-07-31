import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    ManyToOne,
    BeforeUpdate,
} from 'typeorm';

import { Subject } from '../subject/model';

@Entity('teacher')
export class Teacher extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('text')
    name!: string;

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt!: Date;

    @CreateDateColumn({
        type: 'timestamptz',
    })
    modifiedAt?: Date;

    @BeforeUpdate()
    updateModifiedAt() {
        this.modifiedAt = new Date();
    }

    @OneToMany(
        () => TeacherSubject,
        (teacherSubject) => teacherSubject.teacher,
        { onDelete: 'CASCADE' }
    )
    teacherSubjects!: TeacherSubject[];
}

@Entity('teacherSubject')
export class TeacherSubject extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt!: Date;

    @ManyToOne(() => Teacher, (teacher) => teacher.teacherSubjects, {
        eager: true,
        onDelete: 'CASCADE',
    })
    teacher!: Teacher;

    @ManyToOne(() => Subject, (subject) => subject.teacherSubjects, {
        eager: true,
        onDelete: 'CASCADE',
    })
    subject!: Subject;
}
