import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ViewAllResturentService } from './view-all-resturent.service';
import { InjectModel } from '@nestjs/mongoose';
import { resturentsDetails } from 'src/model/addResturnet';
import { Model } from 'mongoose';
import { JwtAuthGuard } from 'src/middleware/jwt-auth-gards';

@Controller('view-all-resturent')
export class ViewAllResturentController {
constructor(private viewAllResturents: ViewAllResturentService){}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllResturnts() {
        try{
            return this.viewAllResturents.getAllRegisterResturents()
        }catch(error){
            throw new Error(`Failed getAllResturnts :${error.message}`)
        }
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getResturentById(@Param('id') id:string){
        try{
            return this.viewAllResturents.getresturentById(id)

        }catch(error){
            throw new Error(`Failed getResturentById :${error.message}`)
        }
    }


}


