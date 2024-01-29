import { Body, Controller, Post } from '@nestjs/common';
import { registrationDto } from './registrationDto/registration.dto';
import { RegistrationService } from './registration.service';

@Controller('registration')
export class RegistrationController {
    constructor(public userRegistration:RegistrationService){}

    @Post()
    async create(@Body() userRegistration:registrationDto){
        return this.userRegistration.createuser(userRegistration)
    }
}
