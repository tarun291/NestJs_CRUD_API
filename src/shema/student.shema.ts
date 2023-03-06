/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
