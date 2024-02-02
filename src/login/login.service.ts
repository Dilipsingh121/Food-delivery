import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { login } from 'src/model/login';
import { loginDto } from './loginDto/login.dto';
import { UserRegistration } from 'src/model/userRegistration';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/middleware/auth.service';
import { JwtService } from '@nestjs/jwt';
import crypto from 'crypto';
import { access } from 'fs';


@Injectable()
export class LoginService {
    constructor(@InjectModel(login.name) private readonly loginModel: Model<login>, @InjectModel(UserRegistration.name) private readonly userModel: Model<UserRegistration> ,private authService:AuthService,private jwtService: JwtService){}


    async getAllUser(loginDto: loginDto) {
        try {
            const allUsers = await this.userModel.find({ email: loginDto.email });
            if (allUsers.length > 0) {
                const passwordCompare = await bcrypt.compare(loginDto.password, allUsers[0].password);
                if (passwordCompare) {
                    let token = await this.jwtService.signAsync(loginDto, { secret: process.env.JWT_KEY }) 
                    let accessToken = {
                        accessToken: token
                    }
                    return accessToken;
                } else {
                    return 'Incorrect password';
                }
            } else {
                return 'User Not found';
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    
 
    

}
