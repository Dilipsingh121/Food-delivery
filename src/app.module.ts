import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { RegistrationController } from './registration/registration.controller';
import { RegistrationModule } from './registration/registration.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './middleware/auth.module';
import { AddResturentsModule } from './Resturentowner/add-resturents/add-resturents.module';
import { UploadsModule } from './middleware/uploads/uploads.module';
import { ViewAllResturentModule } from './consumer/view-all-resturent/view-all-resturent.module';
import { ItemDetailsModule } from './Resturentowner/item-details/item-details.module';
import { ItemsDetailsModule } from './consumer/items-details/items-details.module';
import { AddItemsModule } from './consumer/add-items/add-items.module';

@Module({
  imports: [DatabaseModule, RegistrationModule, LoginModule, AuthModule,AddResturentsModule,UploadsModule,ViewAllResturentModule,ItemDetailsModule,ItemsDetailsModule,AddItemsModule],
  controllers: [AppController, RegistrationController],
  providers: [AppService],
})
export class AppModule {}
