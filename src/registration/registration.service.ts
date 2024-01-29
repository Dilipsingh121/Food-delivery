import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRegistration } from 'src/model/userRegistration';
import { registrationDto } from './registrationDto/registration.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class RegistrationService {
    constructor(@InjectModel(UserRegistration.name) private readonly userModel: Model<UserRegistration>){}
    async createuser(userRegistrationDto:registrationDto){
        const hashedPassword = await bcrypt.hash(userRegistrationDto.password, 10);
        userRegistrationDto.password = hashedPassword
        const newuser = new this.userModel(userRegistrationDto)
        // console.log(newuser)
        return newuser.save()

    }
}
