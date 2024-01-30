import { Body, Controller, Post } from '@nestjs/common';
import { ItemDetailsService } from './item-details.service';
import { addItemsDetails } from './addItemsDto/addItems.dto';

@Controller('item-details')
export class ItemDetailsController {
constructor(private readonly itemDetailsService:ItemDetailsService){}

    @Post()
    async additemDetails(@Body() Additems: addItemsDetails) {
        try{
            let addItems = await this.itemDetailsService.addItems(Additems)
            return addItems
        }catch(error){
            console.log(error)
        }
       
    }

}
