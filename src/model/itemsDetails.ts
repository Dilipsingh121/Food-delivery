import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


@Schema()
export class itemDetails extends Document{
  
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