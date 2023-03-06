/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from '../interface/user.interface';
import { UserDto } from 'src/dto/user.dto';
import { UpdateUserDto } from 'src/dto/update.user.dto';
import { Model } from 'mongoose';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}
  async createUser(createUser: UserDto): Promise<IUser> {
    const user = await new this.userModel(createUser);
    return user.save();
  }
  async getAllUser(): Promise<IUser[]> {
    const users = await this.userModel.find();
    if (!users || users.length == 0) {
      throw new NotFoundException('User data not found!');
    }
    return users;
  }

  async getUser(userId: string): Promise<IUser> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return user;
  }
  async destroyUser(userId: string): Promise<IUser> {
    const user = await this.userModel.findByIdAndRemove(userId);
    if (!user) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return user;
  }

  async updateUser(userId: string, updateUser: UpdateUserDto): Promise<IUser> {
    const user = await this.userModel.findByIdAndUpdate(userId, updateUser, {
      new: true,
    });
    if (!user) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return user;
  }
}
