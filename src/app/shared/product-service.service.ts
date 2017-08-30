import { Injectable } from '@angular/core';
import {Shop} from "../entities/shop";
import {Product} from "../entities/product";

@Injectable()
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [{
      _id: 1,
      name: "Soap",
      description: "Description",
      shopId: 1
    }]
  }

  getByShopId(shopId: number):Product[]{
    let shopProducts:Product[] = this.products.filter(function (item) {
      return item.shopId == shopId;
    });

    return shopProducts.sort((item1, item2) => {
      return item1._id - item2._id
    }).slice();
  }

  public remove(itemToRemove: Product): void{
    let indexOfItem = this.products.indexOf(itemToRemove);
    if(indexOfItem != -1){
      this.products.splice(indexOfItem, 1);
    }
  }

  public create(newProduct: Product): void{
    newProduct._id = this.products.sort((item1, item2) => {
      return item1._id - item2._id
    })[this.products.length-1]._id+1;
    this.products.push(newProduct);
  }

  public update(itemToUpdateId: number, newItem: Product){
    //noinspection TypeScriptValidateTypes
    let itemToUpdate = this.products.find(function (item) {
      return item._id == itemToUpdateId;
    });
    for(let prop in itemToUpdate){
      if(prop != '_id' && prop != 'shopId' && newItem[prop]){
        itemToUpdate[prop] = newItem[prop]
      }
    }
  }

}
