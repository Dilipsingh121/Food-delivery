import { Injectable } from '@nestjs/common';
import { addItemsDetails } from './addItemsDto/addItems.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { itemDetails } from 'src/model/itemsDetails';
import { UpdateItemsDto } from './addItemsDto/updateItems.dto';

@Injectable()
export class ItemDetailsService {
    constructor(@InjectModel(itemDetails.name) private readonly addItemsDetails: Model<itemDetails>){}

    
    async addItems(Additems: addItemsDetails) {
        try{
            let addItemsDetails = await new this.addItemsDetails(Additems)
            return addItemsDetails.save()
        }catch(error){
          throw new Error(`Failed Create :${error.message}`)
        }
        

    }

  

    async updateItems(id: string, updateItemsDetails: UpdateItemsDto) {
        try {
            console.log("=========================31", updateItemsDetails)
            // let updateitems = await this.addItemsDetails.updateOne({_id:id},{$set:{'menuItems.$.name':updateItemsDetails.name,'menuItems.$.description':updateItemsDetails.description,'menuItems.$.price':updateItemsDetails.price,'menuItems.$.category':updateItemsDetails.category}})
            // console.log('=========================27',updateitems)
            let updateitems = await this.addItemsDetails.findByIdAndUpdate({ _id: id }, updateItemsDetails, { new: true })
            return updateitems
        } catch (error) {
            throw new Error(`Failed Update : ${error.message}`)
        }

    }
}
