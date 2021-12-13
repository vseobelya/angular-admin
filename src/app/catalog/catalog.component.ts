import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {CartService} from '../cart.service';
import {AppComponent} from '../app.component';

import {Product} from '../products'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  data: any;
  is_logged_in:boolean = false;

  items: Product[] = [];

  sampleSuggestionsArray = [
    new Product(1, "Ананас", 100, 0),
    new Product(2, "Апельсин", 90, 0),
    new Product(3, "Грейпфрут", 150, 0),
    new Product(4, "Персик", 200, 0),
    new Product(5, "Слива", 180, 0)
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
  ];

  constructor(private dataservice: ApiService,
              private cartService: CartService) {
    this.dataservice.getgoods().subscribe((res: any)=>{
    this.data = res;
    });

    this.is_logged_in = this.dataservice.isLoggedIn();
  }

  ngOnInit(): void {
  }

  // addToCart(name: string, price: number) {
  //   window.alert('Your product has been added to the cart!');
  //   this.cartService.addToCart(name, price);
  // }

  // addToCart(item: any) {
  //   if (!this.cartService.itemInCart(item)) {
  //     item.qtyTotal = 1;
  //     this.cartService.addToCart(item); //add items in cart
  //     this.items = [...this.cartService.getItems()];
  //   }
  // }

  addToCart(id:number, name: string, price: number) {
    const item: Product = new Product(id, name, price, 1);
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = 1;
      this.cartService.addToCart(item); //add items in cart
      this.items = [...this.cartService.getItems()];
    }
  }



}
