import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import config from 'config';


@Module({
  imports: [UsersModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
