import { Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path'
import { UploadsService } from './uploads.service';
import { JwtAuthGuard } from '../jwt-auth-gards';
import { AuthGuard } from '@nestjs/passport';


const storage = diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        const name = file.originalname.split('.')[0];
        const extension = extname(file.originalname);
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        cb(null, `${name}-${randomName}${extension}`);
    },
});

@Controller('uploads')
export class UploadsController {
constructor(private readonly uploadsService:UploadsService){}

    @Post() 
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('file', { storage }))
    uploadFile(@UploadedFile() file) {
        return this.uploadsService.onUploads(file)
    }

}

