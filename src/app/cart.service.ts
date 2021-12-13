import { Injectable } from '@angular/core';

import {Product} from './products'

@Injectable({
  providedIn: 'root'
})
export class CartService {
   items: Product[] = [];

   constructor() { }

  //  addToCart(product: Product) {
  //   this.items.push(product);
  // }

 //  addToCart(name: string, price: number) {
 //    this.items.push(new Product(name, price, 1));
 // }

 addToCart(addedItem: any) {
    this.items.push(addedItem);
    this.saveCart();
  }


  getItems() {
    return this.items;
    // return localStorage.getItem('goods_list');
  }

  loadCart(): void {
    this.items = JSON.parse(localStorage.getItem("cart_items") || '{}') ?? [];
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }


  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }

  clearCart(items: any) {
    this.items = [];

    localStorage.removeItem("cart_items")
  }

  removeItem(item: any) {
    const index = this.items.findIndex(o => o.id === item.id);

    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }

  itemInCart(item: any): boolean {
    return this.items.findIndex(o => o.id === item.id) > -1;
  }


}
