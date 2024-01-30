import { Injectable } from '@nestjs/common';
import { addItemsDetails } from './addItemsDto/addItems.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { itemDetails } from 'src/model/itemsDetails';

@Injectable()
export class ItemDetailsService {
    constructor(@InjectModel(itemDetails.name) private readonly addItemsDetails: Model<itemDetails>){}

    
    async addItems(Additems: addItemsDetails) {
        try{
            let addItemsDetails = await new this.addItemsDetails(Additems)
            return addItemsDetails.save()
        }catch(error){
            console.log(error)
        }
        

    }
}
