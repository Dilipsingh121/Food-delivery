import { Module } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { UploadsController } from './uploads.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports:[],
  providers: [UploadsService],
  controllers: [UploadsController],
  exports:[UploadsService]
})
export class UploadsModule {}
