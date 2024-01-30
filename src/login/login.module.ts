import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { login, loginSchema } from 'src/model/login';
import { UserRegistration, UserSchema } from 'src/model/userRegistration';
import { AuthService } from 'src/middleware/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt/dist';
import * as dotenv from 'dotenv';
dotenv.config();
console.log( process.env.JWT_KEY,)
@Module({
  imports:[MongooseModule.forFeature([{ name: login.name, schema: loginSchema }]),MongooseModule.forFeature([{ name: UserRegistration.name, schema: UserSchema }])],
  controllers: [LoginController],
  providers: [LoginService,AuthService,JwtService],
  exports:[LoginService]
})
export class LoginModule {}
