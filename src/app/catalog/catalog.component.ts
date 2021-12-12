import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {CartService} from '../cart.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  data: any;
  is_logged_in:boolean = false;

  constructor(private dataservice: ApiService, private cartService: CartService) {
    this.dataservice.getgoods().subscribe((res: any)=>{
    this.data = res;
    });

    this.is_logged_in = this.dataservice.isLoggedIn();
  }

  ngOnInit(): void {
  }

  addToCart(name: string, price: number) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(name, price);
  }
}
