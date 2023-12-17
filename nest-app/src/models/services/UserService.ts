/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/errors/NotFoundError';
import { ApiResponse } from '../dto/ApiResponse';
import { UserRepository } from '../repositories/UserRepository';
import { User } from '../entities/User';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}


  async createUser(user: User): Promise<ApiResponse<User>> {
    try {
      return await this.userRepository.createUser(user);
    } catch (error) {
      throw error;
    }
  }
  async updateUser(id: number ,user: Partial<User>): Promise<ApiResponse<User>> {
    try {
      return await this.userRepository.updateUser(id ,user);
    } catch (error) {
      throw error;
    }
  }
  async getAllUser(): Promise<Array<User>> {
    try {
      return await this.userRepository.getAllUsers();
    } catch (error) {
      throw error;
    }
  }
  async deleteUser(id: number): Promise<ApiResponse<boolean>> {
    try {
      if (!(await this.userRepository.getUserById(id)).data) {
        throw new NotFoundError('User not found');
      }
      return await this.userRepository.deleteUser(id);
    } catch (error) {
      throw error;
    }
  }
}
