import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { resturentsDetails } from 'src/model/addResturnet';

@Injectable()
export class ViewAllResturentService {
constructor(@InjectModel(resturentsDetails.name) private readonly addResturents: Model<resturentsDetails>){}

 async getAllRegisterResturents(){
    let allResturents = await this.addResturents.find().exec();
    return allResturents
}

async getresturentById(id:string){
    let resturents = await this.addResturents.findById(id).exec()
    return resturents
}

}
