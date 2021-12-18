import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import {Product} from './products'

@Injectable({
providedIn: 'root'
})

export class ApiService {
  redirectUrl!: string;
  baseUrl:string = "http://localhost/angular-admin/php";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }

  public userlogin(username: any, password: any) {
    alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
    .pipe(map(Users => {
      this.setToken(Users[0].name);
      this.setUserId(Users[0].id);
      this.getLoggedInName.emit(true);
      return Users;
    }));
    }

  public userregistration(name: any, email: any, pwd: any) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd })
    .pipe(map(Users => {
      return Users;
    }));
  }

  public makeorder(item: any, uuid: any) {
    // const id = localStorage.getItem('user_id');
    const id_product = item.id;
    const qtyTotal_product = item.qtyTotal;
    return this.httpClient.post<any>(this.baseUrl + '/order_products.php', {id_product, qtyTotal_product, uuid})
    .pipe(map(Product => {
      return Product;
    }));
  }

  public makeorder2(uuid: any) {
    const id_cust = localStorage.getItem('user_id');
    return this.httpClient.post<any>(this.baseUrl + '/order2.php', {id_cust, uuid})
    .pipe();
  }

  // public makeorder(items: any) {
  //   const id = localStorage.getItem('user_id');
  //   return this.httpClient.post<any>(this.baseUrl + '/order.php', {items, id})
  //   .subscribe();
  // }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  setUserId(id: string) {
    localStorage.setItem('user_id', id);
  }


  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }

  //get all goods details
    public getgoods()
      {
          return this.httpClient.get(this.baseUrl + '/catalog.php')
          .pipe(map(Product => {
            return Product;
          }));
      }
}
