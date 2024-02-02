import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { login, loginSchema } from 'src/model/login';
import { UserRegistration, UserSchema } from 'src/model/userRegistration';
import { AuthService } from 'src/middleware/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt/dist';
import * as dotenv from 'dotenv';
import { JwtStrategy } from 'src/middleware/strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
dotenv.config();
@Module({
  imports:[MongooseModule.forFeature([{ name: login.name, schema: loginSchema }]),MongooseModule.forFeature([{ name: UserRegistration.name, schema: UserSchema }]),
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: process.env.JWT_KEY,
    signOptions: { expiresIn: '1h' },
  }),],
  controllers: [LoginController],
  providers: [LoginService,AuthService,JwtService,JwtStrategy],
  exports:[LoginService]
})
export class LoginModule {}
