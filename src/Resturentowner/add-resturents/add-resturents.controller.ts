import { Body, Controller, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { addRegistratinDto } from './addRegistrationDto/addRegistration.dto';
import { AddResturentsService } from './add-resturents.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/middleware/jwt-auth-gards';
import { updateResturentsDetails } from './addRegistrationDto/updateResturents.dto';

@Controller('add-resturents')
export class AddResturentsController {
    constructor(private readonly addResturents:AddResturentsService){}

@Post()
@UseGuards(JwtAuthGuard)
async addResturentsDetails(@Body() addRegistratinDto:addRegistratinDto){
    try{
        return this.addResturents.createResturents(addRegistratinDto)
    }catch(error){
     throw new Error(`Failed to update item: ${error.message}`);  
    } 
}

    @Put('/updateResturentsDetails/:id')
    @UseGuards(JwtAuthGuard)
    async updateResturantsDetails(@Param('id') id: string, @Body() updateResturentsDto: updateResturentsDetails) {
        try {
            let updateResturentsDetails = await this.addResturents.updateResturents(id, updateResturentsDto)
            return updateResturentsDetails
        } catch (error) {
            throw new Error(`Failed to update item: ${error.message}`);        }


    }

}

