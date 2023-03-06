/* eslint-disable prettier/prettier */
import { IsString, MaxLength, IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly firstName: string;
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly lastName: string;
  @IsEmail()
  readonly email: string;
}
