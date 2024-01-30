import { Module } from '@nestjs/common';
import { ItemDetailsService } from './item-details.service';
import { ItemDetailsController } from './item-details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { itemDetails, itemDetailsSchea } from 'src/model/itemsDetails';

@Module({
  imports:[MongooseModule.forFeature([{ name: itemDetails.name, schema:itemDetailsSchea  }])],
  providers: [ItemDetailsService],
  controllers: [ItemDetailsController],
  exports:[ItemDetailsService]
})
export class ItemDetailsModule {}
