/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Put, Post, Query } from '@nestjs/common';
import { CreateUserDto } from 'src/models/dto/CreateUserDto';
import { ApiResponse } from 'src/models/dto/ApiResponse';
import { UserService } from 'src/models/services/UserService';
import { User } from 'src/models/entities/User';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<ApiResponse<User>> {
    return await this.userService.createUser(user as User);
  }
  @Get()
  async getAllUser(): Promise<Array<User>> {
    return await this.userService.getAllUser();
  }

  @Put('/:id')
  async UpdateUser(@Param('id')  id: number ,@Body()user: CreateUserDto): Promise<ApiResponse<User>> {
    return await this.userService.updateUser(id , user as Partial<User>);
  }
  @Delete('/:id')
  async deleteUser(@Param('id') id: number): Promise<ApiResponse<boolean>> {
    return await this.userService.deleteUser(id);
  }
}
