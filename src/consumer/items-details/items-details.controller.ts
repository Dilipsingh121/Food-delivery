import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ItemsDetailsService } from './items-details.service';
import { JwtAuthGuard } from 'src/middleware/jwt-auth-gards';

@Controller('items-details')
export class ItemsDetailsController {
    constructor(private itemsDetailsService:ItemsDetailsService){}

    @Get('/search')
    async searchItems(@Query('resturnentName') resturnentName: string, @Query('disckName') disckName: string) {
        try {
            let searchDetails = {
                resturnentName: resturnentName,
                disckName: disckName
            }
            let searchData = await this.itemsDetailsService.searchData(searchDetails)
            return searchData
        } catch (error) {
            throw new Error(`Failed searchItems : ${error.message}`)
        }

    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllItems() {
        try {
            let getAllMenu = await this.itemsDetailsService.getmenuitems()
            return getAllMenu
        } catch (error) {
            throw new Error(`failed GetAllItems :${error.message}`)
        }

    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getitemDetails(@Param('id') id: string) {
        try {
            let item = await this.itemsDetailsService.getResturnetsItem(id)
            return item
        } catch (error) {
            throw new Error(`filed getItems :${error.message}`)
        }

    }


    @Get('items/:id')
    @UseGuards(JwtAuthGuard)
    async getitemsByItemsId(@Param('id') id: string) {
        try {
            let singleItems = await this.itemsDetailsService.getItemsUsingItemsId(id)
            return singleItems
        } catch (error) {
            throw new Error(`failed getItemsById :${error.message}`)
        }

    }

   
    

}

