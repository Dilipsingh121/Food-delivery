import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class registrationDto{
 @IsNotEmpty() 
@IsString()
name:string;
@IsEmail()
@IsNotEmpty() 
@IsString()
email:string;
@IsNotEmpty() 
@IsString()
mobileNo:string;
@IsNotEmpty() 
@IsString()
password:string
@IsNotEmpty() 
@IsString()
roles:string

}

