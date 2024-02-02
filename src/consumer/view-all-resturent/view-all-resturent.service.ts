import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { resturentsDetails } from 'src/model/addResturnet';

@Injectable()
export class ViewAllResturentService {
constructor(@InjectModel(resturentsDetails.name) private readonly addResturents: Model<resturentsDetails>){}
 
    async getAllRegisterResturents() {
        try{
            let allResturents = await this.addResturents.find().exec();
            return allResturents
        }catch(error){
            throw new Error(`Failed getAllRegisterResturents :${error.message}`)
        }
       
    }

    async getresturentById(id: string) {
        try{
            let resturents = await this.addResturents.findById(id).exec()
            return resturents
        }catch(error){
            throw new Error(`Failed getresturentById :${error.message}`)
        }
     
    }

}
