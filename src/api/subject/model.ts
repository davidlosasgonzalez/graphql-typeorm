import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    BeforeUpdate,
} from 'typeorm';
import { TeacherSubject } from '../teacher/model';

@Entity('subjects')
export class Subject extends BaseEntity {
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
        (teacherSubject) => teacherSubject.subject,
        { onDelete: 'CASCADE' }
    )
    teacherSubjects!: TeacherSubject[];
}
