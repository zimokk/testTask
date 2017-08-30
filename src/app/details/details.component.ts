import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/product-service.service";
import {Product} from "../entities/product";
import {ParamMap, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private products: Product[];
  private editedProduct: Product;
  private newProduct: Product;
  private id: number;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    let self = this;
    this.route.params.forEach(function (params: Params) {
      if (params['id'] !== undefined) {
        self.id = +params['id'];
        self.retriveProducts();
      }
    });
    self.newProduct = new Product();
    self.editedProduct = new Product();
  }

  private retriveProducts(){
    this.products = this.productService.getByShopId(this.id);
  }

  edit(item){
    this.editedProduct = new Product(item);
  }

  remove(itemToRemove: Product){
    this.productService.remove(itemToRemove);
    this.retriveProducts();
  }

  onUpdateSubmit(){
    this.productService.update(this.editedProduct._id, this.editedProduct);
    this.editedProduct = new Product();
    this.retriveProducts();
  }

  onCreateSubmit(){
    this.newProduct.shopId = this.id;
    this.productService.create(this.newProduct);
    this.newProduct = new Product();
    this.retriveProducts();
  }
}
