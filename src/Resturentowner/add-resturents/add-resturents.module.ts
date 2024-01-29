import { Module } from '@nestjs/common';
import { AddResturentsController } from './add-resturents.controller';
import { AddResturentsService } from './add-resturents.service';
import { MongooseModule } from '@nestjs/mongoose';
import { resturentsDetails, resturentsSchema } from 'src/model/addResturnet';

@Module({
  imports:[MongooseModule.forFeature([{ name: resturentsDetails.name, schema:resturentsSchema  }])],
  controllers: [AddResturentsController],
  providers:[AddResturentsService],
  exports:[AddResturentsService]
})
export class AddResturentsModule {}
