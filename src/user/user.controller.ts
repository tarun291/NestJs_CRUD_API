/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from '../dto/user.dto';
import { UpdateUserDto } from '../dto/update.user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Res() response, @Body() create: UserDto) {
    try {
      const user = await this.userService.createUser(create);
      return response.status(HttpStatus.CREATED).json({
        message: 'User has been created successfully',
        user,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: User not created!',
        error: 'Bad Request',
      });
    }
  }
  @Get()
  async getStudents(@Res() response) {
    try {
      const users = await this.userService.getAllUser();
      return response.status(HttpStatus.OK).json({
        message: 'All users data found successfully',
        users,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('/:id')
  async getStudent(@Res() response, @Param('id') userId: string) {
    try {
      const existingUser = await this.userService.getUser(userId);
      return response.status(HttpStatus.OK).json({
        message: 'User found successfully',
        existingUser,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteUser(@Res() response, @Param('id') userId: string) {
    try {
      const deletedUser = await this.userService.destroyUser(userId);

      return response.status(HttpStatus.OK).json({
        message: 'User Deleted Successfully',
        deletedUser,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Put('/:id')
  async updateStudent(
    @Res() response,
    @Param('id') userId: string,
    @Body() update: UpdateUserDto,
  ) {
    try {
      const updatedUser = await this.userService.updateUser(userId, update);
      return response.status(HttpStatus.OK).json({
        message: 'User has been successfully updated',
        updatedUser,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
