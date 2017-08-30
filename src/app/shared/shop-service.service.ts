import { Injectable } from '@angular/core';
import {Shop} from "../entities/shop";

@Injectable()
export class ShopService {

  private shops: Shop[];
  constructor() {
    this.shops = [
      {
        _id: 1,
        trackNo: 1,
        name: "ProstorE",
        adress: {
          lat: 1,
          lng: 2
        },
        mode:{
          start: 7,
          end: 24
        }
      },{
        _id: 2,
        trackNo: 3,
        name: "MediaMarkt",
        adress: {
          lat: 2,
          lng: 1
        },
        mode:{
          start: 1,
          end: 1
        }
      },{
        _id: 3,
        trackNo: 2,
        name: "Test 2",
        adress: {
          lat: 2,
          lng: 2
        },
        mode:{
          start: 0,
          end: 24
        }
      },{
        _id: 4,
        trackNo: 4,
        name: "Test 4",
        adress: {
          lat: 1.5,
          lng: 1.5
        },
        mode:{
          start: 0,
          end: 24
        }
      },{
        _id: 5,
        trackNo: 5,
        name: "Test 5",
        adress: {
          lat: 0.5,
          lng: 1.5
        },
        mode:{
          start: 0,
          end: 24
        }
      },{
        _id: 6,
        trackNo: 6,
        name: "Test 6",
        adress: {
          lat: 0.6,
          lng: 1.5
        },
        mode:{
          start: 0,
          end: 24
        }
      },{
        _id: 7,
        trackNo: 7,
        name: "Test 7",
        adress: {
          lat: 2,
          lng: 0
        },
        mode:{
          start: 0,
          end: 24
        }
      }
    ]
  }
  public getShops(): Shop[]{
    return this.shops.slice().sort((shop1, shop2) => {
      return shop1.trackNo - shop2.trackNo;
    });
  }
  public add(newItem: Shop): void{
    newItem._id = this.shops[this.shops.length-1]._id+1;
    newItem.trackNo = this.shops.length+1;
    this.shops.push(newItem);
  }
  public remove(itemToRemove: Shop): void{
    let indexOfItem = this.shops.indexOf(itemToRemove);
    if(indexOfItem != -1){
      this.shops.splice(indexOfItem, 1);
    }
  }
  public update(itemToUpdateId: number, newItem: Shop){
    //noinspection TypeScriptValidateTypes
    let itemToUpdate = this.shops.find(function (item) {
      return item._id == itemToUpdateId;
    });
    for(let prop in itemToUpdate){
      if(prop != '_id' && newItem[prop]){
        itemToUpdate[prop] = newItem[prop]
      }
    }
  }

  public updateNumber(newOrder: Shop[]){
    this.shops.forEach(function (element) {
      //noinspection TypeScriptValidateTypes
      let newIndex = newOrder.findIndex(function (item) {
        return item._id == element._id;
      });
      element.trackNo = newIndex +1;
    })
  }
}
