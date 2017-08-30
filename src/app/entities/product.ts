export class Product {
  _id: number;
  name: string;
  description: string;
  shopId: number;
  constructor(product?: Product){
    if(product){
      this._id = product._id;
      this.name = product.name;
      this.description = product.description;
      this.shopId = product.shopId;
    }
  }
}
