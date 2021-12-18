import { Injectable } from '@angular/core';

import {Product} from './products'

@Injectable({
  providedIn: 'root'
})
export class CartService {
   items: Product[] = [];
   // total: number = 0;

   constructor() { }

  //  addToCart(product: Product) {
  //   this.items.push(product);
  // }

 //  addToCart(name: string, price: number) {
 //    this.items.push(new Product(name, price, 1));
 // }

 addToCart(addedItem: any) {
    this.items.push(addedItem);
    // this.total += addedItem.subTotal;
    this.saveCart();
    // this.saveTotal();
  }


  getItems() {
    return this.items;
    // return localStorage.getItem('goods_list');
  }

  // getTotal() {
  //   return this.total;
  // }

  loadCart(): void {
    this.items = JSON.parse(localStorage.getItem("cart_items") || '{}') ?? [];
  }

  // loadCart(): void {
  //   this.items = JSON.parse(localStorage.getItem("cart_items") || '{}');
  //
  // }

  // loadTotal(): void {
  //   this.items = JSON.parse(localStorage.getItem("Total") || "0");
  //
  // }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }

  // saveTotal(): void {
  //   localStorage.setItem('Total', JSON.stringify(this.total));
  // }


  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }

  clearCart(items: any) {
    this.items = [];
    // this.total = 0;

    localStorage.removeItem("cart_items");
    // localStorage.setItem("Total", "0");
  }

  removeItem(item: any) {
    const index = this.items.findIndex(o => o.id === item.id);

    if (index > -1) {
      // this.total -= item.subTotal;
      this.items.splice(index, 1);
      this.saveCart();
      // this.saveTotal();
    }
  }

  incrItemAmount(item: any) {
    const index = this.items.findIndex(o => o.id === item.id);

    if (index > -1) {
      // this.total += this.items[index].subTotal;
      this.items[index].qtyTotal++;
      this.items[index].subTotal = this.items[index].qtyTotal * this.items[index].price;
      this.saveCart();
      // this.saveTotal();
    }
  }

  decrItemAmount(item: any) {
    const index = this.items.findIndex(o => o.id === item.id);

    if (index > -1 && this.items[index].qtyTotal>1) {
      // this.total -= this.items[index].subTotal;
      this.items[index].qtyTotal--;
      this.items[index].subTotal = this.items[index].qtyTotal * this.items[index].price;
      this.saveCart();
      // this.saveTotal();
    }
  }



  itemInCart(item: any): boolean {
    return this.items.findIndex(o => o.id === item.id) > -1;
  }


}
