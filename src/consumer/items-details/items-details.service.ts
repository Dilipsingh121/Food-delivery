import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { resturentsDetails } from 'src/model/addResturnet';
import { itemDetails } from 'src/model/itemsDetails';

@Injectable()
export class ItemsDetailsService {
    constructor(@InjectModel(itemDetails.name) private readonly addItemsDetails: Model<itemDetails>,@InjectModel(resturentsDetails.name) private readonly resturentsDetails: Model<resturentsDetails>){}


    async getmenuitems() {
        try {
            let menueDetails = await this.addItemsDetails.find().exec()
            return menueDetails
        } catch (error) {
            throw new Error(`Failed getmenuitems : ${error.message}`)
        }

    }

    async getResturnetsItem(id: string) {
        try {
            let itemDetailsById = await this.addItemsDetails.find({ resturentId: id }).exec()
            return itemDetailsById
        } catch (error) {
            throw new Error(`Failed getResturnetsItem : ${error.message}`)
        }


    }

    async getItemsUsingItemsId(id: string) {
        try {
            let itemsDetails = await this.addItemsDetails.find({ _id: id }).exec()
            return itemsDetails
        } catch (error) {
            throw new Error(`Failed itemsDetails :${error.message}`)
        }


    }

    async searchData(query: any) {
        try {
            if (query.resturnentName) {
                let filteredResturents = await this.resturentsDetails.find({ resturnsName: query.resturnentName })
                return filteredResturents
            } else if (query.disckName) {

                let datails = await this.addItemsDetails.aggregate([
                    {
                        $unwind: "$menuItems"
                    },
                    {
                        $project: {
                            "name": "$menuItems.name",
                            "description": "$menuItems.description",
                            "price": "$menuItems.price",
                            "category": "$menuItems.category"
                        }
                    }
                ]).exec();

                let searchitems = datails.filter((items) => items.name == query.disckName)
                return searchitems
            }
        } catch (error) {
            throw new Error(`Failed searchData : ${error.message}`)
        }
    }



}
