import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { resturentsDetails } from 'src/model/addResturnet';
import { addRegistratinDto } from './addRegistrationDto/addRegistration.dto';
import { UploadsService } from 'src/middleware/uploads/uploads.service';

@Injectable()
export class AddResturentsService {
    constructor(@InjectModel(resturentsDetails.name) private readonly addResturents: Model<resturentsDetails>,private readonly uploadsService:UploadsService){}


    async createResturents(addRegistratinDto:addRegistratinDto){
        try{
            let addResturentsDetails = await new this.addResturents(addRegistratinDto)
            // let uploadsFile =  this.uploadsService.onUploads()
            // console.log("===========================",addResturentsDetails)
            return addResturentsDetails.save()
        }catch(error){
            console.log(error)
        }
       

    }

}
