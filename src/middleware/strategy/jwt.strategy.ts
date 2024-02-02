import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import * as dotenv from 'dotenv';
import { LoginService } from 'src/login/login.service';
dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt') {
  constructor(private readonly authService: AuthService,private readonly loginService: LoginService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_KEY,
    });
  }

  async validate(payload: any) {
    const user = await this.loginService.getAllUser(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}