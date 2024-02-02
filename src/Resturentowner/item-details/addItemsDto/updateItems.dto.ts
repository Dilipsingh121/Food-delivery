// import { Type } from "class-transformer";
// import { IsNotEmpty, IsString, ValidateNested, isString } from "class-validator";

// class menuItems{
//     @IsNotEmpty()
//     @IsString()
//     name:string;

//     @IsNotEmpty()
//     @IsString()
//     description: string;

//     @IsNotEmpty()
//     @IsString()
//     price:string;

//     @IsNotEmpty()
//     @IsString()
//     category: string;

// }

// export class updateItemsDto{

//     @IsNotEmpty()
//     @ValidateNested({each:true})
//     @Type(() => menuItems)
//     menuItems:menuItems[]

// }

import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateItemsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsNotEmpty()
  @IsString()
  category: string;
}

// export class UpdateItemsDto {
//   @IsNotEmpty()
//   @ValidateNested({ each: true })
//   @Type(() => MenuItemDto)
//   menuItems: MenuItemDto[];
    
// }

