import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UploadsModule } from './uploads/uploads.module';
import * as dotenv from 'dotenv';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LoginService } from 'src/login/login.service';
import { UserRegistration } from 'src/model/userRegistration';
dotenv.config();


@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '1h' },
    }),
    UploadsModule],
  providers: [ AuthService],
  controllers: [AuthController],
  exports:[AuthService,PassportModule]
})
export class AuthModule {}
