import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createRequire } from 'module';
import { createQueryBuilder, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ContactInfo } from './entities/contact-info.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(ContactInfo) private contactInfoRepo: Repository<ContactInfo>
  ){}
  
  async create(createUserDto: CreateUserDto): Promise<any> {
    const newUser = this.userRepo.create(createUserDto.user)
    const savedNewUser = await this.userRepo.save(newUser)
    const newContactInfo = this.contactInfoRepo.create(createUserDto['contact-info'])
    newContactInfo.user = newUser
    const savedNewContactInfo = await this.contactInfoRepo.save(newContactInfo)
    return {user: savedNewUser, 'contact-info': newContactInfo}
  }

  findAll(): Promise<any[]> {
    return this.userRepo.find({relations:[
      'contactInfo',
      'tasks'
    ]});
  }

  findOne(id: string): Promise<any>{
    try {
      const foundedUser = this.userRepo.findOneOrFail(1, {relations: [
        'contactInfo',
        'tasks'
      ]})
      return foundedUser
    } catch (error) {
      throw new error
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepo.findOne(id)
    if (user){
      user.name = updateUserDto.user.name
      user.gender = updateUserDto.user.gender
      user.username = updateUserDto.user.username
      user.password = updateUserDto.user.password
      user.contactInfo.email = updateUserDto['contact-info'].email
      user.contactInfo.phoneNumber = updateUserDto['contact-info'].phoneNumber
      user.contactInfo.phoneNumber = updateUserDto['contact-info'].address
    }
    await this.userRepo.save(user)
    return this.findOne(id)
  }

  async remove(id: string) {
    const user = await this.userRepo.findOne(id)
    return this.userRepo.remove(user)
  }

  async findByName(name: string): Promise<User>{
    const user = await this.userRepo.createQueryBuilder('user').where('user.name = :_name', {_name: name}).getOne()
    return user
  }
}
