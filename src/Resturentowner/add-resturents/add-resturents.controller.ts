import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { addRegistratinDto } from './addRegistrationDto/addRegistration.dto';
import { AddResturentsService } from './add-resturents.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/middleware/jwt-auth-gards';

@Controller('add-resturents')
export class AddResturentsController {
    constructor(private readonly addResturents:AddResturentsService){}

@Post()
// @UseGuards(JwtAuthGuard)
async addResturentsDetails(@Body() addRegistratinDto:addRegistratinDto){
    try{
        return this.addResturents.createResturents(addRegistratinDto)
    }catch(error){
        console.log(error)
    }
    
}
}

