import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @ManyToMany(()=>User, user=>user.tasks, {onDelete: 'SET NULL'})
    user: User[]
}
