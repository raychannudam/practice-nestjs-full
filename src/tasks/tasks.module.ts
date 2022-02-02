import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'config';
import { Task } from './entities/task.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Task]),
    UsersModule
  ]
})
export class TasksModule {}
