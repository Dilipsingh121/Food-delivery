import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

console.log(process.env.mongoDb_url)
@Module({
 imports:[ MongooseModule.forRoot(process.env.mongoDb_url)],
  


  providers: [DatabaseService],
  controllers: [DatabaseController]
})
export class DatabaseModule {}
