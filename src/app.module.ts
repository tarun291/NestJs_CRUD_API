/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './shema/student.shema';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'user_db_dev',
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers:[UserService],
})
export class AppModule {}
