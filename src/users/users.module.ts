import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import config from 'config';
import { User } from './entities/user.entity';
import { ContactInfo } from './entities/contact-info.entity';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([User, ContactInfo])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
