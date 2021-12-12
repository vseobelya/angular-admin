import { Injectable } from '@angular/core';

import {Product} from './products'

@Injectable({
  providedIn: 'root'
})
export class CartService {
   items: Product[] = [];

  //  addToCart(product: Product) {
  //   this.items.push(product);
  // }

  addToCart(name: string, price: number) {
   this.items.push(new Product(name, price, 1));
 }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
