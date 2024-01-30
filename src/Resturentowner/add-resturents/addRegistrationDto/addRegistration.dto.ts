import { IsArray, IsNotEmpty, IsString, ValidateNested, isNotEmpty, isString } from "class-validator";
import { Type } from 'class-transformer';


class operatingHours{
    @IsNotEmpty()
    @IsString()
    day:string;

    @IsNotEmpty()
    @IsString()
    openingTime:string;

    @IsNotEmpty()
    @IsString()
    closingTime:string;
}


class location{
    @IsNotEmpty()
    @IsString()
    latitude: String;

    @IsNotEmpty()
    @IsString()
    logitude: String;
}

// class menuItems{
//     @IsNotEmpty()
//     @IsString()
//     name:string;

//     @IsNotEmpty()
//     @IsString()
//     description:string;

//     @IsNotEmpty()
//     @IsString()
//     price:number;

//     @IsNotEmpty()
//     @IsString()
//     category:string;

// }

class ratings{
    @IsNotEmpty()
    @IsString()
    userId:string;

    @IsNotEmpty()
    @IsString()
    rating:number;

    @IsNotEmpty()
    @IsString()
    review:string;
}


export class addRegistratinDto{

    @IsNotEmpty()
    @IsString()
    resturnsName:string;

    @IsNotEmpty()
    @IsString()
    discription:string;

    @IsNotEmpty()
    @IsString()
    address:string;

    @IsNotEmpty()
    @IsString()
    contectNumber:number;

    @IsNotEmpty()
    @IsString()
    email:string;


    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => operatingHours)
    operatingHours: operatingHours[];

    // @IsNotEmpty()
    // @ValidateNested({each:true})
    // @Type(() => menuItems)
    // menuItems:menuItems[];

    @IsNotEmpty()
    @ValidateNested({each:true})
    @Type(() => location)
    location:location[];

    @IsArray()
    file: string[];

    @IsNotEmpty()
    @ValidateNested({each:true})
    @Type(() => ratings)
    ratings:ratings[];

    @IsNotEmpty()
    @IsString()
    ownerId:string;

    @IsNotEmpty()
    @IsString()
    resturentId:string


}