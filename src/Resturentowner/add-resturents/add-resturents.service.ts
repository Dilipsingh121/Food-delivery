import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { resturentsDetails } from 'src/model/addResturnet';

@Injectable()
export class AddResturentsService {
    constructor(@InjectModel(resturentsDetails.name) private readonly addResturents: Model<resturentsDetails>){}


    
}
