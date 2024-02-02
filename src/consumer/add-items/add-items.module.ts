import { Module } from '@nestjs/common';
import { AddItemsController } from './add-items.controller';
import { AddItemsService } from './add-items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { itemDetails, itemDetailsSchea } from 'src/model/itemsDetails';
import { addItems } from 'src/model/add-items';

@Module({
  imports:[MongooseModule.forFeature([{ name: itemDetails.name, schema:itemDetailsSchea  }]),MongooseModule.forFeature([{ name: addItems.name, schema:itemDetailsSchea  }])],
  controllers: [AddItemsController],
  providers: [AddItemsService],
  exports:[AddItemsService]
})
export class AddItemsModule {}
