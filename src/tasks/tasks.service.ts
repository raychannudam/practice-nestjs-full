import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>, private userRepo: UsersService){}
  
  async create(createTaskDto: CreateTaskDto): Promise<Task> { //name, User[]
    let userList: User[] = []
    for (let i=0; i<createTaskDto.username.length; i++){
      const user = await this.userRepo.findByName(createTaskDto.username[i])
      userList.push(user)
    }
    const newTask = this.taskRepo.create(createTaskDto)
    newTask.user = userList
    return this.taskRepo.save(newTask)
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
