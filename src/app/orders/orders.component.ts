import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  data: any;

  constructor(private dataservice: ApiService) {
    const id_cust = localStorage.getItem('user_id');
    if(id_cust != null){
      this.dataservice.getorders(id_cust).subscribe((res: any)=>{
      this.data = res;
      });
    }
  }
  ngOnInit(): void {
  }

}
