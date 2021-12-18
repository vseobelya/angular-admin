import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Product} from '../products'

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

    // this.dataservice.getorders().subscribe((res: any)=>{
    // this.data = res;
    // });
  }

  // public createDict(data: any){
  //   // let orders = new Map<string, number>();
  //   let orders : Map<[string, string], [{name : string , kolvo : number}]> = new Map<[string, string], [{name : string , kolvo : number}]>();
  //   let myarray : [{name : string , kolvo : number}] = [];
  //   let order_id_date = [data[0].id_order, data[0].date_order];
  //   // let check_id_order = data[0].id_order;
  //   for (let index = 0; index < data.length; index++) {
  //     if(index == 0){
  //       order_id_date = [data[index].id_order, data[index].date_order];
  //       myarray.push({name : data[index].name_good , kolvo : data[index].kolvo});
  //     }
  //     else{
  //       if(data[index].id_order == data[index-1].id_order){
  //         myarray.push({name : data[index].name_good , kolvo : data[index].kolvo});
  //       }
  //       else{
  //         orders.set(order_id_date , myarray);
  //         while(myarray.length > 0) {
  //             myarray.pop();
  //         }
  //       }
  //     }
  //
  //     // const order_id_date = [data[index].id_order, data[index].date_order];
  //   }
  //   return orders;
  // }


  ngOnInit(): void {
  }

}
