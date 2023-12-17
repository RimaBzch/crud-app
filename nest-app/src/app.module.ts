/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfig } from './config/config';
import { Entities } from './models/entities';
import { UserController } from './controllers/UserController';
import { UserService } from './models/services/UserService';
import { UserRepository } from './models/repositories/UserRepository';
@Module({
  imports: [TypeOrmModule.forRoot({
    ...MysqlConfig,
    entities: Entities,
    synchronize: true,
    autoLoadEntities: true,
  }),],
  controllers: [AppController , UserController],
  providers: [AppService , UserService , UserRepository],
})
export class AppModule {}
