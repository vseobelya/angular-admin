import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
// import { v4 as uuidv4 } from 'uuid';
// import { LocalStorageService } from './local-storage.service';

import {Product} from '../products'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Product[] = [];
  // total: number = 0;

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

  constructor(private cartService: CartService,
              private dataService: ApiService,
              private router:Router) {
    this.items = this.cartService.getItems();
    // this.total = this.cartService.getTotal();
  }

  ngOnInit(): void {
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
    // this.total = this.cartService.getTotal()

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

  // get total() {
  //   if(this.items.length>0){
  //     return this.items.reduce((sum, current) => sum + current.subTotal, 0);
  //   }
  //   else{
  //     return 0;
  //   }
  //
  // }

  // doorder(items: any)  {
  //   this.dataService.makeorder(items)
  //   .pipe(first())
  //   .subscribe(
  //   data => {
  //     this.router.navigate(['orders']);
  //   },
  //   error => { });
  //
  //   this.clearCart(items);
  // }

  getUniqueId(parts: number): string {
  const stringArr = [];
  for(let i = 0; i< parts; i++){
    // tslint:disable-next-line:no-bitwise
    const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    stringArr.push(S4);
  }
  return stringArr.join('-');
}

  doorder(items: any)  {
    if(items.length > 0){
      const uuid = this.getUniqueId(2);
      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        this.dataService.makeorder(element, uuid)
        .pipe(first())
        .subscribe(
        error => { });
      }
      // this.dataService.makeorder2(uuid)
      // .pipe(first())
      // .subscribe(
      // error => { });

      this.clearCart(items);
    }
  }

}
