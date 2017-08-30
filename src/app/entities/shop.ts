export class Shop {
  _id: number;
  trackNo: number;
  name: string;
  adress: {
    lat: number;
    lng: number;
  };
  mode: {
    start: number;
    end: number;
  };
  constructor(shop?: Shop){
    if(shop){
      this._id = shop._id;
      this.name = shop.name;
      this.trackNo = shop.trackNo;
      this.adress = shop.adress;
      this.mode = shop.mode;
    } else{
      this.mode = {
        start : 0,
        end : 0
      };
      this.adress = {
        lat : 0,
        lng : 0
      };
    }
  }
}
