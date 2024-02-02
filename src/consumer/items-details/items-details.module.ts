import { Module } from '@nestjs/common';
import { ItemsDetailsService } from './items-details.service';
import { ItemsDetailsController } from './items-details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { itemDetails, itemDetailsSchea } from 'src/model/itemsDetails';
import { resturentsDetails, resturentsSchema } from 'src/model/addResturnet';

@Module({
  imports:[MongooseModule.forFeature([{ name: itemDetails.name, schema:itemDetailsSchea  }]),MongooseModule.forFeature([{ name: resturentsDetails.name, schema:resturentsSchema  }])],
  providers: [ItemsDetailsService],
  controllers: [ItemsDetailsController],
  exports:[ItemsDetailsService]
})
export class ItemsDetailsModule {}
