import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


@Schema()
export class itemDetails extends Document{
    // @Prop()
    // ratings: {
    //   userId: string; 
    //   rating: number;
    //   review: string;
    // }[];


      @Prop()
      menuItems: {
        name: string;
        description: string;
        price: number;
        category: string;
      }[];
      
    @Prop()
    resturentId: string
}

export const itemDetailsSchea = SchemaFactory.createForClass(itemDetails);