import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ShopService} from "../../shared/shop-service.service";
import {Shop} from "../../entities/shop";

@Component({
  selector: 'app-shop-managing',
  templateUrl: './shop-managing.component.html',
  styleUrls: ['./shop-managing.component.css']
})
export class ShopManagingComponent implements OnInit {

  @Input() editedShop: Shop;
  @Output() onShopEdited = new EventEmitter<boolean>();

  private Output() {

  }

  newShop: Shop;
  constructor( private shopServiceService: ShopService) { }

  ngOnInit() {
    this.newShop = new Shop();
    this.editedShop = new Shop();
  }

  onSubmitCreate(){
    this.shopServiceService.add(this.newShop);
    this.newShop = new Shop();
    this.onShopEdited.emit(true)
  }

  onSubmitEdit(){
    this.shopServiceService.update(this.editedShop._id, this.editedShop);
    this.editedShop = new Shop();
  }

}
