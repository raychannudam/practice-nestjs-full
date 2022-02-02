import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class ContactInfo {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({nullable: true})
    email: string

    @Column({nullable: true})
    phoneNumber: string

    @Column({nullable: true})
    address: string

    @OneToOne(()=>User, user=>user.contactInfo, {onDelete: 'CASCADE'})
    @JoinColumn()
    user: User
}