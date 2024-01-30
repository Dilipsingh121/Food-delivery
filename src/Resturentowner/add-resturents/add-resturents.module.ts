import { Module } from '@nestjs/common';
import { AddResturentsController } from './add-resturents.controller';
import { AddResturentsService } from './add-resturents.service';
import { MongooseModule } from '@nestjs/mongoose';
import { resturentsDetails, resturentsSchema } from 'src/model/addResturnet';
import { UploadsModule } from 'src/middleware/uploads/uploads.module';
import { UploadsService } from 'src/middleware/uploads/uploads.service';

@Module({
  imports:[MongooseModule.forFeature([{ name: resturentsDetails.name, schema:resturentsSchema  }]),UploadsModule],
  controllers: [AddResturentsController],
  providers:[AddResturentsService,UploadsService],
  exports:[AddResturentsService]
})
export class AddResturentsModule {}
