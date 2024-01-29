import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


@Schema()
export class UserRegistration extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    mobileNo: string;

    @Prop({type:[String],enum:['resturntOwner','Consumer'],required:true})
    roles:string[];     


    @Prop({ required: true })
    password: string;

 
}

export const UserSchema = SchemaFactory.createForClass(UserRegistration);
