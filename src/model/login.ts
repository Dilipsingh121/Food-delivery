import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


@Schema()
export class login extends Document{

    @Prop({required:true})
    email:string;

    @Prop({required:true})
    password:string

}
export const loginSchema = SchemaFactory.createForClass(login);
