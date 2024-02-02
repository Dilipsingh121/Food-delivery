import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


@Schema()
export class addItems extends Document{
  
    //   @Prop()
    //   menuItems: {
    //     name: string;
    //     description: string;
    //     price: number;
    //     category: string;
    //   }[];
      
    @Prop()
    totalPrice: string

    @Prop()
    totalItemSelected: string

    @Prop()
    productName: string

    // @Prop()
    // resturentId: string

    // @Prop()
    // resturentId: string

  
}

export const addItemsDetails = SchemaFactory.createForClass(addItems);