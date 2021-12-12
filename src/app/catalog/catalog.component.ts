import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  data: any;

  constructor(private dataservice: ApiService) {
    this.dataservice.getgoods().subscribe((res: any)=>{
    this.data = res;
    });
  }

  ngOnInit(): void {
  }
}
