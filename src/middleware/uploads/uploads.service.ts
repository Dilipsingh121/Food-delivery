import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadsService {
constructor(){}
onUploads(file:any){
    console.log("======================7",file)
    return file.filename
}
    
}
