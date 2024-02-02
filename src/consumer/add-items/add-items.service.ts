import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { addItems } from 'src/model/add-items';
import { itemDetails } from 'src/model/itemsDetails';

@Injectable()
export class AddItemsService {
    private selectedItemsDetails: any[] = [];

constructor(@InjectModel(itemDetails.name) private readonly getItemsDetails: Model<itemDetails>,@InjectModel(addItems.name) private readonly addItems: Model<addItems>){}

    async itemsDetails(id: string) {
        try{
            let selectedItems = await this.getItemsDetails.findById({ _id: id })
            this.selectedItemsDetails.push(selectedItems)
            let totalPrice = 0;
            let names = [];
            this.selectedItemsDetails.forEach(items => {
                totalPrice += items.menuItems[0].price;
                names.push(items.menuItems[0].name);
            })
            let responseData = {  
                price:totalPrice,
                totalItemSelected:this.selectedItemsDetails.length,
                productName:names
            }
    
            return responseData
        }catch(error){
            throw new Error(`Failed itemsDetails :${error.message}`)
        }
       

    }

}
