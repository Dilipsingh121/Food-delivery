import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { loginDto } from './loginDto/login.dto';

@Controller('login')
export class LoginController {
    constructor(public readonly loginService:LoginService){}

    @Post()
    async getAlluser(@Body() loginDto:loginDto){
        try{
            return this.loginService.getAllUser(loginDto)
        }catch(error){
            throw new Error(`Failed getAlluser :${error.message}`)
        }
    }
}
