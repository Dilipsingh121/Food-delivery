
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


@Schema()
export class resturentsDetails extends Document{

    @Prop({required:true})
    resturnsName:string;

    @Prop({required:true})
    discription:string;

    @Prop({required:true})
    address:string;

    @Prop({required:true})
    contectNumber:string;

    @Prop({required:true})
    email:string;

    @Prop()
    operatingHours: {
        day: string;
        openingTime: string;
        closingTime: string;
      }[];

      @Prop()
      menuItems: {
        name: string;
        description: string;
        price: number;
        category: string;
      }[];

    @Prop()
    photos: string[];

  @Prop()
  ratings: {
    userId: string; 
    rating: number;
    review: string;
  }[];

  @Prop()
  ownerId: string;

}
export const resturentsSchema = SchemaFactory.createForClass(resturentsDetails);