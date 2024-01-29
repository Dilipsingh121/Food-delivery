import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRegistration, UserSchema } from 'src/model/userRegistration';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserRegistration.name, schema: UserSchema }])],
  providers: [RegistrationService],
  exports:[RegistrationService]
})

export class RegistrationModule {}
