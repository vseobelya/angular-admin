import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
// import { LocalStorageService } from './local-storage.service';

import {Product} from '../products'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Product[] = [];

  // sampleSuggestionsArray = [
  //   new Product(1, "Ананас", 100, 0),
  //   new Product(2, "Апельсин", 90, 0),
  //   new Product(3, "Грейпфрут", 150, 0),
  //   new Product(4, "Персик", 200, 0),
  //   new Product(5, "Слива", 180, 0)
    // {
    //   id: "1",
    //   menuName: "Item 1",
    //   variationCost: "20.50",
    //   desc: "Lorem ipsum dolor sit amet..",
    //   qtyTotal: 0
    // },
    // {
    //   id: "2",
    //   menuName: "Item 2",
    //   variationCost: "10",
    //   desc: "Lorem ipsum dolor sit amet..",
    //   qtyTotal: 0
    // },
    // {
    //   id: "3",
    //   menuName: "Item 3",
    //   variationCost: "5.50",
    //   desc: "Lorem ipsum dolor sit amet..",
    //   qtyTotal: 0
    // }
  // ];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  ngOnInit(): void {
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
  }

  clearCart(items: any) {
    // this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.cartService.clearCart(items);
    this.items = [...this.cartService.getItems()];
  }

  removeFromCart(item: any) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  incrAmount(item: any) {
    this.cartService.incrItemAmount(item);
    this.items = this.cartService.getItems();
  }

  decrAmount(item: any) {
    this.cartService.decrItemAmount(item);
    this.items = this.cartService.getItems();
  }

  get total() {
    return this.items.reduce((sum, current) => sum + current.subTotal, 0);

  }

}
