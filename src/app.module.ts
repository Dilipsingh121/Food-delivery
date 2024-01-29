import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { RegistrationController } from './registration/registration.controller';
import { RegistrationModule } from './registration/registration.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, RegistrationModule, LoginModule, AuthModule],
  controllers: [AppController, RegistrationController],
  providers: [AppService],
})
export class AppModule {}
