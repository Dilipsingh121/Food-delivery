import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AddItemsService } from './add-items.service';
import { JwtAuthGuard } from 'src/middleware/jwt-auth-gards';

@Controller('add-items')
export class AddItemsController {
    constructor(private readonly addItemsService:AddItemsService){}

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async addToCart(@Param('id') id: string) {
        try{
            let productDetails = await this.addItemsService.itemsDetails(id)
            return productDetails
        }catch(error){
            throw new Error(`failed addToCart :${error.message}`)
        }
        

    }

   



}
