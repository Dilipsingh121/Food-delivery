import { Controller, Get, Param } from '@nestjs/common';
import { ViewAllResturentService } from './view-all-resturent.service';
import { InjectModel } from '@nestjs/mongoose';
import { resturentsDetails } from 'src/model/addResturnet';
import { Model } from 'mongoose';

@Controller('view-all-resturent')
export class ViewAllResturentController {
constructor(private viewAllResturents: ViewAllResturentService){}

    @Get()
    async getAllResturnts() {
        return this.viewAllResturents.getAllRegisterResturents()
    }

    @Get(':id')
    async getResturentById(@Param('id') id:string){
        return this.viewAllResturents.getresturentById(id)
    }


}


