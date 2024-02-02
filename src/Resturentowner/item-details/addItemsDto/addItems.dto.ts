import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested, isString } from "class-validator";

class menuItems{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    price:string;

    @IsNotEmpty()
    @IsString()
    category: string;

}

export class addItemsDetails{

    @IsNotEmpty()
    @ValidateNested({each:true})
    @Type(() => menuItems)
    menuItems:menuItems[]

}
