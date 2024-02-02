import { Body, Controller, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ItemDetailsService } from './item-details.service';
import { addItemsDetails } from './addItemsDto/addItems.dto';
import { JwtAuthGuard } from 'src/middleware/jwt-auth-gards';
import { UpdateItemsDto } from './addItemsDto/updateItems.dto';

@Controller('item-details')
export class ItemDetailsController {
constructor(private readonly itemDetailsService:ItemDetailsService){}

    @Post()
    @UseGuards(JwtAuthGuard)
    async additemDetails(@Body() Additems: addItemsDetails) {
        try{
            let addItems = await this.itemDetailsService.addItems(Additems)
            return addItems
        }catch(error){
            throw new Error(`Failed to Create items : ${error.message}`)
        }
       
    }

    @Put('/updateItems/:id')
    @UseGuards(JwtAuthGuard)
    async updateItems(@Param('id') id: string, @Body() updateItemsDetails: UpdateItemsDto) {
        let updateItems =await this.itemDetailsService.updateItems(id,updateItemsDetails)
        console.log("====================2tyktrky",updateItems)
        return updateItems

    }


}
