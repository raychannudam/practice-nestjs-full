import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfo } from "./contact-info.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    gender: string

    @Column()
    username: string

    @Column()
    password: string

    @OneToOne(()=>ContactInfo, contactInfo=>contactInfo.user)
    contactInfo: ContactInfo

    @ManyToMany(()=>Task, task=>task.user, {onDelete: 'SET NULL'})
    @JoinTable()
    tasks: Task[]
}
