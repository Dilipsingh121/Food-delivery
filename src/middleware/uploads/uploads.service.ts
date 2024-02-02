import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadsService {
constructor(){}
onUploads(file:any){
    return file.filename
}
    
}
