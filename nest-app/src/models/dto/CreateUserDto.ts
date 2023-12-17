/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEnum, IsDefined, IsEmpty } from 'class-validator';
export class CreateUserDto {
  @IsEmpty({ message: 'Id shoud be empty', always: true })
  id: number;
  @IsNotEmpty({ message: 'name is required' })
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  email: string;
}
