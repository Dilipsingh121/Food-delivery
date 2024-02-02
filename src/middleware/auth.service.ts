import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { loginDto } from 'src/login/loginDto/login.dto';

@Injectable()
export class AuthService {
    constructor(private  jwtService: JwtService) {}

    async generateToken(loginDto:any){
        try{
            let token = await this.jwtService.signAsync(loginDto, { secret: process.env.JWT_KEY }) 
            return token
        }catch(error){
            return error
        }

    }

   
}

