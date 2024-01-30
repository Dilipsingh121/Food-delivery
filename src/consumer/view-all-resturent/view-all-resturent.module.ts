import { Module } from '@nestjs/common';
import { ViewAllResturentController } from './view-all-resturent.controller';
import { ViewAllResturentService } from './view-all-resturent.service';
import { MongooseModule } from '@nestjs/mongoose';
import { resturentsDetails, resturentsSchema } from 'src/model/addResturnet';

@Module({
  imports:[MongooseModule.forFeature([{ name: resturentsDetails.name, schema:resturentsSchema  }])],
  controllers: [ViewAllResturentController],
  providers: [ViewAllResturentService],
  exports:[ViewAllResturentService]
})
export class ViewAllResturentModule {}
