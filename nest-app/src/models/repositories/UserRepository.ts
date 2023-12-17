/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/User';
import { ApiResponse } from '../dto/ApiResponse';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  private readonly logger: Logger = new Logger(UserRepository.name)


  async deleteUser(id: number): Promise<ApiResponse<boolean>> {
    try {
      return new ApiResponse<boolean>(
        (await this.delete(id)).affected > 0,
        200,
        'User deleted successfully',
      );
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id: number): Promise<ApiResponse<User>> {
    try {
      return new ApiResponse<User>(
        await this.findOne({ where: { id } }),
        200,
        'User fetched successfully',
      );
    } catch (error) {
      throw error;
    }
  }

  /**
   *
   * @param user
   * @returns
   */
  async createUser(user: User): Promise<ApiResponse<User>> {
    try {
      return new ApiResponse<User>(
        await this.save(user),
        200,
        'User created successfully',
      );
    } catch (error) {
      throw error;
    }
  }

  /**
   *
   * @returns
   */
  async getAllUsers(): Promise<Array<User>> {
    try {
      return this.find();
    } catch (error) {
      throw error;
    }
  }
  async updateUser(id: number, updatedUser: Partial<User>): Promise<ApiResponse<User>> {
    const user =this.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    this.logger.debug('Updating user'+JSON.stringify(updatedUser))
  
    const mergedUser = Object.assign(new User(), { ...updatedUser, id }) as User;
    const updated = await this.save(mergedUser);
  
    return new ApiResponse<User>(updated, 200, 'User updated successfully');
  }
  
}
