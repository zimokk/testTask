import { Component, OnInit } from '@angular/core';
import {Shop} from "../entities/shop";
import {ShopService} from "../shared/shop-service.service";
import {Router} from "@angular/router";
import {DragulaService} from "ng2-dragula/index";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private list: Shop[];
  private initialLat: number;
  private initialLng: number;
  editedShop:Shop = null;

  constructor(private shopService: ShopService,
              private router: Router,
              private dragulaService: DragulaService) {
    this.retriveShops();
    dragulaService.setOptions('shops-list', {
      revertOnSpill: true
    });
    dragulaService.dropModel.subscribe((args) => {
      let [bagName, el, target, source] = args;
      let dropItemId = el.dataset.id;
      this.updateNumber(el.dataset.id);
    });
  }

  ngOnInit() {
    if(this.list.length){
      this.initialLat = this.list[0].adress.lat;
      this.initialLng = this.list[0].adress.lng;
    } else{
      this.initialLat = this.initialLng = 0;
    }
  }

  public retriveShops(){
    this.list = this.shopService.getShops();
  }

  private updateNumber(dropItemId){
    //noinspection TypeScriptValidateTypes
    let droppedElement = this.list.find(function (item) {
      return item._id == dropItemId;
    });
    console.dir(this.list);
    this.shopService.updateNumber(this.list);
  }

  public removeShop(item: Shop):void{
    let self = this;
    this.shopService.remove(item);
    this.retriveShops();
  }

  public editShop(item: Shop): void{
    this.editedShop = new Shop(item);
  }

  showDetails(shop: Shop) {
    this.router.navigate(['/shop', shop._id]);
  }

}
