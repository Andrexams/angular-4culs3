import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getTotalPrice(){
    let total : number = 0;
    let product;
    for(product of this.items){
      total += product.price;
    }
    return total;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

}