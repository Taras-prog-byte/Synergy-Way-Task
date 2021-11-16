import { Component, OnInit} from '@angular/core';
import {Data} from '../data'
import { faCartPlus, faList } from '@fortawesome/free-solid-svg-icons';
import {ListService} from "../list.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  faCartPlus = faCartPlus;//using icons
  productList=Data;

  toBuyList:any=[];

  buy(id:number){//sort data for shopping cart
    for (let p of this.toBuyList){
      if (p.id===id){
        p.quantity++;
        localStorage.setItem('toBuyList', JSON.stringify(this.toBuyList))
        this.sender()
        return;
      }
    }
    this.toBuyList.push({id:id, quantity:1})
    localStorage.setItem('toBuyList', JSON.stringify(this.toBuyList))
    this.sender()
    return;

  }

  sender(){//send data to service
    this.myService.myMethod(this.toBuyList)
  }

  getDataFromStorage(){//get data from LocalStorage
    let tmp = localStorage.getItem('toBuyList')
    if (tmp != null || tmp != undefined){
      tmp = JSON.parse(tmp);
      this.toBuyList=tmp;
    }
  }

  public constructor(private myService: ListService) {
    this.getDataFromStorage();
    this.myService.myMethod(this.toBuyList);
  }

  ngOnInit() {
    this.getDataFromStorage();
  }



}
