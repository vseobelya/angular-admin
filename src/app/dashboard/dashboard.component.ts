import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

import {Product} from '../products'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Product[];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  ngOnInit(): void {
  }

}
