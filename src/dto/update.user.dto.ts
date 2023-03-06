/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';

// eslint-disable-next-line prettier/prettier
import { UserDto } from './user.dto';

export class UpdateUserDto extends PartialType(UserDto) {}
